# Lootr

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/lootr-neoforge-1.21.1-1.11.37.122.jar`
- 标识与版本：mod_id = `lootr`；版本 `1.21.1-1.11.37.122`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

**每人独立战利品容器**（verified，mods.toml："Generates unique loot for each player that opens a loot container"）。自然生成的战利品容器对每个玩家生成独立掉落，直接支撑"长线运营优先"支柱：多人在同一世界探索时互不影响宝箱收益，是服务器运营的基础设施级机制模组。

## 玩家可见行为

- 战利品箱呈现独特纹理；每个玩家开启同一箱子获得各自独立的战利品（配合 GachaAddiction 演出形成完整开箱体验，inferred）。

## 配置意图

- **`config/lootr-common.toml` / `lootr-client.toml`**：新增，默认生成（verified），未做有意改动；容器转换范围、衰减等运营参数待服务器上线前按运营策略收敛。

## 集成关系

- Jade Addons 早已内置 Lootr 支持（verified，README 系统地图既有条目）；与 GachaAddiction 开箱演出联动（inferred）。

## 兼容性与性能

- BOTH；改变容器战利品行为但不新增注册表方块（替换原生容器行为，inferred），移除后已开启的独立战利品状态丢失，需记录迁移风险。

## 验证

- [ ] 启动测试
- [ ] 双人开箱独立性功能测试（多人）

## 风险与开放问题

1. 对村庄/地牢等原版容器与模组容器的覆盖范围需实机盘点。

## 历史

- 2026-07-28: 随战利品反馈强化批次加入（本批归档）
