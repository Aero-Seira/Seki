# Seki 烹饪内容全量登记表

> 数据源：`dl-exporter/export.sqlite`（游戏内 `/dl_export dump`）→ `.delightify-level/project.db`。
> 快照时间 `2026-08-28T05:55:00.748Z`，`modlist_hash 4b05038a5562809d...9cb03`，MC 1.21.1 / NeoForge 21.1.247 / integrated。生成日期 2026-09-02。
> 本表是「运行时最终态」的登记：已经过 KubeJS 与所有 mod 数据包结算之后的状态。所有 id 来自查询结果，不含记忆推测。
> 配套：差分结论见 [cuisine-slipthrough.md](cuisine-slipthrough.md)，机读数据见 [cuisine-slipthrough-audit.json](cuisine-slipthrough-audit.json)。

## 0. 盘子总览

| 指标 | 数量 | 说明 |
|---|---:|---|
| 快照登记的模组 | 234 | `mods` 表；`mods/` 实际 189 个 jar |
| 物品 | 10084 | 其中可食用（`food_nutrition` 非空）1936，覆盖 50 个 modid |
| 配方 | 11932 | 其中**烹饪配方 3789**（口径见 §6） |
| 物品标签 | 1673 | `seki:*` 收窄家族 46 个、共 291 条成员关系 |
| 战利品来源 | 7016 | 食物获取路径之一，配方闸门看不到 |
| 烹饪器具（配方类型） | 52 | 见 §2；另有 7 类饮品/发酵器具 |
| 有烹饪配方的命名空间 | 59 | 见 §3 |
| 原料槽位读不出的烹饪配方 | 327 | 占本口径烹饪配方 8.6%；另有 444 条家具工作台配方整类读不出（§6） |

## 1. 模组盘子：谁在做饭

### 1.1 有食物产出的命名空间（按烹饪配方数排序）

| 命名空间 | 烹饪配方 | 入过台账 | 原料不可见 | 仍含未收窄烹饪 tag | 食物物品 |
|---|---:|---:|---:|---:|---:|
| `kaleidoscope_cookery` | 340 | 57 | 0 | 2 | 110 |
| `youkaisfeasts` | 264 | 54 | 60 | 47 | 192 |
| `refurbished_furniture` | 252 | 4 | 147 | 128 | 168 |
| `letsdocompat` | 225 | 99 | 25 | 88 | 0 |
| `minecraft` | 220 | 2 | 8 | 0 | 270 |
| `immortalers_delight` | 194 | 36 | 0 | 10 | 200 |
| `farmersdelight` | 172 | 40 | 9 | 32 | 114 |
| `alexscaves` | 135 | 0 | 0 | 6 | 137 |
| `farm_and_charm` | 125 | 64 | 0 | 33 | 52 |
| `vintagedelight` | 116 | 23 | 0 | 29 | 80 |
| `kaleidoscope_nether` | 102 | 5 | 5 | 16 | 80 |
| `bakeries` | 96 | 20 | 0 | 1 | 69 |
| `create_bic_bit` | 93 | 1 | 1 | 6 | 56 |
| `dungeonsdelight` | 93 | 10 | 0 | 14 | 141 |
| `frightsdelight` | 93 | 8 | 0 | 0 | 82 |
| `create` | 85 | 4 | 4 | 9 | 37 |
| `mynethersdelight` | 82 | 15 | 17 | 22 | 74 |
| `kaleidoscope_chinesefood` | 74 | 24 | 0 | 6 | 42 |
| `brewinandchewin` | 69 | 11 | 0 | 14 | 42 |
| `crabbersdelight` | 63 | 4 | 1 | 4 | 47 |
| `ends_delight` | 63 | 7 | 9 | 8 | 52 |
| `quark` | 63 | 0 | 0 | 2 | 16 |
| `someassemblyrequired` | 54 | 2 | 9 | 4 | 15 |
| `culturalrecipes` | 53 | 8 | 0 | 14 | 0 |
| `minersdelight` | 53 | 13 | 10 | 12 | 67 |
| `vinery` | 47 | 0 | 0 | 0 | 45 |
| `create_deepfried` | 45 | 4 | 0 | 3 | 40 |
| `kaleidoscope_end` | 40 | 3 | 8 | 16 | 41 |
| `meadow` | 40 | 15 | 0 | 0 | 30 |
| `aquaculturedelight` | 39 | 6 | 2 | 24 | 22 |
| `alexsdelight` | 38 | 6 | 0 | 3 | 23 |
| `aquaculture` | 32 | 0 | 0 | 0 | 62 |
| `cataclysm` | 32 | 0 | 0 | 0 | 40 |
| `kaleidoscope_tavern` | 25 | 0 | 3 | 0 | 30 |
| `kaleidoscope_world_liquor` | 25 | 0 | 4 | 0 | 18 |
| `trailandtales_delight` | 24 | 0 | 0 | 0 | 18 |
| `alexsmobs` | 23 | 1 | 0 | 1 | 39 |
| `barbequesdelight` | 23 | 8 | 0 | 3 | 24 |
| `saraddons` | 23 | 0 | 1 | 0 | 10 |
| `seki` | 23 | 23 | 0 | 0 | 0 |
| `supplementaries` | 23 | 1 | 0 | 6 | 21 |
| `endersdelight` | 21 | 2 | 0 | 0 | 23 |
| `kaleidoscope_dim_wine` | 17 | 0 | 0 | 0 | 21 |
| `casualnessdelight` | 16 | 3 | 2 | 0 | 29 |
| `brewery` | 15 | 0 | 0 | 0 | 24 |
| `ratatouille` | 14 | 2 | 0 | 0 | 5 |
| `beachparty` | 10 | 0 | 0 | 0 | 9 |
| `create_dragons_plus` | 6 | 0 | 2 | 0 | 2 |
| `bakery` | 3 | 2 | 0 | 1 | 41 |
| `betterarcheology` | 2 | 0 | 0 | 0 | 3 |
| `displaydelight` | 2 | 0 | 0 | 0 | 2 |
| `corn_delight` | 1 | 0 | 0 | 0 | 2 |
| `mowziesmobs` | 1 | 0 | 0 | 0 | 15 |

