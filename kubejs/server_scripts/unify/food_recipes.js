const FOOD_RECIPE_REMOVALS = [
  'kaleidoscope_cookery:stuffed_dough_food',
  'kaleidoscope_cookery:stuffed_dough_food_steamer',
  'kaleidoscope_cookery:raw_dough_steamer',
  'kaleidoscope_cookery:steamer/mantou',
  'youkaisfeasts:steaming/mantou_from_foods_dough_wheat',
  'youkaisfeasts:raw_bun',
  'kaleidoscope_cookery:steamer/baozi',
  'kaleidoscope_chinesefood:stockpot/sichuan_wonton',
  'kaleidoscope_chinesefood:flex_stockpot/sichuan_wonton',
  'kaleidoscope_chinesefood:stockpot/wonton_noodles',
  'kaleidoscope_chinesefood:flex_stockpot/wonton_noodles',
  'minecraft:samsa_from_smelting',
  'minecraft:samsa_from_smoking',
  'minecraft:samsa_from_campfire_cooking',
  'bakeries:compat/create/cocoa_dough',
  'bakeries:compat/create/salted_dough',
  'bakeries:compat/create/sweet_dough',
  'bakeries:compat/create/whole_wheat_dough',
  'letsdocompat:farmersdelight/pot_cooking/apple_jam',
  'letsdocompat:farmersdelight/pot_cooking/barley_soup',
  'letsdocompat:farmersdelight/pot_cooking/chicken_teriyaki',
  'letsdocompat:farmersdelight/pot_cooking/chocolate',
  'letsdocompat:farmersdelight/pot_cooking/chocolate_jam',
  'letsdocompat:farmersdelight/pot_cooking/chocolate_mousse',
  'letsdocompat:farmersdelight/pot_cooking/corn_grits',
  'letsdocompat:farmersdelight/pot_cooking/dumplings',
  'letsdocompat:farmersdelight/pot_cooking/glowberry_jam',
  'letsdocompat:farmersdelight/pot_cooking/goulash',
  'letsdocompat:farmersdelight/pot_cooking/khinkali',
  'letsdocompat:farmersdelight/pot_cooking/mushroom_soup',
  'letsdocompat:farmersdelight/pot_cooking/nettle_tea',
  'letsdocompat:farm_and_charm/cooking/onion_soup',
  'letsdocompat:farm_and_charm/farm_and_charm/farmersdelight/pot_cooking/onion_soup',
  'letsdocompat:farmersdelight/pot_cooking/pasta_with_mozzarella',
  'letsdocompat:farmersdelight/pot_cooking/potato_soup',
  'letsdocompat:farmersdelight/pot_cooking/pudding',
  'letsdocompat:farmersdelight/pot_cooking/ribwort_tea',
  'letsdocompat:farmersdelight/pot_cooking/salmon_on_white_wine',
  'letsdocompat:farmersdelight/pot_cooking/sausage',
  'letsdocompat:farmersdelight/pot_cooking/simple_tomato_soup',
  'letsdocompat:farmersdelight/pot_cooking/strawberry_jam',
  'letsdocompat:farmersdelight/pot_cooking/strawberry_tea',
  'letsdocompat:farmersdelight/pot_cooking/sweetberry_jam',
  'letsdocompat:farmersdelight/pot_cooking/tomato_soup',
  'letsdocompat:farmersdelight/pot_cooking/yeast',
  'letsdocompat:farm_and_charm/cooking/cherry_petal_tea',
  'letsdocompat:farm_and_charm/cooking/evolutcorn_juice',
  'letsdocompat:farm_and_charm/cooking/pitcher_plant_tea',
  'letsdocompat:farm_and_charm/cooking/torchflower_tea',
  'letsdocompat:farm_and_charm/farmersdelight/cooking/punch_ghasttear',
  'letsdocompat:farm_and_charm/food/bubble_tea',
  'letsdocompat:farm_and_charm/food/chorus_flower_tea',
  'letsdocompat:farm_and_charm/food/chorus_fruit_milk_tea',
  'letsdocompat:farm_and_charm/food/chorus_fruit_wine',
  'letsdocompat:farm_and_charm/cooking/baked_pollock_with_carrots',
  'minecraft:flour_from_1_wheat',
  'minecraft:flour_from_2_wheat',
  'minecraft:flour_from_3_wheat',
  'minecraft:flour_from_4_wheat',
  'minecraft:flour_from_5_wheat',
  'minecraft:flour_from_6_wheat',
  'minecraft:flour_from_7_wheat',
  'minecraft:flour_from_8_wheat',
  'kaleidoscope_chinesefood:flex_pot/red_rice_roll',
  'kaleidoscope_chinesefood:flex_stockpot/lamb_pilaf',
  'kaleidoscope_chinesefood:flex_stockpot/maocai',
  'minecraft:bread',
  'quark:tweaks/crafting/utility/bent/bread',
  'create:campfire_cooking/bread',
  'create:smelting/bread',
  'create:smoking/bread',
  'farmersdelight:bread_from_smelting',
  'farmersdelight:bread_from_smoking',
  'mynethersdelight:bread_from_smelting',
  'mynethersdelight:bread_from_smoking',
  'aquaculture:turtle_soup',
  'mynethersdelight:crafting/burnt_roll',
  'mynethersdelight:crafting/hotcream_bucket',
  'mynethersdelight:crafting/hot_wings_bucket_alt',
  'vintagedelight:jam/apple_sauce_jar',
  'vintagedelight:jam/gearo_berry_jam_jar',
  'vintagedelight:jam/glow_berry_jam_jar',
  'vintagedelight:jam/nut_mash_jar',
  'vintagedelight:jam/pepper_jam_jar',
  'vintagedelight:jam/relish_jar',
  'vintagedelight:jam/sweet_berry_jam_jar',
  'vintagedelight:jam/vinegar_jar',
  'farmersdelight:pie_crust',
  'create_bic_bit:crafting/wrapped_chocolate_glazed_stroopwafel',
  'farmersdelight:cod_roll',
  'farmersdelight:kelp_roll',
  'farmersdelight:salmon_roll',
  'alexscaves:deep_sea_sushi_roll',
  'aquaculture:sushi',
  'aquaculturedelight:fried_perch_roll',
  'aquaculturedelight:raw_fish_fillet_roll',
  'culturalrecipes:calamari_roll',
  'culturalrecipes:chicken_roll',
  'culturalrecipes:egg_roll',
  'culturalrecipes:midori_roll',
  'culturalrecipes:pufferfish_roll',
  'culturalrecipes:tropical_roll',
  'culturalrecipes:rice_ball',
  'immortalers_delight:hamburger_meat_sushi',
  'immortalers_delight:incandescence_sushi',
  'immortalers_delight:kwat_pocket_sushi',
  'immortalers_delight:pitcher_sushi',
  'immortalers_delight:pufferfish_roll',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/dried_fish',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/fish_and_chips',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/fish_chorba',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/fish_stew',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/giant_tentacles',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/sauce_grilled_fish',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/scarlet_pierogi',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/takoyaki',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/tuna_spaghetti',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/tuscan_salmon',
  'letsdocompat:farmersdelight/farm_and_charm/cooking/udumbara_cake',
]

