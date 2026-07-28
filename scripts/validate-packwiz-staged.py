#!/usr/bin/env python3
"""Validate the exact Git index snapshot before committing a packwiz pack."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import subprocess
import sys

try:
    import tomllib
except ModuleNotFoundError as exc:  # pragma: no cover - depends on host Python
    raise SystemExit("Python 3.11+ is required (tomllib is unavailable).") from exc


BINARY_SUFFIXES = {".jar", ".zip"}


def git_bytes(root: Path, *arguments: str) -> bytes:
    return subprocess.check_output(["git", *arguments], cwd=root)


def git_paths(root: Path, *arguments: str) -> list[str]:
    data = git_bytes(root, *arguments)
    return [part.decode("utf-8") for part in data.split(b"\0") if part]


def staged_bytes(root: Path, path: str) -> bytes:
    return git_bytes(root, "show", f":{path}")


def file_digest(path: Path, algorithm: str = "sha256") -> str:
    hasher = hashlib.new(algorithm.replace("-", "").lower())
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            hasher.update(chunk)
    return hasher.hexdigest()


def local_jar_snapshot(root: Path) -> list[dict[str, object]]:
    mods = root / "mods"
    if not mods.is_dir():
        return []
    return [
        {
            "name": path.name,
            "size": path.stat().st_size,
            "sha256": file_digest(path),
        }
        for path in sorted(mods.glob("*.jar"), key=lambda item: item.name.casefold())
    ]


def write_snapshot(root: Path, destination: Path) -> int:
    snapshot = local_jar_snapshot(root)
    destination.write_text(
        json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(
        f"Saved local JAR snapshot: {len(snapshot)} files, "
        f"{sum(int(item['size']) for item in snapshot)} bytes"
    )
    return 0


def verify_snapshot(root: Path, source: Path) -> int:
    expected = json.loads(source.read_text(encoding="utf-8"))
    actual = local_jar_snapshot(root)
    if actual != expected:
        print("ERROR: local JAR name/size/SHA-256 snapshot changed.", file=sys.stderr)
        return 1
    print(
        f"Local JAR snapshot unchanged: {len(actual)} files, "
        f"{sum(int(item['size']) for item in actual)} bytes"
    )
    return 0


def validate(args: argparse.Namespace, root: Path) -> int:
    errors: list[str] = []
    warnings: list[str] = []

    tracked = git_paths(root, "ls-files", "-z")
    tracked_binaries = [
        path for path in tracked if Path(path).suffix.lower() in BINARY_SUFFIXES
    ]
    if tracked_binaries:
        errors.append("Git tracks JAR/ZIP files: " + ", ".join(tracked_binaries))

    staged = git_paths(
        root, "diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"
    )
    staged_binaries = [
        path for path in staged if Path(path).suffix.lower() in BINARY_SUFFIXES
    ]
    if staged_binaries:
        errors.append("Staged JAR/ZIP files: " + ", ".join(staged_binaries))

    try:
        pack_bytes = staged_bytes(root, "pack.toml")
        index_bytes = staged_bytes(root, "index.toml")
        pack = tomllib.loads(pack_bytes.decode("utf-8"))
        index = tomllib.loads(index_bytes.decode("utf-8"))
    except (subprocess.CalledProcessError, KeyError, UnicodeDecodeError, tomllib.TOMLDecodeError) as exc:
        errors.append(f"Unable to load staged pack.toml/index.toml: {exc}")
        pack = {}
        index = {"files": []}
        index_bytes = b""

    expected_index_hash = pack.get("index", {}).get("hash")
    actual_index_hash = hashlib.sha256(index_bytes).hexdigest()
    if expected_index_hash != actual_index_hash:
        errors.append(
            "pack.toml index hash mismatch: "
            f"staged={expected_index_hash!r}, actual={actual_index_hash}"
        )

    index_entries = index.get("files", [])
    for entry in index_entries:
        path = entry.get("file")
        expected_hash = entry.get("hash")
        if not isinstance(path, str) or not isinstance(expected_hash, str):
            errors.append(f"Malformed index entry: {entry!r}")
            continue
        try:
            content = staged_bytes(root, path)
        except subprocess.CalledProcessError:
            errors.append(f"Index references a file absent from the Git index: {path}")
            continue
        actual_hash = hashlib.sha256(content).hexdigest()
        if actual_hash != expected_hash:
            errors.append(
                f"Index hash mismatch for {path}: expected={expected_hash}, "
                f"staged={actual_hash}"
            )

    pending_path = root / "docs/design/_generated/pending-changes.json"
    if not args.allow_pending_design:
        if not pending_path.is_file():
            errors.append(f"Design pending file is missing: {pending_path}")
        else:
            pending = json.loads(pending_path.read_text(encoding="utf-8"))
            summary = pending.get("summary", {})
            counts = {name: int(summary.get(name, 0)) for name in ("added", "modified", "removed")}
            if any(counts.values()):
                errors.append(f"Design inventory still has pending changes: {counts}")

    descriptor_failures = 0
    local_only: list[str] = []
    if not args.skip_local_jars:
        mods = root / "mods"
        local_jars = {path.name: path for path in mods.glob("*.jar")} if mods.is_dir() else {}
        described_names: set[str] = set()
        for entry in index_entries:
            path = entry.get("file")
            if not entry.get("metafile") or not isinstance(path, str):
                continue
            if not path.startswith("mods/") or not path.endswith(".pw.toml"):
                continue
            try:
                descriptor = tomllib.loads(staged_bytes(root, path).decode("utf-8"))
                filename = descriptor["filename"]
                download = descriptor["download"]
                expected_hash = download["hash"]
                hash_format = download["hash-format"]
            except (subprocess.CalledProcessError, KeyError, UnicodeDecodeError, tomllib.TOMLDecodeError) as exc:
                errors.append(f"Unable to parse staged descriptor {path}: {exc}")
                descriptor_failures += 1
                continue
            described_names.add(filename)
            jar = local_jars.get(filename)
            if jar is None:
                errors.append(f"Local JAR required by {path} is missing: mods/{filename}")
                descriptor_failures += 1
                continue
            actual_hash = file_digest(jar, hash_format)
            if actual_hash != expected_hash:
                errors.append(
                    f"Local JAR hash mismatch for mods/{filename}: "
                    f"expected={expected_hash}, actual={actual_hash}"
                )
                descriptor_failures += 1
        local_only = sorted(set(local_jars) - described_names, key=str.casefold)
        if not local_jars:
            warnings.append(
                "No local mods/*.jar files were found; use --skip-local-jars only for a manifest-only clone."
            )

    for warning in warnings:
        print(f"WARNING: {warning}", file=sys.stderr)
    for error in errors:
        print(f"ERROR: {error}", file=sys.stderr)

    print(f"Tracked files: {len(tracked)}")
    print(f"Staged paths: {len(staged)}")
    print(f"packwiz index entries: {len(index_entries)}")
    print(f"packwiz metafiles: {sum(entry.get('metafile') is True for entry in index_entries)}")
    if not args.skip_local_jars:
        snapshot = local_jar_snapshot(root)
        print(
            f"Local JARs: {len(snapshot)} files, "
            f"{sum(int(item['size']) for item in snapshot)} bytes"
        )
        print(f"Local-only JARs: {local_only}")
        print(f"Descriptor failures: {descriptor_failures}")
    print(f"Validation errors: {len(errors)}")
    return 1 if errors else 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--allow-pending-design", action="store_true")
    parser.add_argument("--skip-local-jars", action="store_true")
    parser.add_argument("--write-jar-snapshot", type=Path)
    parser.add_argument("--verify-jar-snapshot", type=Path)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = Path(
        subprocess.check_output(
            ["git", "rev-parse", "--show-toplevel"], cwd=args.root, text=True
        ).strip()
    ).resolve()
    os.chdir(root)
    if args.write_jar_snapshot:
        return write_snapshot(root, args.write_jar_snapshot.resolve())
    if args.verify_jar_snapshot:
        return verify_snapshot(root, args.verify_jar_snapshot.resolve())
    return validate(args, root)


if __name__ == "__main__":
    raise SystemExit(main())
