# mrpack 分发与 CI 构建

## 记录

- 类型：other（分发基础设施）
- 状态：active
- 证据可信度：verified
- 来源路径：`modrinth.index.json`、`config/`、`kubejs/`、`defaultconfigs/`、`mods/`、`resourcepacks/`、`scripts/build-mrpack.py`、`.github/workflows/build-mrpack.yml`
- 标识与版本：Modrinth pack format v1；Minecraft 1.21.1、NeoForge 21.1.247

## 设计作用

仓库直接保存 mrpack 的分发源，不再使用 packwiz 元数据：

- `modrinth.index.json` 固定远程下载清单：187 个文件（模组与默认光影），每个条目
  都带有 SHA-1、SHA-512 和多个下载源，安装器校验哈希后下载。
- `config/`、`kubejs/`、`defaultconfigs/` 以及少量内嵌二进制作为 overrides
  随包分发，随启动器导入直接落到实例根目录。
- GitHub Actions 在每次推送时运行 `scripts/build-mrpack.py`，生成
  `Seki-<versionId>.mrpack` 并上传 artifact；推送 `v*` 标签时自动附加到
  GitHub Release。

## 分发范围

- 远程下载：187 个文件（含 Complementary Unbound r5.8.1 光影 zip）。
- 内嵌 jar：3 个无可靠公开下载源的文件——`[千古乐事] immortalers_delight`
  1.0.3、KubeJS Data Component 1.0.1、ModPack IDE Exporter 0.1.0。
- 内嵌资源包：`Minecraft-Mod-Language-Modpack-Converted-1.21.1.zip`（5.3 MiB）。
- overrides 内容：`config/`、`kubejs/`、`defaultconfigs/`。
- 不进入分发：PCL 启动器配置、`options.txt`、`command_history.txt`、
  Inventory Particles / Xaero / spark 等运行时缓存。

## 维护流程

1. 从其他平台导出新的 mrpack/zip，或手工调整清单与 overrides。
2. 同步 `modrinth.index.json` 与 `config/`、`kubejs/`、`defaultconfigs/`。
3. 新增无公开下载源的内嵌 jar 时放入 `mods/`，并在 `.gitignore` 增加例外，
   确保文件被 Git 跟踪（构建脚本只打包已跟踪或未忽略的文件）。
4. 本地运行 `python scripts/build-mrpack.py --out dist` 验证产物。
5. 推送 `main` 触发 CI 构建；推送 `v*` 标签发布 Release。

## 验证

- [x] 清单 187 个文件均含 SHA-1、SHA-512 与下载源
- [x] 3 个内嵌 jar 与汉化资源包可被 Git 跟踪并进入 overrides
- [x] overrides 与远程清单路径无冲突
- [x] 本地构建出的 `.mrpack` 可被 zip 工具正常读取

## 风险与开放问题

1. 远程文件依赖 CurseForge/Modrinth CDN 可用性；安装器会依次尝试多个下载源。
2. CI 目前做结构校验，不在每次构建时下载全部远程文件核对哈希；发布前如需
   全量校验，可临时在 CI 中运行下载核对。
3. `versionId` 与依赖版本由 `modrinth.index.json` 决定，更新清单时需同步
   README 中的版本基线。

## 历史

- 2026-08-25：移除 packwiz 管理（描述符、索引、安全提交脚本与 guard CI），
  改用 `modrinth.index.json` + overrides 源文件，并新增 mrpack CI 构建与发布。
- 2026-07-29：此前曾迁移到 packwiz 分发，本次已由 mrpack 方案取代。
