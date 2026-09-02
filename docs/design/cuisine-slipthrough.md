# 烹饪漏网之鱼审计（v13 之后）

> 前提：整合包运行时最终态快照 `2026-08-28T05:55:00.748Z`（`modlist_hash 4b05038a...9cb03`）。全量盘子见 [cuisine-registry.md](cuisine-registry.md)，机读结果见 [cuisine-slipthrough-audit.json](cuisine-slipthrough-audit.json)。
> 差分对象：v13 已有改动面（`z_cooking_tag_narrowing.js` 47 条映射 / `z2` 440 条重建 / `z3` 84 条锁定 / `food_recipes.js` 119 删除 + 19 重建 / `food_tags.js` 桥接除污 / 216 个 authored 配方文件 / 56 个标签文件 / `change-ledger.json` 128 条）。
> 一句话：**配方输入侧的收窄是真的收敛了（32 个受管标签在可解析配方里零残留），但收窄只在「能被导出的配方」这一格子里生效。运行期生成的配方、熟制/成品侧标签、行为标签层、以及一整个自动化模组，全部还在门外。**

## 结论速览

| 编号 | 级别 | 现象 | 规模 | 现有台账是否覆盖 |
|---|---|---|---|---|
| S1 | P0 | 删除清单里的 3 条配方在运行时仍存活 | 3 条（同机制的运行期生成配方共 254 条） | 已记为「预期待重载」，但重载不会解决：来源是运行期生成 |
| S2 | P0 | 中央厨房（自动化烹饪层）整层未登记，且会把 FD/B&C 烹饪配方克隆成 Create 机械配方 | 自身 0 物品 / 0 配方入库；5 个转换开关全开 | 完全未覆盖 |
| S3 | P1 | 烹饪槽位仍在吃宽泛标签，但对应 `seki` 家族早已存在（熟制侧、物种侧、别名侧） | 135 个标签（65 个已有家族）/ 367 条烹饪配方在吃 | 未覆盖（映射表只有 32 个 `c:*` 键） |
| S4 | P1 | 自建家族把河豚、热带鱼放回通用鱼料理 | `seki:fish/raw_fish`(42) 被 9 条烹饪配方引用 | 与既定原则相反 |
| S5 | P2 | 5 条 youkaisfeasts 配方从 raw_json 绕过收窄（读不出槽位） | `kettle` 3 + `pot_cooking` 2 | 未覆盖（fallback 未含这些 id） |
| S6 | P2 | 13 个有烹饪配方的命名空间从未进任何台账 | 454 条烹饪配方 | 未覆盖 |
| S7 | P2 | 9 个 `seki` 家族建了但没有任何配方使用 | 家族成员 46 项白建 | 已建未接线 |
| S8 | P2 | `seki` 自建 15 个中间体没有任何标签，也非可食物品 | 15 物品 | 已建未登记 |
| S9 | P3 | 烹饪配方的原料槽位读不出（闸门与 diff 都看不见） | 327 / 3789 = 8.6%；另 444 条家具工作台配方整类不可见 | 结构性盲区 |
| S10 | P3 | 234 个食物在快照里既无配方产出也无战利品绑定 | 含 12 条 0 产物的蛋糕切片配方 | 采集盲区与真断链混杂 |
| S11 | P3 | 未安装模组的烹饪标签仍在最终态；中央厨房数据包引用不存在的物品 | 8 组标签 + 3 个失效引用 | 未覆盖（无害但污染枚举） |

## 本轮处置状态（v14 · 2026-09-02）

