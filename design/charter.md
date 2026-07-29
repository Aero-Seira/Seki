# 《Seki》配方统一试验宪章

> 状态：experimental / runtime validation pending。约束范围已扩展到森罗盖饭、跨模组食材三轨命名与标签，以及发面/死面点心链；运行时重新导出前不得宣称最终完成。

## 1. 材料层级表（Material Tiers）

| 层级 | 定义 | 本批示例 | 主标签/物品 |
| --- | --- | --- | --- |
| T0 原始 | 直接狩猎、种植或采集 | 牛肉、猪肉、鸡蛋、辣椒、茄子、马铃薯 | 沿用原配方的物品与 `c:` 标签 |
| T1 粗加工 | 一次切配或基础加工 | 熟猪肉、炒锅油脂 | `c:foods/cooked_pork`；油脂属于炒锅外部启动资源，不属于配方材料 |
| T2 中间品 | 由厨具加工、用于下一工序 | 熟米饭 | `c:foods/cooked_rice` |
| T3 成品菜 | 可直接食用的菜品 | 九种炒菜与对应盖饭 | 保留森罗厨房与国味原成品 ID |
| T4 宴席 | 多工序终局菜品 | 本批不涉及 | 不适用 |

## 2. 工艺模板表（Process Patterns）

| 代号 | 工艺 | 标准结构 | 配方类型 | 参数基准 |
| --- | --- | --- | --- | --- |
| POT_STD | 锅炒 | 主料 + 配菜/香辛料 → 炒菜；炒锅预先具有油脂 | `kaleidoscope_cookery:pot` | 油脂是机器状态，不写入 `ingredients`；翻炒 3 次 / 200t |
| POT_RICE_CARRIER | 盖饭 | 对应炒菜的锅内材料 → 盖饭；用熟米饭直接盛取 | `kaleidoscope_cookery:pot` | `carrier: #c:foods/cooked_rice`；禁止工作台二次组合 |
| PLATE_STD | 无火摆盘 | 已完成烹饪的独立组件 + 餐具 | `minecraft:crafting_shapeless` | 只用于真正的冷摆盘；不得替代炒锅的出菜机制 |

机器机制裁决：炒锅必须先加入油脂并置于有效热源上；油脂由机器运行层处理。炒菜完成后，普通菜使用碗盛取，盖饭使用熟米饭盛取。

## 3. 进度阶段与复杂度预算

| 阶段 | 解锁标志 | 允许等级 | 本批规则 |
| --- | --- | --- | --- |
| 篝火期 | 开局 | L0 | 不允许工作台直接组合出盖饭 |
| 厨房初建 | 获得基础切配工具 | L1 | 可准备肉类、蔬菜与熟米饭 |
| 全套厨具 | 获得灶台、炒锅、锅铲和油脂 | L2–L3 | 炒菜在炒锅内完成；以熟米饭盛取获得盖饭 |
| 宴席 | 高级厨具与冒险食材 | L4 | 本批不涉及 |

## 4. 统一裁决登记（Unification Rulings）

| 概念 | 主实现 | 被淘汰实现 | 处置 | 可见性 |
| --- | --- | --- | --- | --- |
| 森罗炒锅油脂 | 炒锅外部启动资源 | 将油脂写入每条配方的 `ingredients` | 撤回 `POT-TRIAL-01` 三份错误覆盖 | 不隐藏油脂 |
| 森罗盖饭 | `kaleidoscope_cookery:pot` 配方，`carrier` 为 `c:foods/cooked_rice` | `kaleidoscope_cookery:rice_bowl` 工作台配方及旧版无序合成 | 移除错误路径，并按对应基础炒菜原料恢复九条炒锅配方 | 九种盖饭物品继续可见 |
| 正确炒锅路径 | KJS 恢复的九条 `pot/*_rice*` 配方 | 国味与森罗厨房本体缺失的炒锅路径 | 沿用对应标准 `pot` 基础炒菜的原料与参数，仅把 carrier 改为熟米饭、结果改为盖饭 | JEI 应只剩炒锅路径 |

