# Seki 料理体系统一设计 v3（原创收敛版：基于真实物品内容）

> 2026-07-29 ｜ 在 v2 基础上逐项核验最终态配方链后修订。
> v3 结论：**各模组其实已有大量合格半成品，原创只需补 3 个真实缺口**；其余全部"复用现有物品 + tag 统一 + 三轨区分"。
> 修正 v2 两处误判：① FD 苹果派/南瓜派**本就使用派皮**（馅饼酥皮=小麦+奶），不需收编；② bakery 苹果派在最终态**有** `farm_and_charm:stove/apple_pie` 配方（v1 说零配方是导出器漏行）。

## 表 1 ｜ 已有合格半成品清单（复用，不新造）

| 概念 | 主实现物品 | 真实来源工序（已核验） | v3 动作 |
|---|---|---|---|
| 派皮 | `farmersdelight:pie_crust` 馅饼酥皮 | 工作台：小麦+奶；FD 苹果派/南瓜派已消费 ✅ | 建 `c:foods/pie_crust`，纳入 immortalers 玉黍酥皮/蛋挞坯；**只改 bakery 派**（stove 配方目前只用甜面团，补派皮） |
| 裹馅合体 | `kaleidoscope_cookery:stuffed_dough_food` 裹馅面食 | 工作台：生肉+蔬菜+面团 → 蒸笼→包子；国味馄饨/云吞面同款上游 ✅ | 插入原创面皮，见表 2 |
| 肉馅（双实现） | `farmersdelight:minced_beef` 牛肉馅（砧板+刀切牛肉×2）；`farm_and_charm:minced_beef` 碎牛肉（绞肉机） | 已核验 | 建 `c:foods/minced_beef` 统一消费口；三轨区分：牛肉馅=手工切（西餐），碎牛肉=机绞（田园系）；汉堡/香肠/肉丸统一吃 tag |
| 奶酪熟成剂 | `meadow:rennet` 凝乳酶（+特色木桶奶→奶酪模→轮）；b&c 流体奶酪→小桶灌注→未熟成轮→熟成 | 已核验，两链均完整 | 不新造；charter 登记两条链为合格模板，mozzarella 维持独立 |
| 凝乳 | `trailandtales_delight:curd_block` 凝乳块 | FD 锅：5 桶奶煮 600t | 登记为可用 T2，暂不扩展 |
| 酵母 | `farm_and_charm:yeast` | f&c 工序；brewery/bakery 已在用 ✅ | 冻结，好范例 |
| 酱油 | `youkaisfeasts:soy_sauce_bottle` 瓶装酱油（黄豆发酵线） | 已被 letsdocompat 跨模组配方使用 ✅ | 建 `c:foods/soy_sauce`；中餐新配方可用 |
| 番茄酱 | `farmersdelight:tomato_sauce` | FD 料理锅 | 建 `c:foods/tomato_sauce`；已被 8+ 条跨模组配方消费，好范例 |
| 甜面团 | `bakery:sweet_dough` | f&c 搅拌盆：面粉+糖+蛋+水→12 个 | 建 `c:foods/dough/sweet`；蛋糕/甜点统一 |
| 茶底 | youkaisfeasts 水壶流体茶（茶叶×4→1000mB） | 已核验 | 不新造；森罗茶叶补入 `c:tea_leaves/*` 即可 |
| 果汁 | vinery 果汁流体（red_general 等 10 单位+糖+瓶→酒）；森罗压汁桶流体 | 已核验，均为流体层 | 不新造物品；仅统一葡萄 tag（v2-A7） |

## 表 2 ｜ 原创物品（收敛为 3 件，全部为真实缺口）