| 编号 | 状态 | 落盘的东西 |
|---|---|---|
| S1 | 已处理（待重导出验证） | `z6_dynamic_recipe_conditional_removals.js` 改成按类型/前缀条件删除 + `enableCustomPacks=false` 关源头 |
| S2 | 未处理（无法静态处理） | 中央厨房的派生配方与方块标签只能在游戏内取证；已进 allowlist 的 watch_list，重导出后必须复核 |
| S3 | 已处理 | `z4_generic_slot_narrowing.js` 51 条映射 + 21 个新 Seki 族；熟制侧、鱼槽、Forge 别名、泛用作物全部归口 |
| S4 | 已处理 | 新族 `seki:fish/raw_edible_common`(40，剔河豚与河豚切片)；`seki:fish/raw_fish`、`minecraft:fishes`、`vintagedelight:raw_fish` 全部改指它。遗留：`seki:fish/raw_common_safe` 仍含 `minecraft:tropical_fish`，与「热带鱼不进通用鱼槽」是否一致需一句裁决 |
| S5 | 已处理 | 5 条 youkaisfeasts 连同其余 33 条读不出槽位的烹饪/饮品配方进入 `z5_..._fallback.js` 同 ID 重建 |
| S6 | 已处理（登记口径） | 饮品/水果面纳入闸门：355 条饮品类配方的 tag 输入逐条判定，33 个已被映射覆盖，其余 104 个进白名单（色池/茶类/物种池/单一概念/非食材），3 个明确标为待裁决 |
| S7 | 部分处理 | `seki:fish/raw_fish` 现在只剩「全集/展示」用途（JEI 与判定），其余死族保留；`seki:meat/raw_livestock_common` 消费面从 1 条扩大到映射后的多条泛用生肉槽 |
| S8 | 未处理（需裁决） | Seki 自建中间体是否进 `c:dough`/`c:flour` 系共享标签，与 v12「共享标签不动」原则冲突，留作者定；本轮只登记不改 |
| S9 | 部分处理 | 38 条读不出槽位的烹饪/饮品配方已走 fallback；`bakery:blank_cake_interaction` 0 产物、`workbench_constructing` 444 条仍是采集债 |
| S10 | 未处理 | 需要游戏内抽查定性，静态无法区分「采集盲区」与「真断链」 |
| S11 | 已登记 | 幽灵标签与失效引用写入 cuisine-registry.md §1.3 与白名单 excluded_noise/watch_list |

新增/改动的文件：`config/kaleidoscope_chinesefood-common.toml`、`kubejs/data/seki/tags/item/**`（21 个族文件）、`kubejs/server_scripts/unify/z4_generic_slot_narrowing.js`、`z5_generic_slot_narrowing_fallback.js`、`z6_dynamic_recipe_conditional_removals.js`、`docs/design/cuisine-tag-allowlist.json`、`docs/design/change-ledger.json`（+5 条记录）。

---

## S1（P0）删除目标没生效，而且机制上不会生效

台账 `CHINESEFOOD-RICE-DEFECT-01`、`ONION-SOUP-FD-CARRIER-01`、`FALLBACK-HOTFIX-01` 都记了删除，但快照（导出时间已晚于这些脚本改动）里它们仍在：

| 仍存活的配方 | 类型 | 原料（最终态） | 后果 |
|---|---|---|---|
| `kaleidoscope_chinesefood:flex_pot/red_rice_roll` | `kaleidoscope_cookery:flex_pot` | `seki:rice/common` + `seki:vegetables/cabbage_strict` + `seki:meat/raw_pork_common` + `seki:eggs/common` | 红米肠卷同时有 `pot/` 与 `flex_pot/` 两条锅路线 |
| `kaleidoscope_chinesefood:flex_stockpot/maocai` | `kaleidoscope_cookery:flex_stockpot` | `seki:vegetables/cabbage_strict`×2 + `seki:eggs/common` + `kaleidoscope_cookery:raw_meatball` + `seki:meat/raw_beef_common` | 冒菜同上 |
| `letsdocompat:farm_and_charm/farm_and_charm/farmersdelight/pot_cooking/onion_soup` | `farm_and_charm:pot_cooking` | `c:crops/onion`×2 + `seki:breads/common` + `seki:ingredients/dairy_milk` | 与 authored 单前缀载体并存：洋葱汤有两条 F&C 路线，且这条还在吃未收窄的 `c:crops/onion` |

**为什么不是「等 /reload 就好」**：按 jar 内数据包文件比对，`letsdocompat` 在 jar 里 **0 个配方文件**、运行时却有 248 条配方（228 条 id 找不到任何文件来源）；`kaleidoscope_chinesefood:flex_pot/*`、`flex_stockpot/*` 同样在 jar 里没有文件。这些配方是 mod 在运行期生成的，KubeJS 的 `event.remove({ id })` 对「比它更晚注册的动态配方」不保证命中——同一份清单里 `flex_stockpot/lamb_pilaf`、`flex_stockpot/sichuan_wonton` 消失了，而上面两条没有，就是这个不稳定性的表现。

