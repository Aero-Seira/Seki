# 稀有度核心（RarityCore）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[稀有度核心] raritycore-1211.13.11.jar`
- 标识与版本：mod_id = `raritycore`；版本 `1211.13.11`；作者 Yanbwe
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

统一的**物品稀有度数据层**（verified，命名与配置结构）：为全包物品计算/指派稀有度等级，供 Tooltip Overhaul（着色）、Loot Beams（光束）、GachaAddiction（稀有度排序与演出）等下游模组消费。本身对玩家不可见，归入 library。

## 配置意图

- **`config/raritycore/RarityClientConfig.json`**、**`client.json`**：客户端表现默认确认（verified 新增/修改）。
- **`config/raritycore/auto/auto_rarity.json`**：自动稀有度映射表（verified）——已覆盖森罗全家族物品（如 `kaleidoscope_tavern:tulip_sandwich_board: 2`、`kaleidoscope_world_liquor:bar_stool_red: 3`），说明模组已运行过自动评估；该表是"森罗内容稀有度分布"的事实数据源，后续手工调稀有度时以此为基础。
- **`config/colortooltips/common.json` + `styles/*.json`**（新增，verified）：稀有度→tooltip 配色样式选择器（Common→Vanilla、Uncommon/Rare/Epic→VanillaRarity、RarityCore→RarityCoreStyles）；启用 tooltipLock 与平滑着色。**注意：本包中没有 colortooltips 模组 JAR**（verified，mods/ 目录核对），该组配置疑似 RarityCore 或其生态模组生成的兼容配置，归属关系 inferred，待实机核实。

## 集成关系

- 下游：Tooltip Overhaul、Loot Beams、GachaAddiction（均 inferred，基于功能互补与同期加入）。

## 兼容性与性能

- 客户端/无注册表内容，无存档影响。

## 验证

- [ ] 启动测试
- [ ] 核对 colortooltips 配置的生成来源

## 风险与开放问题

1. 孤儿配置 `config/legendarytooltips.toml`（无对应 JAR，verified）与本模组的关系 unknown，待裁决是否清理。

## 历史

- 2026-07-28: 随 tooltip/战利品反馈批次加入（本批归档）
