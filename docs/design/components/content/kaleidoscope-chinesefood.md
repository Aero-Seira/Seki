# 森罗厨房：国味（Kaleidoscope ChineseFood）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[森罗厨房：国味] kaleidoscope_chinesefood-1.1.8-neoforge+1.21.1.jar`
- 标识与版本：mod_id = `kaleidoscope_chinesefood`；版本 `1.1.8`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

森罗厨房的**中式菜肴扩展**（inferred，命名与配方命名空间：滑蛋牛肉、地三鲜、小炒黄牛肉、回锅肉等盖饭）。为料理章节提供玩家熟悉的中餐内容面，强化"餐饮经营/生活感"体验方向。

## 玩家可见行为

- 新增一批中式炒菜与对应盖饭；盖饭统一走炒锅 + 熟米饭盛取路径（经 KubeJS 修正，verified）。

## 集成关系

- **依赖**：森罗厨房本体（机器、熟米饭标签 `#c:foods/cooked_rice`）。
- **魔改**：`kubejs/data/kaleidoscope_chinesefood/recipe/pot/` 四条规范配方 + `rice_carrier_paths.js` 移除错误的 `rice_bowl` 工作台路径（见 change-log 2026-07-26/28）。

## 配置意图

- **`config/kaleidoscope_chinesefood-common.toml`**：默认生成（verified），未做有意改动。
- **`config/kaleidoscope_chinesefood-client.toml`**：默认生成。
- **`config/kaleidoscope_chinesefood-common-1.toml.bak`**：模组升级时生成的旧配置备份（inferred），属迁移残留，不承载设计意图；可择机清理。

- **`config/kaleidoscope_chinesefood-common.toml`**（v14 变更，verified）：`enableCustomPacks`（中文注释"是否启用模糊烹饪配方"）由 `true` 改为 `false`。这是 `flex_pot` / `flex_stockpot` 国味配方的真正来源开关——总控 `kaleidoscope_compat.jsonc` 的 `kitchen.fuzzy_recipes_enabled` 自 2026-07-28 已是 `false`，但 2026-08-28 快照里仍有 26 条 `kaleidoscope_chinesefood:flex_*` 与全部 83 条 flex 类型配方，说明附加层不受总控约束。KubeJS 侧同时用 `z6_dynamic_recipe_conditional_removals.js` 按类型兜底删除。
- 国味四道盖饭与 `pot/red_rice_roll`、`stockpot/maocai`、`stockpot/lamb_pilaf` 现在是这些菜的唯一锅路线（v13 曾按 id 删除 flex 重复路线，未生效；已校验 flex 产物全部另有标准路线，删除不断获取链）。

## 兼容性与性能

- 依赖厨房本体，存档影响同本体；升级产生的 `.bak` 提示该模组有配置版本迁移行为，升级后需核对配置 diff。

## 验证

- [ ] 启动测试
- [ ] 四道国味盖饭实做验证

## 风险与开放问题

1. 1.1.8 版曾出现盖饭配方回退为 `rice_bowl` 类型的问题（verified），后续升级须回归检查盖饭路径。

## 历史
- 2026-09-02: `enableCustomPacks` true → false（v14，关 flex 源头）；flex 重复锅路线改由 `z6` 按类型条件删除

- 2026-07-26/28: KubeJS 修正四种盖饭路径（见 change-log）
- 2026-07-21 后: 随料理章节加入（本批归档）
