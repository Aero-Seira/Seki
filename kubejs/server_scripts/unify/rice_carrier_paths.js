// RICE-CARRIER-02 / RICE-CARRIER-03
// Kaleidoscope ChineseFood and Kaleidoscope Cookery expose nine covered-rice
// dishes through kaleidoscope_cookery:rice_bowl crafting recipes. The correct
// pot recipes are restored by kubejs/data; this script removes those routes.

const COVERED_RICE_OUTPUTS = [
  'kaleidoscope_chinesefood:beef_with_scrambled_eggs_rice',
  'kaleidoscope_chinesefood:stir_fried_three_fresh_vegetables_rice',
  'kaleidoscope_chinesefood:stir_fried_yellow_beef_rice',
  'kaleidoscope_chinesefood:twice_cooked_pork_rice',
  'kaleidoscope_cookery:braised_beef_rice_bowl',
  'kaleidoscope_cookery:fish_flavored_shredded_pork_rice_bowl',
  'kaleidoscope_cookery:scramble_egg_with_tomatoes_rice_bowl',
  'kaleidoscope_cookery:stir_fried_pork_with_peppers_rice_bowl',
  'kaleidoscope_cookery:sweet_and_sour_pork_rice_bowl'
]

ServerEvents.recipes(event => {
  COVERED_RICE_OUTPUTS.forEach(output => {
    // Current 1.1.8 path: recipe ID equals its covered-rice output ID.
    event.remove({ id: output })

    // Compatibility guard for the older runtime-injected shapeless variant.
    event.remove({
      type: 'minecraft:crafting_shapeless',
      output: output
    })
  })
})
