# 森罗物语：酒馆（Kaleidoscope Tavern）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[森罗物语：酒馆] kaleidoscopetavern-1.2.0-neoforge+mc1.21.1.jar`
- 标识与版本：mod_id = `kaleidoscope_tavern`；版本 `1.2.0`；作者 ysbbbbbb、tartaric_acid
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

森罗物语的**酒馆主题扩展**（verified，mods.toml：完整酿酒系统 + 丰富装饰方块，营造酒馆氛围）。与厨房本体共同构成"餐饮经营"内容面的另一半：饮品与场景装饰。阶段 0 索引识别 `barrel` 酒桶配方 98 条。

## 玩家可见行为

- 使用酒桶酿造饮品；大量酒馆主题装饰方块（桌椅、招牌、彩灯等）用于场景搭建。

## 集成关系

- **依赖**：森罗厨房本体（inferred，同系列命名空间与机器体系）。
- **联动**：次元酒（dim_wine）、世界酒（world_liquor）两个第三方扩展在其酿酒体系上追加酒品（inferred，配置中大量互相引用的物品 ID，verified 于 raritycore auto_rarity 映射）。

## 配置意图

- **`config/kaleidoscope_tavern-common.toml`**：默认生成（verified），未做有意改动。

## 兼容性与性能

- BOTH；新增注册表内容，存档影响与移除风险同厨房本体。
- 装饰方块数量多，建筑密集场景的渲染开销纳入低配验证。

## 验证

- [ ] 启动测试
- [ ] 酒桶酿造流程功能测试

## 风险与开放问题

- 与两个第三方酒扩展的配方/物品重叠度待实机核对。

## 历史

- 2026-07-21 后: 随料理章节加入（本批归档）
