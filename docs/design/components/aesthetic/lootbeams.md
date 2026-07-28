# 战利品光束：Refork（Loot Beams Refork）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[战利品光束：Refork] Loot Beams Refork-neoforge-1.21.1-3.4.7.jar`
- 标识与版本：mod_id = `lootbeams`（inferred，配置目录名）；版本 `3.4.7`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

掉落物**光束指示**模组（verified，mods.toml："Loot items, guided by light!"）：按稀有度为地面掉落物投射彩色光柱，强化战利品的可见性与"掉落演出"，与 RarityCore 稀有度体系、GachaAddiction 开箱演出共同构成本批"战利品反馈强化"设计线。

## 玩家可见行为

- 高稀有度掉落物显示彩色光柱与名称牌，远距离可辨。

## 配置意图

- `config/lootbeams/` 下五个配置文件（verified，新增，默认确认）：
  - `custom_config.toml` / `dynamic_config.toml`：光束颜色与按稀有度/物品映射规则；
  - `light_config.toml`：光柱形态；`loot_information_config.toml`：掉落物信息牌；`sound_config.toml`：拾取音效。
  - 当前均为模组默认值，意图为"先采用作者预设，按实机观感收敛"。

## 集成关系

- 协作：RarityCore（稀有度判定）、GachaAddiction（开箱演出）、Particular/Visuality 等粒子层（叠加风险）。

## 兼容性与性能

- 客户端视觉层，无存档影响；大量掉落物场景（刷怪塔、农场）光柱渲染开销需实测。

## 验证

- [ ] 启动测试
- [ ] 高掉落密度场景的帧率验证

## 历史

- 2026-07-28: 随战利品反馈强化批次加入（本批归档）
