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
    'seki:raw_meat_pie'
  ].forEach(id => event.create(id).maxStackSize(64))
})
