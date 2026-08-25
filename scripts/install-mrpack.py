#!/usr/bin/env python3
"""按 Modrinth pack v1 标准把 .mrpack 安装到当前目录。

安装步骤：
1. 解压 overrides/（以及 client-overrides/）到目标实例目录；
2. 读取 modrinth.index.json，下载 files 列表中的远程文件并校验
   SHA-1 / SHA-512，文件已存在且哈希一致时跳过；
3. 把 modrinth.index.json 写回目标目录；
4. 可选：目标目录缺少版本 json 时，从仓库复制 Seki.json（id 随目录名调整）。
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
import zipfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parent.parent
USER_AGENT = "Seki-mrpack-installer/1.0"


def log(message: str) -> None:
    print(message, flush=True)


def file_hash(path: Path, algorithm: str) -> str:
    hasher = hashlib.new(algorithm)
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            hasher.update(chunk)
    return hasher.hexdigest()


def safe_relpath(raw: str) -> PurePosixPath:
    """把清单路径规范化，拒绝任何逃逸目标目录的路径。"""
    rel = PurePosixPath(raw.replace("\\", "/"))
    if rel.is_absolute() or ".." in rel.parts:
        raise ValueError(f"unsafe path in manifest: {raw!r}")
    return rel


def locate_mrpack(explicit: str | None) -> Path:
    if explicit:
        path = Path(explicit).expanduser()
        if not path.is_file():
            raise SystemExit(f"mrpack not found: {path}")
        return path

    dist = ROOT / "dist"
    candidates = sorted(dist.glob("Seki-*.mrpack"), key=lambda p: p.stat().st_mtime, reverse=True)
    if not candidates:
        log("dist 目录没有 mrpack，先运行 build-mrpack.py 构建…")
        subprocess.run(
            [sys.executable, str(ROOT / "scripts" / "build-mrpack.py"), "--out", str(dist)],
            check=True,
        )
        candidates = sorted(dist.glob("Seki-*.mrpack"), key=lambda p: p.stat().st_mtime, reverse=True)
    if not candidates:
        raise SystemExit("no Seki-*.mrpack found in dist/")
    return candidates[0]


def extract_overrides(mrpack: Path, target: Path, quiet: bool = False) -> int:
    count = 0
    with zipfile.ZipFile(mrpack) as archive:
        for info in archive.infolist():
            if info.is_dir():
                continue
            name = info.filename.replace("\\", "/")
            for prefix in ("overrides/", "client-overrides/"):
                if name.startswith(prefix):
                    rel = safe_relpath(name[len(prefix):])
                    dest = target.joinpath(*rel.parts)
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    with archive.open(info) as src, dest.open("wb") as out:
                        shutil.copyfileobj(src, out)
                    count += 1
                    break
    if not quiet:
        log(f"extracted {count} override files")
    return count


def should_install_client(entry: dict) -> bool:
    env = entry.get("env")
    if not env:
        return True
    client = env.get("client")
    if client in ("unsupported", "optional"):
        return False
    return True


def download_to(url: str, dest: Path, sha1: str, sha512: str, proxy: str | None, retries: int) -> None:
    handlers = [urllib.request.ProxyHandler({"http": proxy, "https": proxy})] if proxy else []
    opener = urllib.request.build_opener(*handlers)
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            with opener.open(request, timeout=120) as response, dest.open("wb") as out:
                while True:
                    chunk = response.read(1024 * 1024)
                    if not chunk:
                        break
                    out.write(chunk)
            actual_sha1 = file_hash(dest, "sha1")
            actual_sha512 = file_hash(dest, "sha512")
            if actual_sha1 != sha1 or actual_sha512 != sha512:
                raise RuntimeError(
                    f"hash mismatch: sha1 {actual_sha1} != {sha1} or sha512 != expected"
                )
            return
        except Exception as exc:  # noqa: BLE001 - 失败后尝试下一个源
            last_error = exc
            dest.unlink(missing_ok=True)
            if attempt < retries:
                time.sleep(1.0 * attempt)
    raise RuntimeError(f"{url}: {last_error}")


def install_file(entry: dict, target: Path, proxy: str | None, retries: int) -> tuple[str, str]:
    path = safe_relpath(entry["path"])
    dest = target.joinpath(*path.parts)
    hashes = entry.get("hashes", {})
    sha1 = hashes.get("sha1", "")
    sha512 = hashes.get("sha512", "")
    downloads = entry.get("downloads", [])
    if not downloads:
        return str(path), "skipped (no downloads)"
    if dest.is_file() and sha1 and file_hash(dest, "sha1") == sha1:
        return str(path), "exists"

    dest.parent.mkdir(parents=True, exist_ok=True)
    part = dest.with_name(dest.name + ".part")
    last_error = None
    for url in downloads:
        try:
            download_to(url, part, sha1, sha512, proxy, retries)
            os.replace(part, dest)
            return str(path), f"downloaded {dest.stat().st_size} bytes"
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            part.unlink(missing_ok=True)
    return str(path), f"FAILED: {last_error}"


def install_version_json(target: Path) -> str | None:
    source = ROOT / "Seki.json"
    if not source.is_file():
        return None
    target_json = target / f"{target.name}.json"
    if target_json.is_file():
        return None
    data = source.read_text(encoding="utf-8")
    if target.name != "Seki":
        data = data.replace('"id": "Seki"', f'"id": "{target.name}"', 1)
    target_json.write_text(data, encoding="utf-8", newline="\n")
    return target_json.name


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--mrpack", default=None, help="指定 mrpack 文件（默认取 dist/ 下最新）")
    parser.add_argument("--target", default=os.getcwd(), help="安装目标目录（默认当前目录）")
    parser.add_argument("--proxy", default=None, help="HTTP/HTTPS 代理，如 http://127.0.0.1:7897")
    parser.add_argument("--jobs", type=int, default=8, help="并行下载数（默认 8）")
    parser.add_argument("--retries", type=int, default=2, help="每个下载源重试次数（默认 2）")
    parser.add_argument("--no-download", action="store_true", help="只解压 overrides 与清单，不下载远程文件")
    parser.add_argument("--skip-version-json", action="store_true", help="不自动放置版本 json")
    parser.add_argument("--continue-on-error", action="store_true", help="单个文件下载失败不中断，最后汇总报错")
    args = parser.parse_args()

    target = Path(args.target).expanduser().resolve()
    target.mkdir(parents=True, exist_ok=True)

    mrpack = locate_mrpack(args.mrpack)
    log(f"installing {mrpack} -> {target}")

    with zipfile.ZipFile(mrpack) as archive:
        manifest = json.loads(archive.read("modrinth.index.json").decode("utf-8"))
        manifest_bytes = archive.read("modrinth.index.json")

    extract_overrides(mrpack, target)

    if not args.no_download:
        entries = [e for e in manifest.get("files", []) if should_install_client(e)]
        log(f"downloading {len(entries)} remote files ({args.jobs} parallel)")
        failures: list[str] = []
        with ThreadPoolExecutor(max_workers=max(1, args.jobs)) as pool:
            futures = {
                pool.submit(install_file, entry, target, args.proxy, args.retries): entry
                for entry in entries
            }
            for future in as_completed(futures):
                path, status = future.result()
                if status.startswith("FAILED"):
                    failures.append(f"{path}: {status}")
                log(f"  {path}: {status}")
        if failures:
            for failure in failures:
                log(f"ERROR {failure}")
            if not args.continue_on_error:
                raise SystemExit(1)

    (target / "modrinth.index.json").write_bytes(manifest_bytes)
    log("wrote modrinth.index.json")

    if not args.skip_version_json:
        copied = install_version_json(target)
        if copied:
            log(f"wrote {copied} (version json for launcher recognition)")

    log("install complete")
    return 0


if __name__ == "__main__":
    sys.exit(main())
