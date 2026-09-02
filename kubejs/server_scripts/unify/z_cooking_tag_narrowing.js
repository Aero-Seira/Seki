// CUISINE-TAG-NARROW-01/02：烹饪配方只接受 Seki 收窄后的语义族。
// 这里在 recipe event 阶段统一替换旧通用输入；共享 c:* 标签本身不动，避免破坏非烹饪用途。
// 第二轮补齐运行时复核出的别名族：milk、wheat、egg、bread、butter、salt、matcha、yeast 等。

const INPUT_TAG_REMAPS = [
  // 乳品：普通牛奶制品与植物奶分开。椰奶/坚果奶不得混入烘焙、拉丝和凝乳逻辑。
  ['#c:drinks/milk', '#seki:ingredients/dairy_milk'],
  ['#c:milk', '#seki:ingredients/dairy_milk'],
  ['#c:foods/milk', '#seki:ingredients/dairy_milk'],

  // 米：烹饪输入只用可煮米粒；稻穗是收获阶段原料。
  ['#c:crops/rice', '#seki:rice/common'],
  ['#c:grain/rice', '#seki:rice/common'],

  // 小麦谷粒与面粉分开：筛粉器必须吃谷粒，烘焙面团再按种类吃普通粉或全麦粉。
  ['#c:wheat', '#seki:grains/wheat_common'],
  ['#c:crops/wheat', '#seki:grains/wheat_common'],

  // 面/粉：统一为普通小麦面粉；全麦是另一条语义链，需要精确声明。
  ['#c:flour', '#seki:flours/plain_wheat'],
  ['#c:flours', '#seki:flours/plain_wheat'],

  // 面/面食：黄瓜丝、恶魂面不是小麦主粮面食。
  ['#c:foods/pasta', '#seki:pasta/wheat'],
  ['#c:pasta', '#seki:pasta/wheat'],

  // 肉源：禁止下界兽/猪灵肉、内脏和腌火腿冒充普通生鲜猪肉/牛肉/羊肉。
  ['#c:foods/raw_pork', '#seki:meat/raw_pork_common'],
  ['#c:foods/raw_beef', '#seki:meat/raw_beef_common'],
  ['#c:foods/raw_mutton', '#seki:meat/raw_mutton_fresh'],
  ['#c:foods/raw_chicken', '#seki:meat/raw_poultry_common'],

  // 蛋和蘑菇：登记为厨房通用同概念基础料，避免未来奇幻变体自动混入。
  ['#c:eggs', '#seki:eggs/common'],
  ['#c:mushrooms', '#seki:mushrooms/culinary_common'],

  // 鱼：河豚及未审查的奇幻“鱼形物”不进入通用鱼料理。
  ['#c:raw_fishes', '#seki:fish/raw_common_safe'],
  ['#c:foods/safe_raw_fish', '#seki:fish/raw_common_safe'],

  // 蔬菜：金胡萝卜是附魔材料；花生是豆科油料。二者不能充当泛用蔬菜。
  ['#c:foods/vegetable', '#seki:vegetables/common'],
  ['#c:vegetables', '#seki:vegetables/common'],

  // 叶球：Farm & Charm 生菜曾被上游标签并进卷心菜族，这里强制分离。
  ['#c:crops/cabbage', '#seki:vegetables/cabbage_strict'],
  ['#c:foods/cabbage', '#seki:vegetables/cabbage_strict'],

  // 奶酪：晶石奶酪、扭曲奶酪和谷物替代奶酪只能走专属链。
  ['#c:cheese', '#seki:cheese/natural_milk'],

  // 糖：硬糖已经携带糖和附加工艺，不得回退当作白砂糖。
  ['#c:sugar', '#seki:ingredients/sugar_refined'],

  // 烘焙基础料：以“可互换的乳制黄油、盐调味品、抹茶、酵母”为准。
  ['#c:butter', '#seki:ingredients/butter_dairy'],
  ['#c:salt', '#seki:ingredients/salt_common'],
  ['#c:salts', '#seki:ingredients/salt_common'],
  ['#c:matcha', '#seki:ingredients/matcha'],
  ['#c:yeast', '#seki:ingredients/yeast'],

  // 面包：排除下界面包链、干面包边和烤吐司冒充任意三明治基底。
  ['#c:foods/bread', '#seki:breads/common'],
  ['#c:bread', '#seki:breads/common'],
  // 第三轮：Bakery / Farm & Charm 内部别名也必须归入 Seki 同语义族，
  // 防止沉浸式炉灶、料理碗和锅路线绕过 c:* 收敛。
  ['#bakery:bread', '#seki:breads/common'],
  ['#farm_and_charm:bread', '#seki:breads/common'],
  ['#bakery:milk', '#seki:ingredients/dairy_milk'],
  ['#farm_and_charm:milk', '#seki:ingredients/dairy_milk'],
  ['#bakery:eggs', '#seki:eggs/common'],
  ['#bakery:wheat', '#seki:grains/wheat_common'],
  ['#farm_and_charm:wheat', '#seki:grains/wheat_common'],
  ['#farm_and_charm:flour', '#seki:flours/plain_wheat'],
  ['#farm_and_charm:butter', '#seki:ingredients/butter_dairy'],
  ['#farm_and_charm:cabbage', '#seki:vegetables/cabbage_strict'],
  ['#farm_and_charm:pasta', '#seki:pasta/wheat'],
  ['#farm_and_charm:raw_fishes', '#seki:fish/raw_common_safe'],
  ['#farm_and_charm:raw_pork', '#seki:meat/raw_pork_common'],
  ['#farm_and_charm:raw_beef', '#seki:meat/raw_beef_common'],
  ['#farm_and_charm:raw_chicken', '#seki:meat/raw_poultry_common']
]

ServerEvents.recipes(event => {
  for (const [from, to] of INPUT_TAG_REMAPS) {
    event.replaceInput({ input: from }, from, to)
  }
})

