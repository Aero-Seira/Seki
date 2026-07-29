# Seki 整合包料理体系梳理（森罗物语 × 乐事系列 × Let's Do 系列）

> 日期：2026-07-29 ｜ 事实源：`mpide-exporter/export.sqlite`（最终态，exported 2026-07-28T19:39Z，189 模组 / 5863 物品 / 5595 配方）+ 重建静态索引 `index/`（152 jar / 4498 配方）+ `index/audit_report.md`
>
> 原则：**非必要不删物品，以译名与用途区分；统一工序流程，可增设原创中间材料。**
>
> 注意：森罗系 424 条配方在导出器中 unparsed（9 变体锅配方族 `_1.._9`），结构化 input/output 表查不到，本文涉及森罗的判断均已用 `raw_json` 复核。letsdocompat 已在 FD↔f&c 之间搭了一部分桥（如 `letsdocompat:farm_and_charm/cooking/cooked_rice`），属于可沿用的好先例。

## A. 同名重复作物与基础原料（获取路径平行）

| # | 问题 | 最终态证据 | 可行方案（不删物品，改译名/用途） |
|---|---|---|---|
| A1 | **番茄×3 + 番茄种子×3**（farm_and_charm / farmersdelight / kaleidoscope_cookery 同名"番茄"） | 三者均在 `c:crops/tomato`；但 f&c 番茄被 15+10 条配方按物品锁定，FD 番茄 8+4 条，KC 番茄仅 2 条 | 保留三种作物与种子；译名区分（番茄 / 田园番茄 / 沙瓤番茄）；将锁定具体物品的配方逐步改为 `c:crops/tomato`；野生番茄仅 FD 有，作为 FD 系主获取口 |
| A2 | **洋葱×2 + 野生洋葱×2**（f&c vs FD） | 均在 `c:crops/onion`；锁定输入 FD 23+8 条、f&c 13+9 条 | 同上：译名区分（洋葱 / 田园洋葱），配方标签化；两种野生洋葱保留为世界装饰，掉落物已由 tag 互通 |
| A3 | **生菜×2 + 生菜种子×2**；f&c 生菜被塞进 `c:crops/cabbage` 充当卷心菜，`c:crops/lettuce` 只有森罗的 | `c:crops/cabbage` 成员含 farm_and_charm:lettuce | f&c 生菜补入 `c:crops/lettuce`；是否保留其在 `c:crops/cabbage` 中的"卷心菜替身"身份需 charter 裁决（建议保留并登记）；译名区分（生菜 / 奶油生菜） |
| A4 | **玉米×3 + 玉米粒×3 + 野生玉米×2**（corn_delight / farm_and_charm / culturaldelights corn_cob） | `c:crops/corn` 有 3 玉米，但 `c:vegetables/corn` 仅 corn_delight、`c:grain/corn` 与 `c:grains/corn` 平行分裂 | 裁决 `c:grains/corn` 为主标签并补齐成员；三者译名区分（甜玉米 / 玉米 / 玉米棒）；玉米粒裁决统一中间品（见 H2） |
| A5 | **黄瓜×2 + 种子×2 + 野生黄瓜×2**（culturaldelights vs youkaisfeasts） | `c:crops/cucumber` 已互通 | 译名区分（黄瓜 / 妖怪黄瓜），其余不动 |
| A6 | **茄子×2 + 种子×2**（culturaldelights vs 国味 kaleidoscope_chinesefood） | `c:crops/eggplant` 已互通 | 译名区分（圆茄 / 茄子），国味茄子主打中餐路线 |
| A7 | **红/白葡萄×2 + 葡萄汁×2 + 葡萄籽×2**（vinery vs youkaisfeasts 全线平行）；`c:grapes` 名不副实（只装森罗维度酒的绯红/诡异葡萄） | vinery:red_grape / youkaisfeasts:red_grape 等各 2 条锁定配方；无 `c:crops/grape` | 新建并推广 `c:crops/grape`、`c:grapes/red`、`c:grapes/white`；幻想乡葡萄译名区分（山葡萄）；葡萄酒主流线裁决见 D3 |
| A8 | **稻米×2 + 野生稻米×2**（FD vs KC） | 均在 `c:crops/rice`；KC 稻米独占 `c:grain/rice`（其汤锅米饭配方用 `c:grain/rice`，FD 稻米不在其中 → FD 米煮不出森罗米饭） | 把 `c:grain/rice` 与 `c:crops/rice` 成员对齐（或裁决其一为主标签）；译名区分（稻米 / 粳米）；两种野生稻米保留 |
| A9 | **水产重复**：螃蟹×2（crabbersdelight/youkaisfeasts）、鱿鱼×2（culturaldelights/minersdelight）、发光鱿鱼×2、**鱼骨×2**（aquaculture/crabbersdelight，无任何统一标签） | SIMILAR-ITEM `fish_bones`：13 条 vs 7 条切配配方 | 鱼骨互加 1:1 切配互转或共建 `c:bones/fish`；水产按"菜系归属"译名区分；aquaculture 主打鲜鱼捕捞、crabbersdelight 主打甲壳加工的定位写入 charter |
| A10 | **啤酒花×2**（brewery:hops vs kaleidoscope_dim_wine:hop 同名"啤酒花"） | 分属啤酒酿造与维度酒两条线 | 共建 `c:crops/hops`；森罗维度酒的改名"幽酿花" |
| A11 | **茶叶体系平行**：youkaisfeasts 六类茶叶独占 `c:tea_leaves/*`；森罗乌龙茶（kaleidoscope_cookery:oolong）与幻想乡乌龙茶（youkaisfeasts:oolong_tea）同名"乌龙茶"但互不承认 | `c:tea_leaves` 7 成员全为幻想乡 | 森罗茶叶补入 `c:tea_leaves` 子标签；译名区分（乌龙茶 vs 幻想乡乌龙）；沏茶工序分工见 D5 |