### 1.2 常规口径看不到的四个洞

| 对象 | 现象 | 为什么之前的枚举漏了它 |
|---|---|---|
| `create_central_kitchen`（机械动力：中央厨房 2.5.0） | 已加载、342 条译文键，但**物品/方块/配方登记数全部为 0** | 它是 mixin 型自动化 mod，自身不注册物品；它的「转换配方」在 05:55Z 快照里读不到（`create:sawing` 0 条、`create:*` 配方引用 `farmersdelight:*` 物品 0 条） |
| `letsdocompat`（[Lets Do Addon] Compat，248 条配方） | jar 内 **0 个配方 JSON**，228 条 id 无法在任何 jar 的数据包路径里找到 | 配方由 mod 运行期生成，id 与文件路径无关，`event.remove({id})` 不保证命中 |
| `kaleidoscope_cookery:flex_pot`(41) / `flex_stockpot`(42)，共 83 条 | 26 条 `kaleidoscope_chinesefood:flex_*` 是运行期生成（jar 内无文件） | 同上；开关在 config 里（见 §5.3） |
| `corn_delight` / `kaleidoscope_twilight` / `smc` | 在 `items`、`recipes` 里有内容，但 `mods` 表**没有对应模组行** | 由 Kaleidoscope 系列的兼容层注册的派生命名空间（`config/kaleidoscope_chinesefood-common.toml: enableCornDelightCompat`）；按 mod 列表遍历必然漏 |

### 1.3 快照里残留的「未安装模组」标签

`diet:proteins`(89)、`diet:vegetables`(73)、`diet:grains`(61)、`diet:fruits`(10)、`diet:sugars`(4)、`dehydration:hydrating_stew`(8)、`dehydration:hydrating_drinks`(7)、`createaddition:plant_foods`(5)、`sereneseasons:*`、`tconstruct:*`、`malum:gross_foods`(21)、`lychee:*`、`origins:*`、`trinkets:*`、`accessories:*` —— 这些 mod **都不在 `mods` 表**，标签由其它 mod 的兼容数据包带入。当前没有任何配方消费它们（惰性），但它们会污染「包里有哪些烹饪 mod」的枚举结果。

## 2. 器具与配方类型登记

`type` = 配方序列化器 id，等价于「哪台机器做的」。unparsed = 导出器读不出原料槽位（配方本身在游戏内正常）。

| 配方类型 | 配方数 | 原料不可见 | 是否被既有台账触及 |
|---|---:|---:|---|

补充登记：`create:deploying` 188、`create:sandpaper_polishing` 219、`quark`/`refurbished_furniture:workbench_constructing` 444（全部原料不可见）属于「会吃到食物但主体不是烹饪」的类型；`kaleidoscope_cookery:millstone` 102 与 `farm_and_charm:mincer` 68 是粉链驱动器具，已在 v13 面粉主轴里被使用。
vintagedelight 的发酵类型 id 被导出成了 Java 对象 toString：net.ribs.vintagedelight.recipe.FermentingRecipe@hash（24 条）。该 id 每次启动都会变，任何按类型写的规则都会失效；定位请改用 recipe_id 前缀 vintagedelight:fermenting/。

## 3. 命名空间 × 覆盖明细（含命中的未收窄 tag）