### 审计冲突族处置

| 冲突族 | 本批裁决 | 理由 |
| --- | --- | --- |
| DUP-OUTPUT | 重写 | 运行时同一盖饭存在炒锅与工作台两种理念；保留炒锅、移除工作台 |
| MULTI-MOD | 保留 | 九个输出分属森罗厨房本体与国味附属，但都遵循同一炒锅机制，不做物品合并 |
| POT-FAMILY | 重写 | 国味与森罗厨房本体均以 `rice_bowl` 工作台路径替代了正确炒锅盛取，需要从对应标准 `pot` 配方恢复 |
| PARALLEL-TAG | 保留 | `c:foods/cooked_rice` 已用于四条正确配方，本批不改标签成员 |
| SIMILAR-ITEM | 保留 | 不隐藏或转换任何米饭/盖饭物品 |
| CONTAINER-MIX | 重写 | 明确盖饭使用熟米饭 carrier，而不是碗或工作台合成 |

## 5. 移除与重写台账

| 批次 | 日期 | 移除数 | 重写数 | 新增数 | 备注 |
| --- | --- | ---: | ---: | ---: | --- |
| POT-TRIAL-01 | 2026-07-26 | 0 | 0 | 0 | 已撤回：错误地把炒锅启动油脂加入三道配方材料 |
| RICE-CARRIER-01 | 2026-07-26 | 4 | 0 | 0 | 运行时移除四种盖饭的工作台无序路径；保留四条原始炒锅 carrier 路径 |
| RICE-CARRIER-02 | 2026-07-28 | 4 | 4 | 0 | 国味 1.1.8 将四条盖饭改为 `rice_bowl` 工作台配方且删除炒锅路径；移除错误 ID，并按新版基础炒菜原料恢复四条 `pot` carrier 配方 |
| RICE-CARRIER-03 | 2026-07-28 | 5 | 5 | 0 | 森罗厨房本体五条盖饭存在相同 `rice_bowl` 问题；移除错误 ID，并按标准 `pot` 基础炒菜恢复熟米饭 carrier 路径 |

## 6. 料理统一 v6 扩展宪章

### 三轨与发面/死面裁决

| 概念 | 译名轨 | 来源轨 | 使用面轨 |
| --- | --- | --- | --- |
| 同名盐、面粉、作物与机器 | 按现实品种、做法或地区区分，不使用模组名前缀 | 保留各模组原生获取方式 | 语义等价者接入公共 `c:` 标签，各自招牌配方不强行合并 |
| 死面 | `kaleidoscope_cookery:raw_dough` = 死面团 | 森罗原生和面路径 | 面条、饺子、馄饨、肉饼；不得把死面团桥接到会越级产出发面食品的通用标签 |
| 发面 | 待发酵面团 → 发酵面团 → 发面皮/生馒头 | `farm_and_charm:yeast` 或 `saraddons:yeast` + 烘焙坊发酵箱 | 馒头、包子、生煎；熟制前必须经过发酵和生坯层 |
| 瓶装酵母 | `bakeries:bottle_yeast` | 烘焙坊 blender 消耗并涉及玻璃瓶容器语义 | 不加入 `c:yeast`，避免普通工作台配方吞瓶且不返还容器 |

### 面点工艺模板

