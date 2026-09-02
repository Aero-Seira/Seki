# ModPack IDE Exporter

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/modpack-ide-exporter-0.1.0.jar`
- 标识与版本：mod_id = `modpack-ide-exporter`（inferred）；版本 `0.1.0`
- 加载器或包格式：NeoForge 21.1.247（Minecraft 1.21.1）
- 分发状态：无公开下载源，随 mrpack overrides 内嵌分发

> **状态：已被替换（2026-08-28 起，待提交确认）。** `mods/` 中该 jar 已删除，取而代之的是 `mods/delightify-level-exporter-0.2.0.jar`（schema_version 3，导出到 `dl-exporter/export.sqlite`，命令 `/dl_export dump`）。新导出器带 `mods/*.jar` 的 .gitignore 规则（第 88 行）而不在版本控制内，旧 jar 的删除会进入 Git 历史——分发边界（README 记为"3 个内嵌 jar"之一）需要作者另行确认后再提交，本轮设计文档只记录事实，不代为决定。

## 设计作用

**游戏内最终态数据导出器**（verified，mods.toml："In-game final-state data exporter for ModPack IDE (offline consumption)"）。在运行时导出配方/物品等数据的最终状态 SQLite，供离线 IDE 消费——是配方统一工作流（阶段 0 索引、`mpide-exporter/` 目录、SQLite 完整性校验）的运行时数据源，属于开发工具链而非玩家内容，归入 other。

## 集成关系

- 支撑 `index/` 机器索引与 change-log 中多次提到的"新 Exporter SQLite 完整性 ok / 外键违规 0"验证流程（verified，change-log 2026-07-28 条目）。
- **服务端约束**：作为开发工具，按更正后的第 4 支柱，部署服务端时应排除。
- **分发约束**：该 JAR 无可靠公开下载源，作为内嵌 jar 随 mrpack 分发
  （`.gitignore` 白名单例外）；干净客户端导入后即可获得，但服务端部署时应排除。

## 验证

- [x] SQLite 完整性校验已在配方修正工作中使用（verified）

## 风险与开放问题

1. 0.1.0 早期版本，导出覆盖范围（标签、战利品表等）待扩展评估。
2. 当前公开 GitHub 来源不可访问，无法进入远程下载清单；若未来公开发行，可补充固定版本 URL 与哈希后移入 `modrinth.index.json`。

## 历史
- 2026-08-28: 由 `delightify-level-exporter` 0.2.0 取代（导出物 `dl-exporter/export.sqlite`，含物品/配方/标签/战利品与配方视图），本 jar 从 `mods/` 移除

- 2026-08-25: 随 mrpack 方案改为内嵌 jar 分发（来源：2026-08-15 平台导出）
- 2026-07-29: packwiz 迁移中明确为本地专用开发组件；不上传 JAR，也不为不可访问来源伪造描述符
- 2026-07-28: 随配方统一工作流加入（本批归档）
