# Common Networking

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/common-networking-neoforge-1.0.21-1.21.1.jar`
- 标识与版本：mod_id = `commonnetworking`；版本 `1.0.21`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

**统一网络层库**（verified，mods.toml）：把 Forge/Fabric 网络通信收口到 common 模块，供跨平台模组复用。对玩家不可见，为同批加入的跨平台模组的传递依赖（inferred）。

## 验证

- [ ] 启动测试

## 历史

- 2026-07-28: 随新批次作为依赖加入（本批归档）
