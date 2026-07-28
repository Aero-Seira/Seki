# Platform

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/Platform-neoforge-1.21.1-1.3.3.jar`
- 标识与版本：mod_id = `platform`；版本 `1.3.3`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

基于 Architectury 的**跨平台 API 访问库**（verified，mods.toml），对玩家不可见。同批加入的跨平台模组（如 Loot Beams Refork 等 Refork 系，inferred）依赖它统一访问 Forge/Fabric API。

## 集成关系

- 依赖 Architectury（inferred，mods.toml 描述）。

## 验证

- [ ] 启动测试

## 历史

- 2026-07-28: 随新批次作为依赖加入（本批归档）
