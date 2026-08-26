// DIMSUM-01R: explicit wrappers, fermented dough, and shaped raw products.
StartupEvents.registry('item', event => {
  [
    'seki:dough_sheet',
    'seki:wonton_wrapper',
    'seki:yeasted_dough',
    'seki:fermented_dough',
    'seki:leavened_dough_sheet',
    'seki:raw_mantou',
    'seki:raw_baozi',
    'seki:raw_shengjian',
    'seki:raw_dumpling',
    'seki:raw_wonton',
    'seki:raw_meat_pie',

    // FLOUR-CHAIN-01 (v13): 新增面粉中间体（燕麦/瓦斯麦/恶魂米）
    'seki:oat_flour',
    'seki:kwat_flour',
    'seki:ghasmati_flour',
    'seki:corn_flour'
  ].forEach(id => event.create(id).maxStackSize(64))
})