**建议**：
1. 对这两类来源改成**条件删除**而不是 id 删除：`event.remove({ id: /(^|\/)(red_rice_roll|maocai)$/, type: /flex_/ })`，或按 `mod: "letsdocompat"` + 产物过滤；
2. 优先关源头：`config/kaleidoscope_chinesefood-common.toml` 的 `enableCustomPacks = true`（是否启用模糊烹饪配方）与 `config/kaleidoscope_compat.jsonc` 的 `kitchen.fuzzy_recipes_enabled = false`**互相矛盾**（后者改于 08-28 15:48，晚于快照 13:55）。两处统一到 false，重导出后确认 83 条（41 条 flex_pot + 42 条 flex_stockpot）`type=kaleidoscope_cookery:flex_*` 是否归零；
3. 洋葱汤：把 F&C 泛化路线的删除条件写成「输出为 `farmersdelight:onion_soup` 且类型为 `farm_and_charm:pot_cooking`」，只保留 authored 的 FD 锅载体。

---

## S2（P0）Create: Central Kitchen —— 整层烹饪自动化没有登记

- `mods/[机械动力：中央厨房] create-central-kitchen-2.5.0.jar`，`create_central_kitchen` 2.5.0，已加载（342 条译文键、ponder 教程文案齐全），但快照里 **0 物品、0 方块、0 配方、0 标签**。
- 它是 mixin 型自动化：`create_central_kitchen.mixins.json`、`.farmersdelight`、`.brewinandchewin`、`.minersdelight`、`.dungeonsdelight`、`.extradelight`。
- `config/create_central_kitchen-common.toml` 的转换开关**全部为 true**：`convertCuttingBoardRecipesToSawingRecipes`、`convertCuttingBoardRecipesToDeployingRecipes`、`convertKegPouringRecipesToFillingRecipes`、`convertKegPouringRecipesToEmptyingRecipes`、`addTreeBarkToSawingRecipes`。也就是说：FD 砧板（`farmersdelight:cutting` 390 条）与 B&C 注液（`brewinandchewin:keg_pouring` 25 条）会被克隆/改写成 Create 机器配方。
- 但快照里 Create 侧看不到任何痕迹：`type_id=create:sawing` 0 条、`create:*` 配方引用 `farmersdelight:*` 物品 0 条、引用 `brewinandchewin:*` 0 条。**结论：它的派生配方完全落在导出器之外**，v1~v13 每一轮（都读快照）都不可能审到它。
- 它自带的数据包还在标签层开了后门：`data/create/tags/item/upright_on_belt.json` 把整条 `#c:foods/edible_when_placed`（43 个可放置食物）并入传送带池；`data/create/tags/block/passive_boiler_heaters.json` 把 `#farmersdelight:heat_sources`（方块标签，快照根本不导出）并入锅炉热源；同一文件里引用了不存在的 `trailsandtails_delight:pottery_bowl` / `trailsandtails_delight:sniffer_eggshell`（本包实际 modid 是 `trailandtales_delight`，且带 `required:false` 静默失败）。

**为什么重要**：这一层决定的正是「哪些食物能被动力臂取走、能被传送带竖放、能被锯/被部署器切」——全是按标签判定，而五道闸只改配方输入，从不改标签成员。中央厨房因此可以：(a) 复活被删掉的砧板路线（以 Create 机器的形态）；(b) 让被排除的奇幻/危险食物进入自动化产物面。

**建议**：
1. 进游戏开一次创造，用 JEI 按类别查 `create:sawing` / `create:deploying` 的食物配方，并把结果与快照 diff（这是唯一能审计动态生成的办法）；
2. 若确认它会复活 `farmersdelight:cutting` 的删除项，则把这些转换开关关掉，或把删除逻辑改成按「产物 + 类型」过滤（同 S1 建议 1）；
3. 若要继续用中央厨房，就把它的行为标签依赖（`c:foods/edible_when_placed`、`farmersdelight:heat_sources`）纳入登记，并按 Seki 家族重写成员（数据包新增 `kubejs/data/create/tags/item/upright_on_belt.json` 之类，用 `replace` 精确列成员）。

---

## S3（P1）熟制侧 / 物种侧 / 别名侧标签从没进过收窄映射

