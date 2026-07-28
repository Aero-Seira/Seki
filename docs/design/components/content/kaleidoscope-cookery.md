# 森罗物语：厨房（Kaleidoscope Cookery）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[森罗物语：厨房] kaleidoscopecookery-1.4.1-neoforge+mc1.21.1.jar`
- 标识与版本：mod_id = `kaleidoscope_cookery`；版本 `1.4.1`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

森罗物语系列的**烹饪系统本体**（verified，mods.toml 描述：沉浸式烹饪系统与料理配方）。提供炒锅（`pot`）、汤锅（`stockpot`）、石磨（`millstone`）等料理机器与 `rice_bowl` 盛取路径，是整合包首个大型内容面"料理/餐饮"的核心支柱。本模组落地标志着 Base Pack 纯 QoL/性能底座的阶段结束、内容模组投放期开始。

## 玩家可见行为

- 通过炒锅炒菜（3 次翻炒 / 200 tick 等过程参数）、汤锅炖煮、石磨加工获得料理。
- 盖饭类成品使用"烹饪完成后以熟米饭（`#c:foods/cooked_rice`）盛取"的机器交互，不能在工作台二次组合（经 KubeJS 修正，见 content/kubejs.md 与 change-log 2026-07-26/28）。

## 集成关系

- **下游扩展**：国味（chinesefood）、酒馆（tavern）、下界/末地（nether/end）、次元酒（dim_wine）、世界酒（world_liquor）均以其为内容基座（inferred，命名与配方 type 前缀）。
- **兼容层**：kaleidoscope_compat 提供模糊配方与物品统一（见 integration/kaleidoscope-compat.md）。
- **教学**：ponderforkc 提供 Ponder 思索场景（见 integration/ponderforkc.md）。
- **魔改**：KubeJS 数据配方与 `rice_carrier_paths.js` 修正其盖饭路径；阶段 0 索引识别 `pot` 294 条、`stockpot` 100 条、`millstone` 95 条配方。

## 配置意图

- **`config/kaleidoscope_cookery-common.toml` / `kaleidoscope_cookery-client.toml`**：新增，默认生成（verified）；尚未做有意改动，具体意图待首次实机体验后收敛。

## 兼容性与性能

- BOTH 部署；向注册表新增方块/物品/机器，**影响存档兼容性**——移除后已使用其内容的世界将出现缺失方块/物品，须按长线运营支柱锁定版本。
- 内容量级中等，需补充启动耗时与内存实测。

## 验证

- [ ] 启动测试
- [ ] 功能测试（炒锅/汤锅/石磨基本流程）
- [ ] 盖饭盛取路径实做验证（`/reload` 后每道盖饭仅剩一条 pot 路径）
- [ ] 内容投放批次实机回归

## 风险与开放问题

1. 系列各子模组（含第三方酒扩展）的升级节奏与作者维护状态待跟踪。

## 历史

- 2026-07-26/28: KubeJS 修正本体五种盖饭的盛取路径（见 change-log）
- 2026-07-21 后: 作为首个内容章节的核心模组加入（本批归档）