## B. 同名重复加工品与成品（工序平行）

| # | 问题 | 最终态证据 | 可行方案 |
|---|---|---|---|
| B1 | **面粉×2**（f&c:flour vs KC:flour） | `c:flour` 已互通——**好范例** | 不动；译名可区分（面粉 / 精细面粉） |
| B2 | **面团×5**：f&c:dough、FD:wheat_dough、KC:raw_dough、immortalers kwat/ghast 两个特色面团；`c:dough`/`bakery:dough`/`farm_and_charm:dough` 已满 5 成员，但 `c:foods/dough` 缺 f&c 与 KC | 三个平行 dough 标签成员一致（冗余） | `c:foods/dough` 补齐；裁决 `c:foods/dough` 为主标签，模组私有标签保留但不再扩散；KC 生面团译名"中式面团" |
| B3 | **黄油×2**（f&c vs youkaisfeasts 同名"黄油"） | `c:butter` 互通；`c:foods/butter` 只有幻想乡 | `c:foods/butter` 补 f&c 黄油；f&c 黄油 21+19 条锁定配方逐步标签化 |
| B4 | **奶酪三体系平行**：meadow 奶酪轮→切片（7 种入 `c:cheese`）、brewinandchewin 未熟成轮→熟成→奶酪块（独占 `brewinandchewin:foods/cheese_wedge`）、candlelight 马苏里拉；无 `c:foods/cheese` | `c:cheese`(7)/`c:cheeses`(8)/`meadow:cheese`/`candlelight:cheeses` 平行 | 立 `c:foods/cheese` 主标签，收纳一切可直接食用的奶酪单元（切片/块/马苏里拉）；奶酪轮登记为"熟成中间品"不进主标签；配方统一消费主标签 |
| B5 | **生意面×2**（f&c:raw_pasta vs FD:raw_pasta）+ KC:raw_noodles + MND:ghasta（"恶魂意面"与 KC:ghast_pasta 同名） | `c:foods/pasta` 有 4 成员；`c:pasta` 只有 2 | 裁决 `c:foods/pasta` 为主；译名区分（意面 / 中式面条 / 恶魂意面保留给 MND，KC 的改"恶魂汤面"） |
| B6 | **中式面点跨模组撞名**：麻婆豆腐×3（immortalers/KC_nether/youkaisfeasts）、臭豆腐×2、馒头×2、包子×2、饺子×3、饭团×2 | 同名检测组实测 | 全套不删；幻想乡系统一加"妖怪"前缀（妖怪馒头/妖怪麻婆豆腐），千古乐事加"千古"前缀；工序归属见 D4 |
| B7 | **米饭/熟米饭×2**（FD 料理锅 1 条 vs KC 汤锅 `stockpot/rice_1..9` 9 条）；两者同名且各自被 38+5 / 11+20 条下游配方消费 | `c:foods/cooked_rice` 已双成员（charter 已裁决保留） | 维持双物品+双路径；译名区分用途：FD"米饭"（西式餐点原料）vs KC"香米饭"（中式粥/糍粑/盖饭载体）；禁止互转，保持 `c:foods/cooked_rice` 作为唯一互通口 |
| B8 | **煎蛋×2**：FD（熔炉/烟熏/营火）vs KC（炒锅 `pot/egg_to_fried_egg_1..9`）；**KC 煎蛋误入 `c:eggs` 原料标签** | `c:eggs` 成员含 kaleidoscope_cookery:fried_egg；`c:eggs` 被 15+ 条配方（蛋糕、蛋酒、奶黄等）当生蛋消费 | 【标签修正】KJS 从 `c:eggs` 移除 KC 煎蛋（不删物品）；译名区分：FD 煎蛋（西式早餐）vs KC"炒蛋"（炒锅配菜） |
| B9 | **生/熟羊排×2**：FD mutton_chops vs KC lamb_chops 同名"生羊排/熟羊排" | DUP-OUTPUT 13 条（KC 9 变体锅+砧板+熔炉系） | 译名区分：FD"羊排"（西餐）vs KC"羔羊排"（中餐）；各自熟成路径保留 |
| B10 | **面包标签断层**：`c:bread` 10 成员（含 bakery 6 种）vs `c:foods/bread` 仅 3 成员 → 用 `c:foods/bread` 的配方吃不到 bakery 面包 | 标签实测 | 把 `c:bread` 成员并入 `c:foods/bread` 并裁决其为主标签 |
| B11 | **汤品撞名**：洋葱汤×2（f&c/FD）、罗宋汤×2（KC/youkaisfeasts）、大骨汤×2（FD:bone_broth vs KC:pork_bone_soup） | 同名检测组 | 译名区分 + 工序分工：西式汤→FD 料理锅，中式汤→森罗汤锅；大骨汤统一为原创中间材料"高汤"的上游（见 H1） |
| B12 | **苹果派×2 + 切片×2**（bakery 烤炉工序 vs FD 工作台合成） | bakery:apple_pie（farm_and_charm:stove）vs farmersdelight:apple_pie（crafting_shaped） | 译名区分（酥皮苹果派 vs 农家苹果派）；工序裁决：派类主工序=烤炉，FD 工作台路径降级保留或改为使用派皮中间品（见 H3） |
| B13 | **酒类撞名**：蜂蜜酒×2（b&c/vinery，youkaisfeasts 已区分译"蜜酒"）、伏特加×2（b&c/tavern）、血腥玛丽×2（dungeonsdelight 已正确改名"迷人血玛丽"=范例）、紫颂果酒×2（ends_delight/vinery:chorus_wine） | 同名检测组 | 一律不删；按 D3 工序分工后译名区分（蜂蜜酒 vs 葡萄蜜酒；伏特加 vs 森罗伏特加；紫颂果酒 vs 紫颂葡萄酒） |
| B14 | **茶饮撞名**：紫颂花茶×2（ends_delight vs kaleidoscope_end）、珍珠奶茶×2（displaydelight 摆盘除外） | 同名检测组 | 译名区分；沏茶分工见 D5 |
| B15 | **果汁撞名**：西瓜汁×2（FD:melon_juice vs tavern:watermelon_juice）、苹果汁（vinery）等 31 个果汁物品 | 同名检测组 | 译名区分（鲜榨西瓜汁 vs 冰酿西瓜汁）；远期可统一"果汁"中间流体（见 H4） |
| B16 | **原版汤被重复加配方**：`minecraft:beetroot_soup` 同时由 `farmersdelight:cooking/beetroot_soup` 与 `letsdocompat:farmersdelight/pot_cooking/beetroot_soup` 产出（同类型同输出，JEI 双显） | 运行时 by-output 实测 | 移除 letsdocompat 重复条（保留 FD 原版），记入 removes.txt；兔肉汤仅 1 条不动 |
| B17 | **candlelight:bowl**（复刻"碗"，0 配方消费，有 1 条自身合成） | 运行时实测 | 不删；改名"雕花碗"登记为装饰品，避免与 minecraft:bowl 混淆 |
| B18 | **displaydelight 约 40 组同名摆盘件**（plated_* 系列） | 同名检测组大量 displaydelight 条目 | 白名单：登记为"展示层"，译名规范加"（摆盘）"后缀，不纳入任何统一裁决 |

