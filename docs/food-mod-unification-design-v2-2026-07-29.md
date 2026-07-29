# Seki 料理体系统一设计 v2（严格区分 + 工序沉浸化）

> 2026-07-29 ｜ 基于 v1 梳理（同目录 food-mod-unification-survey-2026-07-29.md）的全部最终态证据。
> 两条铁律：**同物三轨严格区分（译名 / 来源 / 使用面）**；**一切烹饪走强制工序链，禁止越级直合**。
> 原则不变：不删物品；删的是"越级配方路径"，以原创中间材料补位。

## 表 1 ｜ 统一工序层级（GTNH 式强制链）

| 层级 | 名称 | 定义 | 允许的机器/手段 | 强制规则 |
|---|---|---|---|---|
| T0 | 原始素材 | 狩猎/种植/采集/挤奶所得 | 无 | 不得直接变 T3 成品菜（篝火期 primitive 白名单除外：烤肉、烤马铃薯、熔炉烧面团→面包） |
| T1 | 粗加工 | 一次物理处理 | FD 砧板 / 森罗砧板 / 磨盘 / mincer / 压汁桶 / 晾干架 | 只产出 T1/T2，不产出可直接吃的成品 |
| T2 | 中间材料 | 不可直接吃或吃着很亏的"半成品" | 见表 2 原创清单 | **一切 T3 配方必须至少含 1 个 T2** |
| T3 | 烹饪成品 | 可直接食用的菜 | 森罗炒锅/汤锅、FD 料理锅、f&c 烤炉/大锅、蒸笼、烤炉、酿造设备 | 锁定菜系对应机器（表 3 使用面列） |
| T4 | 摆盘/宴席 | 多菜组合、展示 | 工作台（仅摆盘）、displaydelight 层 | 只允许 T3→T4，不得 T0/T1→T4 |

## 表 2 ｜ 原创中间材料清单（共 8 件，克制设计）

| 物品 | 工序（机器） | 上游 | 下游（收编的配方族） | 沉浸化收益 |
|---|---|---|---|---|
| `seki:broth_concentrate` 浓缩高汤 | 森罗汤锅 / FD 料理锅 | 两种大骨汤 + 水 | 两大体系全部汤品、炖菜、盖饭浇头 | 汤不再"一锅白开水出菜" |
| `seki:minced_meat` 肉馅 | f&c 绞肉机 / 森罗磨盘 | 各生肉 | 森罗肉丸、FD 汉堡肉、f&c 香肠、包子/饺子馅 | 肉菜统一"先绞后烹" |
| `seki:dough_sheet` 面皮 | 森罗砧板（菜刀） | 中式面团（森罗生面团） | 包子/饺子/馄饨/烧卖全系 | 面点不再空手捏 |
| `seki:pie_crust` 派皮 | FD 砧板（刀） | 西式面团（f&c/FD 面团）+ 黄油 | 一切派/挞（含两种苹果派） | 收编工作台直合派 |
| `seki:curd` 凝乳 | meadow 煮锅 / f&c 大锅 | 牛奶 + 盐 | 三体系全部奶酪的上游 | 奶酪统一"先凝乳后熟成" |
| `seki:juice_must` 果汁原浆 | vinery 压汁 / 森罗压汁桶 | 各水果/葡萄 | 两条葡萄酒线 + 果汁饮品 | 压汁成为必经工序 |
| `seki:seasoning_mix` 调味粉 | 森罗磨盘 | 香辛料作物 | 炒锅菜、怪物锅、烧烤 | 炒菜多一道"备料" |
| `seki:tea_base` 茶底 | 森罗茶壶 / 幻想乡水壶 | 各茶叶（入 `c:tea_leaves`） | 奶茶、果茶、茶点 | 茶系统一先沏底再调配 |

## 表 3 ｜ 同物三轨严格区分总表（译名 / 来源 / 使用面）