| 代号 | 工艺链 | 已验证配方类型 | 约束 |
| --- | --- | --- | --- |
| DOUGH_DEAD | 死面团 → 死面皮/馄饨薄皮 → 专属生坯 | `kaleidoscope_cookery:chopping_board` + crafting | 饺子、馄饨、肉饼使用死面；五种 assembly 输入 multiset 必须互不相同 |
| DOUGH_LEAVENED | 死面团 + 酵母 → 待发酵面团 → 发酵箱 → 发酵面团 | crafting + `bakeries:fermentation_box` | 发酵箱 serializer 只有一个 ingredient，因此用待发酵面团承载已消费的酵母，不伪造第二输入字段 |
| STEAM_STD | 专属生坯 → 蒸制成品 | `kaleidoscope_cookery:steamer` / `youkaisfeasts:steaming` | 馒头共享生馒头；包子使用包子生坯；不得从任意 dough tag 直出成品 |
| DIMSUM_COOK | 饺子/生煎/肉饼/馄饨生坯 → 对应锅具 | stockpot / flex_stockpot / pot | 逐字段复制 1.21.1 当前 JAR 兄弟配方，保留 carrier 的有无状态及纹理、颜色、时间与 `soup_base`；无盛具或带完整控制字段的锅具路径使用静态数据配方 |
| BAKE_STD | 咸面团或派皮 → F&C stove 成品 | `farm_and_charm:stove` | 长棍、辫子面包、可颂改用咸面团；苹果派改用 FD 派皮；其他甜点保留甜面团 |

### v6 语义登记

| 字段/资源 | 角色 | 证据与实施 |
| --- | --- | --- |
| `bakeries:fermentation_box.ingredient` | ingredient | JAR 与运行时 SQLite 均证实为单输入；新配方只传入 `seki:yeasted_dough` |
| `kaleidoscope_cookery:stockpot.carrier` | carrier | 饺子/生煎计数族为 `[]`；四川抄手/云吞面为 `minecraft:bowl`，照原方保留 |
| `soup_base` | external recipe medium/control | 生煎与四川抄手保留 `minecraft:lava`；云吞面保留 `minecraft:water` |
| `model_id` | chopping-board display/control | 擀皮配方引用被切物的模型 ID，不当作额外 ingredient |
| 烘焙坊 `fermentationGameplay` | condition | 本地配置为 `true`；新发酵方沿用同族条件，关闭配置时该链按模组设计停用 |

### v6 实施台账

| 批次 | 日期 | 移除/覆盖 | 新路径 | 状态 |
| --- | --- | ---: | ---: | --- |
| NAME-02 | 2026-07-29 | 0 | 189 个中文名覆盖 | 静态完成 |
| TAG-02 / FIX-02 | 2026-07-29 | 3 个污染成员 | 25 个标签成员声明 | 静态完成；瓶装酵母保守排除 |
| DIMSUM-01R~05 | 2026-07-29 | 36 条旧点心/预装蒸笼路径 | 11 个自定义中间物/生坯、点心装配与锅具迁移 | 静态完成；含单槽发酵适配物 `seki:yeasted_dough` |
| STEAM-01 | 2026-07-29 | 3 条越级/旧装配路径 | 双馒头蒸制、森罗包子蒸制、幻想乡肉包装配 | 静态完成 |
| BAKE-01R | 2026-07-29 | 4 条同 ID 覆盖 | 4 条同 ID stove 重写 | 静态完成 |
| BOWL-STOCKPOT-01 | 2026-07-29 | 保留 4 条原国味 ID 精确移除 | 4 条 `seki:` 四川抄手/云吞面静态汤锅路径 | 静态完成；运行时待复核完整字段 |

运行时验收：完整重启后执行 `/reload`，确认 KubeJS 日志无错误；JEI 检查馒头、包子、生煎、饺子、馄饨、肉饼、烤包子与四种 bakery 成品；重新导出 `mpide-exporter/export.sqlite`，用 `raw_json` 复核 unparsed 自定义类型。

## 7. 料理统一 v7：面团使用面与机器互操作

### 标签分层裁决

