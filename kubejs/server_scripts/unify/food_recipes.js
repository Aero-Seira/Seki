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
  'bakeries:compat/create/whole_wheat_dough'
]

ServerEvents.recipes(event => {
  FOOD_RECIPE_REMOVALS.forEach(id => event.remove({ id: id }))

  event.shapeless('kaleidoscope_cookery:stuffed_dough_food', [
    '#c:foods/minced_beef',
    '#c:vegetables'
  ]).id('seki:dimsum/fresh_meat_filling')

  event.shapeless('seki:yeasted_dough', [
    'kaleidoscope_cookery:raw_dough',
    '#c:yeast'
  ]).id('seki:dimsum/yeasted_dough')

  event.shapeless('2x seki:raw_mantou', [
    'seki:fermented_dough'
  ]).id('seki:dimsum/raw_mantou')

  event.shapeless('2x seki:raw_baozi', [
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
    '#c:foods/raw_meat',
    '#c:foods/cabbage',
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