| 命名空间 | 烹饪配方 | 入台账 | 原料不可见 | 命中的未收窄烹饪 tag |
|---|---:|---:|---:|---|
| `kaleidoscope_cookery` | 340 | 57 | 0 | `c:foods/cooked_rice` |
| `youkaisfeasts` | 264 | 54 | 60 | `c:crops` `c:crops/avocado` `c:crops/carrot` `c:crops/cucumber` `c:crops/onion` `c:crops/potato` `c:crops/redbean` `c:crops/rice` `c:crops/soybean` `c:drinks/milk` `c:foods/cabbage` `c:foods/cooked_egg` `c:foods/fruits/grape` `c:foods/raw_boar` `c:foods/raw_cod` `c:foods/raw_eel` `c:foods/raw_salmon` `c:foods/raw_venison` `c:foods/slices/cucumber` `c:foods/tomato` `c:mushrooms` `c:tea_leaves/black` `c:tea_leaves/dark` `c:tea_leaves/green` `c:tea_leaves/oolong` `c:tea_leaves/white` `c:tea_leaves/yellow` `culturaldelights:cooked_chickens` `culturaldelights:raw_salmons` |
| `refurbished_furniture` | 252 | 4 | 147 | — |
| `letsdocompat` | 225 | 99 | 25 | `alexsdelight:cooked_kangaroo` `aquaculturedelight:fish_chorba_vegetables` `aquaculturedelight:halaszle_fishes` `aquaculturedelight:halaszle_vegetables` `aquaculturedelight:pickles` `aquaculturedelight:turtle_soup_ingredients` `brewinandchewin:foods/cheese_wedge` `c:crops` `c:crops/beetroot` `c:crops/carrot` `c:crops/corn` `c:crops/cucumber` `c:crops/eggplant` `c:crops/onion` `c:crops/potato` `c:crops/redbean` `c:crops/soybean` `c:crops/tomato` `c:foods/bat_wing` `c:foods/berry` `c:foods/boiled_egg` `c:foods/cooked_egg` `c:foods/cooked_fish` `c:foods/fruits/grape` `c:foods/giant_tentacles` `c:foods/leafy_green` `c:foods/onion` `c:foods/raw_bass` `c:foods/raw_boar` `c:foods/raw_cod` `c:foods/raw_eel` `c:foods/raw_halibut` `c:foods/raw_herring` `c:foods/raw_hoglin` `c:foods/raw_piranha` `c:foods/raw_strider` `c:foods/raw_venison` `c:foods/rice_pasta` `c:foods/shulker_meat` `c:foods/squid` `c:foods/tentacles` `c:foods/tomato` `c:vegetables/cave_carrot` `crabbersdelight:cooked_seafood` `crabbersdelight:raw_seafood` `culturaldelights:cooked_chickens` `farm_and_charm:oat` `farm_and_charm:onion` `farm_and_charm:strawberry` `farm_and_charm:tomato` `forge:salad_ingredients` `forge:yogurt` `minecraft:fishes` `minersdelight:baked_cave_carrot` `mynethersdelight:hot_spice` |
| `minecraft` | 220 | 2 | 8 | — |
| `immortalers_delight` | 194 | 36 | 0 | `c:foods/cooked_beef` `c:foods/mushroom` `c:foods/tomato` `forge:salad_ingredients` `forge:vegetables` `forge:yogurt` `immortalers_delight:beef_or_pork` `immortalers_delight:common_raw_meats` `minecraft:fishes` |
| `farmersdelight` | 172 | 40 | 9 | `c:crops/beetroot` `c:crops/carrot` `c:crops/onion` `c:crops/potato` `c:crops/tomato` `c:foods/berry` `c:foods/cooked_bacon` `c:foods/cooked_beef` `c:foods/cooked_chicken` `c:foods/cooked_egg` `c:foods/cooked_ham` `c:foods/cooked_mutton` `c:foods/cooked_rice` `c:foods/cooked_salmon` `c:foods/leafy_green` `c:foods/raw_cod` `c:foods/raw_meat` |
| `alexscaves` | 135 | 0 | 0 | `alexscaves:sweet_berries` |
| `farm_and_charm` | 125 | 64 | 0 | `bakery:chocolate` `bakery:jam` `brewery:beer` `candlelight:tomato_soups` `farm_and_charm:barley` `farm_and_charm:corn` `farm_and_charm:oat` `farm_and_charm:onion` `farm_and_charm:raw_bacon` `farm_and_charm:strawberry` `farm_and_charm:tomato` |
| `vintagedelight` | 116 | 23 | 0 | `c:crops/onion` `c:foods/berry` `c:foods/vegetable/chili_pepper` `c:foods/vegetable/cucumber` `c:jam_bottles` `c:jam_jars` `vintagedelight:raw_fish` `vintagedelight:sweet_jam_bottles` |
| `kaleidoscope_nether` | 102 | 5 | 5 | `c:crimson_fruits` `c:foods/raw_strider` `c:hot_spices` `c:poisonous_fruits` |
| `bakeries` | 96 | 20 | 0 | `c:foods/cooked_pork` |
| `create_bic_bit` | 93 | 1 | 1 | `c:raw_meat` `c:raw_meat_delight` |
| `dungeonsdelight` | 93 | 10 | 0 | `c:foods/cooked_egg` `dungeonsdelight:monster_foods` `dungeonsdelight:raw_ghast` `dungeonsdelight:rubaboo_ingredients` `dungeonsdelight:sculk_cheese` |
| `frightsdelight` | 93 | 8 | 0 | — |
| `create` | 85 | 4 | 4 | `c:storage_blocks/raw_copper` `c:storage_blocks/raw_gold` `c:storage_blocks/raw_iron` `c:storage_blocks/raw_zinc` |
| `mynethersdelight` | 82 | 15 | 17 | `c:crops/carrot` `c:crops/onion` `c:crops/potato` `c:foods/boiled_egg` `c:foods/cooked_egg` `c:foods/cooked_pork` `c:foods/giant_tentacles` `c:foods/onion` `c:foods/raw_hoglin` `c:foods/raw_strider` `c:foods/rice_pasta` `mynethersdelight:boiled_egg_candidate` `mynethersdelight:hot_spice` |
| `kaleidoscope_chinesefood` | 74 | 24 | 0 | `c:crops/pumpkin` `c:foods/cooked_eggs` `c:foods/cooked_pork` `c:foods/cooked_rice` |
| `brewinandchewin` | 69 | 11 | 0 | `brewinandchewin:foods/cheese_wedge` `brewinandchewin:foods/jerky_meat` `c:crops/beetroot` `c:crops/carrot` `c:crops/potato` `c:crops/tomato` `c:foods/onion` `c:foods/raw_herring` `c:foods/tomato` |
| `crabbersdelight` | 63 | 4 | 1 | `c:foods/cooked_fish` `crabbersdelight:cooked_seafood` `crabbersdelight:cooked_squid` `crabbersdelight:raw_seafood` |
| `ends_delight` | 63 | 7 | 9 | `c:crops/onion` `c:crops/tomato` `c:foods/raw_dragon_meat` `c:foods/roasted_dragon_meat` `c:foods/roasted_shulker_meat` `c:foods/shulker_meat` |
| `quark` | 63 | 0 | 0 | — |
| `someassemblyrequired` | 54 | 2 | 9 | `c:crops/onion` `c:crops/tomato` |
| `culturalrecipes` | 53 | 8 | 0 | `c:crops/avocado` `c:crops/corn` `c:crops/eggplant` `c:crops/onion` `c:foods/cooked_egg` `c:logs/avocado` `culturaldelights:cooked_beefs` `culturaldelights:cooked_chickens` `culturaldelights:cooked_muttons` `culturaldelights:cooked_porks` `culturaldelights:smoked_regular_eggplants` |
| `minersdelight` | 53 | 13 | 10 | `c:foods/bat_wing` `c:foods/cooked_squid` `c:foods/onion` `c:foods/raw_meat` `c:foods/squid` `c:foods/tentacles` `c:vegetables/cave_carrot` `minersdelight:baked_cave_carrot` `minersdelight:cooked_insect_meat` |
| `vinery` | 47 | 0 | 0 | — |
| `create_deepfried` | 45 | 4 | 0 | `c:raw_meat` `create_deepfried:fd_vegetables` `create_deepfried:vegetables` `minecraft:fishes` |
| `kaleidoscope_end` | 40 | 3 | 8 | `c:berries` `c:cooked_rice` `c:crops/chorus` `c:fruits/chorus` `c:raw_dragon_meat` `c:raw_ender_mite_meat` `c:shulker_meat` |
| `meadow` | 40 | 15 | 0 | — |
| `aquaculturedelight` | 39 | 6 | 2 | `aquaculturedelight:fillet_four` `aquaculturedelight:fillet_fourteen` `aquaculturedelight:fillet_one` `aquaculturedelight:fillet_six` `aquaculturedelight:fillet_ten` `aquaculturedelight:fillet_three` `aquaculturedelight:fillet_twelve` `aquaculturedelight:fillet_two` `aquaculturedelight:fish_chorba_vegetables` `aquaculturedelight:halaszle_fishes` `aquaculturedelight:halaszle_vegetables` `aquaculturedelight:pickles` `aquaculturedelight:turtle_soup_ingredients` `c:crops/onion` `c:foods/cooked_turtle` `c:foods/raw_bass` `c:foods/raw_halibut` `c:foods/raw_herring` `c:foods/raw_piranha` `c:foods/raw_pollock` |
| `alexsdelight` | 38 | 6 | 0 | `alexsdelight:cooked_kangaroo` `c:crops/beetroot` `c:crops/carrot` `c:crops/onion` |
| `aquaculture` | 32 | 0 | 0 | — |
| `cataclysm` | 32 | 0 | 0 | — |
| `kaleidoscope_tavern` | 25 | 0 | 3 | — |
| `kaleidoscope_world_liquor` | 25 | 0 | 4 | — |
| `trailandtales_delight` | 24 | 0 | 0 | — |
| `alexsmobs` | 23 | 1 | 0 | `alexsdelight:cooked_kangaroo` |
| `barbequesdelight` | 23 | 8 | 0 | `c:crops/carrot` `c:foods/onion` `c:foods/raw_cod` |
| `saraddons` | 23 | 0 | 1 | — |
| `seki` | 23 | 23 | 0 | — |
| `supplementaries` | 23 | 1 | 0 | — |
| `endersdelight` | 21 | 2 | 0 | — |
| `kaleidoscope_dim_wine` | 17 | 0 | 0 | — |
| `casualnessdelight` | 16 | 3 | 2 | — |
| `brewery` | 15 | 0 | 0 | — |
| `ratatouille` | 14 | 2 | 0 | — |
| `beachparty` | 10 | 0 | 0 | — |
| `create_dragons_plus` | 6 | 0 | 2 | — |
| `bakery` | 3 | 2 | 0 | `bakery:jam` |
| `betterarcheology` | 2 | 0 | 0 | — |
| `displaydelight` | 2 | 0 | 0 | — |
| `corn_delight` | 1 | 0 | 0 | — |
| `mowziesmobs` | 1 | 0 | 0 | — |

