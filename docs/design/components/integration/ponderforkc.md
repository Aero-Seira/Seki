# 森罗厨房：思索（Ponder for KaleidoscopeCookery）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[森罗厨房：思索] ponderforkc-1.0.0.jar`
- 标识与版本：mod_id = `ponderforkc`；版本 `1.0.0`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

为森罗厨房机器提供 **Ponder 思索教学场景**（verified，mods.toml 描述"按住w开始做菜"及命名）。玩家在游戏中按住 W 即可观看炒锅/汤锅等机器的可视化教学，降低料理系统的上手门槛——是内容章节的内置教程层，归入 integration（不添加独立内容，连接玩家与厨房机器机制）。

## 集成关系

- **依赖**：森罗厨房本体；Ponder 框架（inferred，1.21.1 上 Ponder 通常内嵌或由 Create 系提供，具体载体待核实）。

## 验证

- [ ] 启动测试
- [ ] 游戏内按 W 触发思索场景

## 风险与开放问题

1. Ponder 运行时载体待确认（是否内嵌）。

## 历史

- 2026-07-21 后: 随料理章节加入（本批归档）