| 物品 | 缺口论证 | 工序设计 | 收编对象 |
|---|---|---|---|
| `seki:dough_sheet` **面皮** | 中式面点链里"面团→裹馅面食"是一步空手捏合（工作台 shapeless），缺"擀皮"环节 | 森罗砧板+菜刀：中式面团→面皮×2；裹馅面食改为**面皮+生肉+蔬菜**（砧板/工作台均可） | 森罗包子/馒头/烧卖链、国味馄饨/云吞面、幻想乡生包子（raw_bun 改吃面皮）、多元乐事饺子 |
| `seki:broth_concentrate` **浓缩高汤** | 两种"大骨汤"都是终端可食汤，高级汤品没有统一底料 | FD 料理锅或森罗汤锅：任一大骨汤×2+盐→浓缩高汤（消耗汤汁的"收汁"意象） | 两大体系招牌汤/炖菜/浇汁类（首批 ≤20 条精选，不全面铺开） |
| `seki:mixed_seasoning` **复合调味粉** | 盐有国味盐/山地盐两种、胡椒粉、灵魂椒各自为政，新统一配方没有通用"调味位" | 森罗磨盘：任一盐+胡椒粉+香辛料→调味粉 | **只用于新统一配方与烧烤/怪物锅增强**；明确不 retrofit 森罗 291 条炒锅配方（避免激进改动） |

## 表 3 ｜ 修订后的工序链样板（繁琐但沉浸，且全部有实证锚点）

| 菜系线 | 链 | 说明 |
|---|---|---|
| 中式面点 | 小麦→磨盘面粉→中式面团→**面皮**→+肉馅/菜→裹馅面食→蒸笼→包子/饺子/馄饨 | 新增 1 步擀皮 |
| 西式派 | 小麦+奶→派皮→+馅（果/南瓜）→烤炉/工作台组装→派 | FD 已合规；bakery 派补派皮 |
| 奶酪三体系 | 奶+凝乳酶→奶酪模→轮→熟成→切片（meadow）｜奶→流体奶酪→小桶灌注→未熟成轮→熟成→块（b&c）｜马苏里拉独立 | 维持原样，登记模板 |
| 肉馅线 | 牛肉→砧板刀切=牛肉馅｜绞肉机=碎牛肉→`c:foods/minced_beef`→汉堡/香肠/肉丸 | 统一消费口，双轨来源 |
| 高汤线 | 骨+配菜→大骨汤（两体系各自）→**浓缩高汤**→高级汤/炖菜 | 骨汤仍可直喝 |
| 酿酒线 | 葡萄→压汁流体→发酵桶→酒（vinery）；维度果→压汁桶→酒桶陈酿（森罗） | 流体层已合格，不动 |
| 茶线 | 茶叶（统一 tag）→水壶/茶壶→茶 | 只补 tag |

## 表 4 ｜ v3 批次计划（修订版）

| 批次 | 内容 | 规模/风险 |
|---|---|---|
| NAME-01 | v2 表 3 全部新译名 + 双肉馅区分（牛肉馅/碎牛肉） | 纯文本，零风险 |
| TAG-01 | 新建 `c:foods/pie_crust`、`c:foods/minced_beef`、`c:foods/soy_sauce`、`c:foods/tomato_sauce`、`c:foods/dough/sweet`、`c:grapes/*`、`c:drinks/alcoholic`；森罗茶叶入 `c:tea_leaves`；f&c 生菜入 `c:crops/lettuce`；`c:grain/rice` 对齐 | 零配方风险 |
| FIX-01 | `c:eggs` 移除森罗煎蛋 + 移除 letsdocompat 重复 beetroot_soup | 仅 2 处移除 |
| ORIG-01 | KJS 注册 3 件原创物品（面皮/浓缩高汤/调味粉）+ 各自的产出配方 | 新内容，无回归面 |
| DOUGH-01 | 面皮插入中式面点链（裹馅面食/生包子/饺子改输入） | ≤20 条，首批试点 |
| PIE-01 | bakery 派 stove 配方补派皮；`c:foods/pie_crust` 落地 | <10 条 |
| BROTH-01 | 精选 ≤20 条招牌汤/炖菜接浓缩高汤 | 精选制 |
| MEAT-01 | 香肠族（brewery/ends_delight/MND）接 `c:foods/minced_beef` | ≤20 条 |

## 导出器坑位备忘（验证必读）

- 森罗系 424 条 unparsed（9 变体锅族）：结构化表查不到，必须 `raw_json` 复核。
- FD cutting 的 `result` 为数组时（如牛肉→牛肉馅×2），`recipe_outputs` 漏行；`farm_and_charm:stove/crafting_bowl` 等 Let's Do 类型同样 unparsed。verify-output 对这些类型需放宽到 raw_json 文本校验。
