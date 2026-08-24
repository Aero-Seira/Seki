# Complementary Unbound r5.8.1 + EuphoriaPatches 1.9.3（官方默认光影）

## 记录

- 类型：shader-pack
- 状态：active
- 证据可信度：verified
- 来源路径：`shaderpacks/ComplementaryUnbound_r5.8.1.zip`（`modrinth.index.json` 远程下载）、`shaderpacks/ComplementaryUnbound_r5.8.1 + EuphoriaPatches_1.9.3/` 与同名 `.txt`（运行时衍生状态）
- 标识与版本：Complementary Shaders Unbound 风格 r5.8.1 + EuphoriaPatches 1.9.3
- 加载器或包格式：Iris（OptiFine 光影包格式）

## 设计作用

整合包首次确立**官方默认光影**。选择 Complementary（Unbound 风格分支）+ EuphoriaPatches 扩展，原因：

- Complementary 是 1.21.1 生态中兼容性与性能口碑最好的光影之一（inferred，基于社区共识）。
- EuphoriaPatches 在 Complementary 基础上提供大量额外氛围选项，配合 Euphoria Patcher 模组可在游戏内直接维护补丁。
- 支撑"视觉风格统一"支柱：为截图、宣传、服务器统一观感提供基线。

## 玩家可见行为

- `config/iris.properties` 已预置 `shaderPack=ComplementaryUnbound_r5.8.1 + EuphoriaPatches_1.9.3`，首次启动即启用光影。
- 玩家可在 Iris 光影设置菜单中调整 EuphoriaPatches 扩展项（设置持久化于同名 `.txt`）。
- 低配玩家可切换回基础版 `ComplementaryUnbound_r5.8.1.zip` 或关闭光影。

## 集成关系

- **依赖**：Iris（加载器）、Euphoria Patcher（应用补丁，见其组件页）。
- **许可**：目录内含 `ComplementaryLicense.txt`、`EuphoriaPatchesLicense.txt`，随包分发需遵守两份许可（verified，文件存在）。

## 配置意图

- 基础 zip 由 `modrinth.index.json` 远程下载（Modrinth 项目 `R6NEzAwj`、版本 `VMHXIk50`，含 SHA-1/SHA-512 与多来源地址）。
- 衍生目录为 Euphoria Patcher 对基础 zip 打补丁后的运行时产物；它不进入 Git 或 overrides，可由基础 zip 重新生成。
- `.txt` 设置文件由运行时维护，当前不随 Git/mrpack 分发；官方可复现边界是基础 ZIP、Iris 选择项与 Euphoria Patcher 版本。

## 兼容性与性能

- 纯客户端，无存档影响。
- 光影显著增加 GPU 负载；与"视听叠加风险"约束并列，需在中低端目标硬件上实测帧率。

## 验证

- [ ] 启动后 Iris 自动加载衍生光影
- [ ] 补丁设置项生效抽查
- [ ] 目标硬件帧率测试

## 风险与开放问题

1. `.txt` 未作为团队默认值分发，不同玩家的 Euphoria 细项可能漂移；若未来需要严格统一宣传画面，应另行固化一份可审计设置基线。
2. 光影包体积较大，对分发带宽的影响待评估。

## 历史

- 2026-08-25: 基础 ZIP 改由 `modrinth.index.json` 远程清单下载，不再使用 packwiz 描述符
- 2026-07-29: 基础 ZIP 改由 packwiz/Modrinth 恢复；Euphoria Patcher 展开缓存与本地设置从索引排除
- 2026-07-20: 设置 `.txt` 重新写入（仅时间戳变化，无参数 delta）
- 2026-07-19: 作为官方默认光影随第四批添加