## 4. 标签层登记

### 4.1 Seki 收窄家族（46）与其接线情况

| seki 家族 | 成员 | 被引用配方数 |
|---|---:|---:|
| `seki:breads/burger_bun` | 3 | 10 |
| `seki:breads/common` | 7 | 57 |
| `seki:cheese/natural_milk` | 9 | 33 |
| `seki:doughs/egg_pasta` | 2 | 9 |
| `seki:doughs/flatbread` | 3 | 14 |
| `seki:doughs/leavened_savory` | 3 | 16 |
| `seki:doughs/plain_noodle` | 3 | 15 |
| `seki:doughs/sweet` | 4 | 6 |
| `seki:eggs/common` | 4 | 135 |
| `seki:fish/cooked_fillet_slice` | 5 | 1 |
| `seki:fish/cooked_fish` | 11 | 1 |
| `seki:fish/raw_cod_slice` | 1 | **0** |
| `seki:fish/raw_common_safe` | 8 | 251 |
| `seki:fish/raw_fillet` | 2 | 2 |
| `seki:fish/raw_fish` | 42 | 13 |
| `seki:fish/raw_pufferfish_slice` | 1 | **0** |
| `seki:fish/raw_salmon` | 3 | 3 |
| `seki:fish/raw_salmon_slice` | 1 | **0** |
| `seki:fish/raw_slice` | 6 | **0** |
| `seki:fish/raw_tropical_fish_slice` | 1 | **0** |
| `seki:fish/raw_trout` | 2 | **0** |
| `seki:fish/raw_tuna_slice` | 1 | **0** |
| `seki:fish/whole_raw` | 34 | **0** |
| `seki:flours/plain_wheat` | 5 | 95 |
| `seki:flours/whole_wheat` | 1 | 8 |
| `seki:grains/corn_kernels` | 3 | 3 |
| `seki:grains/wheat_common` | 1 | 143 |
| `seki:ingredients/butter_dairy` | 3 | 34 |
| `seki:ingredients/dairy_milk` | 5 | 170 |
| `seki:ingredients/matcha` | 2 | 7 |
| `seki:ingredients/salt_common` | 6 | 58 |
| `seki:ingredients/sugar_refined` | 1 | 204 |
| `seki:ingredients/yeast` | 2 | 3 |
| `seki:meat/cooked_livestock_common` | 5 | 4 |
| `seki:meat/raw_beef` | 4 | 10 |
| `seki:meat/raw_beef_common` | 3 | 163 |
| `seki:meat/raw_livestock_common` | 18 | 1 |
| `seki:meat/raw_meat` | 31 | 5 |
| `seki:meat/raw_mutton_fresh` | 3 | 137 |
| `seki:meat/raw_pork_common` | 6 | 234 |
| `seki:meat/raw_poultry_common` | 3 | 90 |
| `seki:mushrooms/culinary_common` | 2 | 61 |
| `seki:pasta/wheat` | 3 | 125 |
| `seki:rice/common` | 2 | 164 |
| `seki:vegetables/cabbage_strict` | 2 | 807 |
| `seki:vegetables/common` | 24 | 30 |

