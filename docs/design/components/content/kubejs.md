# KubeJS

## 记录

- 类型：script system / mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/kubejs-neoforge-2101.7.2-build.368.jar`
- 标识与版本：mod_id = `kubejs`；版本 `2101.7.2-build.368`
- 加载器或包格式：NeoForge 21.1.235；包含 3 个内部 JAR

## 设计作用

**KubeJS 是 ProjectNautic 整合包的核心魔改框架**，其地位等同于整合包的基础设施层。整合包的设计支柱明确将"魔改即基础设施"作为核心原则，所有内容定制、配方修改、事件脚本、阶段控制、自定义物品/方块均通过 KubeJS 实现。

KubeJS 的战略价值：
- **可扩展性支柱**：KubeJS 的 JavaScript 运行时允许在不修改模组 JAR、不编写 Java 的前提下实现深度定制。整合包的独特体验 90% 以上将来自 KubeJS 脚本而非原生模组。
- **性能优先支柱**：通过脚本而非额外模组实现功能，减少了需要加载的模组数量，降低了内存占用和启动时间。
- **UI 一致性支柱**：KubeJS 可以注册自定义创造模式标签页、修改工具提示、控制配方显示，是统一整合包视觉和交互体验的关键工具。

KubeJS 在整个整合包技术栈中的角色：
- 位于底层运行时（Rhino）之上，Jade/JEI 等 UI 模组之下
- 所有其他模组的配方、标签、阶段逻辑都可能被 KubeJS 修改
- 整合包版本迭代时，KubeJS 脚本是最主要的变更载体

## 玩家可见行为

### 可发现性
- KubeJS 本身对玩家**几乎不可见**。玩家不会看到"KubeJS"这个名称出现在游戏中。
- 玩家可见的是 KubeJS 的**产出**：自定义配方、修改后的进度、新物品、改变的世界生成规则、调整后的怪物掉落。
- 创造模式物品栏可能出现 `kubejs` 标签页（若脚本注册了自定义物品）。

### 交互
- 玩家通过合成台、熔炉、JEI 等常规游戏系统与 KubeJS 魔改内容交互。
- 服务器管理员可使用 `/kubejs` 命令重载脚本（`reload`）、导出数据（`export`）、诊断问题（`errors`）。
- 创造模式玩家可能获得 KubeJS 自定义的测试/调试物品。

### 进度与奖励
- KubeJS 可以监听原版进度事件，触发自定义奖励（如给予物品、执行命令、解锁阶段）。
- KubeJS 可以修改或禁用原版的进度系统，替换为整合包自定义的进度逻辑。
- 阶段系统（若启用）可控制玩家何时能使用特定物品/配方，形成渐进式解锁体验。

### 摩擦与失败状态
- **脚本错误导致加载失败**：若 `startup_scripts` 存在语法错误，整个游戏可能无法启动，或进入安全模式（部分功能禁用）。
- **脚本错误导致运行时异常**：`server_scripts` 或 `client_scripts` 中的错误可能导致配方不加载、事件不触发、控制台持续报错。
- **热重载不一致**：`/reload` 命令可重载服务端脚本，但部分注册（如物品、方块）只能在启动时完成，热重载不会生效。玩家和管理员需要理解此限制。
- **客户端-服务端脚本不同步**：若服务端更新了脚本但客户端未同步，玩家可能看到配方存在但无法合成（反作弊机制）。

## 集成关系

### 依赖
- **NeoForge** `>=21.1.199`（required, AFTER, BOTH）
- **Rhino** `>=2101.2.7-build.81`（required, AFTER, BOTH）—— KubeJS 的 JavaScript 运行时引擎

### 可选依赖
- **JEI** `>=19.25.0.322`（optional, AFTER, CLIENT）—— KubeJS 可在 JEI 存在时注册自定义配方和信息页
- **REI** `>=16.0.799`（optional, AFTER, CLIENT）—— 备用配方查看器支持
- **EMI** `>=1.1.22`（optional, AFTER, CLIENT）—— 备用配方查看器支持
- **BetterAdvancedTooltips** `>=2101.1.0-build.1`（optional, BEFORE, CLIENT）—— 增强工具提示集成

### 扩展插件
- **KubeJS Additions**：补充额外事件与 API，扩展 KubeJS 的能力边界。
- **KubeJS Data Component**：为 KubeJS 提供 DataComponent API 支持，便于脚本操作 1.20.5+ 引入的物品数据组件。
- **LootJS**：通过 KubeJS 脚本修改战利品表，用于控制掉落、宝箱内容与阶段化奖励。

### 冲突
- 与 CraftTweaker 存在功能重叠，不建议同时安装。整合包选择 KubeJS 作为唯一脚本框架。
- 某些硬编码修改游戏机制的模组可能与 KubeJS 的事件监听器竞争，导致行为不可预测。

### 配方与标签
- **KubeJS 是配方系统的实际控制者**。它可以在启动时移除任何已注册配方，添加新的 JSON 配方或代码配方，修改配方输入/输出。
- 所有整合包的"平衡性调整"本质上都是 KubeJS 配方脚本的体现。
- KubeJS 可以注册新的标签（`TagEvent`），用于批量控制配方兼容性、进度条件、战利品表。

### 任务
- KubeJS 可监听任务相关事件（如 FTB Quests 的事件），但本身不实现任务系统。任务系统由其他模组负责，KubeJS 负责触发联动。

### 世界生成
- KubeJS 可以修改世界生成规则：禁用特定结构、调整矿石生成频率、添加自定义地物。
- `startup_scripts` 中注册的世界生成修改在存档创建时即生效，无法通过热重载改变已生成世界。

### UI
- KubeJS 可以修改工具提示（`ItemTooltipEvent`）、注册信息页（与 JEI 集成）、创建简单的客户端 HUD 元素。
- 复杂的自定义 GUI 需要额外模组（如 FTB Quests 或自定义 GUI 库），KubeJS 本身只提供基础能力。

### 资源
- KubeJS 可以从 `kubejs/assets/` 目录加载自定义资源：纹理、模型、语言文件、声音。
- 这允许在不制作独立资源包的情况下为自定义物品/方块提供视觉效果。

### 脚本目录结构
```
kubejs/
├── startup_scripts/     # 启动时执行，用于注册物品/方块/流体/世界生成
│   └── main.js
├── server_scripts/      # 服务端逻辑，用于配方、事件、进度、命令
│   └── main.js
├── client_scripts/      # 客户端逻辑，用于工具提示、渲染、JEI 集成
│   └── main.js
├── assets/kubejs/       # 自定义资源（纹理、模型、语言）
│   └── textures/
├── config/              # KubeJS 自身配置
│   ├── client.json
│   ├── common.json
│   └── web_server.json
└── README.txt           # 官方说明文档
```

### 加载顺序
1. **startup_scripts**：游戏初始化阶段执行，此时注册表尚未冻结，可以添加新内容。执行失败后游戏可能无法进入主菜单。
2. **server_scripts**：世界加载/重载时执行，处理配方、事件监听器、命令注册。错误不会阻止游戏启动，但会导致功能缺失。
3. **client_scripts**：客户端启动/重载时执行，处理视觉和客户端专属逻辑。错误不会影响服务端。

## 配置意图

### `kubejs/config/common.json`

```json
{
  "hide_server_script_errors": false,
  "server_only": false,
  "announce_reload": true,
  "packmode": "",
  "save_dev_properties_in_config": false,
  "allow_async_streams": true,
  "match_json_recipes": true,
  "ignore_custom_unique_recipe_ids": false,
  "startup_error_gui": true,
  "startup_error_report_url": "",
  "remove_slot_limit": false,
  "default_max_stack_size": 0,
  "creative_mode_tab_icon": {},
  "creative_mode_tab_name": null
}
```

以下是对关键配置项的设计意图分析：

- **`hide_server_script_errors: false`**：**故意暴露错误**。在开发和测试阶段，所有服务端脚本错误都应在控制台和日志中完整显示。整合包定位需要长期维护，隐藏错误只会延迟问题发现。此配置在正式发布前不应改为 `true`。

- **`server_only: false`**：整合包同时支持单人游戏和多人服务器。设为 `false` 确保客户端也会加载必要的脚本（如工具提示修改、JEI 集成）。若未来发布纯服务端版本（如仅做服务端租赁），可单独调整为 `true`。

- **`announce_reload: true`**：脚本热重载时向所有在线玩家发送聊天消息。这对于多人服务器的管理员操作很重要——玩家能意识到"游戏行为可能刚刚改变"。避免管理员 reload 后因配方变化导致玩家困惑。

- **`packmode: ""`**（空字符串）：当前未启用包模式。Packmode 是 KubeJS 的高级功能，允许同一套脚本根据模式（如 `"expert"`、`"skyblock"`）表现不同行为。预留为空，为未来扩展（如专家模式、休闲模式）保留可能性。启用 packmode 需要在启动参数或配置中指定，此处仅为默认值。

- **`allow_async_streams: true`**：启用异步流处理。这可以提高涉及大量数据操作（如遍历所有配方、导出数据）时的性能。但可能增加并发复杂度。当前整合包脚本规模较小，开启此选项利大于弊。若未来出现难以复现的竞态条件，需首先考虑关闭此选项。

- **`match_json_recipes: true`**：KubeJS 在修改配方时匹配 JSON 格式的配方 ID。这是标准行为，确保配方移除/替换操作能正确定位目标。关闭此选项将导致基于代码的配方修改与数据包配方不同步。

- **`startup_error_gui: true`**：启动脚本出错时显示 GUI 错误报告，而非静默失败或崩溃。这对整合包开发者和测试人员至关重要——看到错误弹窗比查看日志更直观。正式发布后，若担心弹窗影响玩家体验，可考虑关闭，但需确保有完善的错误日志收集机制。

- **`remove_slot_limit: false` / `default_max_stack_size: 0`**：不修改原版物品堆叠上限。整合包定位为接近原版的生存体验，不需要 64+ 堆叠的魔改。若未来需要为特定自定义物品设置更高堆叠上限，应在脚本中单独处理，而非全局修改。

### `kubejs/config/client.json` 与 `web_server.json`
- `client.json` 控制客户端行为（如调试显示、工具提示详细程度）。当前为默认配置。
- `web_server.json` 控制 KubeJS 的内置开发服务器。仅在开发时有用，生产环境保持默认关闭。

### 脚本文件 (`main.js`)
- 当前 `startup_scripts/main.js`、`server_scripts/main.js`、`client_scripts/main.js` 均为接近空白的占位文件（~116-117 B），仅含基础事件监听模板。
- 这是预期状态：基础设施已就位，等待后续魔改内容填充。
- **重要**：后续所有脚本开发必须遵循"设计先行"原则——每个脚本的功能必须在 `docs/design/` 中有对应设计文档，脚本本身只是设计的实现。

### 配方统一试验

#### `POT-TRIAL-01`（withdrawn）

- 三份同 ID 数据包覆盖已删除。失败原因：森罗油脂是炒锅的外部启动资源，不属于配方 `ingredients`。
- 设计教训：自定义机器的运行资源必须与配方材料分开记录；不能仅从统一方法论推导材料。

#### `RICE-CARRIER-02`（experimental）

- 来源：`kubejs/server_scripts/unify/rice_carrier_paths.js` 与 `kubejs/data/kaleidoscope_chinesefood/recipe/pot/*_rice.json`，设计依据为根目录 `design/charter.md`。
- 触发原因：国味 1.1.8 将四种盖饭改为 `kaleidoscope_cookery:rice_bowl` 自定义工作台配方，同时移除了旧版四条 `pot/*_rice` 炒锅配方。
- 运行时证据：Exporter schema 3 快照中四条错误配方的顶层 `type_id` 均为 `minecraft:crafting`，但 `raw_json.type` 为 `kaleidoscope_cookery:rice_bowl`；四个结果物品均已注册，且没有对应的炒锅 carrier 生产路径。
- 玩家可见变化：移除滑蛋牛肉盖饭、地三鲜盖饭、小炒黄牛肉盖饭、回锅肉盖饭的 `rice_bowl` 工作台路径；恢复炒锅烹饪后以熟米饭盛取的路径。
- 恢复方式：四条 KubeJS 数据配方沿用国味 1.1.8 对应基础炒菜的当前原料数量，使用 `#c:foods/cooked_rice` carrier、3 次翻炒和 200 tick，并恢复旧版规范 ID `kaleidoscope_chinesefood:pot/*_rice`；服务器脚本只负责移除错误工作台路径。
- 兼容措施：保留旧版 `minecraft:crafting_shapeless` 输出过滤，防止降级或其他运行时注入重新暴露旧异常；森罗厨房本体另外五条 `rice_bowl` 配方不在修改范围内。
- 数据边界：Exporter 的结构化 `recipe_inputs` / `recipe_outputs` 会漏掉 carrier 与 `unparsed` 配方产物；本次界定以可解析的 `raw_json` 为准。
- 静态验证：Node.js 语法检查通过；服务器脚本与 KubeJS 数据配方均为 0 WARN；4 条移除规则全部命中国味 1.1.8 的稳定配方 ID。恢复配方与新版对应基础炒菜逐字段一致，唯一业务差异为熟米饭 carrier 与盖饭结果。
- 验证要求：执行 `/reload` 后重新导出 SQLite，确认四个输出各只有一条 `kaleidoscope_cookery:pot` 配方、carrier 为 `c:foods/cooked_rice`，且四个旧 ID 不再对应 `rice_bowl` 类型。

#### `RICE-CARRIER-03`（experimental）

- 范围：森罗厨房本体的红烧牛肉盖饭、鱼香肉丝盖饭、番茄炒蛋盖饭、青椒炒肉盖饭、糖醋里脊盖饭。
- 运行时证据：五条错误配方均为稳定 ID 的 `kaleidoscope_cookery:rice_bowl`，只引用已完成炒菜作为 `ingredient`；对应基础菜与盖饭物品均已注册，但不存在熟米饭 carrier 的 `pot` 生产路径。
- 实施：将五个错误 ID 加入统一移除脚本和 `removes.txt`；在 `kubejs/data/kaleidoscope_cookery/recipe/pot/` 新增五条正确配方。
- 交付约束：将 `.gitignore` 的广义 `data/` 收窄为根目录 `/data/`，避免 `kubejs/data` 配方在本机生效却被版本控制与发布包遗漏。
- 原料与参数：逐条复制森罗厨房 1.4.1 标准 `pot` 基础炒菜；仅将 carrier 改为 `#c:foods/cooked_rice`、结果改为对应盖饭。基础配方未显式声明翻炒次数或时间，因此恢复配方同样使用模组默认值。
- 范围约束：不复制简化 `flex_pot` 路径，不加入油脂材料，不修改下界与末地附属现有正确 carrier 配方。
- 静态验证：Node.js 语法检查通过；服务器脚本与 KubeJS 数据配方均为 0 WARN；9 条统一移除规则全部命中。五条恢复配方与森罗厨房 1.4.1 对应标准 `pot` 配方逐字段一致，预测最终态每个盖饭仅保留一条 `pot` 路径。
- 验证要求：执行 `/reload` 后重新导出 SQLite，确认五个输出各只剩一条 `kaleidoscope_cookery:pot` 路径，且原五个 ID 不再对应 `rice_bowl` 类型。

#### `FOOD-UNIFY-V6`（experimental / runtime validation pending）

- 来源：`kubejs/startup_scripts/unify/food_items.js`、`kubejs/client_scripts/unify/food_names.js`、`kubejs/server_scripts/unify/food_tags.js`、`kubejs/server_scripts/unify/food_recipes.js`、`kubejs/data/{farm_and_charm,kaleidoscope_cookery,seki}/recipe/` 与 `kubejs/assets/seki/models/item/`。
- 设计依据：`docs/food-mod-unification-design-v6-2026-07-29.md`；实施审计记录见 `docs/food-mod-unification-implementation-v6-2026-07-29.md`。
- 玩家可见变化：同名食材按品种/做法/地区改名；盐、面粉、面团等公共标签互认；发面食品必须经过酵母、发酵与生坯；裹馅面食拆为皮/馅/专属生坯。
- 自定义内容：注册 11 个 `seki:` 中间物/生坯并复用现有料理模组纹理；新增 startup 注册意味着升级后必须完整重启。
- 迁移范围：馒头、包子、饺子、生煎、肉饼、四川抄手、云吞面、烤包子，以及 F&C stove 的长棍、辫子面包、可颂和苹果派。
- serializer 约束：所有 steamer/stockpot/flex_stockpot/pot/stove/chopping-board/fermentation-box JSON 均复制当前 JAR 同类型结构；酵母通过“待发酵面团”预装配适配发酵箱单 ingredient schema。
- 标签保守项：瓶装酵母不加入 `c:yeast`，避免玻璃瓶容器语义丢失；森罗死面团不桥接到 `c:foods/dough`。
- serializer 回归：运行时 SQLite 证明 KubeJS component 桥会静默丢弃四条碗装 stockpot/flex_stockpot 的 carrier、汤底与控制字段；四川抄手/云吞面已改用完整复制 JAR 原文的 `seki:` 静态数据配方。
- 静态验证：JavaScript/JSON 语法、改名 ID、模型纹理均通过；同一新鲜索引基线下 `NEW ERROR 0`。剩余动态 KubeJS 自定义配方与 JAR 内嵌数据包超出静态校验器解析范围，已由 SQLite/JAR 原文补证。
- 验证要求：完整重启、`/reload`、KubeJS 日志、JEI/实做与重新导出 SQLite；完成前状态保持 experimental。

#### `FOOD-UNIFY-V7`（static complete / runtime validation pending）

- 来源：`kubejs/data/seki/tags/item/`、`kubejs/data/{bakeries,farm_and_charm,farmersdelight,kaleidoscope_cookery,kaleidoscope_nether,letsdocompat,someassemblyrequired}/recipe/` 与 `kubejs/server_scripts/unify/food_recipes.js`。
- 设计依据：根目录 `design/charter.md` 第 7 节；实施证据见 `docs/food-mod-unification-implementation-v7-2026-07-29.md`。
- 玩家可见变化：甜面团不再能切成普通面条，也不能制作肉夹馍、驴肉火烧或生汉堡胚；普通面粉可跨模组用于 F&C 调理碗、Bakeries 搅拌机和 Create 搅拌盆，但不能冒充全麦粉。
- 标签策略：新增普通粉/全麦粉、清水制面/鸡蛋意面、无酵母火烧/咸味发酵面包六种窄标签；同层标签成员互斥，避免继续扩大 `c:dough`/`c:flours/wheat` 的歧义。
- 机器策略：F&C 和面使用已审计的 `c:yeast`；Bakeries 瓶装酵母保持精确 ID。四条会吞瓶的旧 Create 兼容配方被精确移除，替换路径返还玻璃瓶。
- 覆盖范围：8 条按面团谱系分流的制面路径、6 条咸食路径、6 条调理碗/compat 路径、6 条 Bakeries blender/Create mixing 路径，以及 5 条普通粉/全麦粉守恒路径；均复制当前最终态或 JAR 同类型字段结构，只替换业务原料标签与目标产物。
- 静态验证：新鲜 JAR + `kubejs/data` 索引下 `NEW ERROR 0`；JSON 全量解析通过。运行时重新导出前不得宣称最终完成。
- 验证要求：`/reload` 后检查 KubeJS 日志与 JEI 输入；实做跨模组面粉/酵母互换和甜面团拒绝路径；重新导出 SQLite 核对 recipe ID、有效类型与玻璃瓶返还。

## 兼容性与性能

### 客户端/服务端范围
- 标记为 `BOTH`。`startup_scripts` 和 `server_scripts` 在两侧都执行，`client_scripts` 仅在客户端执行。
- 单人游戏模式下，服务端和客户端脚本在同一 JVM 中运行，需注意事件监听器的重复注册问题。

### 存档影响
- **高影响**。KubeJS 脚本直接修改配方注册表、世界生成、进度系统。脚本变更后，旧存档的已合成物品、已放置方块不会消失，但新配方规则立即生效。
- 世界生成修改对已有区块无影响（Minecraft 世界生成的基本限制）。
- 建议在整合包更新说明中明确标注"此更新修改了以下配方，已存在的世界将立即应用新规则"。

### 已知不兼容
- **CraftTweaker**：功能重叠，同时安装会导致不可预测的配方行为。整合包已排除 CraftTweaker。
- 某些对注册表进行早期修改的模组可能与 KubeJS 的 `startup_scripts` 竞争加载顺序，导致 KubeJS 的修改被覆盖或覆盖他人。

### 资源成本
- **启动时间**：`startup_scripts` 在注册表冻结前执行，脚本越复杂，启动时间越长。目前为空文件，无负担。
- **内存**：KubeJS 需要维护配方注册表的副本（用于热重载），内存开销与配方数量成正比。
- **运行时性能**：事件监听器在每次对应事件触发时执行。过度使用全局事件监听（如每个 tick 检查所有玩家）会显著降低 TPS。

### 缓解措施
- 建立脚本性能规范：禁止在 `ServerTickEvent` 中执行复杂逻辑，优先使用特定事件（如 `BlockBreakEvent`、`CraftingEvent`）。
- 定期审查脚本：移除过期的事件监听器，合并重复的配方修改。
- 开发环境启用 `startup_error_gui` 和完整日志，生产环境考虑降级错误提示方式。
- 脚本版本控制：所有脚本纳入 Git 版本控制，变更可追溯、可回滚。

## 验证

- [ ] 启动或加载测试
- [ ] 功能测试
- [ ] 多人游戏测试（如适用）
- [ ] 性能或世界生成测试（如适用）
- [ ] 相关系统的回归检查

## 风险与开放问题

1. **脚本复杂度失控风险**：KubeJS 的灵活性是一把双刃剑。若无规范约束，脚本可能迅速膨胀为难以维护的意大利面条代码。必须在项目早期建立脚本架构规范（目录结构、命名约定、模块化原则）。

2. **热重载的局限性**：大量开发者误以为 `/reload` 能重载所有内容。实际上，物品/方块/世界生成注册后不可更改。需要在文档中明确区分"可热重载内容"和"需重启内容"。

3. **跨版本兼容性**：KubeJS 的 API 在不同 Minecraft 版本间变化较大。当前锁定在 1.21.1 / NeoForge 21.1.x，若未来升级 Minecraft 版本，KubeJS 脚本几乎肯定需要大规模重写。

4. **Rhino 版本绑定**：KubeJS 与特定 Rhino 版本硬绑定。Rhino 升级时可能出现 JavaScript 语法兼容性问题（如 ES6+ 特性支持变化）。

5. **调试工具不足**：KubeJS 的调试体验（断点、单步执行）远不如原生 Java 开发。复杂的逻辑错误可能需要大量 `console.log` 才能定位。考虑引入更系统化的日志规范。

6. **Packmode 实施计划**：虽然 `packmode` 当前为空，但若未来实施，需要回答：
   - 专家模式和普通模式的差异边界在哪里？
   - 玩家如何在游戏中切换模式（还是必须在创建世界前选择）？
   - Packmode 切换后已有存档如何处理？

## 历史

- 2026-07-29: 将万能咸食面团拆为无酵母火烧面团与咸味发酵面包团；死面团/鸡蛋面团不再制作肉夹馍或汉堡胚
- 2026-07-29: 根据新 SQLite 将过宽 `seki:doughs/noodle` 拆为清水制面与鸡蛋意面两组互斥标签；四类机器按原料谱系分流产物，修复死面团在 FD 砧板变成鸡蛋意面等问题
- 2026-07-29: 将 `FOOD-UNIFY-V6` 四条四川抄手/云吞面汤锅路径迁移为 `seki:` 静态数据配方，修复 KubeJS component 桥静默丢失 carrier、汤底、纹理、颜色和时间字段
- 2026-07-29: 收紧 `c:flours/wheat` 的普通粉/全麦粉混用；Create 普通面团与 Bakeries 全麦面团改用各自窄标签
- 2026-07-29: 实施 `FOOD-UNIFY-V7`，以普通粉/全麦粉及制面/咸食面团分层标签修复语义越界与机器原料封闭，并移除四条吞瓶的 Bakeries Create 旧兼容路径
- 2026-07-29: 根据新 SQLite 修正 `FOOD-UNIFY-V6` 的无盛具自定义配方：27 条饺子/生煎/肉饼配方迁移为同 ID 数据包覆盖，绕开 `event.custom` 的空 carrier 表达限制
- 2026-07-29: 修正 `FOOD-UNIFY-V6` 的 Rhino 语法兼容性；将两处数组展开改为 `concat`，配方语义与数量不变，运行时复测待完成
- 2026-07-29: 实施 `FOOD-UNIFY-V6` 静态批次，统一现实语义命名、标签、发面/死面点心链与四条烘焙路径；运行时验收待完成
- 2026-07-28: 实施 `RICE-CARRIER-03`，修复森罗厨房本体五种盖饭的 `rice_bowl` 工作台路径
- 2026-07-28: 国味升级至 1.1.8 后实施 `RICE-CARRIER-02`，移除四条 `rice_bowl` 工作台路径并恢复四条炒锅 carrier 配方
- 2026-07-26: 撤回 `POT-TRIAL-01` 错误加油覆盖；新增 `RICE-CARRIER-01`，移除四种盖饭的工作台无序路径
- 2026-07-16: 更新集成关系：补充 KubeJS Additions、KubeJS Data Component、LootJS 扩展插件说明
- 2026-07-15: 作为基础 QoL 与魔改框架批次添加