| 族 | 物品 | 新译名 | 来源限定 | 使用面限定 | tag 策略 |
|---|---|---|---|---|---|
| 番茄×3 | farmersdelight:tomato | 番茄 | 野生番茄丛+种子 | 西式料理 + 通用 `c:crops/tomato` | 主标签成员 |
| | farm_and_charm:tomato | 田园番茄 | f&c 种子自种 | 仅田园烘焙/炖菜 | 主标签成员 |
| | kaleidoscope_cookery:tomato | 沙瓤番茄 | 森罗种子 | 仅中餐锅菜 | 主标签成员 |
| 洋葱×2 | farmersdelight:onion | 洋葱 | 野生洋葱 | 西式+通用 | `c:crops/onion` |
| | farm_and_charm:onion | 田园洋葱 | f&c 种子 | 仅田园系 | `c:crops/onion` |
| 生菜×2 | kaleidoscope_cookery:lettuce | 生菜 | 森罗种子 | 中餐 | `c:crops/lettuce` 主标签 |
| | farm_and_charm:lettuce | 奶油生菜 | f&c 种子 | 田园系+卷心菜替身（保留 `c:crops/cabbage`） | 补入 `c:crops/lettuce` |
| 玉米×3 | farm_and_charm:corn | 玉米 | f&c 种子 | 田园系 | `c:grains/corn` 主标签 |
| | corn_delight:corn | 甜玉米 | 野生玉米 | 生食/零食向 | 主标签成员 |
| | culturaldelights:corn_cob | 玉米棒 | 多元种子 | 墨式料理 | 主标签成员 |
| 黄瓜×2 | culturaldelights:cucumber | 黄瓜 | 多元种子 | 西式/腌渍 | `c:crops/cucumber` |
| | youkaisfeasts:cucumber | 妖怪黄瓜 | 幻想乡野生 | 幻想乡料理 | 同上 |
| 茄子×2 | kaleidoscope_chinesefood:eggplant | 茄子 | 国味种子 | 中餐 | `c:crops/eggplant` |
| | culturaldelights:eggplant | 圆茄 | 多元种子 | 西式焗烤 | 同上 |
| 葡萄×2系 | vinery:red/white_grape | 红/白葡萄 | vinery 葡萄藤 | vinery 酿酒线 | 新建 `c:grapes/red|white` |
| | youkaisfeasts:red/white_grape | 山葡萄（红/白） | 幻想乡野生藤 | 幻想乡果酒/果汁 | 同上 |
| 稻米×2 | farmersdelight:rice | 稻米 | 水稻/野生稻 | 西式烩饭+通用 | `c:crops/rice` |
| | kaleidoscope_cookery:rice | 粳米 | 森罗稻谷 | 中餐粥饭 | 补 `c:grain/rice` 对齐 |
| 熟米饭×2 | farmersdelight:cooked_rice | 米饭 | FD 料理锅 | 西式餐点、炒饭 | `c:foods/cooked_rice`（唯一互通口） |
| | kaleidoscope_cookery:cooked_rice | 香米饭 | 森罗汤锅 | 粥/糍粑/盖饭 carrier | 同上 |
| 煎蛋×2 | farmersdelight:fried_egg | 煎蛋 | 熔炉/营火 | 西式早餐 | 不入 `c:eggs` |
| | kaleidoscope_cookery:fried_egg | 炒蛋 | 森罗炒锅 | 中餐配菜 | **从 `c:eggs` 移除** |
| 面团系 | kaleidoscope_cookery:raw_dough | 中式面团 | 面粉+水 | 面皮/馒头/包子 | `c:foods/dough` 主标签 |
| | farm_and_charm:dough | 田园面团 | f&c 工序 | 面包/派皮 | 同上 |
| | farmersdelight:wheat_dough | 面团 | 小麦+蛋 | 面包/面条 | 同上 |
| 奶酪系 | meadow 奶酪轮→切片 | 高山奶酪 | 凝乳→压模→熟成 | 高山/田园菜 | `c:foods/cheese` 主标签 |
| | brewinandchewin 奶酪轮→块 | 熟成奶酪 | 凝乳→地窖熟成 | 下酒菜 | 同上 |
| | candlelight:mozzarella | 马苏里拉 | 凝乳→热拉伸 | 意式 | 同上 |
| 羊排×2 | farmersdelight:mutton_chops | 羊排 | 砧板切羊 | 西餐 | 各自体系 tag |
| | kaleidoscope_cookery:lamb_chops | 羔羊排 | 森罗砧板 | 中餐 | 同上 |
| 面点撞名 | youkaisfeasts 馒头/包子/麻婆豆腐等 | 加"妖怪"前缀 | 幻想乡工序 | 幻想乡菜系 | 不归 c 主标签 |
| | kaleidoscope 同名单品 | 保持原名（中式正统） | 森罗蒸笼/炒锅 | 中餐 | 主标签 |
| | immortalers 同名单品 | 加"千古"前缀 | 千古工序 | 千古菜系 | 不归主标签 |
| 龙蛋×7 | ends_delight 龙蛋系 | 保持（食材化路线） | 末地 | 切/煎/蒸块 | 新建 `c:dragon_egg_parts` |
| | kaleidoscope_end 龙蛋系 | 羹汤路线译名（龙蛋羹等） | 末地 | 森罗汤锅/炒锅 | 同上 |
| 酒撞名 | b&c 蜂蜜酒 / vinery 蜂蜜酒 | 蜂蜜酒 / 葡萄蜜酒 | 小桶 / 发酵桶 | 各自酒线 | `c:drinks/alcoholic` 新标签 |
| | b&c 伏特加 / 森罗伏特加 | 伏特加 / 森罗伏特加 | 小桶 / 酒桶 | 同上 | 同上 |
| 机器撞名 | FD 炉灶 / 森罗炉灶 / f&c 火炉 | 炉灶 / 灶台 / 烘焙炉 | 各自合成 | 热源互不通用 | 不适用 |
| | 森罗汤锅 / candlelight 汤锅 | 汤锅 / 炖锅 | 各自合成 | 中餐 / 西餐 | 不适用 |