### 4.2 仍在被烹饪配方使用的未收窄烹饪标签

- 已有对应 `seki` 家族、但配方槽位仍走宽泛标签：**${f3.length}** 个（直接可收，见差分文档 P1）
- 没有任何对应家族（需要先建语义族或明确放行）：**${f4.length}** 个

#### 4.2.1 有家族可换（前 24，按「配方数 × 会漏入成员数」排）

| 标签 | 被几条烹饪配方使用 | 成员 | 对应家族 | 家族外会漏入 | 例子 |
|---|---:|---:|---|---:|---|
| `c:crops` | 3 | 42 | `seki:vegetables/common` | 22 | letsdocompat:farm_and_charm/cooking/poor_god_soup |
| `minecraft:fishes` | 5 | 46 | `seki:fish/raw_fish` | 12 | create_deepfried:compat/farmersdelight/mixing/raw_tempura |
| `c:foods/cooked_pork` | 5 | 5 | `seki:meat/cooked_livestock_common` | 4 | bakeries:baguette_with_filling |
| `c:raw_meat` | 4 | 6 | `seki:meat/raw_livestock_common` | 3 | create_bic_bit:mixing/bitterballen |
| `c:foods/raw_strider` | 6 | 3 | `seki:meat/raw_meat` | 2 | kaleidoscope_nether:pot/braised_strider |
| `forge:salad_ingredients` | 2 | 21 | `seki:vegetables/common` | 5 | immortalers_delight:cooking/jade_and_ruby_soup |
| `aquaculturedelight:turtle_soup_ingredients` | 2 | 4 | `seki:meat/raw_meat` | 3 | aquaculturedelight:cooking/turtle_soup |
| `c:crops/eggplant` | 3 | 4 | `seki:vegetables/common` | 2 | culturalrecipes:cooking/poached_eggplants |
| `dungeonsdelight:rubaboo_ingredients` | 2 | 4 | `seki:ingredients/sugar_refined` | 3 | dungeonsdelight:integration/minersdelight/monster_cooking/misc/rubaboo_cup |
| `c:foods/cooked_beef` | 3 | 3 | `seki:meat/cooked_livestock_common` | 2 | farmersdelight:stuffed_potato |
| `aquaculturedelight:pickles` | 4 | 5 | `seki:vegetables/common` | 1 | aquaculturedelight:cooking/halibut_with_tartar_sauce |
| `c:foods/cooked_fish` | 2 | 13 | `seki:fish/cooked_fish` | 2 | crabbersdelight:cooking/stuffed_nautilus_shell |
| `c:foods/cooked_mutton` | 2 | 3 | `seki:meat/cooked_livestock_common` | 2 | farmersdelight:mutton_wrap |
| `c:foods/slices/cucumber` | 4 | 2 | `seki:vegetables/common` | 1 | youkaisfeasts:cuisine_mixed/california_roll |
| `culturaldelights:cooked_chickens` | 3 | 2 | `seki:meat/cooked_livestock_common` | 1 | culturalrecipes:cooking/spicy_curry |
| `forge:vegetables` | 1 | 18 | `seki:vegetables/common` | 3 | immortalers_delight:cooking/pitcher_plant_jiao_zi |
| `brewinandchewin:foods/jerky_meat` | 1 | 33 | `seki:meat/raw_meat` | 2 | brewinandchewin:fermenting/jerky |
| `c:foods/raw_meat` | 2 | 32 | `seki:meat/raw_meat` | 1 | farmersdelight:cooking/cabbage_rolls |
| `aquaculturedelight:fillet_one` | 1 | 7 | `seki:fish/raw_fish` | 1 | aquaculturedelight:cutting/fillet/fillet_one |
| `culturaldelights:cooked_beefs` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | culturalrecipes:beef_burrito |
| `culturaldelights:cooked_muttons` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | culturalrecipes:mutton_sandwich |
| `culturaldelights:cooked_porks` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | culturalrecipes:pork_wrap |
| `c:foods/cooked_chicken` | 1 | 2 | `seki:meat/cooked_livestock_common` | 1 | farmersdelight:chicken_sandwich |
| `c:crops/onion` | 40 | 2 | `seki:vegetables/common` | 0 | alexsdelight:cooking/acacia_blossom_soup |

