# Seki

> 从灶台出发，去往更远的地方。

![Minecraft 1.21.1](https://img.shields.io/badge/Minecraft-1.21.1-62B47A?style=flat-square)
![NeoForge 21.1.235](https://img.shields.io/badge/NeoForge-21.1.235-EF3A3A?style=flat-square)
![Java 21](https://img.shields.io/badge/Java-21-007396?style=flat-square)
![状态：开发中可试玩](https://img.shields.io/badge/status-playable%20development-D97706?style=flat-square)

![Seki 的下界光影景观](docs/assets/readme/seki-nether.webp)

> [!IMPORTANT]
> Seki 当前处于**开发中可试玩**阶段。公开发布包尚未开放，本仓库本身也不是可直接启动的完整游戏实例。

## Seki 是什么

Seki 是由 ProjectNautic 制作的 Minecraft 1.21.1 NeoForge 生活冒险整合包。它围绕料理、探索与战利品重新组织生存节奏：离开住处寻找食材与资源，回到厨房完成真正的加工和烹饪，再带着收获走向更远的地方。

这里没有强制规定单一玩法。你可以独自整理菜谱、建设厨房和酒馆，也可以与朋友共享聚落、分头探索；多人世界中的自然战利品会为每位玩家独立生成，不必争抢同一个宝箱。

## 核心游玩循环

1. **探索寻材**：在主世界及主题扩展内容中寻找食材、酿造原料与战利品。
2. **料理准备**：使用炒锅、汤锅、石磨和酒桶完成烹饪与酿造，而不是把所有食物压缩成工作台合成。
3. **继续远征**：带回新的材料和收藏，扩建厨房与住处，然后为下一次出发做好准备。

## 主要特色

- **有过程的料理系统**：森罗物语：厨房提供炒锅、汤锅与石磨等料理设备。炒菜需要实际处理，盖饭在烹饪完成后使用熟米饭盛取；KubeJS 负责统一存在冲突的获取路径。
- **熟悉而丰富的菜肴**：国味扩展带来中式炒菜与盖饭，酒馆扩展则加入酒桶酿造和一系列餐饮主题装饰。料理不只用于填满饥饿值，也构成聚落生活的一部分。
- **适合共同探索的战利品**：Lootr 让同一个自然战利品容器为每位玩家提供独立奖励，兼顾单人与多人世界的探索价值。
- **看得见的奖励反馈**：物品稀有度、开箱转盘与地面战利品光束共同强化发现珍贵物品时的反馈，同时保留可继续调校的空间。
- **统一的视听体验**：默认启用 Complementary Unbound + Euphoria Patches 光影，并搭配环境声景、粒子、界面动画和社区中文资源。
- **完整的便利与性能底座**：JEI、Jade、Xaero 地图等工具负责信息查询；渲染、逻辑、区块、内存、网络与实体剔除等优化共同支撑当前规模。

![Seki 的个人战利品与稀有度演出](docs/assets/readme/seki-loot.webp)

## 当前版本与运行要求

| 项目 | 当前基线 |
| --- | --- |
| 整合包版本 | `2026.07.28` |
| Minecraft | `1.21.1` |
| 模组加载器 | `NeoForge 21.1.235` |
| Java | 64 位 Java 21 |
| 当前模组数量 | 124（packwiz 管理 122，另有 2 个本地开发例外） |
| 客户端内存建议 | 6–8 GB |
| 游玩方式 | 单人 / 多人 |
| 开发状态 | 开发中可试玩 |

默认光影对显卡性能有额外要求。低配设备遇到帧率问题时，建议先关闭光影并降低阴影距离；内存也不应在没有需要时无限增加。

## 获取与安装

**[GitHub Releases（即将开放）](https://github.com/Aero-Seira/Seki/releases)**

仓库现已使用 packwiz 保存可复现的安装清单：根目录 `pack.toml` / `index.toml` 固定版本与文件哈希，`mods/*.pw.toml` 记录模组下载来源。第三方 JAR/ZIP 不进入 Git；本地开发实例中的文件仍保留在原目录，普通提交和推送不会删除它们。

公开发布前，可使用兼容 packwiz 的启动器或 packwiz-installer 指向 [`pack.toml`](pack.toml) 进行开发安装。客户端会安装 121 个 JAR；Brutal Respawn 仅服务端，JECharacters 4.5.26 与 ModPack IDE Exporter 0.1.0 暂为本地专用例外。另有 12 个 CurseForge 模组因作者关闭第三方下载，需要按安装器提示手工下载原文件。完整维护与安全流程见 [packwiz 分发说明](docs/design/components/platform/packwiz-distribution.md)。

## 开发状态与已知限制

- 料理配方仍在持续统一，部分盖饭路径完成了静态验证，但仍需更多运行时回归。
- 下界与末地主题扩展已经加入；它们的完整内容范围及世界生成影响仍在盘点。
- 独立战利品的多人回归、高掉落密度下的视觉性能，以及低配设备的默认光影表现仍待系统测试。
- 面向普通玩家的启动器导入封装尚未完成；packwiz 开发分发链已建立，但 CurseForge 人工下载项与两个本地专用例外仍需在公开发布前处理。

开发版本可能调整配方、配置或模组组合。使用现有实例游玩时，请在更新前备份重要世界。

## 项目资料

- [设计文档总览](docs/design/README.md)：产品定义、组件地图与跨系统约束
- [设计变更记录](docs/design/change-log.md)：每批内容调整及其验证状态
- [料理配方统一宪章](design/charter.md)：当前料理工序与盖饭路径规则
- [当前内容清单](docs/design/_generated/current-inventory.md)：由本地扫描生成的模组与配置证据
- [安全提交工作流](scripts/README.md)：Windows PowerShell 与 macOS/Linux 提交、校验和推送脚本
- [问题反馈](https://github.com/Aero-Seira/Seki/issues)：报告崩溃、兼容问题或体验建议

如需参与开发，请先阅读 [AGENT.MD](AGENT.MD) 中的兼容性、验证与文档维护约定。

## 致谢

感谢所有模组、资源包、光影与工具作者，让 Seki 得以建立在成熟的 Minecraft 社区生态之上；也感谢持续提供测试、反馈与翻译的玩家。

Minecraft 属于 Mojang Studios。各模组、资源包与光影的著作权及许可归其各自作者所有。
