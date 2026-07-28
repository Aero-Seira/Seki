# Tooltip Overhaul

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/tooltipoverhaul-neoforge-1.21.1-1.5.1.jar`
- 标识与版本：mod_id = `tooltipoverhaul`；版本 `1.5.1`；作者 Xylonity、ModderG
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

**替代 Obscure Tooltips**（已于本批移除）的现代化物品提示框渲染层（verified，mods.toml："Every tooltip, more modern, sharper, clearer"）。负责 tooltip 的分层面板、稀有度配色与 3D 物品预览，与 RarityCore 稀有度体系配合构成新的信息呈现视觉层。

## 玩家可见行为

- 悬停带等级的工具/武器（TIERED）与盔甲时在 tooltip 左侧渲染 3D 预览面板（verified，配置默认开启）。
- tooltip 边框/配色按稀有度着色（与 RarityCore 样式表联动，见 config/colortooltips）。

## 集成关系

- **协作**：RarityCore（稀有度数据源）、Effect Descriptions、JEI、ModernUI。
- **替换关系**：Obscure Tooltips 移除后，其"风格化 tooltip + 3D 盔甲预览"职责由本模组承接；Fragmentum 依赖链随之解除（Fragmentum 是否仍被其他模组需要待核）。

## 配置意图

- **`config/tooltipoverhaul/tooltipoverhaul.toml`**（verified，新增，全部默认确认）：
  - `TIERED_ITEMS_RENDERER = true` / `ARMOR_ITEMS_RENDERER = true`：保留 3D 预览——与 Obscure Tooltips 时代"关闭盔甲预览以减开销"的决策相反，本批选择开启，需低配实机回归验证渲染开销。
- **`config/tooltipoverhaul/custom_frames.json`**：自定义边框选择器，当前为默认/空配置（verified 新增），预留按稀有度定制边框的入口。

## 兼容性与性能

- 客户端视觉层，无存档影响；3D 预览面板有额外渲染开销，纳入视听叠加低配验证清单。

## 验证

- [ ] 启动测试
- [ ] 功能测试（3D 预览、稀有度着色）
- [ ] 与 RarityCore / JEI / ModernUI 的 tooltip 叠加回归

## 风险与开放问题

1. 与 Obscure Tooltips 关闭 3D 预览的旧决策冲突，需实机裁决是否保留。

## 历史

- 2026-07-28: 作为 Obscure Tooltips 的替代加入（本批归档）
