# VanillaBackport

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/VanillaBackport-neoforge-1.21.1-1.1.7.10.jar`
- 标识与版本：mod_id = `vanillabackport`；版本 `1.1.7.10`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

把**更高版本 Minecraft 的原版内容回移植**到 1.21.1（verified，mods.toml："Backporting Minecraft Features to previous versions!"）。让整合包在锁定 1.21.1 的同时提前获得后续官方版本内容，服务"长线运营"支柱下的版本生命周期延长策略。

## 配置意图

- **`config/vanillabackport-common.toml` / `vanillabackport-client.toml`**：新增，默认生成（verified），未做有意改动；回移植内容的取舍开关待首次实机盘点后收敛。

## 兼容性与性能

- **高敏感性**：新增注册表内容且可能改动世界生成（inferred，回移植通常含新方块/群系），存档移除风险高；升级时须逐版本核对内容 diff。

## 验证

- [ ] 启动测试
- [ ] 回移植内容清单盘点（方块/物品/世界生成）
- [ ] 与森罗世界生成相关扩展的共存回归

## 风险与开放问题

1. 具体回移植了哪些版本（1.21.2+？）的哪些内容 unknown，需盘点补齐。
2. 作为内容模组，其投放节奏应与批次规划与实机验证节奏一致（本包不使用阶段锁定系统）。

## 历史

- 2026-07-28: 随内容章节批次加入（本批归档）