## C. 同名机器与功能方块（工序入口混淆）

| # | 问题 | 证据 | 可行方案 |
|---|---|---|---|
| C1 | **炉灶×2**：farmersdelight:stove 与 kaleidoscope_cookery:stove 同名"炉灶"（都是热源，配套锅具不同）；farm_and_charm:stove 叫"火炉"实为烘焙工作站 | SIMILAR-ITEM `stove` | 译名分层：FD"炉灶"、KC"灶台"、f&c"烘焙炉"；charter 登记三者热源是否互通（建议 FD/KC 热源互不通用，f&c 独立烘焙体系） |
| C2 | **汤锅×2**：candlelight:cooking_pot 与 KC:stockpot 同名"汤锅" | 同名检测组 | candlelight 改"炖锅"；工序归属见 D2 |
| C3 | **茶壶×2**：KC:teapot vs youkaisfeasts:kettle（译名"茶壶"） | 同名检测组 | 幻想乡 kettle 改"水壶"；分工见 D5 |
| C4 | **蒸笼×2**：KC:steamer vs youkaisfeasts:steamer_rack（译名"蒸笼"） | 同名检测组 | 幻想乡改"蒸架"；中式面点归森罗蒸笼 |
| C5 | **末地炉灶×2**（ends_delight vs kaleidoscope_end）、**下界炉灶×3**（KC_nether vs MND×2 同名"下界炉灶"） | 同名检测组 | 按维度归属译名区分（末地炉灶/森罗末地灶台；下界砖炉灶/灵魂下界炉灶） |
| C6 | **家具大规模撞名**：椅子×8 组（candlelight vs KC）、橱柜×8（candlelight vs FD）、抽屉×3（bakery/brewery/candlelight）、餐桌（KC vs youkaisfeasts）、酒柜×2 | 同名检测组 | 低优先级；译名加风格前缀（烛火晚宴→"雕花橡木椅"等），不动配方 |

