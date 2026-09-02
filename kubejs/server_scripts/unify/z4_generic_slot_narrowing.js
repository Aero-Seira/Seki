// CUISINE-SLOT-NARROW-04（v14）：把「全部烹饪面」纳入收窄口径——泛用作物、熟制侧、别名族、Forge 遗留命名空间、
// 以及自建家族里仍然过宽的鱼族。共享 c:*/forge:* 标签本身不动，只在配方事件里替换输入，与 z_cooking_tag_narrowing.js 同一机制。
// 每个目标族的成员都取自 2026-08-28T05:55Z 运行时最终态；替换只会收窄、不会放宽（差集见 docs/design/cuisine-registry.md §4.2）。

const SLOT_INPUT_TAG_REMAPS = [
  // 洋葱：单一作物也要登记，防止未来奇幻洋葱自动混入（与 eggs/mushrooms 同策略）。
  ['#c:crops/onion', '#seki:vegetables/onion'],
  ['#c:foods/onion', '#seki:vegetables/onion'],
  ['#farm_and_charm:onion', '#seki:vegetables/onion'],
  // 普通胡萝卜与洞穴胡萝卜分族；烤洞穴胡萝卜单独一族，因为它标签里混进了纯素肉饼。
  ['#c:crops/carrot', '#seki:vegetables/carrot_common'],
  // 洞穴胡萝卜（Miners Delight）。
  ['#c:vegetables/cave_carrot', '#seki:vegetables/carrot_cave'],
  // 烤洞穴胡萝卜：剔除 minersdelight:vegan_patty（成品顶替原料）。
  ['#minersdelight:baked_cave_carrot', '#seki:vegetables/carrot_cave_baked'],
  // 普通马铃薯单列，毒马铃薯/野生株不进烹饪槽位。
  ['#c:crops/potato', '#seki:vegetables/potato_common'],
  // 跨模组番茄同概念（Bakeries / Farm & Charm / FD / Kaleidoscope）。
  ['#c:crops/tomato', '#seki:vegetables/tomato'],
  ['#c:foods/tomato', '#seki:vegetables/tomato'],
  ['#farm_and_charm:tomato', '#seki:vegetables/tomato'],
  // 玉米棒（整穗）与玉米粒 seki:grains/corn_kernels 分层，磨粉只吃粒。
  ['#c:crops/corn', '#seki:crops/corn_cob'],
  ['#farm_and_charm:corn', '#seki:crops/corn_cob'],
  // 整茄子：剔除 culturaldelights:cut_eggplant，切好的茄子片不能再被切。
  ['#c:crops/eggplant', '#seki:vegetables/eggplant_whole'],
  // 整黄瓜：剔除已切片，避免「切片→再切片」的循环原料。
  ['#c:crops/cucumber', '#seki:vegetables/cucumber_whole'],
  // 黄瓜片专族（料理台/寿司路线用），跨 Cultural Delights 与 Youkais Feasts。
  ['#c:foods/slices/cucumber', '#seki:vegetables/cucumber_slice'],
  ['#c:foods/vegetable/cucumber', '#seki:vegetables/cucumber_whole'],
  ['#c:foods/vegetables/cucumber', '#seki:vegetables/cucumber_whole'],
  // 浆果食用族：剔除 frightsdelight 灵魂果/凋零果与 trailandtales 灯笼果（奇幻果）。
  ['#c:foods/berry', '#seki:fruits/berry_culinary'],
  ['#c:fruits/berries', '#seki:fruits/berry_culinary'],
  // 酿酒/榨汁葡萄族。
  ['#c:fruits/grapes', '#seki:fruits/grape'],
  ['#c:foods/fruits/grape', '#seki:fruits/grape'],
  // 叶菜=卷心菜本体（c:foods/leafy_green 是它的别名）。
  ['#c:foods/leafy_green', '#seki:vegetables/cabbage_strict'],
  // c:foods/mushroom 是 c:mushrooms 的单数别名，一并归口。
  ['#c:foods/mushroom', '#seki:mushrooms/culinary_common'],
  ['#c:crops/soybean', '#seki:crops/soybean'], // 单一作物/熟蛋登记，防止未来变体自动混入（v12 先例）
  ['#c:crops/redbean', '#seki:crops/redbean'], // 单一作物/熟蛋登记，防止未来变体自动混入（v12 先例）
  ['#c:foods/cooked_egg', '#seki:eggs/cooked'], // 单一作物/熟蛋登记，防止未来变体自动混入（v12 先例）
  // 通用鱼槽：在 seki:fish/raw_fish 全集基础上剔掉河豚与河豚切片（毒性/未审查）。minecraft:fishes 与 vintagedelight:raw_fish 也必须走这里，不能再收熟鱼、鱿鱼、蓑鲉、碱渍鱼、八目鳗。
  ['#minecraft:fishes', '#seki:fish/raw_edible_common'],
  ['#seki:fish/raw_fish', '#seki:fish/raw_edible_common'],
  ['#vintagedelight:raw_fish', '#seki:fish/raw_edible_common'],
  // 泛用生肉槽收口：c:raw_meat（袋鼠/驼鹿/龙虾尾）、c:raw_meat_delight、c:foods/raw_meat（潜影贝/猪灵/蜘蛛/节肢/腐肉系）一律降到常畜肉族。
  ['#c:raw_meat', '#seki:meat/raw_livestock_common'],
  ['#c:raw_meat_delight', '#seki:meat/raw_livestock_common'],
  ['#c:foods/raw_meat', '#seki:meat/raw_livestock_common'],
  ['#immortalers_delight:common_raw_meats', '#seki:meat/raw_livestock_common'],
  ['#immortalers_delight:beef_or_pork', '#seki:meat/raw_livestock_common'],
  // B&C 肉干：33 员里剔掉腐肉、猪灵肉、潜影贝、蜘蛛/节肢、炽足兽、腌火腿与鞑靼牛肉等成品/奇幻成员，只留可风干生鲜畜肉。
  ['#brewinandchewin:foods/jerky_meat', '#seki:meat/raw_jerky_livestock'],
  // 熟猪：剔除下界疣猪兽腰肉与烤香肠（下界兽肉不得冒充普通熟猪肉）。
  ['#c:foods/cooked_pork', '#seki:meat/cooked_pork_common'],
  ['#culturaldelights:cooked_porks', '#seki:meat/cooked_pork_common'],
  // 熟牛：剔除牛肉饼（成品）与熟牛杂（内脏）。
  ['#c:foods/cooked_beef', '#seki:meat/cooked_beef_common'],
  ['#culturaldelights:cooked_beefs', '#seki:meat/cooked_beef_common'],
  // 熟羊：普通羊排族。
  ['#c:foods/cooked_mutton', '#seki:meat/cooked_mutton_common'],
  ['#culturaldelights:cooked_muttons', '#seki:meat/cooked_mutton_common'],
  // 熟禽：culturaldelights:cooked_chickens 实际混入了生的 farmersdelight:chicken_cuts，必须归口。
  ['#c:foods/cooked_chicken', '#seki:meat/cooked_poultry_common'],
  ['#culturaldelights:cooked_chickens', '#seki:meat/cooked_poultry_common'],
  // 熟鱼：剔掉史前鱼/三叶虾等亚历山德洞窟物种，通用熟鱼槽只用普通熟鱼。
  ['#c:foods/cooked_fish', '#seki:fish/cooked_fish'],
  ['#c:foods/cooked_salmon', '#seki:fish/cooked_fish'],
  // c:cheeses（复数别名）含晶石奶酪、扭曲奶酪、谷物替代奶酪，全部归到天然乳酪族。当前无配方引用，登记以防未来命中。
  ['#c:cheeses', '#seki:cheese/natural_milk'],
  // 泛用蔬菜收口：Forge 遗留命名空间 forge:vegetables / forge:salad_ingredients（含金胡萝卜、花生、浆果、蘑菇）与泛用 c:crops（含仙人掌、可可豆、稻穗）以及 Create: Deepfried 的两个蔬菜族，全部并到 Seki 通用蔬菜。
  ['#forge:vegetables', '#seki:vegetables/common'],
  ['#forge:salad_ingredients', '#seki:vegetables/common'],
  ['#c:crops', '#seki:vegetables/common'],
  ['#create_deepfried:fd_vegetables', '#seki:vegetables/common'],
  ['#create_deepfried:vegetables', '#seki:vegetables/common'],
]

ServerEvents.recipes(event => {
  for (const [from, to] of SLOT_INPUT_TAG_REMAPS) {
    event.replaceInput({ input: from }, from, to)
  }
})