## 表 4 ｜ 越级配方改造批量计划（每批 ≤20 条，一批一族）

| 批次 | 族 | 动作 | 规模估算 |
|---|---|---|---|
| FIX-01 | `c:eggs` 污染 + beetroot_soup 重复 | 2 处移除 + tag 修正 | 2 |
| DOUGH-01 | 中式面点（包子/饺子/馒头/烧卖）改面皮工序 | 加 `seki:dough_sheet`，改配方输入 | ≤20/批，分批 |
| PIE-01 | 派/挞全系改派皮+烤炉工序，移除工作台直合派 | 加 `seki:pie_crust` | ≤20/批 |
| BROTH-01 | 汤品全系接入浓缩高汤 | 加 `seki:broth_concentrate` | ≤20/批 |
| MEAT-01 | 肉丸/汉堡/香肠接肉馅工序 | 加 `seki:minced_meat` | ≤20/批 |
| CHEESE-01 | 三奶酪体系接凝乳上游 | 加 `seki:curd` | ≤20/批 |
| WINE-01 | 双葡萄酒线接果汁原浆 | 加 `seki:juice_must` | ≤20/批 |
| STIR-01 | 炒锅菜接调味粉（可选，沉浸增强） | 加 `seki:seasoning_mix` | ≤20/批 |
| NAME-01 | 译名资源包（表 3 全部新译名） | KubeJS `startup_scripts` lang 覆盖 | 纯文本，一批完成 |
| TAG-01 | 表 3 tag 策略列全部落地 | KJS tag 脚本 | 一批完成 |

## 落地顺序建议

1. NAME-01 + TAG-01（零配方风险，先把"区分"做实）→ 2. FIX-01（除污）→ 3. 原创物品注册 + DOUGH-01 试点 → 4. 其余批次按表 4 推进，每批走"静态验证 → 重导出 → verify-output"闭环。