## D. 工序流程统一设计（核心裁决，建议写入 charter）

| # | 问题 | 证据 | 统一化工序方案 |
|---|---|---|---|
| D1 | **炒制工序**：森罗炒锅 `pot`(291) 一家独大，但 youkaisfeasts `unordered_cooking`(13)/`immediate_soup`(4) 提供无锅快手菜绕过工序 | POT-FAMILY 表 | 森罗炒锅=唯一"炒制"工序模板（沿用 charter POT_STD）；幻想乡快手菜降级为"便携料理"层并译名弱化（妖怪小炒），不扩展新配方 |
| D2 | **炖煮工序五线并行**：FD cooking(246)、KC stockpot(99)+flex_stockpot(28)、f&c pot_cooking(28)、meadow cooking(19)、DD monster_cooking(70) | POT-FAMILY 表 | 按菜系划锅，不删机器：中式汤/粥/饭→森罗汤锅；西式炖菜→FD 料理锅；f&c 大锅专精"果酱/罐头"（其配方 container=bakery:jar，已具特色）；meadow 煮锅专精高山料理与奶酪配套；DD 怪物锅专精怪物料理；新增跨体系配方须先挂 charter 工序模板 |
| D3 | **酿酒四线平行**：vinery 发酵桶（果汁+辅料→酒）、brewery 酿造台（麦芽+酒花+酵母）、b&c 发酵小桶（流体基+原料→keg 倒出）、森罗 tavern barrel（流体+carrier 瓶→陈酿）+ pressing_tub 压汁 | raw_json 语义抽样 | 按酒种分工：葡萄/果酒→vinery 发酵桶；啤酒/威士忌→brewery 酿造台；蜂蜜酒/蛋酒/米酒→b&c 小桶；维度酒/特产酒→森罗酒桶；鸡尾酒→森罗调酒器 shaker；压汁入口裁决：主世界果汁→vinery 体系，维度果汁→森罗压汁桶（双方流体不互通，译名区分） |
| D4 | **蒸制工序**：KC steamer(5) vs youkaisfeasts steaming(大量)/steamer_rack | POT/CUT-FAMILY 表 | 中式面点（馒头/包子/蒸饺）→森罗蒸笼；幻想乡蒸制保留给日式点心；两者译名区分（见 C4） |
| D5 | **沏茶工序**：KC teapot(12)、youkaisfeasts kettle(14，流体茶+`c:tea_leaves/*`)、f&c 草本茶（stove 系） | raw_json 抽样 | 中式盖碗茶→森罗茶壶；日/西式茶→幻想乡水壶；f&c 草本茶保留；茶叶标签统一见 A11 |
| D6 | **烘烤工序**：f&c roaster/stove（bakery/candlelight 全依附）vs 原版熔炉/烟熏面包路径（kwat 吐司、ghast 面包、FD 面团→面包） | DUP-OUTPUT `minecraft:bread` 6 条 4 类型 | 裁决"派/蛋糕/面包"主工序=f&c 烘焙炉；熔炉烧面团保留为篝火期便利路径（不删）；charter 登记"烘焙期解锁"进度 |
| D7 | **切配/研磨/绞肉**：FD cutting(325)+43 把刀、KC chopping_board(20)+菜刀、meadow woodcutting(116 木工)、f&c mincer(绞肉) | `farmersdelight:tools/knives` 43 成员 | 不删任何刀；`c:tools/knife` 互通已完成；森罗菜刀保留中式砧板专精（熟食切配）；绞肉统一走 f&c mincer，产出对接原创"肉馅"中间品（见 H2） |
| D8 | **熟成/晾干/冷冻**：b&c 奶酪轮熟成（方块老化）、youkaisfeasts drying_rack、国味 pickle_jar/refrigerating/freezing、world_liquor freezer | 运行时类型统计 | 登记为工序模板 AGE/DRY/COLD，各自保留；不跨体系统一（机理不同） |
| D9 | **染料/骨粉/金属粒多路径冗余**（millstone vs cutting vs mincer vs crafting，骨粉 31 条、金粒 11 条） | DUP-OUTPUT Top 表 | 登记为白名单"便利路径"，不强制统一；charter 声明研磨主工序=森罗磨盘，其余不扩展 |