ServerEvents.recipes(event => {
  FOOD_RECIPE_REMOVALS.forEach(id => event.remove({ id: id }))

  // 规范主轴：面粉必须先成为未处理面团；直接小麦/宽泛粉批量合成路线退役。
  event.shapeless('kaleidoscope_cookery:raw_dough', [
    'minecraft:water_bucket',
    'kaleidoscope_cookery:flour'
  ]).id('seki:dimsum/raw_dough_from_flour')
  event.shapeless('kaleidoscope_cookery:stuffed_dough_food', [
    '#c:foods/minced_beef',
    '#seki:vegetables/common'
  ]).id('seki:dimsum/fresh_meat_filling')

  event.shapeless('seki:yeasted_dough', [
    'kaleidoscope_cookery:raw_dough',
    '#seki:ingredients/yeast'
  ]).id('seki:dimsum/yeasted_dough')

  event.shapeless('2x seki:raw_mantou', [
    'seki:fermented_dough'
  ]).id('seki:dimsum/raw_mantou')

  event.shapeless('3x seki:raw_baozi', [
    'seki:leavened_dough_sheet',
    'seki:leavened_dough_sheet',
    'kaleidoscope_cookery:stuffed_dough_food',
    'kaleidoscope_cookery:stuffed_dough_food'
  ]).id('seki:dimsum/raw_baozi')

  event.shapeless('2x seki:raw_shengjian', [
    'seki:leavened_dough_sheet',
    'seki:leavened_dough_sheet',
    'kaleidoscope_cookery:stuffed_dough_food'
  ]).id('seki:dimsum/raw_shengjian')

  event.shapeless('2x seki:raw_dumpling', [
    'seki:dough_sheet',
    'kaleidoscope_cookery:stuffed_dough_food'
  ]).id('seki:dimsum/raw_dumpling')

  event.shapeless('3x seki:raw_wonton', [
    'seki:wonton_wrapper',
    'kaleidoscope_cookery:stuffed_dough_food'
  ]).id('seki:dimsum/raw_wonton')

  event.shapeless('2x seki:raw_meat_pie', [
    'seki:dough_sheet',
    'kaleidoscope_cookery:stuffed_dough_food',
    'kaleidoscope_cookery:stuffed_dough_food'
  ]).id('seki:dimsum/raw_meat_pie')

  event.shapeless('4x youkaisfeasts:raw_bun', [
    'seki:leavened_dough_sheet',
    'seki:leavened_dough_sheet',
    '#seki:meat/raw_livestock_common',
    '#seki:vegetables/cabbage_strict',
    '#c:crops/onion',
    '#c:crops/soybean'
  ]).id('seki:dimsum/youkai_raw_bun')

  event.custom({
    'neoforge:conditions': [{
      type: 'bakeries:config',
      value_type: 'boolean',
      config_key: 'fermentationGameplay',
      expected: 'true'
    }],
    type: 'bakeries:fermentation_box',
    ingredient: { item: 'seki:yeasted_dough' },
    results: [{ id: 'seki:fermented_dough', count: 1 }]
  }).id('seki:fermentation_box/fermented_dough')

  event.custom({
    type: 'kaleidoscope_cookery:chopping_board',
    cut_count: 4,
    ingredient: { item: 'kaleidoscope_cookery:raw_dough' },
    model_id: 'kaleidoscope_cookery:raw_dough',
    result: { count: 2, id: 'seki:dough_sheet' }
  }).id('seki:chopping_board/dough_sheet')

  event.custom({
    type: 'kaleidoscope_cookery:chopping_board',
    cut_count: 4,
    ingredient: { item: 'seki:dough_sheet' },
    model_id: 'seki:dough_sheet',
    result: { count: 2, id: 'seki:wonton_wrapper' }
  }).id('seki:chopping_board/wonton_wrapper')

  event.custom({
    type: 'kaleidoscope_cookery:chopping_board',
    cut_count: 4,
    ingredient: { item: 'seki:fermented_dough' },
    model_id: 'seki:fermented_dough',
    result: { count: 2, id: 'seki:leavened_dough_sheet' }
  }).id('seki:chopping_board/leavened_dough_sheet')

  event.custom({
    type: 'kaleidoscope_cookery:steamer',
    ingredient: { item: 'seki:raw_mantou' },
    result: { count: 1, id: 'kaleidoscope_cookery:mantou' }
  }).id('seki:steamer/mantou')

  event.custom({
    type: 'youkaisfeasts:steaming',
    category: 'misc',
    cookingtime: 200,
    experience: 0.0,
    ingredient: { item: 'seki:raw_mantou' },
    result: { count: 1, id: 'youkaisfeasts:mantou' }
  }).id('seki:youkai_steaming/mantou')

  event.custom({
    type: 'kaleidoscope_cookery:steamer',
    ingredient: { item: 'seki:raw_baozi' },
    result: { count: 1, id: 'kaleidoscope_cookery:baozi' }
  }).id('seki:steamer/baozi')

  event.custom({
    type: 'minecraft:smoking',
    category: 'food',
    cookingtime: 100,
    experience: 0.35,
    ingredient: { item: 'seki:raw_baozi' },
    result: { count: 1, id: 'kaleidoscope_cookery:samsa' }
  }).id('seki:smoking/samsa')

  event.custom({
    type: 'minecraft:campfire_cooking',
    category: 'food',
    cookingtime: 600,
    experience: 0.35,
    ingredient: { item: 'seki:raw_baozi' },
    result: { count: 1, id: 'kaleidoscope_cookery:samsa' }
  }).id('seki:campfire_cooking/samsa')
})