| 标签 | 语义 | 允许成员 | 明确排除 |
| --- | --- | --- | --- |
| `seki:flours/plain_wheat` | 可替换普通小麦粉 | Bakeries 普通面粉、Create 小麦面粉、F&C 面粉、森罗面粉、家具模组小麦面粉 | `bakeries:whole_wheat_flour` 与米粉等非普通小麦粉 |
| `seki:flours/whole_wheat` | 保留麸皮语义的全麦粉 | Bakeries 全麦面粉 | 所有普通精制小麦粉；不得用于 Create 普通面团 |
| `seki:doughs/plain_noodle` | 不含蛋、酵母与糖的清水制面面团 | 森罗死面团、Create 机制面团、家具模组面团 | 鸡蛋/蛋黄面团、所有发酵面团与甜面团 |
| `seki:doughs/egg_pasta` | 含整蛋或蛋黄的意面面团 | FD 鸡蛋面团、Ratatouille 海盐蛋黄面团 | 清水面团、所有发酵面团与甜面团 |
| `seki:doughs/flatbread` | 不发酵的火烧/薄饼类面团 | 森罗死面团、Create 机制面团、家具模组面团 | 鸡蛋/蛋黄面团、发酵面团与甜面团 |
| `seki:doughs/leavened_savory` | 肉夹馍、汉堡胚等咸味发酵面包团 | F&C 发酵面团、Bakeries 咸面团/全麦面团 | 清水/鸡蛋面团与所有甜面团 |

### 机器互操作规则

1. 同一配方里的普通面粉使用 `seki:flours/plain_wheat`，使 F&C 调理碗、Bakeries 搅拌机和 Create 搅拌盆接受跨模组普通小麦粉。
2. F&C 普通和面使用 `c:yeast`，允许农家酵母与 SAR 干酵母互换；`bakeries:bottle_yeast` 仍保持精确输入，因为它带有玻璃瓶容器语义。
3. 制面机器可以跨模组工作，但产物由面团谱系决定而不是由机器 namespace 决定：`plain_noodle` 在四类机器中均产出清水生面条；`egg_pasta` 在砧板/Create 中产出 FD 鸡蛋生意面，在 F&C 石磨绞肉机中产出其挤压形态。发酵面团与甜面团不得制面。
4. 咸食面胚按成型工艺继续分层：驴肉火烧使用 `seki:doughs/flatbread`；肉夹馍和生汉堡胚使用 `seki:doughs/leavened_savory`。清水死面团不得直接变成汉堡胚，鸡蛋意面团不得制作上述面包。
5. Bakeries 的四条旧 `compat/create/*_dough` 路径因吞掉瓶装酵母且不返还玻璃瓶而移除；保留或补建 `integration/create/mixing/*` 路径并返还玻璃瓶。
6. `c:flours/wheat` 在当前包中同时包含 Create 普通小麦粉与 Bakeries 全麦粉，不作为成品语义标签使用：Create 普通面团只吃 `seki:flours/plain_wheat`，Bakeries 全麦面团只吃 `seki:flours/whole_wheat`。

### v7 实施台账

| 批次 | 日期 | 移除 | 覆盖/新增 | 状态 |
| --- | --- | ---: | ---: | --- |
| DOUGH-SEMANTIC-01 | 2026-07-29 | 0 | 3 个面团/普通粉窄语义标签 | 静态完成 |
| NOODLE-INTEROP-01 | 2026-07-29 | 0 | 4 条制面机器同 ID 覆盖 | 运行时发现产物身份混乱，已由 02 替代 |
| NOODLE-LINEAGE-02 | 2026-07-29 | 删除 1 个过宽制面标签 | 2 个互斥面团谱系标签、4 条同 ID 覆盖、4 条跨机器分流路径 | 静态完成；运行时待验收 |
| SAVORY-DOUGH-01 | 2026-07-29 | 0 | 6 条咸食配方同 ID 覆盖 | 运行时横向审计发现使用面仍过宽，已由 02 替代 |
| DOUGH-USE-SURFACE-02 | 2026-07-29 | 删除 1 个万能咸食标签 | 2 个火烧/发酵面包标签、6 条同 ID 覆盖 | 静态完成；运行时待验收 |
| MIXER-INTEROP-01 | 2026-07-29 | 4 条无返瓶旧 Create 路径 | 12 条调理碗/搅拌机/搅拌盆覆盖或新路径 | 静态完成；运行时待验收 |
| FLOUR-SEMANTIC-01 | 2026-07-29 | 0 | 1 个全麦粉窄标签、5 条普通/全麦和面同 ID 覆盖 | 静态完成；运行时待验收 |

