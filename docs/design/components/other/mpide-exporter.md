# ModPack IDE Exporter

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/modpack-ide-exporter-0.1.0.jar`
- 标识与版本：mod_id = `modpack-ide-exporter`（inferred）；版本 `0.1.0`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

**游戏内最终态数据导出器**（verified，mods.toml："In-game final-state data exporter for ModPack IDE (offline consumption)"）。在运行时导出配方/物品等数据的最终状态 SQLite，供离线 IDE 消费——是配方统一工作流（阶段 0 索引、`mpide-exporter/` 目录、SQLite 完整性校验）的运行时数据源，属于开发工具链而非玩家内容，归入 other。

## 集成关系

- 支撑 `index/` 机器索引与 change-log 中多次提到的"新 Exporter SQLite 完整性 ok / 外键违规 0"验证流程（verified，change-log 2026-07-28 条目）。
- **服务端约束**：作为开发工具，按更正后的第 4 支柱，部署服务端时应排除。

## 验证

- [x] SQLite 完整性校验已在配方修正工作中使用（verified）

## 风险与开放问题

1. 0.1.0 早期版本，导出覆盖范围（标签、战利品表等）待扩展评估。

## 历史

- 2026-07-28: 随配方统一工作流加入（本批归档）