#### 4.2.2 无家族（前 24，按使用次数）

| 标签 | 被几条烹饪配方使用 | 成员 | 出现于 | 例子 |
|---|---:|---:|---|---|
| `mynethersdelight:hot_spice` | 13 | 3 | letsdocompat, mynethersdelight | letsdocompat:farm_and_charm/cooking/chilidog |
| `c:foods/cooked_egg` | 11 | 2 | culturalrecipes, dungeonsdelight, farmersdelight, letsdocompat, mynethersdelight | culturalrecipes:mutton_sandwich |
| `c:crops/soybean` | 11 | 1 | letsdocompat, youkaisfeasts | letsdocompat:farm_and_charm/cooking/mitarashi_dango |
| `brewinandchewin:foods/cheese_wedge` | 9 | 2 | brewinandchewin, letsdocompat | brewinandchewin:cooking/creamy_onion_soup |
| `farm_and_charm:strawberry` | 8 | 1 | farm_and_charm, letsdocompat | farm_and_charm:crafting_bowl/farmer_salad |
| `c:crops/redbean` | 8 | 1 | letsdocompat, youkaisfeasts | letsdocompat:farm_and_charm/cooking/bamboo_mizuyokan |
| `c:foods/shulker_meat` | 7 | 2 | ends_delight, letsdocompat | ends_delight:food/ender_noodle |
| `c:fruits/chorus` | 7 | 1 | kaleidoscope_end | kaleidoscope_end:mint_chorus_mousse |
| `minersdelight:baked_cave_carrot` | 7 | 2 | letsdocompat, minersdelight | letsdocompat:farm_and_charm/cooking/fake_meatloaf |
| `dungeonsdelight:sculk_cheese` | 6 | 2 | dungeonsdelight | dungeonsdelight:monster_cooking/au_rotten_potatoes |
| `c:foods/berry` | 6 | 7 | farmersdelight, letsdocompat, vintagedelight | farmersdelight:cooking/stuffed_pumpkin_block |
| `c:crimson_fruits` | 6 | 1 | kaleidoscope_nether | kaleidoscope_nether:pot/crimson_kabob_1 |
| `c:hot_spices` | 6 | 2 | kaleidoscope_nether | kaleidoscope_nether:pot/garlic_oysters |
| `c:foods/boiled_egg` | 6 | 1 | letsdocompat, mynethersdelight | letsdocompat:farm_and_charm/cooking/egg_soup |
| `alexsdelight:cooked_kangaroo` | 5 | 2 | alexsdelight, alexsmobs, letsdocompat | alexsdelight:cooking/kangaroo_pasta |
| `c:crops/avocado` | 5 | 2 | culturalrecipes, youkaisfeasts | culturalrecipes:avocado_toast |
| `c:crops/corn` | 5 | 3 | culturalrecipes, letsdocompat | culturalrecipes:cooking/creamed_corn |
| `dungeonsdelight:raw_ghast` | 4 | 2 | dungeonsdelight | dungeonsdelight:monster_cooking/ghast_roll |
| `farm_and_charm:oat` | 4 | 1 | farm_and_charm, letsdocompat | farm_and_charm:crafting_bowl/oatmeal_with_strawberries |
| `farm_and_charm:corn` | 4 | 3 | farm_and_charm | farm_and_charm:pot_cooking/corn_grits |
| `c:foods/cooked_rice` | 4 | 2 | farmersdelight, kaleidoscope_chinesefood, kaleidoscope_cookery | farmersdelight:honey_glazed_ham_block_from_kaleidoscope |
| `c:shulker_meat` | 4 | 1 | kaleidoscope_end | kaleidoscope_end:pot/mint_sauce_shulker_meat |
| `mynethersdelight:boiled_egg_candidate` | 4 | 1 | mynethersdelight | mynethersdelight:boiled_egg_cooking |
| `crabbersdelight:cooked_seafood` | 3 | 4 | crabbersdelight, letsdocompat | crabbersdelight:cooking/bisque |

### 4.3 配方之外的「行为标签」层（既有五道闸全部没覆盖）

这些标签不是配方输入，而是 mod 逻辑直接读取的烹饪语义。既有闸门只看配方输入，所以这一层的成员构成仍是上游宽泛状态——「被配方引用 = 0」正是闸门永远看不见它的证明。