映射表只有 32 个键，全部是 `c:` 前缀的**生料/基础料**。下面这些标签被烹饪配方实际使用、且**已经有对应的 `seki` 家族**，家族之外的成员就能漏进槽位（「会漏入」= 标签成员去掉家族成员）。

共 65 个。前 25：

| 仍被使用的标签 | 烹饪配方数 | 成员 | 对应家族 | 会漏入 | 漏入的具体物品 |
|---|---:|---:|---|---:|---|
| `c:crops` | 3 | 42 | `seki:vegetables/common` | 22 | `corn_delight:corn`、`culturaldelights:corn_cob`、`farm_and_charm:corn`、`farmersdelight:rice`、`farmersdelight:rice_panicle`、`immortalers_delight:alfalfa`、`immortalers_delight:evolutcorn`、`immortalers_delight:himekaido` … |
| `minecraft:fishes` | 5 | 46 | `seki:fish/raw_fish` | 12 | `alexscaves:cooked_lanternfish`、`alexscaves:cooked_radgill`、`alexscaves:cooked_tripodfish`、`cataclysm:lionfish`、`dungeonsdelight:lutefisk`、`kaleidoscope_chinesefood:yellow_croaker`、`minecraft:cooked_cod`、`minecraft:cooked_salmon` … |
| `c:foods/cooked_pork` | 5 | 5 | `seki:meat/cooked_livestock_common` | 4 | `farmersdelight:cooked_bacon`、`kaleidoscope_cookery:cooked_pork_belly`、`mynethersdelight:cooked_loin`、`mynethersdelight:roasted_sausage` |
| `c:raw_meat` | 4 | 6 | `seki:meat/raw_livestock_common` | 3 | `alexsmobs:kangaroo_meat`、`alexsmobs:lobster_tail`、`alexsmobs:moose_ribs` |
| `c:foods/raw_strider` | 6 | 3 | `seki:meat/raw_meat` | 2 | `kaleidoscope_nether:raw_strider_meat`、`mynethersdelight:strider_slice` |
| `forge:salad_ingredients` | 2 | 21 | `seki:vegetables/common` | 5 | `minecraft:brown_mushroom`、`minecraft:golden_carrot`、`minecraft:red_mushroom`、`minecraft:sweet_berries`、`vintagedelight:peanut` |
| `aquaculturedelight:turtle_soup_ingredients` | 2 | 4 | `seki:meat/raw_meat` | 3 | `aquaculture:arrau_turtle`、`aquaculture:box_turtle`、`aquaculture:starshell_turtle` |
| `c:crops/eggplant` | 3 | 4 | `seki:vegetables/common` | 2 | `culturaldelights:eggplant`、`culturaldelights:white_eggplant` |
| `dungeonsdelight:rubaboo_ingredients` | 2 | 4 | `seki:ingredients/sugar_refined` | 3 | `minecraft:glow_berries`、`minecraft:melon_slice`、`minecraft:sweet_berries` |
| `c:foods/cooked_beef` | 3 | 3 | `seki:meat/cooked_livestock_common` | 2 | `farmersdelight:beef_patty`、`kaleidoscope_cookery:cooked_cow_offal` |
| `aquaculturedelight:pickles` | 4 | 5 | `seki:vegetables/common` | 1 | `minecraft:sea_pickle` |
| `c:foods/cooked_fish` | 2 | 13 | `seki:fish/cooked_fish` | 2 | `alexscaves:cooked_mussel`、`alexscaves:cooked_trilocaris_tail` |
| `c:foods/cooked_mutton` | 2 | 3 | `seki:meat/cooked_livestock_common` | 2 | `farmersdelight:cooked_mutton_chops`、`kaleidoscope_cookery:cooked_lamb_chops` |
| `c:foods/slices/cucumber` | 4 | 2 | `seki:vegetables/common` | 1 | `youkaisfeasts:cucumber_slice` |
| `culturaldelights:cooked_chickens` | 3 | 2 | `seki:meat/cooked_livestock_common` | 1 | `farmersdelight:chicken_cuts` |
| `forge:vegetables` | 1 | 18 | `seki:vegetables/common` | 3 | `minecraft:golden_carrot`、`minecraft:sweet_berries`、`vintagedelight:peanut` |
| `brewinandchewin:foods/jerky_meat` | 1 | 33 | `seki:meat/raw_meat` | 2 | `candlelight:beef_tartare`、`minecraft:rotten_flesh` |
| `c:foods/raw_meat` | 2 | 32 | `seki:meat/raw_meat` | 1 | `candlelight:beef_tartare` |
| `aquaculturedelight:fillet_one` | 1 | 7 | `seki:fish/raw_fish` | 1 | `aquaculture:minnow` |
| `culturaldelights:cooked_beefs` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | `farmersdelight:beef_patty` |
| `culturaldelights:cooked_muttons` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | `farmersdelight:cooked_mutton_chops` |
| `culturaldelights:cooked_porks` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | `farmersdelight:cooked_bacon` |
| `c:foods/cooked_chicken` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | `farmersdelight:cooked_chicken_cuts` |
| `c:crops/onion` | 40 | 2 | `seki:vegetables/common` | 0 |  |
| `c:crops/carrot` | 20 | 1 | `seki:vegetables/common` | 0 |  |

