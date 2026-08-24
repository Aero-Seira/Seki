// TAG-02 / FIX-02: bridge only semantically interchangeable ingredients.
ServerEvents.tags('item', event => {
  event.add('c:salts', [
    'vintagedelight:salt_dust',
    'bakeries:salt',
    'kaleidoscope_chinesefood:salt'
  ])
  event.add('c:salt', 'ratatouille:salt')
  // FURNITURE-BRIDGE-01: bridge refurbished_furniture isolated ingredients.
  event.add('c:salt', 'refurbished_furniture:sea_salt')
  event.add('c:cheese', 'refurbished_furniture:cheese')
  event.add('c:jams', [
    'refurbished_furniture:glow_berry_jam',
    'refurbished_furniture:sweet_berry_jam'
  ])

  event.add('c:flour', ['bakeries:flour', 'create:wheat_flour'])
  event.add('c:flours', ['kaleidoscope_cookery:flour', 'farm_and_charm:flour'])
  const commonDoughs = [
    'farmersdelight:wheat_dough',
    'create:dough',
    'farm_and_charm:dough',
    'bakeries:salted_dough',
    'ratatouille:salty_dough'
  ]
  event.add('c:dough', commonDoughs)
  event.add('c:foods/dough', commonDoughs)

  event.add('c:foods/minced_beef', [
    'farmersdelight:minced_beef',
    'farm_and_charm:minced_beef'
  ])
  event.add('c:yeast', ['farm_and_charm:yeast', 'saraddons:yeast'])
  event.add('c:crops/lettuce', 'farm_and_charm:lettuce')
  event.add('c:foods/tomato', [
    'farm_and_charm:tomato',
    'kaleidoscope_cookery:tomato'
  ])

  event.remove('c:eggs', 'kaleidoscope_cookery:fried_egg')
  event.remove('c:eggs', 'minecraft:turtle_egg')
  event.remove('c:crops/tomato', 'farmersdelight:rotten_tomato')

  // FIX-03 (v9 D09/D17): ghasta 与 strider_slice 不是鱼，清出 raw_fish / safe_raw_fish 误标
  event.remove('c:foods/raw_fish', 'mynethersdelight:ghasta')
  event.remove('c:foods/raw_fish', 'mynethersdelight:strider_slice')
  event.remove('c:foods/safe_raw_fish', 'mynethersdelight:ghasta')
  event.remove('c:foods/safe_raw_fish', 'mynethersdelight:strider_slice')

  // TAG-03 (v9 D07/D08): 幻想蛋与恶魂米移出普通食材链（与既有 turtle_egg 先例一致；专属菜走精确物品）
  ;[
    'alexscaves:atlatitan_egg',
    'alexscaves:grottoceratops_egg',
    'alexscaves:relicheirus_egg',
    'alexscaves:subterranodon_egg',
    'alexscaves:tremorsaurus_egg',
    'alexscaves:tremorzilla_egg',
    'alexscaves:vallumraptor_egg',
    'mynethersdelight:strider_egg'
  ].forEach(id => event.remove('c:eggs', id))
  event.remove('c:crops/rice', 'mynethersdelight:ghasmati')

  // CUISINE-BRIDGE-01: youkaisfeasts 料理台黄瓜切片跨模组（Cultural Delight 切黄瓜=黄瓜片）
  event.add('c:foods/slices/cucumber', 'culturaldelights:cut_cucumber')

  // TAG-POLL-01 (2026-08-01, 现实烹饪领域除污, 例外台账): 非鱼/成品/熟品/非肉类成员移出原料标签
  ;[
    'alexscaves:sea_pig',
    'alexscaves:trilocaris_tail'
  ].forEach(id => {
    event.remove('c:foods/raw_fish', id)
    event.remove('c:foods/safe_raw_fish', id)
  })
  event.remove('c:foods/squid', 'minersdelight:baked_squid')
  event.remove('c:foods/tropical_fish', 'kaleidoscope_cookery:sashimi')
  event.remove('c:foods/berry', 'create:chocolate_glazed_berries')
  event.remove('c:foods/raw_beef', 'candlelight:beef_tartare')
  event.remove('c:foods/raw_meat', 'candlelight:beef_tartare')
  event.remove('c:foods/cooked_meat', 'minersdelight:vegan_patty')
  event.remove('c:foods/cooked_egg', 'immortalers_delight:fried_sniffer_egg')
  event.remove('c:foods/cooked_egg', 'mynethersdelight:golden_egg')
  event.remove('c:foods/cooked_egg', 'mynethersdelight:enchanted_golden_egg')
  // TAG-POLL-02 (v10 P1-3): 鳟鱼移出全局鲑鱼标签（物种域；鳟鱼由 seki:fish/raw_trout 承接）
  event.remove('c:foods/raw_salmon', 'aquaculture:brown_trout')
  event.remove('c:foods/raw_salmon', 'aquaculture:rainbow_trout')

  // TAG-POLL-03 (v11 D-M5): 草莓是水果，移出蔬菜标签（例外台账）
  event.remove('c:vegetables', 'farm_and_charm:strawberry')
})