# packwiz 分发与本地实例保护

## 记录

- 类型：other（分发基础设施）
- 状态：active
- 证据可信度：verified
- 来源路径：`pack.toml`、`index.toml`、`.packwizignore`、`.gitignore`、`mods/*.pw.toml`、`shaderpacks/complementary-unbound.pw.toml`、`scripts/commit-pack.ps1`、`scripts/commit-pack.sh`、`scripts/validate-packwiz-staged.py`
- 标识与版本：packwiz `pack-format = "packwiz:1.1.0"`
- 加载器或包格式：Minecraft 1.21.1、NeoForge 21.1.235

## 设计作用

Git 仓库只保存可审查、可复现的配置、脚本、索引与下载描述符，不再直接托管第三方 JAR/ZIP。真实开发实例仍保留完整二进制文件；普通的 Git 提交、拉取和推送不会删除这些被 `.gitignore` 忽略且从未被 Git 跟踪的本地文件。

packwiz 采用标准的“描述符与目标文件同目录”布局：根目录 `mods/` 同时存在本地 `*.jar` 与对应的 `*.pw.toml`，但 Git 只会看到后者。因此 GitHub 上最终会显示 `mods/*.pw.toml`，本机游戏仍从同一个 `mods/` 目录加载 JAR，不需要另建清单目录。`index.toml` 把配置、KubeJS 内容和这些 metafile 汇总为安装清单，`pack.toml` 固定索引哈希与 Minecraft/NeoForge 版本。

## 分发范围

- 真实开发实例：124 个 JAR，共 286,692,928 字节。
- packwiz 管理：122 个模组描述符；其中 120 个为 `side = "both"`、1 个为 `side = "client"`、Brutal Respawn 为 `side = "server"`。
- 客户端隔离安装：得到 121 个 JAR；Brutal Respawn 按 side 规则跳过。
- 本地专用例外：JECharacters 4.5.26、ModPack IDE Exporter 0.1.0。二者保留在维护者实例中，但没有伪造或不可靠的下载地址。
- 光影：Complementary Unbound r5.8.1 由 `shaderpacks/complementary-unbound.pw.toml` 下载；Euphoria Patcher 的展开目录与同名 `.txt` 设置均为运行时派生状态，不进入 Git 或 packwiz 索引。Xaero 的本机 profile 与地图状态同样排除，不作为团队默认配置发布。
- 汉化资源包：`Minecraft-Mod-Language-Modpack-Converted-1.21.1.zip` 由 I18nUpdateMod 在启动时动态合成，不作为固定 packwiz 下载项。

## CurseForge 限制

下列 12 个描述符已记录准确的 CurseForge project/file ID，但作者关闭了第三方客户端下载。packwiz-installer 会要求用户从 CurseForge 页面人工取得原文件，然后用描述符哈希验证：Aurae、Enhanced Boss Bars、Entity Culling、GachaAddiction、Inventory Particles、Kaleidoscope Chinese Food、Kaleidoscope End、Kaleidoscope World Liquor、KubeJS Data Component、Loot Beams Refork、MossyLib、Particle Effects。

## 维护流程

1. 在真实实例中添加或升级 JAR，并先记录文件名、大小和 SHA-256 基线。
2. 复制待识别文件到 `.tools/` 下的隔离目录，在隔离副本执行 `packwiz curseforge detect`。该命令会把检测到的源 JAR 转换为描述符，禁止直接对真实 `mods/` 运行。
3. 将生成的 `*.pw.toml` 复制回真实 `mods/`，核对 `filename` 与本地文件名；中文前缀等本地命名必须保留，避免安装器再生成一个官方文件名副本。
4. 执行 `packwiz refresh`，审计 `index.toml`：普通文件必须能由仓库提供，第三方二进制必须通过 metafile 下载，运行时缓存不得残留在索引。仓库通过 `.gitattributes` 固定文本为 LF，避免 Windows CRLF 与 GitHub 原始文件之间出现 packwiz 哈希差异。
5. 在独立空目录通过官方 packwiz-installer 重建客户端；验证所有自动下载文件的哈希，并为禁止第三方下载的 CurseForge 文件执行人工放置后的哈希校验。
6. 提交前重新比对真实实例全部 JAR 的文件名、大小和 SHA-256。只暂存描述符、索引、配置、脚本与文档。

日常提交可使用仓库内的 [安全提交工作流](../../../scripts/README.md)。Windows PowerShell 与 macOS/Linux 包装脚本共用一个 Python 校验器：显式暂存路径、检查远端分叉、校验 Git 暂存快照中的全部 packwiz 哈希、阻止 JAR/ZIP 进入版本控制，并在提交及推送前后比较本地 JAR 快照。`scripts/` 属于仓库维护工具，已由 `.packwizignore` 排除，不随游戏客户端安装。

不要在真实实例运行会清理或重写内容的检测、安装或清理命令。`git clean -x` 会删除被忽略的本地 JAR，也不属于日常更新流程。

## 兼容性与性能

- 分发元数据不改变游戏存档或运行逻辑。
- 服务端安装会包含 Brutal Respawn；客户端安装会跳过它。仅客户端模组仍需在制作服务端包时单独审计。
- packwiz 描述符以 SHA-1 或 SHA-512 验证下载文件，索引使用 SHA-256；供应方文件发生静默变化时安装会失败，而不是接受错误二进制。

## 验证

- [x] 122 个描述符与本地 JAR 逐一唯一匹配
- [x] 官方 packwiz-installer 隔离重建成功
- [x] 客户端 121 个 JAR 与描述符及真实实例哈希一致
- [x] Complementary Unbound ZIP 哈希一致
- [x] Git 跟踪 JAR/ZIP 数为 0
- [x] 真实实例 124 个 JAR、286,692,928 字节保持不变
- [x] Windows/macOS/Linux 提交流程脚本通过语法检查与暂存快照校验器实测

## 风险与开放问题

1. 两个本地专用例外无法由干净安装自动获得；公开发布前需决定是否移除开发工具，并等待 JECharacters 4.5.26 发布可验证构件。
2. CurseForge 禁止第三方下载的 12 个文件仍会给安装流程带来人工步骤。
3. 每次更新描述符后都必须在隔离目录重建，避免索引引用被 Git 忽略的运行时派生文件。

## 历史

- 2026-07-29：新增 Windows PowerShell、macOS/Linux 安全提交包装脚本及共用的暂存快照校验器
- 2026-07-29：完成首次 packwiz 迁移与隔离重建验证；Git 停止托管 JAR/ZIP，真实实例二进制保持原样。