几条要点（其余见机读 JSON 全表）：

- **熟制侧全裸**：映射只收了 `c:foods/raw_pork/raw_beef/raw_mutton/raw_chicken`，没收 `c:foods/cooked_pork`（熟培根、熟五花肉、熟疣猪兽腰肉、烤香肠都能顶替普通熟家畜肉）、`c:foods/cooked_beef`（生牛杂做的牛肉饼？`farmersdelight:beef_patty`、`kaleidoscope_cookery:cooked_cow_offal`）、`c:foods/cooked_mutton`、`c:foods/cooked_chicken`、`c:foods/cooked_fish`（含`alexscaves:cooked_mussel`、`alexscaves:cooked_trilocaris_tail`）、`c:foods/cooked_egg`（11 条配方）。同理 `c:cooked_meat`、`c:cooked_fishes` 等 20 多个 `c:cooked_*` 别名族一个都没登记。
- **`minecraft:fishes`（46 成员）没登记**：河豚、热带鱼、`minecraft:cooked_cod` / `cooked_salmon`（熟鱼当生鱼料）、`cataclysm:lionfish`（蓑鲉，有毒）、`minersdelight:squid` / `glow_squid` / `baked_squid`、`dungeonsdelight:lutefisk`（碱渍鱼）、`youkaisfeasts:raw_lamprey`（八目鳗）全在 5 条烹饪配方的鱼槽里（与策略族 `seki:fish/raw_common_safe` 只有 5/46 重合，**41 种能漏进鱼槽**；例：`create_deepfried:mixing/raw_tempura`、`immortalers_delight:cooking/kwat_tofu_miso_soup`）。这是「鱼类防毒」原则最大的未登记缺口。
- **`forge:` 老命名空间完全没进映射**：`forge:salad_ingredients`（21 成员，漏入 `minecraft:golden_carrot` 金胡萝卜、`vintagedelight:peanut` 花生、`minecraft:sweet_berries`、两种蘑菇）与 `forge:vegetables`（18 成员，同样漏金胡萝卜/花生/浆果）。作者已在 `c:foods/vegetable` 上做过净化，但同一道菜的 `forge:` 入口没关（例：`immortalers_delight:cooking/jade_and_ruby_soup`、`immortalers_delight:cooking/pitcher_plant_jiao_zi`）。
- **`brewinandchewin:foods/jerky_meat`（33 成员）含 `minecraft:rotten_flesh`（腐肉）与 `candlelight:beef_tartare`**：`brewinandchewin:fermenting/jerky` 允许 31 种生肉里家族之外的东西进来做肉干。
- **mod 别名族只收了 `bakery:` 与 `farm_and_charm:`**：`culturaldelights:cooked_chickens/cooked_beefs/cooked_porks/cooked_muttons`、`aquaculturedelight:fillet_one/two/three/six/ten/twelve/fourteen、halaszle_fishes、pickles、turtle_soup_ingredients`（含整只龟 `aquaculture:arrau_turtle` 等）、`create_deepfried:vegetables/fd_vegetables`、`immortalers_delight:common_raw_meats/beef_or_pork`、`vintagedelight:raw_fish`、`dungeonsdelight:rubaboo_ingredients`（漏 `minecraft:glow_berries`、`minecraft:melon_slice`、`minecraft:sweet_berries`）都没登记。
- **`c:crops`（42 成员）被当成蔬菜槽用**：`letsdocompat:farm_and_charm/cooking/poor_god_soup`、`youkaisfeasts:cooking/poor_god_soup`、`youkaisfeasts:unordered_cooking/higan_soup` 三条食谱能吃进 `minecraft:cactus` 仙人掌、`minecraft:cocoa_beans` 可可豆、`farmersdelight:rice_panicle` 稻穗、`immortalers_delight:himekaido` 姬海棠果、各系玉米与谷物。

