#!/usr/bin/env python3
"""从仓库源文件构建 Seki 的 .mrpack 分发包。

仓库保存 Modrinth pack v1 清单（modrinth.index.json）与 overrides 源文件
（config/、kubejs/、defaultconfigs/、mods/、resourcepacks/）。本脚本只打包
Git 已跟踪或未忽略的文件，避免本地运行时文件与启动器下载的远程模组 JAR
泄漏进发布包。
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = "modrinth.index.json"
OVERRIDE_PATHS = ["config", "kubejs", "defaultconfigs", "mods", "resourcepacks"]
EPOCH = (2020, 1, 1, 0, 0, 0)


def tracked_and_new(root: Path) -> list[str]:
    """返回 overrides 目录下已跟踪或未忽略的新文件（排除已删除项）。"""
    cmd = [
        "git",
        "ls-files",
        "-z",
        "-c",
        "-o",
        "--exclude-standard",
        "--",
        *OVERRIDE_PATHS,
    ]
    out = subprocess.check_output(cmd, cwd=root)
    paths = [p for p in out.decode("utf-8").split("\0") if p]
    return sorted(p for p in paths if (root / p).is_file())


def validate(manifest: dict) -> None:
    if manifest.get("formatVersion") != 1:
        raise SystemExit("modrinth.index.json: formatVersion must be 1")
    if manifest.get("game") != "minecraft":
        raise SystemExit("modrinth.index.json: game must be 'minecraft'")
    if not manifest.get("versionId") or not manifest.get("name"):
        raise SystemExit("modrinth.index.json: versionId and name are required")
    for entry in manifest.get("files", []):
        path = entry.get("path")
        if not path:
            raise SystemExit("modrinth.index.json: file entry without path")
        hashes = entry.get("hashes", {})
        if not hashes.get("sha1") or not hashes.get("sha512"):
            raise SystemExit(
                f"modrinth.index.json: {path} must define sha1 and sha512"
            )
        if not entry.get("downloads"):
            raise SystemExit(f"modrinth.index.json: {path} must define downloads")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--out", default="dist", help="输出目录（默认 dist）"
    )
    args = parser.parse_args()

    manifest_path = ROOT / MANIFEST
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise SystemExit(f"cannot read {MANIFEST}: {exc}") from exc
    validate(manifest)

    remote_paths = {entry["path"] for entry in manifest["files"]}
    override_files = tracked_and_new(ROOT)
    collisions = sorted(p for p in override_files if p in remote_paths)
    if collisions:
        raise SystemExit(
            "overrides collide with manifest download paths: "
            + ", ".join(collisions)
        )

    out_dir = ROOT / args.out
    out_dir.mkdir(parents=True, exist_ok=True)
    dest = out_dir / f"Seki-{manifest['versionId']}.mrpack"

    with zipfile.ZipFile(dest, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        info = zipfile.ZipInfo(MANIFEST, date_time=EPOCH)
        info.compress_type = zipfile.ZIP_DEFLATED
        archive.writestr(info, manifest_path.read_bytes())
        for rel in override_files:
            info = zipfile.ZipInfo(f"overrides/{rel}", date_time=EPOCH)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            archive.write(ROOT / rel, arcname=f"overrides/{rel}")

    print(
        f"built {dest.relative_to(ROOT)}: "
        f"{len(manifest['files'])} remote files, "
        f"{len(override_files)} override files, {dest.stat().st_size} bytes"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