## E. 标签体系裁决清单

| # | 问题 | 证据 | 方案 |
|---|---|---|---|
| E1 | `c:eggs` 被 KC 煎蛋污染 | B8 | KJS 移除该 tag 条目，验证蛋糕/蛋酒配方回归正常 |
| E2 | 平行标签 123 组（`c:bread`vs`c:foods/bread`、`c:cheese`vs`c:cheeses`、`c:grain/corn`vs`c:grains/corn`、milk 系 8 个平行标签等） | PARALLEL-TAG 表 | charter 逐族裁决主标签（一律 `c:foods/*` 优先），模组私有标签（bakery:*/farm_and_charm:*/candlelight:*）冻结不再扩散 |
| E3 | 酒类无任何统一标签：`c:drinks` 仅 16 成员，绝大多数模组酒无归属；无 `c:alcoholic_drinks` | 标签实测 | 新建 `c:drinks/alcoholic` 与 `c:drinks/non_alcoholic`，全部酒水入册，供效果/成就/任务统一调用 |
| E4 | `c:grapes` 名不副实；`c:foods/jam` 空而 `c:jams` 仅 bakery | 标签实测 | 见 A7；果酱裁决 `c:foods/jam` 为主标签并纳入 bakery 5 种果酱 |
| E5 | 双米饭/双煎蛋/双熟肉已在 `c:foods/cooked_rice` 等处共存 | 标签实测 | 维持现状——这是"不删物品"原则的正确实现范本，写入 charter 作为范例 |