**建议**：把映射表从「32 个 `c:` 生料键」扩成「按家族的输入面全覆盖」：新增 `c:foods/cooked_*`→`seki:meat/cooked_livestock_common`、`c:cooked_*`、`minecraft:fishes`→`seki:fish/raw_common_safe`、`forge:vegetables`/`forge:salad_ingredients`→`seki:vegetables/common`、各 mod 别名族→对应家族；并在闸门里加一条断言：**任何烹饪配方的 tag 输入，若命中烹饪语义且不在映射表/家族白名单里 → 报警**（本轮用的判据可直接复用到脚本里）。

---

## S4（P1）自建家族把河豚、热带鱼放回了通用鱼料理

`seki:fish/raw_fish`（42 成员）含 `minecraft:pufferfish` 河豚、`minecraft:tropical_fish` 热带鱼、`crabbersdelight:pufferfish_slice`、`crabbersdelight:tropical_fish_slice`，而它被 9 条烹饪配方当鱼槽用：`aquaculturedelight:cooking/fish_chorba`、`casualnessdelight:fried_fish`、`farmersdelight:cooking/fish_stew`、`letsdocompat:farm_and_charm/cooking/dried_fish`、`letsdocompat:farm_and_charm/cooking/fish_chorba`、`letsdocompat:farm_and_charm/cooking/fish_stew`、`letsdocompat:farm_and_charm/cooking/sauce_grilled_fish`、`youkaisfeasts:cooking/dried_fish` 等。

这与 `c:raw_fishes → seki:fish/raw_common_safe` 的既定原则（河豚与未审查奇幻鱼形物不得进通用鱼料理）直接冲突；同样的问题在 `seki:fish/whole_raw`（34 成员，含河豚/热带鱼，暂无配方引用）。

**建议**：明确两族语义边界并落文档：`seki:fish/raw_fish` 只作为「全集/展示族」，凡是配方输入一律用 `seki:fish/raw_common_safe`（或专属族 `raw_pufferfish_slice` / `raw_tropical_fish_slice`）；把 `raw_fish`、`whole_raw` 的引用数在闸门里约束为 0。

---

## S5（P2）5 条 youkaisfeasts 配方从原料采集侧绕过收窄

这些配方 `unparsed=1`（导出器读不出槽位），但 raw_json 里能读到标签，且映射表命中：

- `youkaisfeasts:kettle/genmai_tea` → `c:crops/rice`（玄米茶能吃进稻穗/奇幻米）
- `youkaisfeasts:kettle/green_water` → `c:foods/cabbage`（生菜顶替卷心菜）
- `youkaisfeasts:kettle/tea_mocha` → `c:drinks/milk`（植物奶可进拿铁）
- `youkaisfeasts:unordered_cooking/hokkaido_salmon_hotpot` → `c:foods/cabbage`（且未走 `seki:fish/raw_salmon`）
- `youkaisfeasts:unordered_cooking/signature_mushroom_stew` → `c:mushrooms`（奇幻菌可进）

**建议**：把这 5 条并入 `z2` 的 fallback 重建清单（`youkaisfeasts` 的 kettle/pot_cooking 类型已在同命名空间有 65 条 fallback 目标，机制现成）。

---

## S6（P2）13 个有烹饪配方的命名空间从未进任何台账

既没被删除/改写/重建，也没记 `op: keep`：

| 命名空间 | 烹饪配方 | 其中仍吃未收窄烹饪 tag |
|---|---:|---:|
| `alexscaves` | 135 | 6（alexscaves:sweet_berries） |
| `quark` | 63 | 2 |
| `vinery` | 47 | 0 |
| `aquaculture` | 32 | 0 |
| `cataclysm` | 32 | 0 |
| `kaleidoscope_tavern` | 25 | 0 |
| `kaleidoscope_world_liquor` | 25 | 0 |
| `trailandtales_delight` | 24 | 0 |
| `saraddons` | 23 | 0 |
| `kaleidoscope_dim_wine` | 17 | 0 |
| `brewery` | 15 | 0 |
| `beachparty` | 10 | 0 |
| `create_dragons_plus` | 6 | 0 |