| 标签 | 成员 | 被配方引用 | 证据与说明 |
|---|---:|---:|---|
| `c:foods` | 485 | 0 | 聚合食物标签；无配方引用，任何按标签取食物的逻辑都以它为全集 |
| `c:foods/edible_when_placed` | 43 | 0 | 中央厨房把它并入 create:upright_on_belt（jar 内 data/create/tags/item/upright_on_belt.json） |
| `create:upright_on_belt` | 225 | 0 | 传送带竖放行为池，中央厨房追加后可放食物全进 |
| `farmersdelight:meals` | 64 | 0 | FD 饱腹/舒适效果分类，非配方输入 |
| `farmersdelight:snacks` | 13 | 0 | FD 效果分类 |
| `farmersdelight:sweets` | 12 | 0 | FD 效果分类 |
| `farmersdelight:drinks` | 10 | 0 | FD 饮品分类 |
| `farmersdelight:feasts` | 19 | 0 | 盛宴类：中央厨房的取份/分食逻辑相关 |
| `farmersdelight:pies` | 4 | 0 | 派类切片 |
| `farmersdelight:cabbage_roll_ingredients` | 4 | 0 | 卷心菜卷原料池（配方不引用，FD 逻辑内判定） |
| `farmersdelight:flat_on_cutting_board` | 5 | 0 | 砧板平放池 |
| `farmersdelight:serving_containers` | 4 | 0 | 上菜容器池 |
| `farmersdelight:wolf_prey` | 4 | 0 | 狼 prey 池 |
| `farmersdelight:tools/knives` | 49 | 0 | 刀注册表：切制动作前置，决定哪些刀能切 |
| `bakeries:upright_on_oven` | 10 | 0 | Bakeries 烤炉可放置池 |
| `barbequesdelight:raw_skewers` | 10 | 0 | 串烧原料池 |
| `brewinandchewin:fermented_drinks` | 16 | 0 | B&C 发酵饮品池 |
| `brewinandchewin:foods/pizza_topping` | 19 | 0 | 披萨料池 |
| `dungeonsdelight:monster_foods` | 65 | 1 | 怪物烹饪食材池 |
| `c:animal_foods` | 213 | 0 | 动物采食全集 |
| `minecraft:bee_food` | 68 | 0 | 蜜蜂采食 |

方块级标签**不在导出契约内**（快照只有 `item_tags`），因此 `farmersdelight:heat_sources`、`create:passive_boiler_heaters`（中央厨房把前者并进后者）、`farmersdelight:cabinets` 的冰箱/灶台语义无法审计——中央厨房的数据包正好引用了它们。

### 4.4 获取面

- 可食用物品 1936：${G.G10.length} 个在快照里**既无配方产出也无战利品绑定**（dungeonsdelight 53、minersdelight 29、immortalers_delight 21、bakery 17、frightsdelight 14…）。其中 bakery 的 17 个蛋糕切片正落在 §2 的 `bakery:blank_cake_interaction` 12 条配方 0 产出盲区上，属采集盲区而非真断链，需游戏内抽查后再定性。
- `seki:` 自建的 15 个中间体（生馒头/生包子/面皮/馄饨皮/四类面粉）**没有任何标签成员关系**，也没有 `food_nutrition`：它们不参与任何按标签取食材的系统（FD 便当袋黑名单、`create:upright_on_belt`、`bakeries:upright_on_oven`、中央厨房的分份/取食逻辑都读标签）。

## 5. 已有修改面登记（本轮差分的「已知」侧）

### 5.1 脚本

| 文件 | 作用 | 规模 |
|---|---|---:|
| `kubejs/server_scripts/unify/z_cooking_tag_narrowing.js` | 配方事件里把 32 个宽泛输入标签换成 46 个 `seki:*` 家族 | 47 条映射 |
| `kubejs/server_scripts/unify/z2_cooking_tag_narrowing_fallback.js` | 对读不出/绕过的配方按 raw_json 同 ID 重建 | 440 条 |
| `kubejs/server_scripts/unify/z3_bakeries_dough_locks.js` | Bakery/F&C 面团与基础料锁定 | 84 条 |
| `kubejs/server_scripts/unify/food_recipes.js` | 删除清单 + 点心/面粉主轴重建 | 119 删除 + 19 重建 |
| `kubejs/server_scripts/unify/food_tags.js` | 桥接同概念 + 标签除污 | 约 40 条增删 |
| `kubejs/server_scripts/unify/rice_carrier_paths.js` | 米的载体路线 | — |
| `kubejs/client_scripts/unify/food_names.js` | 同名收敛（显示名） | 16.9 KB |
| `kubejs/startup_scripts/unify/food_items.js` | `seki:` 自建中间体 | 15 物品 |

### 5.2 静态数据包与台账：216 个 authored 配方文件、56 个 authored 标签文件（kubejs/data/**）；机读台账 128 条见 docs/design/change-ledger.json，另有 tag-narrowing-fallback-audit.json、bakeries-dough-lock-audit.json。

### 5.3 配置里与烹饪有关、但从未进台账的开关

