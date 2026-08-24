# mrpack 构建工作流

仓库以 Modrinth pack v1（`.mrpack`）作为模组分发格式：根目录
`modrinth.index.json` 记录远程下载清单（每个文件含 SHA-1/SHA-512 与多个下载源），
`config/`、`kubejs/`、`defaultconfigs/`、`mods/`、`resourcepacks/` 作为
overrides 随包分发。

## 本地构建

```powershell
python scripts\build-mrpack.py --out dist
```

```bash
python3 scripts/build-mrpack.py --out dist
```

产物为 `dist/Seki-<versionId>.mrpack`。脚本只打包 Git 已跟踪或未忽略的文件，
本地启动器下载的远程模组 JAR、运行时缓存（如 `config/inventory-particles/cache/`、
`config/xaero/`）不会进入包。

## CI

`.github/workflows/build-mrpack.yml` 在推送 `main` 或 `v*` 标签时自动执行：

1. 运行 `scripts/build-mrpack.py` 生成 `.mrpack`；
2. 上传为 workflow artifact；
3. 打标签时自动附加到 GitHub Release。

## 更新源文件

从其他平台导出新的 mrpack/zip 后：

1. 用 `modrinth.index.json` 覆盖根目录同名文件；
2. 将 `overrides/config`、`overrides/kubejs`、`overrides/defaultconfigs` 同步到仓库；
3. 无公开下载源的内嵌 jar 放入 `mods/`（`resourcepacks/` 同理），它们必须能被
   Git 跟踪——`.gitignore` 已为当前内嵌文件保留例外；
4. 推送后由 CI 重新构建并发布。