## F. 跨模组同主题家族回归（本体+附属同模式扫描）

| # | 家族 | 证据 | 方案 |
|---|---|---|---|
| F1 | **末地龙蛋全家平行**：ends_delight vs kaleidoscope_end 撞名 7 组（龙蛋壳/龙蛋液/龙蛋羹/紫颂花茶/龙息紫颂汤/煎龙蛋/生末影螨肉）+ 末地炉灶 | 同名检测组 | 明确分工：ends_delight=龙蛋"食材化"（煎/切/蒸块），kaleidoscope_end=龙蛋"中式羹汤"（煎龙蛋/龙蛋羹/汤）；已区分的译名保留（碗装龙蛋羹 vs 龙蛋羹），其余按分工改名 |
| F2 | **下界家族**：疣猪兽皮×2（KC_nether/MND）、恶魂意面×2（见 B5）、下界炉灶×3（见 C5） | 同名检测组 | 皮革/兽皮类登记多路径白名单；意面按 B5 分工 |
| F3 | **幻想乡 × 多元乐事 × 国味 中餐大撞车**：麻婆豆腐×3、臭豆腐×2、馒头×2、包子×2、黄瓜×2、茄子×2 | B6/A5/A6 | 按"菜系前缀"译名规范统一处理，写入 charter 翻译规范章节 |
| F4 | **森罗酒馆 × b&c × vinery 酒吧撞车**：血腥玛丽/伏特加/蜂蜜酒/香槟（tavern vs youkaisfeasts 香槟气泡甜白已区分） | B13 | 按 D3 酒种分工后统一改名 |

## G. 建议新增的原创中间材料（"可增加原创中间材料"原则）

| # | 新物品 | 解决什么问题 | 工序设计 |
|---|---|---|---|
| H1 | **浓缩高汤**（原创） | FD 大骨汤与 KC 大骨汤同名撞车、两大汤体系互不相通 | 任一体系骨汤（FD 料理锅 / 森罗汤锅）→浓缩高汤；两大体系的高级汤品统一以"浓缩高汤+特色料"出菜，成为跨体系桥梁 |
| H2 | **统一肉馅 / 统一玉米粒**（原创或裁决主实现） | f&c mincer 产物与 KC 丸子/馅料链不通；玉米粒×3 分裂 | mincer/磨盘统一产出"肉馅"，森罗生肉丸、FD 汉堡肉、f&c 香肠统一以肉馅为上游；玉米粒裁决 corn_delight 为主实现，其余入 tag |
| H3 | **派皮/酥皮**（原创，或裁决 FD:pie_crust 为主实现） | 苹果派×2 工序不一致（烤炉 vs 工作台） | 一切派类=面团→派皮→烤炉烘烤；FD 工作台直合派改为派皮组装 |
| H4 | **（远期）统一果汁中间流体** | 31 个果汁物品、双压汁体系 | 工程量最大，仅登记为远期目标，本期不动 |

## H. 验证与风险备忘

- 森罗系 424 条 unparsed 配方（9 变体锅族）：任何"按输出查配方"必须并用 `raw_json` 复核，否则会出现"熟米饭零配方"式的假阳性。
- letsdocompat 已是 FD↔f&c 桥梁先例，新增统一配方应沿用其命名空间风格（`seki_compat:*` 或 KJS）。
- 本报告为静态+最终态梳理，未做任何实施；所有移除类动作（仅 B16/E1 两处）需小批实施并过 `validate.py` + 重新导出验收。
- charter.md 当前声明"用户确认前不扩展到其他料理域"——本梳理即扩展域的事实基础，待确认后立宪。