| 文件 | 键 | 当前值 | 影响 |
|---|---|---|---|
| `config/kaleidoscope_compat.jsonc` | `datapack_mode` | `NONE` | 关掉 Kaleidoscope 全部兼容数据包（除汤底）。实测 jar 内 103 个 `kaleidoscope_dim_wine` 配方文件只有 50 个进入最终态；同批 jar 里还有 `artifacts`/`betternether`/`sawmill` 等未安装 mod 的兼容目录，差额到底来自本开关还是目标 mod 缺失，需重导出对照确认 |
| `config/kaleidoscope_compat.jsonc` | `kitchen.fuzzy_recipes_enabled` | `false`（改于 08-28 15:48，晚于快照 13:55） | 关「模糊烹饪配方」= flex 锅来源；但下面这条仍为 true |
| `config/kaleidoscope_chinesefood-common.toml` | `enableCustomPacks`（是否启用模糊烹饪配方） | `true` | 两处开关不一致；flex 配方是否真被关掉无法静态判定 |
| `config/create_central_kitchen-common.toml` | `convertCuttingBoardRecipesToSawingRecipes` / `ToDeployingRecipes` / `convertKegPouringRecipesToFillingRecipes` / `ToFilling`+`ToEmptying` / `addTreeBarkToSawingRecipes` | 全部 `true` | 中央厨房在运行期把 FD 砧板、B&C 注液配方克隆成 Create 机械配方；这些克隆既没进过快照，也没经过收窄/删除闸门 |

## 6. 采集口径与已知盲区

- **烹饪配方定义**：产物的物品可食用或属于烹饪语义标签；或配方类型属于「多数产物是食物」的器具类型（52 类，含 `minecraft:smoking`、`minecraft:campfire_cooking`）。按此口径 3789 / 11932。
- **烹饪语义标签判定**：标签路径分词命中食材词表（milk/flour/dough/meat/fish/egg/vegetable/grain/rice/pasta/bread/salt/butter/cheese/sugar/yeast/fruit/berry/tea/wine…），且成员中 ≥50% 是食物；已剔除纯方块/装饰/染料/金属标签（`refurbished_furniture:*_kitchen_*`、`vintagedelight:salt_lamp`、`c:dyes/*`、`c:raw_materials/*`、`c:crops/flax`）。这是**词法判定**，只用于召回，不用于裁决。
- **闸门看不到的**：327 条原料不可见的烹饪配方（`farmersdelight:cooking` 34、`farm_and_charm:pot_cooking` 25、`youkaisfeasts:cuisine` 40 等），外加 444 条 `refurbished_furniture:workbench_constructing` 全部读不出；`bakery:blank_cake_interaction` 12 条 0 产物；方块标签；运行期生成/克隆的配方（中央厨房、letsdocompat、flex 锅）；`item_loot_sources` 里未绑定的实体掉落；以及快照本身晚于/早于脚本改动的时序（导出 08-28 13:55，`food_recipes.js`/`z2` 最后修改 08-28 14:13，`kaleidoscope_compat.jsonc` 08-28 15:48）。
- **因此本表的两条硬要求**：任何整改后必须 `重启或 /reload → /dl_export dump → dl import run → 重跑本差分`；对运行期生成的配方，删除条件必须按 `mod` + 产物/类型过滤，而不是按 id 清单。


## 7. v14 落盘增量（2026-09-02）

§0–§6 是 `2026-08-28T05:55Z` 快照的**改动前基线**，刻意不改写，便于下一轮 diff。本轮实际落盘：

| 项 | 数量 | 位置 |
|---|---:|---|
| 新增 Seki 语义族 | 21 | `kubejs/data/seki/tags/item/{crops,fish,fruits,meat,vegetables,eggs}/**.json` |
| 新增收窄映射 | 51 | `kubejs/server_scripts/unify/z4_generic_slot_narrowing.js` |
| 同 ID 重建（读不出槽位的烹饪/饮品配方） | 38 | `kubejs/server_scripts/unify/z5_generic_slot_narrowing_fallback.js` |
| 条件删除（运行期生成配方） | 83 + 双前缀族 | `kubejs/server_scripts/unify/z6_dynamic_recipe_conditional_removals.js` |
| flex 源头开关 | 1 处改动 | `config/kaleidoscope_chinesefood-common.toml` → `enableCustomPacks = false` |
| 白名单 / 观察名单 | 137 + 14 | `docs/design/cuisine-tag-allowlist.json`（含第 6 道闸的 gate_rule） |

族清单（成员全部取自快照并校验存在）：`seki:crops/corn_cob`、`seki:crops/redbean`、`seki:crops/soybean`、`seki:eggs/cooked`、`seki:fish/raw_edible_common`(40)、`seki:fruits/berry_culinary`(3)、`seki:fruits/grape`(1)、`seki:meat/cooked_beef_common`(1)、`seki:meat/cooked_mutton_common`(3)、`seki:meat/cooked_pork_common`(3)、`seki:meat/cooked_poultry_common`(2)、`seki:meat/raw_jerky_livestock`(14)、`seki:vegetables/carrot_cave`(1)、`seki:vegetables/carrot_cave_baked`(1)、`seki:vegetables/carrot_common`(1)、`seki:vegetables/cucumber_slice`(2)、`seki:vegetables/cucumber_whole`(3)、`seki:vegetables/eggplant_whole`(3)、`seki:vegetables/onion`(2)、`seki:vegetables/potato_common`(1)、`seki:vegetables/tomato`(4)。

下一轮重导出后应看到：`type=kaleidoscope_cookery:flex_pot/flex_stockpot` 配方数归零（83→0）；`kaleidoscope_chinesefood:pot/red_rice_roll`、`:stockpot/maocai`、`:stockpot/lamb_pilaf` 成为唯一锅路线；`letsdocompat:farm_and_charm/farm_and_charm/**` 计数为 0；`c:cheeses`、`c:cooked_*`、`forge:*`、`minecraft:fishes`、`c:foods/raw_meat` 等不再出现在任何烹饪配方的 tag 输入里；`seki:fish/raw_fish` 与 `seki:fish/whole_raw` 的配方引用数应为 0。
