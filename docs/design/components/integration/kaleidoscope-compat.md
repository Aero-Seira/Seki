# 森罗物语：兼容（Kaleidoscope Compat）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[森罗物语：兼容] kaleidoscope_compat-2.9.7-neoforge+mc1.21.1.jar`
- 标识与版本：mod_id = `kaleidoscope_compat`；版本 `2.9.7`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

森罗系列的**官方兼容层**（verified，mods.toml："Items have been unified"）。本身不添加独立内容，负责把森罗料理体系与其他模组的物品/素材打通——典型的 integration 角色。

## 配置意图

- **`config/kaleidoscope_compat.jsonc`**（verified）：
  - `datapack_mode = "UNITE"`（2026-07-28 维护者由 COMPAT 改设）：启用"统一模组重复物品"模式，收口森罗体系内重复物品，取代此前的广泛外部兼容策略；外部兼容覆盖面收窄，与配方统一工作流方向一致。
  - `soup_datapack_enabled = true`：启用汤底基础材料数据包。
  - `kitchen.fuzzy_recipes_enabled = false`（2026-07-28 维护者由 true 改设）：关闭模糊配方（FlexPot/FlexStockpot），锅具只接受精确食材——提高配方确定性，便于 KubeJS 配方统一与校验。

## 集成关系

- 服务整个森罗家族与外部模组（农夫乐事类食材生态等，具体覆盖面待实机盘点）。

## 验证

- [ ] 启动测试
- [ ] 兼容数据包覆盖面盘点

## 风险与开放问题

1. UNITE 模式下外部模组食材兼容面收窄，原先由 COMPAT 数据包承接的跨模组配方是否存在缺口，需实机盘点。

## 历史

- 2026-07-28: `datapack_mode` COMPAT → UNITE、`fuzzy_recipes_enabled` true → false（维护者改设，收口重复物品并提高配方确定性）
- 2026-07-21 后: 随料理章节加入（本批归档）
