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

## 本地安装（当前目录）

```powershell
python scripts\install-mrpack.py
```

```bash
python3 scripts/install-mrpack.py
```

脚本按 Modrinth pack v1 标准把 mrpack 安装到当前目录：解压 `overrides/`、
按 `modrinth.index.json` 下载全部远程文件并校验 SHA-1/SHA-512、把清单写回
实例目录。`dist/` 没有 mrpack 时会先自动构建。常用参数：

- `--target <目录>`：安装到指定目录（默认当前目录）
- `--proxy http://127.0.0.1:7897`：走代理下载
- `--no-download`：只解压 overrides 与清单，不下载远程文件
- `--skip-version-json`：不自动放置启动器识别用的版本 json
- `--continue-on-error`：个别文件下载失败不中断，最后汇总

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