判读：饮品/发酵链（`vinery` 47、`kaleidoscope_tavern` 25、`kaleidoscope_world_liquor` 25、`brewery` 15、`kaleidoscope_dim_wine` 17、`beachparty` 10）与 `alexscaves` 135 条、`quark` 63 条从未被看过。饮品链是否也要「乳/果/糖」收窄，是个需要作者定的口径问题——目前 Seki 家族里没有 `seki:drinks/*` 与 `seki:fruits/*`，所以整个酒类/饮料烹饪面是**按上游标签自由通吃**。

---

## S7（P2）建了没接线的 9 个 Seki 家族

- `seki:fish/raw_cod_slice`（1：farmersdelight:cod_slice）
- `seki:fish/raw_pufferfish_slice`（1：crabbersdelight:pufferfish_slice）
- `seki:fish/raw_salmon_slice`（1：farmersdelight:salmon_slice）
- `seki:fish/raw_slice`（6：alexsdelight:raw_catfish_slice、crabbersdelight:pufferfish_slice、crabbersdelight:tropical_fish_slice、farmersdelight:cod_slice、farmersdelight:salmon_slice、youkaisfeasts:raw_tuna_slice）
- `seki:fish/raw_tropical_fish_slice`（1：crabbersdelight:tropical_fish_slice）
- `seki:fish/raw_trout`（2：aquaculture:brown_trout、aquaculture:rainbow_trout）
- `seki:fish/raw_tuna_slice`（1：youkaisfeasts:raw_tuna_slice）
- `seki:fish/whole_raw`（34：alexscaves:lanternfish、alexscaves:radgill、alexscaves:tripodfish、aquaculture:arapaima、aquaculture:atlantic_cod、aquaculture:atlantic_halibut …）

另外两个「几乎没接线」的：`seki:meat/raw_livestock_common`(18) 只有 `seki:dimsum/youkai_raw_bun` 一条引用；`seki:meat/cooked_livestock_common`(5) 只有 4 条（两条宠物粮 + 两条烘焙）。窄族建好但没换成配方的实际入口，宽口（S3/S4）就还是主通道。

---

## S8（P2）Seki 自建中间体在标签层是隐形的

`seki:` 的 15 个物品（生馒头/生包子/生水饺/生馄饨/生煎/生肉派/面皮/馄饨皮/发酵面团/酵母面团/发面皮 + 玉米粉/燕麦粉/恶魂米面/华当小麦粉）在最终态里 **既无 `food_nutrition`，也不属于任何标签**（0 条 `item_tags` 关系）。

直接后果：任何按标签取食材的系统都不认它们——中央厨房的取份/传送带、`farmersdelight:meals`、`bakeries:upright_on_oven`、`create:upright_on_belt`、便当/容器类兼容，以及后续想加的「同概念自动换算」。生料面皮目前只能靠写死物品的配方前进后退。

**建议**：给中间体补登记：`seki:doughs/*`（已有 5 个家族却不含这些新物品）、`seki:flours/*`（玉米/燕麦/恶魂/华当四款粉没有各自的族，现在全无可归处），并在 `food_tags.js` 里加桥接（例如 `c:foods/dough`、`c:flour` 是否要收这些，需作者裁决）。

---

## S9（P3）327 条烹饪配方读不出原料（另有 444 条家具通道）

按类型的不可见数（烹饪配方内）：

| 类型 | 不可见配方数 |
|---|---:|
| `refurbished_furniture:workbench_constructing` | 147 |
| `youkaisfeasts:cuisine` | 40 |
| `farmersdelight:cooking` | 34 |
| `minecraft:crafting` | 25 |
| `farm_and_charm:pot_cooking` | 25 |
| `youkaisfeasts:kettle` | 12 |
| `kaleidoscope_cookery:pot` | 9 |
| `someassemblyrequired:sandwich_spouting` | 6 |
| `kaleidoscope_world_liquor:freezer` | 4 |
| `create:pressing` | 4 |
| `create:mixing` | 3 |
| `kaleidoscope_tavern:barrel` | 3 |
| `youkaisfeasts:basin` | 3 |
| `youkaisfeasts:pot_cooking` | 3 |