运行时验收：执行 `/reload` 后检查 KubeJS 日志；在 JEI 中确认死面团、Create 面团与家具面团经四类制面机器只产出清水生面条，FD 鸡蛋面团与 Ratatouille 蛋黄面团只产出对应鸡蛋意面，F&C 发酵面团不能制面。确认驴肉火烧只接受无酵母普通面团，肉夹馍/汉堡胚只接受咸味发酵面团。继续检查甜面团拒绝、普通小麦粉互换和普通粉/全麦粉守恒，再导出 SQLite 复核。

## 8. 料理统一 v8：孤立食材桥接与死配方修复

### v8 语义登记

| 字段/资源 | 角色 | 证据与实施 |
| --- | --- | --- |
| `refurbished_furniture:cutting_board_combining.ingredients` | ingredient | JAR `CuttingBoardCombiningRecipe$Serializer` 常量池证实使用 vanilla `Ingredient` + `CODEC_NONEMPTY`，原生支持 `{"tag": ...}`；与 carrier/容器无关 |
| `c:eggs` | ingredient tag | 运行时含 `minecraft:egg` 等 12 成员，为包内标准蛋标签；马芬原方引用的 `c:foods/egg` 不存在 |
| `seki:doughs/leavened_savory` 用于椒盐卷饼 | ingredient tag | saraddons 原方引用不存在的 `c:wheat_dough`（死配方）；同族 `farm_and_charm:stove/pretzel` 使用 F&C 发酵面团，证实椒盐卷饼=咸味发酵面团谱系 |

### v8 实施台账

| 批次 | 日期 | 移除 | 覆盖/新增 | 状态 |
| --- | --- | ---: | ---: | --- |
| NAME-04 | 2026-07-30 | 0 | 18 个家具模组食物中文名覆盖（区分度避让 NAME-02 已占用名） | 静态完成 |
| FURNITURE-BRIDGE-01 | 2026-07-30 | 0 | 3 个标签接入（`c:salt`/`c:cheese`/`c:jams` ← 海盐/鲜奶酪/双果酱）、4 条同 ID 覆盖（家具面团吃 `seki:flours/plain_wheat`；双披萨面团位吃 `seki:doughs/flatbread`、奶酪位吃 `c:cheese`；奶酪三明治奶酪位吃 `c:cheese`） | 静态完成；运行时待验收 |
| DEAD-FIX-01 | 2026-07-30 | 0 | 2 条死配方同 ID 覆盖：马芬 `c:foods/egg`→`c:eggs`；saraddons 椒盐卷饼面团 `c:wheat_dough`→`seki:doughs/leavened_savory` | 静态完成；运行时待验收 |

静态验证：`validate.py` 对 `kubejs/data` 与 `kubejs/server_scripts` 均 NEW ERROR 0；10 条模组原生压缩/返还循环（cogwheel/andesite_alloy/flour_bag/lava_bottle/frying_oil/glass_bottle 等）经空目标对照证实与索引同存、非本批引入，已登记入 `index/validate_baseline.md`。WARN 均为既有批次已解释项；移除规则命中 25/27 与上批一致。

运行时验收：`/reload` 后检查 KubeJS 日志；JEI 确认日晒盐可替代他盐、鲜奶酪进入 `c:cheese` 消费方、家具面团接受跨模组普通面粉、双披萨接受死面/Create 面团；实做马芬与椒盐卷饼面团链（→ 生汉堡胚 → 烟熏/营火）；重新导出 SQLite 复核。P0-3（烘焙坊 blender 是否返还水桶/玻璃瓶）仍未实机证实，维持开放。
