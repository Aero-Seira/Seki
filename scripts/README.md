# 安全提交工作流

这组脚本用于提交 Seki 的配置、脚本、packwiz 描述符和设计文档，同时保护真实实例中的本地 JAR。

## 共同安全检查

- 提交前获取远端状态；远端领先时中止，不自动合并或变基。
- 只把命令行明确给出的路径传给 `git add`；不执行 `git add .`。
- 阻止任何 JAR/ZIP 被 Git 跟踪或进入暂存区。
- 对 Git 暂存快照中的 `pack.toml`、`index.toml` 及全部索引文件逐项做 SHA-256 校验，而不是只检查当前工作区。
- 默认要求设计扫描结果为零 pending。
- 默认验证全部 `mods/*.pw.toml` 与真实本地 JAR 的下载哈希。
- 提交前记录本地 JAR 的文件名、大小与 SHA-256，提交和推送后再次逐项比较。

脚本不会运行 `packwiz curseforge detect`、packwiz-installer 或 `git clean`，也不会删除 JAR。

## Windows PowerShell

普通配置提交：

```powershell
.\scripts\commit-pack.ps1 `
  -Message "fix: 调整某项配置" `
  -RefreshPackwiz `
  -StagePath @("config/example.toml", "pack.toml", "index.toml", "docs/design")
```

模组描述符更新并推送：

```powershell
.\scripts\commit-pack.ps1 `
  -Message "chore: update mods" `
  -RefreshPackwiz `
  -Push `
  -StagePath @("mods", "shaderpacks", "pack.toml", "index.toml", "docs/design")
```

若 PowerShell 执行策略阻止本地脚本，可仅对本次调用使用：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\commit-pack.ps1 -Help
```

## macOS / Linux

普通配置提交：

```bash
bash scripts/commit-pack.sh \
  --message "fix: adjust config" \
  --refresh-packwiz \
  -- config/example.toml pack.toml index.toml docs/design
```

模组描述符更新并推送：

```bash
bash scripts/commit-pack.sh \
  --message "chore: update mods" \
  --refresh-packwiz \
  --push \
  -- mods shaderpacks pack.toml index.toml docs/design
```

也可以先执行：

```bash
chmod +x scripts/commit-pack.sh
```

然后直接运行 `./scripts/commit-pack.sh`。

## 特殊选项

- `-Yes` / `--yes`：跳过提交前确认。
- `-SkipFetch` / `--skip-fetch`：不联网获取远端状态，不建议在准备推送时使用。
- `-SkipLocalJarCheck` / `--skip-local-jars`：仅清单仓库、没有本地 JAR 时使用。
- `-AllowPendingDesign` / `--allow-pending`：允许设计库存仍有 pending；仅适用于明确不归档设计基线的临时提交。

`-RefreshPackwiz` / `--refresh-packwiz` 会对真实工作区运行安全的 `packwiz refresh`，但不会运行 `detect`。如果本地存在未准备提交的运行时配置变化，暂存快照哈希校验会中止提交，并要求先恢复这些噪声文件或把它们作为有意配置变更一起提交。