两个大头特别说明：`refurbished_furniture:workbench_constructing` 444 条全部不可见（家具工作台，其中 128 条被本次判据误判为烹饪——已在报告里剔除，但它确实说明这条通道读不到原料）；`youkaisfeasts` 的 `cuisine`(40)/`pot_cooking`(13)/`kettle`(12)/`soup_base`(4)/`basin`(3) 与 `someassemblyrequired:sandwich_spouting`(7)、`kaleidoscope_world_liquor:freezer`(5) 也是整类读不出。这些类型的配方只能靠 raw_json 正则审计（本轮已这么做，S5 就是这么找到的）。

## S10（P3）234 个食物查不到获取路径

在最终态里既是食物、又没有任何配方产出、也没有战利品绑定。分布：`dungeonsdelight` 53、`minersdelight` 29、`immortalers_delight` 21、`bakery` 17、`frightsdelight` 14、`minecraft` 11、`create` 9 …

**不要直接当断链处理**：其中 `bakery:*_slice`（17 个蛋糕/派切片）正好落在 `bakery:blank_cake_interaction` 12 条配方 **0 条产物记录** 的采集盲区上；怪物肉/虫类多来自实体掉落与 `dungeonsdelight:monster_foods` 之类的运行期判定。需要游戏内抽查 10~20 个再定性，并把「产物为空的配方」单独列一条闸门。

## S11（P3）幽灵标签与失效引用

- 未安装模组的标签仍在最终态：`diet:proteins`(89)、`diet:vegetables`(73)、`diet:grains`(61)、`diet:fruits`(10)、`diet:sugars`(4)、`dehydration:hydrating_stew`(8)、`dehydration:hydrating_drinks`(7)、`createaddition:plant_foods`(5)、`sereneseasons:*`、`malum:gross_foods`(21) 等。当前无配方消费，属惰性；但按 mod 枚举做登记时会误报出 4~5 个「烹饪 mod」。
- 中央厨房数据包引用 `trailsandtails_delight:pottery_bowl` / `sniffer_eggshell`（本包实际为 `trailandtales_delight`），`required:false` 使其静默失败。
- `kaleidoscope_compat.jsonc` 的便当袋黑名单引用 `artifacts:eternal_steak`（未安装）。

---

## 复核步骤（下一轮导出后按此顺序跑）

1. 关配置源头（`enableCustomPacks` 与 `fuzzy_recipes_enabled` 对齐）→ 启动 → `/dl_export dump` → `dl import run`；
2. 断言 A：S1 的 3 条 id 必须消失（若仍在，改用条件删除）；
3. 断言 B：对**所有**烹饪配方（含 `unparsed`，用 raw_json 正则）断言「tag 输入 ∈ 映射键」的残留 = 0，S5 的 5 条应归零；
4. 断言 C：烹饪语义 tag 若在映射表/白名单之外仍被烹饪配方使用 → 输出 S3 表；本轮基线 65 + 70 个；
5. 断言 D：`seki:fish/raw_fish`、`seki:fish/whole_raw` 的配方引用数 = 0（S4）；`seki:` 家族引用数 > 0（S7，或明确删除）；
6. 断言 E：`seki:` 自建中间体至少有 1 个标签成员关系（S8）；
7. 断言 F：产物为空的配方数（当前 `bakery:blank_cake_interaction` 12 条）单独列账；
8. 断言 G：JEI 抽查中央厨房派生的 Create 食物配方是否存在（S2），若存在则本审计需重开一轮。

---

## 附：闸门脚本本身不在仓库里

change-log 与 change-ledger 反复引用的 `check-removals.mjs`、`check-spec`、以及「五道闸（A1 残差 / 收敛 SQL / spec / removal / orphan / bypass / tag-cohesion）」在仓库内**找不到任何文件**（`scripts/` 只有 `build-mrpack.py`、`install-mrpack.py`）。也就是说，上一轮的「Gate 1 通过 / Gate 5 通过」目前无法复现，也无法在重导出后自动判定 S1、S3、S5 是否回归。本轮使用的判据（烹饪配方定义、烹饪语义标签词表 + 成员比例、噪音剔除）已经写在 [cuisine-registry.md](cuisine-registry.md) §6，落地成脚本后可以直接当第 6 道闸。
