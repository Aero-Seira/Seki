#!/usr/bin/env bash
set -euo pipefail

usage() {
  printf '%s\n' \
    'Seki safe commit workflow (macOS/Linux)' \
    '' \
    'Usage:' \
    '  bash scripts/commit-pack.sh -m "fix: ..." -- config/file.toml pack.toml index.toml' \
    '  bash scripts/commit-pack.sh -m "chore: update mods" --refresh-packwiz --push -- mods pack.toml index.toml docs/design' \
    '' \
    'Options:' \
    '  -m, --message TEXT        Commit message (required).' \
    '      --refresh-packwiz     Run packwiz refresh before staging.' \
    '      --push                Fetch/check again and push origin/current-branch.' \
    '  -y, --yes                 Skip the final interactive confirmation.' \
    '      --skip-fetch          Skip remote fetch/divergence checks.' \
    '      --skip-local-jars     Allow a manifest-only clone without local mods/*.jar.' \
    '      --allow-pending       Do not require docs/design pending counts to be zero.' \
    '  -h, --help                Show this help.' \
    '' \
    'Paths after -- are passed explicitly to git add. If no paths are supplied,' \
    'the script operates on changes that are already staged.'
}

message=""
refresh_packwiz=0
push_after=0
assume_yes=0
skip_fetch=0
skip_local_jars=0
allow_pending=0
stage_paths=()

while (($#)); do
  case "$1" in
    -m|--message)
      [[ $# -ge 2 ]] || { echo "Missing value for $1" >&2; exit 2; }
      message=$2
      shift 2
      ;;
    --refresh-packwiz) refresh_packwiz=1; shift ;;
    --push) push_after=1; shift ;;
    -y|--yes) assume_yes=1; shift ;;
    --skip-fetch) skip_fetch=1; shift ;;
    --skip-local-jars) skip_local_jars=1; shift ;;
    --allow-pending) allow_pending=1; shift ;;
    -h|--help) usage; exit 0 ;;
    --)
      shift
      stage_paths=("$@")
      break
      ;;
    *) echo "Unknown option: $1" >&2; usage >&2; exit 2 ;;
  esac
done

[[ -n "$message" ]] || { usage >&2; echo "--message is required." >&2; exit 2; }

repo_root=$(git rev-parse --show-toplevel)
branch=$(git symbolic-ref --short HEAD)
validator="$repo_root/scripts/validate-packwiz-staged.py"

if command -v python3 >/dev/null 2>&1; then
  python_cmd=(python3)
elif command -v python >/dev/null 2>&1; then
  python_cmd=(python)
else
  echo "Python 3.11+ was not found." >&2
  exit 1
fi

snapshot_file=$(mktemp "${TMPDIR:-/tmp}/seki-jars.XXXXXX")
trap 'rm -f "$snapshot_file"' EXIT

cd "$repo_root"

check_remote_not_ahead() {
  if (( ! skip_fetch )); then
    git fetch origin --prune
  fi

  local upstream=""
  if upstream=$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null); then
    :
  elif git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
    upstream="origin/$branch"
  else
    echo "WARNING: no upstream branch found; divergence check skipped." >&2
    return 0
  fi

  local ahead behind
  read -r ahead behind < <(git rev-list --left-right --count "HEAD...$upstream")
  echo "Remote divergence: ahead=$ahead behind=$behind ($upstream)"
  if (( behind > 0 )); then
    echo "Remote is ahead. Integrate $upstream before committing or pushing." >&2
    exit 1
  fi
}

"${python_cmd[@]}" "$validator" --root "$repo_root" --write-jar-snapshot "$snapshot_file"
check_remote_not_ahead

if (( refresh_packwiz )); then
  if [[ -x "$repo_root/.tools/packwiz" ]]; then
    "$repo_root/.tools/packwiz" refresh
  elif command -v packwiz >/dev/null 2>&1; then
    packwiz refresh
  else
    echo "packwiz was not found (.tools/packwiz or PATH)." >&2
    exit 1
  fi
fi

if ((${#stage_paths[@]})); then
  git add -- "${stage_paths[@]}"
fi

if git diff --cached --quiet; then
  echo "There are no staged changes. Supply paths after -- or stage files first." >&2
  exit 1
fi

git diff --cached --check

validation_args=("$validator" --root "$repo_root")
(( skip_local_jars )) && validation_args+=(--skip-local-jars)
(( allow_pending )) && validation_args+=(--allow-pending-design)
"${python_cmd[@]}" "${validation_args[@]}"

echo
echo "Staged summary:"
git diff --cached --stat
echo
echo "Repository status:"
git status --short

if (( ! assume_yes )); then
  read -r -p "Commit these staged changes? [y/N] " answer
  [[ "$answer" =~ ^[Yy]$ ]] || { echo "Commit cancelled. Staged files were left unchanged." >&2; exit 1; }
fi

git commit -m "$message"
"${python_cmd[@]}" "$validator" --root "$repo_root" --verify-jar-snapshot "$snapshot_file"

if (( push_after )); then
  check_remote_not_ahead
  git push origin "HEAD:$branch"
  "${python_cmd[@]}" "$validator" --root "$repo_root" --verify-jar-snapshot "$snapshot_file"
fi

echo
echo "Completed on branch $branch."
git status --short --branch
