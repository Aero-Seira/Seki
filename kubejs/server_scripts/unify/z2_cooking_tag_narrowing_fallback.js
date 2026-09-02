// CUISINE-TAG-NARROW-FALLBACK-02 — DO NOT EDIT.
// Generated from Delightify-level runtime snapshot: 2026-08-27T07:26:19.857388Z
// The exact recipes below demonstrably retained broad c:* inputs after the first pass,
// or belong to known custom/bakery bypass families identified by that same snapshot.
// The array is a copied raw_json with reviewed ingredient tags rewritten deterministically.

const NARROWED_INPUT_TAGS = {
  "c:drinks/milk": "seki:ingredients/dairy_milk",
  "c:milk": "seki:ingredients/dairy_milk",
  "c:foods/milk": "seki:ingredients/dairy_milk",
  "c:crops/rice": "seki:rice/common",
  "c:grain/rice": "seki:rice/common",
  "c:wheat": "seki:grains/wheat_common",
  "c:crops/wheat": "seki:grains/wheat_common",
  "c:flour": "seki:flours/plain_wheat",
  "c:flours": "seki:flours/plain_wheat",
  "c:foods/pasta": "seki:pasta/wheat",
  "c:pasta": "seki:pasta/wheat",
  "c:foods/raw_pork": "seki:meat/raw_pork_common",
  "c:foods/raw_beef": "seki:meat/raw_beef_common",
  "c:foods/raw_mutton": "seki:meat/raw_mutton_fresh",
  "c:foods/raw_chicken": "seki:meat/raw_poultry_common",
  "c:eggs": "seki:eggs/common",
  "c:mushrooms": "seki:mushrooms/culinary_common",
  "c:raw_fishes": "seki:fish/raw_common_safe",
  "c:foods/safe_raw_fish": "seki:fish/raw_common_safe",
  "c:foods/vegetable": "seki:vegetables/common",
  "c:vegetables": "seki:vegetables/common",
  "c:crops/cabbage": "seki:vegetables/cabbage_strict",
  "c:foods/cabbage": "seki:vegetables/cabbage_strict",
  "c:cheese": "seki:cheese/natural_milk",
  "c:sugar": "seki:ingredients/sugar_refined",
  "c:butter": "seki:ingredients/butter_dairy",
  "c:salt": "seki:ingredients/salt_common",
  "c:salts": "seki:ingredients/salt_common",
  "c:matcha": "seki:ingredients/matcha",
  "c:yeast": "seki:ingredients/yeast",
  "c:foods/bread": "seki:breads/common",
  "c:bread": "seki:breads/common"
};

const FALLBACK_TARGETS = [
  {
    "id": "alexsdelight:bunfungus_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "alexsdelight:cooked_bunfungus"
        },
        {
          "item": "farmersdelight:red_mushroom_colony"
        },
        {
          "item": "farmersdelight:red_mushroom_colony"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "alexsdelight:bunfungus_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "alexsdelight:cooking/acacia_blossom_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.33,
      "ingredients": [
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "alexsmobs:acacia_blossom"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "alexsdelight:acacia_blossom_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "alexsdelight:cooking/kangaroo_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "tag": "alexsdelight:cooked_kangaroo"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "alexsdelight:kangaroo_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "alexsdelight:cooking/lobster_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "alexsmobs:lobster_tail"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "alexsdelight:lobster_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "alexsdelight:gongylidia_bruschetta",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "alexsmobs:gongylidia"
        },
        {
          "tag": "seki:breads/common"
        },
        {
          "item": "alexsmobs:fish_oil"
        }
      ],
      "result": {
        "count": 2,
        "id": "alexsdelight:gongylidia_bruschetta"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "aquaculturedelight:cooking/baked_pollock_with_carrots",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/raw_pollock"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "aquaculturedelight:baked_pollock_with_carrots"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "aquaculturedelight:cooking/bass_stew",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/raw_bass"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "aquaculturedelight:bass_stew"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "aquaculturedelight:cooking/buckling",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/raw_herring"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "aquaculturedelight:buckling"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "aquaculturedelight:cooking/unusual_fish_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/raw_piranha"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "farmersdelight:pumpkin_slice"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "aquaculturedelight:unusual_fish_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "bakeries:blender/bottle_cream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:bottle_cream"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:blender/cocoa_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "bakeries:cocoa_powder"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:cocoa_dough"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:blender/honey_butter",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:honey_bottle"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "output": {
        "count": 4,
        "id": "bakeries:honey_butter"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:blender/matcha_parfait",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:bottle_cream"
        },
        {
          "tag": "seki:ingredients/matcha"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:matcha_parfait"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:blender/salted_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:water_bucket"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:salted_dough"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:blender/sweet_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:sweet_dough"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:blender/whole_wheat_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "item": "minecraft:water_bucket"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:whole_wheat_dough"
      },
      "type": "bakeries:blender"
    }
  },
  {
    "id": "bakeries:brown_sugar_roll_dough",
    "recipe": {
      "category": "misc",
      "key": {
        "a": {
          "item": "bakeries:round_bread_dough"
        },
        "b": {
          "tag": "seki:ingredients/butter_dairy"
        },
        "c": {
          "item": "bakeries:brown_sugar_cube"
        }
      },
      "pattern": [
        "abc",
        "aaa"
      ],
      "result": {
        "count": 4,
        "id": "bakeries:brown_sugar_roll_dough"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "bakeries:compat/create/bottle_cream",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "results": [
        {
          "id": "bakeries:bottle_cream"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:compat/create/honey_butter",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:honey_bottle"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "results": [
        {
          "count": 4,
          "id": "bakeries:honey_butter"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:compat/create/matcha_parfait",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:bottle_cream"
        },
        {
          "tag": "seki:ingredients/matcha"
        }
      ],
      "results": [
        {
          "id": "bakeries:matcha_parfait"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:drink/brown_sugar_latte",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:brown_sugar_cube"
        },
        {
          "item": "bakeries:moka_pot_fill"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:brown_sugar_latte"
      },
      "type": "bakeries:drink"
    }
  },
  {
    "id": "bakeries:drink/cream_bingle_coffee",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:packed_ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:moka_pot_fill"
        },
        {
          "item": "bakeries:foamed_cream"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:cream_bingle_coffee"
      },
      "type": "bakeries:drink"
    }
  },
  {
    "id": "bakeries:drink/iced_latte",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:moka_pot_fill"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:iced_latte"
      },
      "type": "bakeries:drink"
    }
  },
  {
    "id": "bakeries:drink/matcha_latte",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/matcha"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:matcha_latte"
      },
      "type": "bakeries:drink"
    }
  },
  {
    "id": "bakeries:drink/taro_milk",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:mashed_taro"
        }
      ],
      "output": {
        "count": 1,
        "id": "bakeries:taro_milk"
      },
      "type": "bakeries:drink"
    }
  },
  {
    "id": "bakeries:flour_sieve/flour",
    "recipe": {
      "ingredient": {
        "tag": "seki:grains/wheat_common"
      },
      "output": {
        "count": 1,
        "id": "bakeries:flour"
      },
      "type": "bakeries:flour_sieve"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/butter_flour_sand",
    "recipe": {
      "ingredients": [
        {
          "item": "bakeries:flour"
        },
        {
          "item": "bakeries:flour"
        },
        {
          "item": "bakeries:flour"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "results": [
        {
          "id": "bakeries:butter_flour_sand"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/cocoa_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "bakeries:cocoa_powder"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "amount": 250,
          "tag": "seki:ingredients/dairy_milk",
          "type": "neoforge:tag"
        }
      ],
      "results": [
        {
          "id": "bakeries:cocoa_dough"
        },
        {
          "id": "minecraft:glass_bottle"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/honey_butter",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "amount": 250,
          "tag": "c:honey",
          "type": "neoforge:tag"
        }
      ],
      "results": [
        {
          "count": 4,
          "id": "bakeries:honey_butter"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/matcha_parfait",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "bakeries:bottle_cream"
        },
        {
          "tag": "seki:ingredients/matcha"
        }
      ],
      "results": [
        {
          "id": "bakeries:matcha_parfait"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/salted_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "amount": 250,
          "components": {},
          "fluids": "minecraft:water",
          "type": "neoforge:components"
        }
      ],
      "results": [
        {
          "id": "bakeries:salted_dough"
        },
        {
          "id": "minecraft:glass_bottle"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/sweet_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "amount": 250,
          "tag": "seki:ingredients/dairy_milk",
          "type": "neoforge:tag"
        }
      ],
      "results": [
        {
          "id": "bakeries:sweet_dough"
        },
        {
          "id": "minecraft:glass_bottle"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:integration/create/mixing/whole_wheat_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "tag": "seki:flours/whole_wheat"
        },
        {
          "item": "bakeries:bottle_yeast"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "amount": 250,
          "components": {},
          "fluids": "minecraft:water",
          "type": "neoforge:components"
        }
      ],
      "results": [
        {
          "id": "bakeries:whole_wheat_dough"
        },
        {
          "id": "minecraft:glass_bottle"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "bakeries:pastry",
    "recipe": {
      "category": "misc",
      "key": {
        "a": {
          "item": "bakeries:sweet_dough"
        },
        "b": {
          "tag": "seki:ingredients/butter_dairy"
        }
      },
      "pattern": [
        "a",
        "b"
      ],
      "result": {
        "count": 4,
        "id": "bakeries:pastry"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "bakeries:pineapple_bun_dough",
    "recipe": {
      "category": "misc",
      "key": {
        "a": {
          "item": "bakeries:round_bread_dough"
        },
        "b": {
          "tag": "seki:ingredients/butter_dairy"
        },
        "c": {
          "tag": "seki:ingredients/sugar_refined"
        }
      },
      "pattern": [
        "abc",
        "aaa"
      ],
      "result": {
        "count": 4,
        "id": "bakeries:pineapple_bun_dough"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "bakeries:pineapple_oil",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "bakeries:pineapple_bun"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "result": {
        "count": 1,
        "id": "bakeries:pineapple_oil"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "bakeries:raw_egg_tart",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "bakeries:egg_tart_shell"
        },
        {
          "item": "bakeries:egg_tart_shell"
        },
        {
          "item": "bakeries:egg_tart_shell"
        },
        {
          "item": "bakeries:egg_tart_shell"
        },
        {
          "item": "bakeries:egg_tart_shell"
        },
        {
          "item": "bakeries:egg_tart_shell"
        },
        {
          "item": "bakeries:bottle_cream"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "result": {
        "count": 6,
        "id": "bakeries:raw_egg_tart"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "bakeries:salt_croissant_dough",
    "recipe": {
      "category": "misc",
      "key": {
        "a": {
          "item": "bakeries:croissant_dough"
        },
        "b": {
          "tag": "seki:ingredients/salt_common"
        }
      },
      "pattern": [
        "ab ",
        "aaa"
      ],
      "result": {
        "count": 4,
        "id": "bakeries:salt_croissant_dough"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "bakeries:salt_yolk",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "bakeries:raw_egg_yolk"
        },
        {
          "item": "bakeries:raw_egg_yolk"
        },
        {
          "item": "bakeries:raw_egg_yolk"
        },
        {
          "item": "bakeries:raw_egg_yolk"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 4,
        "id": "bakeries:salt_yolk"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "barbequesdelight:kebab_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "barbequesdelight:grilled_skewers"
        },
        {
          "tag": "barbequesdelight:grilled_skewers"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "c:foods/onion"
        }
      ],
      "result": {
        "count": 1,
        "id": "barbequesdelight:kebab_sandwich"
      },
      "type": "barbequesdelight:combine"
    }
  },
  {
    "id": "barbequesdelight:kebab_wrap",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "barbequesdelight:grilled_skewers"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "barbequesdelight:kebab_wrap"
      },
      "type": "barbequesdelight:combine"
    }
  },
  {
    "id": "barbequesdelight:recipes/skewering/raw_beef_skewer",
    "recipe": {
      "ingredient": {
        "tag": "seki:meat/raw_beef"
      },
      "ingredientCount": 2,
      "output": {
        "count": 1,
        "id": "barbequesdelight:raw_beef_skewer"
      },
      "side": {
        "tag": "seki:vegetables/cabbage_strict"
      },
      "sideCount": 2,
      "tool": {
        "item": "minecraft:stick"
      },
      "type": "barbequesdelight:skewering"
    }
  },
  {
    "id": "barbequesdelight:recipes/skewering/raw_chicken_skewer",
    "recipe": {
      "ingredient": {
        "tag": "seki:meat/raw_poultry_common"
      },
      "ingredientCount": 2,
      "output": {
        "count": 1,
        "id": "barbequesdelight:raw_chicken_skewer"
      },
      "side": {
        "tag": "c:foods/onion"
      },
      "sideCount": 2,
      "tool": {
        "item": "minecraft:stick"
      },
      "type": "barbequesdelight:skewering"
    }
  },
  {
    "id": "barbequesdelight:recipes/skewering/raw_lamb_skewer",
    "recipe": {
      "ingredient": {
        "tag": "seki:meat/raw_mutton_fresh"
      },
      "ingredientCount": 4,
      "output": {
        "count": 1,
        "id": "barbequesdelight:raw_lamb_skewer"
      },
      "sideCount": 0,
      "tool": {
        "item": "minecraft:stick"
      },
      "type": "barbequesdelight:skewering"
    }
  },
  {
    "id": "barbequesdelight:recipes/skewering/raw_pork_sausage_skewer",
    "recipe": {
      "ingredient": {
        "tag": "seki:meat/raw_pork_common"
      },
      "ingredientCount": 4,
      "output": {
        "count": 1,
        "id": "barbequesdelight:raw_pork_sausage_skewer"
      },
      "sideCount": 0,
      "tool": {
        "item": "minecraft:stick"
      },
      "type": "barbequesdelight:skewering"
    }
  },
  {
    "id": "barbequesdelight:recipes/skewering/raw_vegetable_skewer",
    "recipe": {
      "ingredient": {
        "tag": "seki:vegetables/common"
      },
      "ingredientCount": 2,
      "output": {
        "count": 1,
        "id": "barbequesdelight:raw_vegetable_skewer"
      },
      "side": {
        "tag": "c:foods/fruit"
      },
      "sideCount": 2,
      "tool": {
        "item": "minecraft:stick"
      },
      "type": "barbequesdelight:skewering"
    }
  },
  {
    "id": "brewinandchewin:cooking/cheesy_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "item": "brewinandchewin:flaxen_cheese_wedge"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "c:foods/tomato"
        },
        {
          "tag": "seki:fish/raw_common_safe"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "brewinandchewin:cheesy_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "brewinandchewin:cooking/creamy_onion_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "brewinandchewin:foods/cheese_wedge"
        },
        {
          "tag": "c:foods/onion"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "brewinandchewin:creamy_onion_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "brewinandchewin:cooking/fiery_fondue_pot",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:cauldron"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "brewinandchewin:scarlet_cheese_wheel"
        },
        {
          "item": "farmersdelight:ham"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "brewinandchewin:fiery_fondue_pot"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "brewinandchewin:cooking/horror_lasagna",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "item": "brewinandchewin:scarlet_cheese_wedge"
        },
        {
          "tag": "c:crops/beetroot"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "brewinandchewin:foods/cheese_wedge"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "brewinandchewin:horror_lasagna"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "brewinandchewin:cooking/scarlet_pierogi",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "item": "brewinandchewin:scarlet_cheese_wedge"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:doughs/egg_pasta"
        },
        {
          "item": "minecraft:nether_wart"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "brewinandchewin:scarlet_pierogi"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "brewinandchewin:cooking/vegetable_omelet",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "brewinandchewin:foods/cheese_wedge"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/onion"
        },
        {
          "tag": "c:crops/carrot"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "brewinandchewin:vegetable_omelet"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "brewinandchewin:fermenting/bloody_mary_from_vodka",
    "recipe": {
      "base_fluid": {
        "amount": 1000,
        "ingredient": {
          "tag": "#brewinandchewin:vodka"
        },
        "unit": "millibuckets"
      },
      "experience": 1,
      "fermenting_time": 4800,
      "ingredients": [
        {
          "tag": "c:crops/tomato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:sweet_berries"
        },
        []
      ],
      "result": {
        "amount": 1000,
        "id": "brewinandchewin:bloody_mary"
      },
      "temperature": 4,
      "type": "brewinandchewin:fermenting",
      "unit": "millibuckets"
    }
  },
  {
    "id": "brewinandchewin:fermenting/egg_grog_from_milk",
    "recipe": {
      "base_fluid": {
        "amount": 1000,
        "ingredient": {
          "tag": "#c:milk"
        },
        "unit": "millibuckets"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:sugar"
        },
        []
      ],
      "result": {
        "amount": 1000,
        "id": "brewinandchewin:egg_grog"
      },
      "type": "brewinandchewin:fermenting",
      "unit": "millibuckets"
    }
  },
  {
    "id": "brewinandchewin:fermenting/kimchi",
    "recipe": {
      "category": "meals",
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:kelp"
        },
        []
      ],
      "result": {
        "count": 2,
        "id": "brewinandchewin:kimchi"
      },
      "temperature": 4,
      "type": "brewinandchewin:fermenting"
    }
  },
  {
    "id": "brewinandchewin:fermenting/rice_wine_from_water",
    "recipe": {
      "base_fluid": {
        "amount": 1000,
        "ingredient": {
          "tag": "#c:water"
        },
        "unit": "millibuckets"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        [],
        []
      ],
      "result": {
        "amount": 1000,
        "id": "brewinandchewin:rice_wine"
      },
      "type": "brewinandchewin:fermenting",
      "unit": "millibuckets"
    }
  },
  {
    "id": "casualnessdelight:quiche_lorraine",
    "recipe": {
      "category": "misc",
      "key": {
        "B": {
          "item": "farmersdelight:cooked_bacon"
        },
        "D": {
          "item": "farmersdelight:smoked_ham"
        },
        "O": {
          "item": "farmersdelight:pie_crust"
        },
        "e": {
          "tag": "seki:eggs/common"
        },
        "m": {
          "tag": "seki:ingredients/dairy_milk"
        }
      },
      "pattern": [
        "eee",
        "BDB",
        "mOm"
      ],
      "result": {
        "count": 1,
        "id": "casualnessdelight:quiche_lorraine"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "casualnessdelight:raw_chicken_bobo_chicken",
    "recipe": {
      "category": "misc",
      "key": {
        "D": {
          "tag": "seki:meat/raw_poultry_common"
        },
        "l": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        " D",
        "l "
      ],
      "result": {
        "count": 1,
        "id": "casualnessdelight:raw_chicken_bobo_chicken"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "casualnessdelight:stargazy_pie",
    "recipe": {
      "category": "misc",
      "key": {
        "D": {
          "tag": "seki:doughs/flatbread"
        },
        "O": {
          "item": "farmersdelight:pie_crust"
        },
        "e": {
          "tag": "c:foods/cooked_egg"
        },
        "m": {
          "tag": "seki:ingredients/dairy_milk"
        },
        "s": {
          "tag": "seki:fish/raw_common_safe"
        }
      },
      "pattern": [
        "sss",
        "eDe",
        "mOm"
      ],
      "result": {
        "count": 1,
        "id": "casualnessdelight:stargazy_pie"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "crabbersdelight:cooking/bisque",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "children": [
            {
              "tag": "crabbersdelight:cooked_seafood"
            },
            {
              "tag": "crabbersdelight:raw_seafood"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "item": "farmersdelight:onion"
        },
        {
          "item": "farmersdelight:rice"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "crabbersdelight:bisque"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "crabbersdelight:cooking/clam_chowder",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "item": "crabbersdelight:cooked_clam_meat"
        },
        {
          "item": "farmersdelight:onion"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "crabbersdelight:clam_chowder"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "crabbersdelight:cooking/crab_cakes",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "crabbersdelight:crab"
        },
        {
          "item": "farmersdelight:wheat_dough"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "item": "farmersdelight:onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "crabbersdelight:crab_cakes"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "create_bic_bit:mixing/raw_cheese_souffle",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:cheese/natural_milk"
        },
        {
          "item": "create:wheat_flour"
        }
      ],
      "results": [
        {
          "id": "create_bic_bit:raw_cheese_souffle"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "create_deepfried:compat/farmersdelight/mixing/raw_arancini",
    "recipe": {
      "ingredients": [
        {
          "item": "farmersdelight:rice"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "results": [
        {
          "id": "create_deepfried:raw_arancini"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "create_deepfried:compat/farmersdelight/mixing/raw_panzerotto",
    "recipe": {
      "ingredients": [
        {
          "item": "create:dough"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "results": [
        {
          "id": "create_deepfried:raw_panzerotto"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "create_deepfried:deep_frying/cheese_curd",
    "recipe": {
      "heat_requirement": "heated",
      "ingredients": [
        {
          "tag": "seki:cheese/natural_milk"
        },
        {
          "amount": 125,
          "components": {},
          "fluids": "create_bic_bit:frying_oil",
          "type": "neoforge:components"
        }
      ],
      "results": [
        {
          "id": "create_deepfried:cheese_curd"
        }
      ],
      "type": "create_bic_bit:deep_frying"
    }
  },
  {
    "id": "create:compacting/blaze_cake",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "create:cinder_flour"
        }
      ],
      "results": [
        {
          "id": "create:blaze_cake_base"
        }
      ],
      "type": "create:compacting"
    }
  },
  {
    "id": "create:crafting/curiosities/cake",
    "recipe": {
      "category": "misc",
      "key": {
        "E": {
          "tag": "seki:eggs/common"
        },
        "M": {
          "tag": "seki:ingredients/dairy_milk"
        },
        "P": {
          "tag": "seki:doughs/sweet"
        },
        "S": {
          "tag": "seki:ingredients/sugar_refined"
        }
      },
      "pattern": [
        " M ",
        "SES",
        " P "
      ],
      "result": {
        "count": 1,
        "id": "minecraft:cake"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "create:mixing/tea",
    "recipe": {
      "heat_requirement": "heated",
      "ingredients": [
        {
          "tag": "minecraft:leaves"
        },
        {
          "amount": 250,
          "fluid": "minecraft:water",
          "type": "neoforge:single"
        },
        {
          "amount": 250,
          "tag": "seki:ingredients/dairy_milk",
          "type": "neoforge:tag"
        }
      ],
      "results": [
        {
          "amount": 500,
          "id": "create:tea"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "culturalrecipes:cooking/creamed_corn",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "c:crops/corn"
        },
        {
          "tag": "c:crops/corn"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "culturaldelights:creamed_corn"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "culturalrecipes:cooking/eggplant_parmesan_block",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "c:crops/eggplant"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "farmersdelight:raw_pasta"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "culturaldelights:eggplant_parmesan_block"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "culturalrecipes:cooking/elote",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:stick"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "c:crops/corn"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "culturaldelights:elote"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "culturalrecipes:cooking/poached_eggplants",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "c:crops/eggplant"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "culturaldelights:poached_eggplants"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "culturalrecipes:cooking/spicy_curry",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "item": "farmersdelight:cooked_rice"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "culturaldelights:cooked_chickens"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "culturaldelights:spicy_curry"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "culturalrecipes:mutton_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "culturaldelights:cooked_muttons"
        },
        {
          "tag": "c:foods/cooked_egg"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "culturaldelights:mutton_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/au_rotten_potatoes",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:poisonous_potato"
        },
        {
          "item": "minecraft:poisonous_potato"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "dungeonsdelight:sculk_cheese"
        },
        {
          "tag": "dungeonsdelight:sculk_cheese"
        }
      ],
      "recipe_book_tab": "monster_meals",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:au_rotten_potatoes"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/bloody_mary",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:gritty_flesh"
        },
        {
          "item": "dungeonsdelight:gritty_flesh"
        },
        {
          "item": "dungeonsdelight:silverfish_abdomen"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "monster_drinks",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:bloody_mary"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/chicken_jockey_sandwich",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "dungeonsdelight:ancient_egg"
        },
        {
          "item": "minecraft:chicken"
        },
        {
          "tag": "dungeonsdelight:fleshes"
        },
        {
          "item": "farmersdelight:rotten_tomato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "monster_meals",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:chicken_jockey_sandwich"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/gelled_salad",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:slime_noodles"
        },
        {
          "item": "dungeonsdelight:slime_noodles"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "monster_meals",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:gelled_salad"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/monster_mousse_block",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 2,
      "ingredients": [
        {
          "item": "dungeonsdelight:rotbulb"
        },
        {
          "item": "dungeonsdelight:slime_bar"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "monster_meals",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:monster_mousse_block"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/necronog",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "experience": 2,
      "ingredients": [
        {
          "item": "dungeonsdelight:ancient_egg"
        },
        {
          "item": "dungeonsdelight:ancient_egg"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "dungeonsdelight:slicorice"
        }
      ],
      "recipe_book_tab": "monster_drinks",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:necronog"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/putrid_spice_latte",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:rotgourd_slice"
        },
        {
          "item": "dungeonsdelight:gunk"
        },
        {
          "item": "dungeonsdelight:rancid_reduction"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "monster_drinks",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:putrid_spice_latte"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/rancid_reduction_from_rotbulb",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:rotbulb"
        },
        {
          "item": "dungeonsdelight:gunk"
        },
        {
          "item": "dungeonsdelight:gunk"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "dungeonsdelight:rancid_reduction"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/rotgourd_slice_from_rotgourd_slice",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:rotgourd_slice"
        },
        {
          "item": "dungeonsdelight:gunk"
        },
        {
          "item": "dungeonsdelight:gunk"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "dungeonsdelight:rancid_reduction"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/silverfish_fried_rice",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:silverfish_abdomen"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "farmersdelight:rice"
        },
        {
          "tag": "c:foods/cooked_egg"
        }
      ],
      "recipe_book_tab": "monster_meals",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:silverfish_fried_rice"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/taro_milk_tea",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "dungeonsdelight:rotbulb"
        },
        {
          "item": "dungeonsdelight:gunk"
        },
        {
          "item": "dungeonsdelight:rancid_reduction"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "monster_drinks",
      "result": {
        "count": 1,
        "id": "dungeonsdelight:taro_milk_tea"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "dungeonsdelight:monster_cooking/wardenzola",
    "recipe": {
      "experience": 0.7,
      "ingredients": [
        {
          "item": "dungeonsdelight:sculk_polyp"
        },
        {
          "item": "dungeonsdelight:sculk_polyp"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "dungeonsdelight:wardenzola"
      },
      "type": "dungeonsdelight:monster_cooking"
    }
  },
  {
    "id": "endersdelight:cooking/pearl_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "endersdelight:shulker_bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "endersdelight:enderman_loot"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "endersdelight:chorus_juice"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "endersdelight:pearl_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "endersdelight:cooking/steak_fries",
    "recipe": {
      "container": {
        "count": 1,
        "id": "endersdelight:shulker_bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "item": "endersdelight:voidpepper"
        },
        {
          "item": "minecraft:beef"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:potato"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "endersdelight:steak_fries"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "ends_delight:food/bubble_tea",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "children": [
            {
              "item": "minecraft:chorus_fruit"
            },
            {
              "item": "ends_delight:chorus_fruit_grain"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "item": "ends_delight:ender_pearl_grain"
        }
      ],
      "recipe_book_tab": "drinks",
      "result": {
        "count": 1,
        "id": "ends_delight:bubble_tea"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "ends_delight:food/chorus_fruit_milk_tea",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "children": [
            {
              "item": "minecraft:chorus_fruit"
            },
            {
              "item": "ends_delight:chorus_fruit_grain"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "drinks",
      "result": {
        "count": 1,
        "id": "ends_delight:chorus_fruit_milk_tea"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "ends_delight:food/ender_bamboo_rice",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:bamboo"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:foods/raw_dragon_meat"
        },
        {
          "item": "ends_delight:chorus_succulent"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "ends_delight:ender_bamboo_rice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "ends_delight:food/ender_congee",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "ends_delight:dried_endermite_meat"
        },
        {
          "item": "ends_delight:ender_pearl_grain"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "ends_delight:ender_congee"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "ends_delight:food/ender_noodle",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/shulker_meat"
        },
        {
          "item": "ends_delight:dried_endermite_meat"
        },
        {
          "item": "ends_delight:chorus_sauce"
        },
        {
          "children": [
            {
              "item": "minecraft:warped_fungus"
            },
            {
              "item": "minecraft:crimson_fungus"
            },
            {
              "item": "minecraft:brown_mushroom"
            },
            {
              "item": "minecraft:red_mushroom"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "children": [
            {
              "tag": "seki:doughs/plain_noodle"
            },
            {
              "tag": "seki:pasta/wheat"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "ends_delight:ender_noodle"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "ends_delight:food/shulker_omelette_mixture",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/shulker_meat"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "ends_delight:shulker_omelette_mixture"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:ingredients/yeast"
        },
        {
          "tag": "farm_and_charm:water_bottles"
        }
      ],
      "result": {
        "count": 5,
        "id": "farm_and_charm:dough"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farmersdelight:apple_pie",
    "recipe": {
      "category": "misc",
      "group": "fd_apple_pie",
      "key": {
        "#": {
          "tag": "seki:grains/wheat_common"
        },
        "O": {
          "item": "farmersdelight:pie_crust"
        },
        "a": {
          "item": "minecraft:apple"
        },
        "x": {
          "tag": "seki:ingredients/sugar_refined"
        }
      },
      "pattern": [
        "###",
        "aaa",
        "xOx"
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:apple_pie"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "farmersdelight:bacon_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "c:foods/cooked_bacon"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:bacon_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farmersdelight:cake_from_milk_bottle",
    "recipe": {
      "category": "misc",
      "group": "cake",
      "key": {
        "e": {
          "tag": "seki:eggs/common"
        },
        "m": {
          "tag": "seki:ingredients/dairy_milk"
        },
        "s": {
          "tag": "seki:ingredients/sugar_refined"
        },
        "w": {
          "tag": "seki:grains/wheat_common"
        }
      },
      "pattern": [
        "mmm",
        "ses",
        "www"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:cake"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "farmersdelight:chicken_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "c:foods/cooked_chicken"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:chicken_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farmersdelight:cooking/baked_cod_stew",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/raw_cod"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:crops/tomato"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:baked_cod_stew"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/beef_noodles",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:beef"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "casualnessdelight:beef_noodles"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/bone_broth",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "tag": "c:bones"
        },
        {
          "children": [
            {
              "item": "minecraft:glow_berries"
            },
            {
              "tag": "seki:mushrooms/culinary_common"
            },
            {
              "item": "minecraft:hanging_roots"
            },
            {
              "item": "minecraft:glow_lichen"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:bone_broth"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/cabbage_rolls",
    "recipe": {
      "cookingtime": 100,
      "experience": 0.35,
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "children": [
            {
              "tag": "c:foods/raw_meat"
            },
            {
              "tag": "seki:fish/raw_common_safe"
            },
            {
              "tag": "seki:vegetables/common"
            },
            {
              "tag": "seki:mushrooms/culinary_common"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:cabbage_rolls"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/chicken_soup",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "c:crops/carrot"
        },
        {
          "tag": "c:foods/leafy_green"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:chicken_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/cooked_rice",
    "recipe": {
      "cookingtime": 100,
      "experience": 0.35,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:cooked_rice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/dog_food",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "item": "minecraft:bone_meal"
        },
        {
          "tag": "seki:meat/raw_meat"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:dog_food"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/dumplings",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:doughs/egg_pasta"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "children": [
            {
              "tag": "seki:meat/raw_poultry_common"
            },
            {
              "tag": "seki:meat/raw_pork_common"
            },
            {
              "tag": "seki:meat/raw_beef_common"
            },
            {
              "item": "minecraft:brown_mushroom"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "result": {
        "count": 2,
        "id": "farmersdelight:dumplings"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/fried_rice",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "culturaldelights:corn_cob"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:fried_rice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/glow_berry_custard",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:glow_berries"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:glow_berry_custard"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/hot_cocoa",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:cocoa_beans"
        },
        {
          "item": "minecraft:cocoa_beans"
        }
      ],
      "recipe_book_tab": "drinks",
      "result": {
        "count": 1,
        "id": "farmersdelight:hot_cocoa"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/mushroom_rice",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "item": "minecraft:red_mushroom"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "children": [
            {
              "item": "minecraft:carrot"
            },
            {
              "item": "minecraft:potato"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:mushroom_rice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/noodle_soup",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:dried_kelp"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:noodle_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/onion_soup",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:onion_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/paper_wrapped_fish",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "children": [
            {
              "item": "minecraft:salmon"
            },
            {
              "item": "minecraft:cod"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "casualnessdelight:capsicum"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "c:crops/potato"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "casualnessdelight:paper_wrapped_fish"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/pasta_with_meatballs",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "farmersdelight:minced_beef"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:pasta_with_meatballs"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/pasta_with_mutton_chop",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:meat/raw_mutton_fresh"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:pasta_with_mutton_chop"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/phantom_dumplings",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "casualnessdelight:phantom_dumplings"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/phantom_puff",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "item": "casualnessdelight:cheese_wheel_slice"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 2,
        "id": "casualnessdelight:phantom_puff"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/pumpkin_soup",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "farmersdelight:pumpkin_slice"
        },
        {
          "tag": "c:foods/leafy_green"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:pumpkin_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/ratatouille",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:crops/tomato"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/beetroot"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:ratatouille"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/raw_cheese_wheel",
    "recipe": {
      "cookingtime": 400,
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "casualnessdelight:raw_cheese_wheel"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/squid_ink_pasta",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "c:crops/tomato"
        },
        {
          "item": "minecraft:ink_sac"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:squid_ink_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/stuffed_pumpkin_block",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:pumpkin"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "c:foods/berry"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:stuffed_pumpkin_block"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/sweet_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:honey_bottle"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:apple"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "casualnessdelight:sweet_rice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/vegetable_noodles",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:crops/carrot"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "c:foods/leafy_green"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:vegetable_noodles"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:cooking/yorkshire_pudding",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:doughs/plain_noodle"
        },
        {
          "tag": "c:foods/cooked_egg"
        },
        {
          "tag": "c:foods/cooked_egg"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "casualnessdelight:yorkshire_pudding"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "farmersdelight:egg_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "c:foods/cooked_egg"
        },
        {
          "tag": "c:foods/cooked_egg"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:egg_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farmersdelight:honey_cookie",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "minecraft:honey_bottle"
        },
        {
          "tag": "seki:grains/wheat_common"
        },
        {
          "tag": "seki:grains/wheat_common"
        }
      ],
      "result": {
        "count": 8,
        "id": "farmersdelight:honey_cookie"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farmersdelight:pumpkin_pie_from_pie_crust",
    "recipe": {
      "category": "misc",
      "group": "fd_pumpkin_pie",
      "key": {
        "O": {
          "item": "farmersdelight:pie_crust"
        },
        "c": {
          "item": "farmersdelight:pumpkin_slice"
        },
        "e": {
          "tag": "seki:eggs/common"
        },
        "s": {
          "tag": "seki:ingredients/sugar_refined"
        }
      },
      "pattern": [
        "cec",
        "csc",
        " O "
      ],
      "result": {
        "count": 2,
        "id": "minecraft:pumpkin_pie"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "farmersdelight:roast_chicken_block",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:cooked_chicken"
        },
        {
          "item": "minecraft:baked_potato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:bowl"
        },
        {
          "item": "minecraft:baked_potato"
        }
      ],
      "result": {
        "count": 1,
        "id": "farmersdelight:roast_chicken_block"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farmersdelight:sweet_berry_cookie",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "minecraft:sweet_berries"
        },
        {
          "tag": "seki:grains/wheat_common"
        },
        {
          "tag": "seki:grains/wheat_common"
        }
      ],
      "result": {
        "count": 8,
        "id": "farmersdelight:sweet_berry_cookie"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farmersdelight:wheat_dough_from_egg",
    "recipe": {
      "category": "misc",
      "group": "fd_dough",
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 3,
        "id": "farmersdelight:wheat_dough"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_cobweb",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:cobweb"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:cobweb"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_cobweb"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_ghast_tear",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:ghast_tear"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:ghast_tear"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_ghast_tear"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_rotten_flesh",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:rotten_flesh"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_rotten_flesh"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_slime",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:slime_ball"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:slime_ball"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_slime"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_slimeapple",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "frightsdelight:apple_slime"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "frightsdelight:apple_slime"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_slimeapple"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_soul_berry",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "frightsdelight:soul_berry"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "frightsdelight:soul_berry"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_soul_berry"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_spider_eye",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "minecraft:spider_eye"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:spider_eye"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_spider_eye"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "frightsdelight:farmersdelight/cooking/soup_wither_berry",
    "recipe": {
      "experience": 2,
      "ingredients": [
        {
          "item": "frightsdelight:wither_berry"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "frightsdelight:wither_berry"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_wither_berry"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/alfalfa_porridge",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "minecraft:short_grass"
        },
        {
          "item": "minecraft:seagrass"
        },
        {
          "item": "minecraft:fern"
        },
        {
          "item": "minecraft:sea_pickle"
        },
        {
          "item": "immortalers_delight:alfalfa"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:alfalfa_porridge"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/apollyon_cake_roll",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:warped_laurel"
        },
        {
          "item": "minecraft:wheat"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 2,
        "id": "immortalers_delight:apollyon_cake_roll"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/custard_tart_pastry",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:egg_cone"
        },
        {
          "item": "immortalers_delight:egg_cone"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "result": {
        "count": 2,
        "id": "immortalers_delight:custard_tart_pastry"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/egg_cone",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:evolutcorn_grains"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:egg_cone"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/evolutcorn_juice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:evolutcorn_grains"
        },
        {
          "item": "immortalers_delight:evolutcorn_grains"
        },
        {
          "item": "immortalers_delight:evolutcorn_grains"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:evolutcorn_juice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/evolutcorn_pot_stickers",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:evolutcorn_paste"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:carrot"
        }
      ],
      "result": {
        "count": 2,
        "id": "immortalers_delight:evolutcorn_pot_stickers"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/himekaido_jelly",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:himekaido_jelly"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/leisamboo_tea_cake",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:leisamboo_tea"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "result": {
        "count": 3,
        "id": "immortalers_delight:leisamboo_tea_cake"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/millenian_bamboo",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bamboo_block"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:bamboo"
        },
        {
          "item": "minecraft:bamboo"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:millenian_bamboo"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/nether_bread_cream_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:kwat_wheat_toast"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "minecraft:magma_cream"
        },
        {
          "item": "farmersdelight:onion"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "item": "minecraft:shroomlight"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:nether_bread_cream_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/pearlip_pumpkin_pie",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "minecraft:pumpkin"
        },
        {
          "item": "immortalers_delight:pearlip"
        },
        {
          "item": "immortalers_delight:pearlip"
        },
        {
          "item": "immortalers_delight:pearlip"
        },
        {
          "item": "immortalers_delight:pearlip"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "result": {
        "count": 4,
        "id": "immortalers_delight:pearlip_pumpkin_pie"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/pearlipearl_tart",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:pearlipearl"
        },
        {
          "item": "immortalers_delight:pearlipearl"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:custard_tart_pastry"
        }
      ],
      "result": {
        "count": 4,
        "id": "immortalers_delight:pearlipearl_tart"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/stewed_rotten_meat_pot",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:decorated_pot"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido_jelly"
        },
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "item": "minecraft:pufferfish"
        },
        {
          "item": "minecraft:pufferfish"
        },
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:stewed_rotten_meat_pot"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/sutffed_kwat_wheat_doufu",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:fry_kwat_wheat_doufu"
        },
        {
          "item": "immortalers_delight:fry_kwat_wheat_doufu"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:foods/mushroom"
        },
        {
          "tag": "immortalers_delight:beef_or_pork"
        }
      ],
      "result": {
        "count": 2,
        "id": "immortalers_delight:sutffed_kwat_wheat_doufu"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/torchflower_cake",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "minecraft:torchflower"
        },
        {
          "item": "minecraft:wheat"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:torchflower_cake"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:cooking/yogurt",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "experience": 0.35,
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:yogurt"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/aromatic_pod_affogato",
    "recipe": {
      "container": {
        "count": 1,
        "id": "farmersdelight:hot_cocoa"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:pitcher_pod_petal"
        },
        {
          "item": "immortalers_delight:torchflower_mustard"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:aromatic_pod_affogato"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/carrot_tea",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:leisamboo_tea"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:carrot_tea"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/chocoreeze",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:egg_cone"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:pearlip"
        },
        {
          "item": "minecraft:cocoa_beans"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:chocoreeze"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/evolutcorn_icecream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:stick"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "item": "minecraft:snowball"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:evolutcorn_icecream"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/gelpitaya_icepop",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:stick"
      },
      "ingredients": [
        {
          "item": "minecraft:ice"
        },
        {
          "item": "immortalers_delight:gelpitaya_flesh"
        },
        {
          "item": "immortalers_delight:gelpitaya_flesh"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:gelpitaya_icepop"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/glistering_fizz",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:sparkling_water"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:glistering_watermelon_juice"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:purgatory_ale"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:glistering_fizz"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/green_tea_fizz",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:sparkling_water"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:leaf_green_tea"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:purgatory_ale"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:green_tea_fizz"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/himekandy",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:stick"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:himekandy"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/leisamboo_icecream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:egg_cone"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:leisamboo_tea"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:leisamboo_icecream"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/pearlip_bubble_milk",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:pearlipearl"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:pearlip_bubble_milk"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/pearlip_milk_shake",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:pearlip"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:pearlip_milk_shake"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/pearlipearl_milk_green",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:pearlipearl"
        },
        {
          "item": "immortalers_delight:leaf_green_tea"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:pearlipearl_milk_green"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/pearlipearl_milk_tea",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:pearlipearl"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:stove_black_tea"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:pearlipearl_milk_tea"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/pod_petal_cheese_stick",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:stick"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:pitcher_pod_petal"
        },
        {
          "item": "immortalers_delight:pitcher_pod_petal"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:pod_petal_cheese_stick"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/scarlet_gelato",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:egg_cone"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:scarlet_gelato"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/sextlotus_fizz",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:sparkling_water"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:sextlotus_root_cuts"
        },
        {
          "item": "immortalers_delight:moon_oil"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:purgatory_ale"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:sextlotus_fizz"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/tropical_fruity_cyclone",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:pearlip_milk_shake"
      },
      "ingredients": [
        {
          "item": "minecraft:melon_slice"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:packed_ice"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:tropical_fruity_cyclone"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:enchantal_cooler/twilight_gelato",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:pitcher_pod"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "immortalers_delight:pitcher_pod_petal"
        },
        {
          "item": "immortalers_delight:pitcher_pod_petal"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:twilight_gelato"
      },
      "type": "immortalers_delight:enchantal_cooler"
    }
  },
  {
    "id": "immortalers_delight:oxygrape_evolutcorn_muffin",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "immortalers_delight:oxyraisins"
        },
        {
          "item": "immortalers_delight:oxyraisins"
        },
        {
          "item": "immortalers_delight:evolutcorn_paste"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        },
        {
          "item": "minecraft:paper"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:oxygrape_evolutcorn_muffin"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "immortalers_delight:tangyuan/himekandy_tangyuan",
    "recipe": {
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "output": {
        "count": 1,
        "id": "immortalers_delight:himekandy"
      },
      "tool": {
        "item": "minecraft:stick"
      },
      "type": "immortalers_delight:tangyuan"
    }
  },
  {
    "id": "immortalers_delight:tartare_chicken",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido_jelly"
        },
        {
          "item": "farmersdelight:chicken_cuts"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "item": "minecraft:spider_eye"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:bowl"
        }
      ],
      "result": {
        "count": 1,
        "id": "immortalers_delight:tartare_chicken"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_pot/beef_with_scrambled_eggs",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_beef_common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:beef_with_scrambled_eggs"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_pot/big_plate_chicken",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:big_plate_chicken"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_pot/big_plate_chicken_noodles",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:big_plate_chicken_noodles"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_pot/dry_pot_chicken",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:dry_pot_chicken"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_pot/tomato_egg_noodles",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:tomato_egg_noodles"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_pot/yangzhou_fried_rice",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "item": "kaleidoscope_cookery:cooked_rice"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:yangzhou_fried_rice"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_stockpot/seaweed_egg_drop_soup",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:dried_kelp"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:seaweed_egg_drop_soup"
      },
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:flex_stockpot/tomato_egg_drop_soup",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:tomato_egg_drop_soup"
      },
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pickle_jar/century_egg",
    "recipe": {
      "fermentTime": 3600,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:charcoal"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:century_egg"
      },
      "type": "kaleidoscope_chinesefood:pickle_jar"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pickle_jar/chinese_sauerkraut",
    "recipe": {
      "fermentTime": 3600,
      "ingredients": [
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "item": "kaleidoscope_cookery:lettuce"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:chinese_sauerkraut"
      },
      "type": "kaleidoscope_chinesefood:pickle_jar"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pickle_jar/salted_egg",
    "recipe": {
      "fermentTime": 3600,
      "ingredients": [
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:salted_egg"
      },
      "type": "kaleidoscope_chinesefood:pickle_jar"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pot/beef_with_scrambled_eggs",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:meat/raw_beef_common"
        },
        {
          "tag": "seki:meat/raw_beef_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:beef_with_scrambled_eggs"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pot/beef_with_scrambled_eggs_rice",
    "recipe": {
      "carrier": {
        "tag": "c:foods/cooked_rice"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:meat/raw_beef_common"
        },
        {
          "tag": "seki:meat/raw_beef_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:beef_with_scrambled_eggs_rice"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pot/big_plate_chicken",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:big_plate_chicken"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pot/big_plate_chicken_noodles",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:big_plate_chicken_noodles"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pot/dry_pot_chicken",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:dry_pot_chicken"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:pot/yangzhou_fried_rice",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "c:foods/cooked_rice"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:yangzhou_fried_rice"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:raw_steamed_rice_rolls",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:water_bucket"
        },
        {
          "item": "minecraft:bowl"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:raw_steamed_rice_rolls"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:stockpot/seaweed_egg_drop_soup",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:dried_kelp"
        },
        {
          "item": "minecraft:dried_kelp"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_chinesefood:seaweed_egg_drop_soup"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_chinesefood:stockpot/tomato_egg_drop_soup",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 3,
        "id": "kaleidoscope_chinesefood:tomato_egg_drop_soup"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_pot/chorus_fried_egg",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:chorus_fruit"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:chorus_fried_egg"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_pot/egg_fried_rice",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/cooked_rice"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:egg_fried_rice"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_pot/fish_flavored_shredded_pork",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:fish_flavored_shredded_pork"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_pot/fried_spring_roll",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:fried_spring_roll"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_pot/scramble_egg_with_tomatoes",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:scramble_egg_with_tomatoes"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_pot/spicy_chicken",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:spicy_chicken"
      },
      "type": "kaleidoscope_cookery:flex_pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_stockpot/buddha_jumps_over_the_wall",
    "recipe": {
      "carrier": {
        "item": "minecraft:flower_pot"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:buddha_jumps_over_the_wall"
      },
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_stockpot/chicken_and_mushroom_stew",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:chicken_and_mushroom_stew"
      },
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_stockpot/numbing_spicy_chicken",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:numbing_spicy_chicken"
      },
      "soup_base": "minecraft:lava",
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_stockpot/udon_noodle",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:udon_noodle"
      },
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:flex_stockpot/wild_mushroom_rabbit_soup",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:rabbit"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:wild_mushroom_rabbit_soup"
      },
      "type": "kaleidoscope_cookery:flex_stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/chorus_fried_egg",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:chorus_fruit"
        },
        {
          "item": "minecraft:chorus_fruit"
        },
        {
          "item": "minecraft:chorus_fruit"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:chorus_fried_egg"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_fried_rice",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/cooked_rice"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:egg_fried_rice"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_1",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_2",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 2,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_3",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 3,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_4",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 4,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_5",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 5,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_6",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 6,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_7",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 7,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_8",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 8,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/egg_to_fried_egg_9",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 9,
        "id": "kaleidoscope_cookery:fried_egg"
      },
      "type": "kaleidoscope_cookery:pot",
      "carrier": {
        "item": "minecraft:bowl"
      }
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/fish_flavored_shredded_pork",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:fish_flavored_shredded_pork"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/fish_flavored_shredded_pork_rice_bowl",
    "recipe": {
      "carrier": {
        "tag": "c:foods/cooked_rice"
      },
      "ingredients": [
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:fish_flavored_shredded_pork_rice_bowl"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/fried_spring_roll",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:fried_spring_roll"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/scramble_egg_with_tomatoes",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:scramble_egg_with_tomatoes"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/scramble_egg_with_tomatoes_rice_bowl",
    "recipe": {
      "carrier": {
        "tag": "c:foods/cooked_rice"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:scramble_egg_with_tomatoes_rice_bowl"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:pot/spicy_chicken",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:spicy_chicken"
      },
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_cookery:stockpot/buddha_jumps_over_the_wall",
    "recipe": {
      "carrier": {
        "item": "minecraft:flower_pot"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "item": "minecraft:phantom_membrane"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:buddha_jumps_over_the_wall"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:stockpot/chicken_and_mushroom_stew",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:chicken_and_mushroom_stew"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:stockpot/numbing_spicy_chicken",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:numbing_spicy_chicken"
      },
      "soup_base": "minecraft:lava",
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:stockpot/udon_noodle",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:udon_noodle"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_cookery:stockpot/wild_mushroom_rabbit_soup",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "item": "minecraft:rabbit"
        },
        {
          "item": "minecraft:rabbit"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_cookery:wild_mushroom_rabbit_soup"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_end:stockpot/dark_dragon_egg_stew",
    "recipe": {
      "carrier": {
        "item": "kaleidoscope_end:dragon_egg_shell"
      },
      "ingredients": [
        {
          "item": "kaleidoscope_end:ender_mint"
        },
        {
          "item": "kaleidoscope_end:ender_mint"
        },
        {
          "item": "kaleidoscope_end:ender_mint"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:raw_dragon_meat"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_end:dark_dragon_egg_stew"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_end:stockpot/mint_noodle_soup",
    "recipe": {
      "ingredients": [
        {
          "item": "kaleidoscope_end:ender_mint"
        },
        {
          "item": "kaleidoscope_end:ender_mint"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 3,
        "id": "kaleidoscope_end:mint_noodle_soup"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_end:stockpot/void_conch_noodle_soup",
    "recipe": {
      "ingredients": [
        {
          "item": "kaleidoscope_end:void_conch"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "result": {
        "count": 3,
        "id": "kaleidoscope_end:void_conch_noodle_soup"
      },
      "type": "kaleidoscope_cookery:stockpot"
    }
  },
  {
    "id": "kaleidoscope_nether:pot/braised_pork_rice",
    "recipe": {
      "carrier": {
        "item": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "kaleidoscope_cookery:cooked_rice"
        }
      ],
      "result": {
        "count": 1,
        "id": "kaleidoscope_nether:braised_pork_rice"
      },
      "stir_fry_count": 4,
      "time": 300,
      "type": "kaleidoscope_cookery:pot"
    }
  },
  {
    "id": "kaleidoscope_nether:star_dust/eggs",
    "recipe": {
      "ingredient": {
        "tag": "seki:eggs/common"
      },
      "result": {
        "count": 1,
        "id": "minecraft:sniffer_egg"
      },
      "type": "kaleidoscope_nether:star_dust"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:ingredients/yeast"
        },
        {
          "tag": "farm_and_charm:water_bottles"
        }
      ],
      "results": [
        {
          "count": 5,
          "id": "farm_and_charm:dough"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/acacia_blossom_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "alexsmobs:acacia_blossom"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "alexsdelight:acacia_blossom_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/alfalfa_porridge",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:short_grass"
        },
        {
          "item": "minecraft:seagrass"
        },
        {
          "item": "minecraft:fern"
        },
        {
          "item": "minecraft:sea_pickle"
        },
        {
          "item": "immortalers_delight:alfalfa"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:alfalfa_porridge"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/avgolemono",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:glow_berries"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:avgolemono"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/baked_cod_stew",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/raw_cod"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:crops/tomato"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:baked_cod_stew"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/bass_stew",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/raw_bass"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "aquaculturedelight:bass_stew"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/beef_noodles",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:beef"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "casualnessdelight:beef_noodles"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/bisque",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        [
          {
            "tag": "crabbersdelight:cooked_seafood"
          },
          {
            "tag": "crabbersdelight:raw_seafood"
          }
        ],
        {
          "item": "farmersdelight:onion"
        },
        {
          "item": "farmersdelight:rice"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "crabbersdelight:bisque"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/blazing_red_curry",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:blazing_red_curry"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/bone_broth",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:bones"
        },
        [
          {
            "item": "minecraft:glow_berries"
          },
          {
            "tag": "seki:mushrooms/culinary_common"
          },
          {
            "item": "minecraft:hanging_roots"
          },
          {
            "item": "minecraft:glow_lichen"
          }
        ]
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:bone_broth"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/bowl_of_cream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:bowl_of_cream"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/buckling",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/raw_herring"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:egg"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "aquaculturedelight:buckling"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/cheese_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:cheese/natural_milk"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "vintagedelight:cheese_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/cheesy_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "brewinandchewin:flaxen_cheese_wedge"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "c:foods/tomato"
        },
        {
          "tag": "seki:fish/raw_common_safe"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewinandchewin:cheesy_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/chicken_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "c:crops/carrot"
        },
        {
          "tag": "c:foods/leafy_green"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:chicken_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/clam_chowder",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "crabbersdelight:cooked_clam_meat"
        },
        {
          "item": "farmersdelight:onion"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "crabbersdelight:clam_chowder"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/cooked_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:cooked_rice"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/creamed_corn",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "c:crops/corn"
        },
        {
          "tag": "c:crops/corn"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "culturaldelights:creamed_corn"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/creamy_onion_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "brewinandchewin:foods/cheese_wedge"
        },
        {
          "tag": "c:foods/onion"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewinandchewin:creamy_onion_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/crimson_stroganoff",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "mynethersdelight:minced_strider"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "mynethersdelight:crimson_stroganoff"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/cumberland_loin",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "c:foods/raw_boar"
        },
        {
          "tag": "c:foods/raw_boar"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:cumberland_loin"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/dog_food",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "item": "minecraft:bone_meal"
        },
        {
          "tag": "seki:meat/raw_meat"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:dog_food"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/dried_fish",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:dried_fish"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/eggplant_parmesan_block",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:crops/eggplant"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "farmersdelight:raw_pasta"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "culturaldelights:eggplant_parmesan_block"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/elote",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:stick"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "c:crops/corn"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "culturaldelights:elote"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/fiery_fondue_pot",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:cauldron"
      },
      "ingredients": [
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "brewinandchewin:scarlet_cheese_wheel"
        },
        {
          "item": "farmersdelight:ham"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewinandchewin:fiery_fondue_pot"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/fried_hoglin_chop",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "mynethersdelight:hoglin_loin"
        },
        {
          "item": "minecraft:wheat"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "mynethersdelight:bullet_pepper"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "mynethersdelight:fried_hoglin_chop"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/fried_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "culturaldelights:corn_cob"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:fried_rice"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/glow_berry_custard",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "minecraft:glow_berries"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:glow_berry_custard"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/glow_ink_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:glow_ink_sac"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "minersdelight:glow_ink_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/grilled_eel_over_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/raw_eel"
        },
        {
          "tag": "c:foods/raw_eel"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:grilled_eel_over_rice"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/himekaido_jelly",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:himekaido_jelly"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/horror_lasagna",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "brewinandchewin:scarlet_cheese_wedge"
        },
        {
          "tag": "c:crops/beetroot"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "brewinandchewin:foods/cheese_wedge"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewinandchewin:horror_lasagna"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/hot_cocoa",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:cocoa_beans"
        },
        {
          "item": "minecraft:cocoa_beans"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:hot_cocoa"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/hot_wings",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "mynethersdelight:hot_spice"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "mynethersdelight:hot_wings"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/hotcream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bucket"
      },
      "ingredients": [
        {
          "tag": "mynethersdelight:hot_spice"
        },
        {
          "tag": "seki:eggs/common"
        },
        [
          {
            "item": "mynethersdelight:bullet_pepper"
          },
          {
            "item": "mynethersdelight:pepper_powder"
          }
        ],
        {
          "item": "minecraft:magma_cream"
        },
        {
          "item": "minecraft:lava_bucket"
        },
        {
          "item": "minecraft:magma_cream"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "mynethersdelight:hot_cream"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/kangaroo_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "alexsdelight:cooked_kangaroo"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "alexsdelight:kangaroo_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/lions_head",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "c:crops/carrot"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:lions_head"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/lobster_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "alexsmobs:lobster_tail"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "alexsdelight:lobster_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/longevity_noodles",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:longevity_noodles"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/mapo_tofu",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "item": "minecraft:blaze_powder"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:mapo_tofu"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/mayonnaise_bottle",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "youkaisfeasts:mayonnaise_bottle"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/millenian_bamboo",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bamboo_block"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "item": "immortalers_delight:evolutcorn"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:bamboo"
        },
        {
          "item": "minecraft:bamboo"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:millenian_bamboo"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/mushroom_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "item": "minecraft:red_mushroom"
        },
        {
          "tag": "seki:rice/common"
        },
        [
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:potato"
          }
        ]
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:mushroom_rice"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/nether_bread_cream_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "immortalers_delight:kwat_wheat_toast"
      },
      "ingredients": [
        {
          "item": "minecraft:magma_cream"
        },
        {
          "item": "farmersdelight:onion"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "item": "minecraft:shroomlight"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:nether_bread_cream_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/noodle_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:dried_kelp"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:noodle_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/paper_wrapped_fish",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        [
          {
            "item": "minecraft:salmon"
          },
          {
            "item": "minecraft:cod"
          }
        ],
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "casualnessdelight:capsicum"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "c:crops/potato"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "casualnessdelight:paper_wrapped_fish"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/pasta_with_meatballs",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farmersdelight:minced_beef"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:pasta_with_meatballs"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/pasta_with_mutton_chop",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:meat/raw_mutton_fresh"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:pasta_with_mutton_chop"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/pasta_with_veggieballs",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "minersdelight:baked_cave_carrot"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "minersdelight:pasta_with_veggieballs"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/pastitsio",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:meat/raw_beef"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:pastitsio"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/pearl_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "endersdelight:shulker_bowl"
      },
      "ingredients": [
        {
          "tag": "endersdelight:enderman_loot"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "endersdelight:chorus_juice"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "endersdelight:pearl_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/poached_eggplants",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:crops/eggplant"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "culturaldelights:poached_eggplants"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/pumpkin_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farmersdelight:pumpkin_slice"
        },
        {
          "tag": "c:foods/leafy_green"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:pumpkin_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/ratatouille",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:crops/tomato"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/beetroot"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:ratatouille"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/sauce_grilled_fish",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:sauce_grilled_fish"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/scarlet_pierogi",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "brewinandchewin:scarlet_cheese_wedge"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:doughs/egg_pasta"
        },
        {
          "item": "minecraft:nether_wart"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewinandchewin:scarlet_pierogi"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/scotch_eggs",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/boiled_egg"
        },
        {
          "tag": "c:foods/boiled_egg"
        },
        [
          {
            "item": "farmersdelight:minced_beef"
          },
          {
            "item": "mynethersdelight:hoglin_sausage"
          }
        ],
        {
          "tag": "seki:breads/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "mynethersdelight:scotch_eggs"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/seven_colored_yokan",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "c:crops/redbean"
        },
        {
          "tag": "c:crops/soybean"
        },
        {
          "item": "minecraft:cherry_leaves"
        },
        {
          "tag": "c:foods/fruits/grape"
        },
        {
          "tag": "seki:ingredients/matcha"
        },
        {
          "item": "youkaisfeasts:udumbara_flower"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:seven_colored_yokan"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/spicy_curry",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "item": "farmersdelight:cooked_rice"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "culturaldelights:cooked_chickens"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "culturaldelights:spicy_curry"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/squid_ink_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "c:crops/tomato"
        },
        {
          "item": "minecraft:ink_sac"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:squid_ink_pasta"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/steak_fries",
    "recipe": {
      "container": {
        "count": 1,
        "id": "endersdelight:shulker_bowl"
      },
      "ingredients": [
        {
          "item": "endersdelight:voidpepper"
        },
        {
          "item": "minecraft:beef"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:potato"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "endersdelight:steak_fries"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/stewed_rotten_meat_pot",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:decorated_pot"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido_jelly"
        },
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "item": "minecraft:pufferfish"
        },
        {
          "item": "minecraft:pufferfish"
        },
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:stewed_rotten_meat_pot"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/stinky_tofu",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:stinky_tofu"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/stuffed_pumpkin_block",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:pumpkin"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "c:foods/berry"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:stuffed_pumpkin_block"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/stuffed_sniffer_egg",
    "recipe": {
      "container": {
        "count": 1,
        "id": "trailandtales_delight:sniffer_eggshell"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "item": "trailandtales_delight:pitcher_taro"
        },
        {
          "tag": "c:foods/berry"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "trailandtales_delight:stuffed_sniffer_egg_block"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/stuffed_squid",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/squid"
        },
        {
          "item": "farmersdelight:rice"
        },
        {
          "item": "farmersdelight:rice"
        },
        [
          {
            "item": "minersdelight:cave_carrot"
          },
          {
            "item": "minecraft:carrot"
          }
        ],
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "minersdelight:stuffed_squid"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/sweet_ormosia_mochi_mixed_boiled",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "youkaisfeasts:dango"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:vegetables/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:sweet_ormosia_mochi_mixed_boiled"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/sweet_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:honey_bottle"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:apple"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "casualnessdelight:sweet_rice"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/tofu_burger",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "item": "minecraft:sweet_berries"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:tofu_burger"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/torchflower_cake",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:torchflower"
        },
        {
          "item": "minecraft:wheat"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:torchflower_cake"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/tuscan_salmon",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:fish/raw_salmon"
        },
        {
          "tag": "c:foods/tomato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "youkaisfeasts:bowl_of_cream"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:tuscan_salmon"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/unusual_fish_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/raw_piranha"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "farmersdelight:pumpkin_slice"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "aquaculturedelight:unusual_fish_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/vegetable_noodles",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:crops/carrot"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "c:foods/leafy_green"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:vegetable_noodles"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/vegetable_omelet",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "brewinandchewin:foods/cheese_wedge"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/onion"
        },
        {
          "tag": "c:crops/carrot"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewinandchewin:vegetable_omelet"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/yogurt",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "item": "immortalers_delight:himekaido"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/sugar_refined"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "immortalers_delight:yogurt"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_cobweb",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:cobweb"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:cobweb"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_cobweb"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_ghast_tear",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:ghast_tear"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:ghast_tear"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_ghast_tear"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_rotten_flesh",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:rotten_flesh"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_rotten_flesh"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_slime",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:slime_ball"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:slime_ball"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_slime"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_slimeapple",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "frightsdelight:apple_slime"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "frightsdelight:apple_slime"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_slimeapple"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_soul_berry",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "frightsdelight:soul_berry"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "frightsdelight:soul_berry"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_soul_berry"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_spider_eye",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:spider_eye"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:spider_eye"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_spider_eye"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/cooking/soup_wither_berry",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "frightsdelight:wither_berry"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "frightsdelight:wither_berry"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "frightsdelight:soup_wither_berry"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/farmersdelight/pot_cooking/onion_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farmersdelight:onion_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/food/ender_congee",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "ends_delight:dried_endermite_meat"
        },
        {
          "item": "ends_delight:ender_pearl_grain"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "ends_delight:ender_congee"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/food/ender_noodle",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "c:foods/shulker_meat"
        },
        {
          "item": "ends_delight:dried_endermite_meat"
        },
        {
          "item": "ends_delight:chorus_sauce"
        },
        [
          {
            "item": "minecraft:warped_fungus"
          },
          {
            "item": "minecraft:crimson_fungus"
          },
          {
            "item": "minecraft:brown_mushroom"
          },
          {
            "item": "minecraft:red_mushroom"
          }
        ],
        [
          {
            "tag": "seki:doughs/plain_noodle"
          },
          {
            "tag": "seki:pasta/wheat"
          }
        ]
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "ends_delight:ender_noodle"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farmersdelight/farm_and_charm/cooking/dog_food",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "item": "minecraft:bone_meal"
        },
        {
          "tag": "seki:meat/raw_meat"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farmersdelight:dog_food"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "letsdocompat:farmersdelight/farm_and_charm/cooking/pastitsio",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:meat/raw_beef"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:pastitsio"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "meadow:cheese_roll",
    "recipe": {
      "category": "misc",
      "key": {
        "#": {
          "tag": "seki:breads/common"
        },
        "M": {
          "tag": "seki:cheese/natural_milk"
        }
      },
      "pattern": [
        " # ",
        "#M#",
        " # "
      ],
      "result": {
        "count": 8,
        "id": "meadow:cheese_roll"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "meadow:cheese_sandwich",
    "recipe": {
      "category": "misc",
      "key": {
        "#": {
          "tag": "seki:breads/common"
        },
        "M": {
          "tag": "seki:cheese/natural_milk"
        }
      },
      "pattern": [
        "#",
        "M",
        "#"
      ],
      "result": {
        "count": 6,
        "id": "meadow:cheese_sandwich"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "meadow:cheese_tart",
    "recipe": {
      "category": "misc",
      "key": {
        "/": {
          "tag": "seki:cheese/natural_milk"
        },
        "E": {
          "tag": "seki:eggs/common"
        },
        "M": {
          "tag": "seki:ingredients/dairy_milk"
        },
        "W": {
          "tag": "seki:grains/wheat_common"
        }
      },
      "pattern": [
        "/EM",
        "WWW"
      ],
      "result": {
        "count": 4,
        "id": "meadow:cheese_tart"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "meadow:cheesecake",
    "recipe": {
      "category": "misc",
      "key": {
        "/": {
          "tag": "seki:cheese/natural_milk"
        },
        "E": {
          "tag": "seki:eggs/common"
        },
        "W": {
          "tag": "seki:grains/wheat_common"
        }
      },
      "pattern": [
        "E/E",
        "WWW"
      ],
      "result": {
        "count": 4,
        "id": "meadow:cheesecake"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "meadow:cooking_pot/amethyst_milk",
    "recipe": {
      "crafting_duration": 30,
      "fluid_amount": 2,
      "ingredients": [
        {
          "item": "minecraft:amethyst_cluster"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "c:milks"
        }
      ],
      "result": {
        "count": 1,
        "id": "meadow:wooden_amethyst_milk_bucket"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/baked_potato",
    "recipe": {
      "crafting_duration": 30,
      "fluid_amount": 10,
      "ingredients": [
        {
          "item": "minecraft:potato"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 4,
        "id": "minecraft:baked_potato"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_beef",
    "recipe": {
      "crafting_duration": 30,
      "fluid_amount": 2,
      "ingredients": [
        {
          "item": "minecraft:beef"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 4,
        "id": "minecraft:cooked_beef"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_buffalo_meat",
    "recipe": {
      "crafting_duration": 40,
      "fluid_amount": 10,
      "ingredients": [
        {
          "item": "meadow:raw_buffalo_meat"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 4,
        "id": "meadow:cooked_buffalo_meat"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_chicken",
    "recipe": {
      "crafting_duration": 40,
      "fluid_amount": 5,
      "ingredients": [
        {
          "item": "minecraft:chicken"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 4,
        "id": "minecraft:cooked_chicken"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_cod",
    "recipe": {
      "crafting_duration": 20,
      "fluid_amount": 12,
      "ingredients": [
        {
          "item": "minecraft:cod"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "minecraft:cooked_cod"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_mutton",
    "recipe": {
      "crafting_duration": 20,
      "fluid_amount": 5,
      "ingredients": [
        {
          "item": "minecraft:mutton"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "minecraft:cooked_mutton"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_porkchop",
    "recipe": {
      "crafting_duration": 20,
      "fluid_amount": 5,
      "ingredients": [
        {
          "item": "minecraft:porkchop"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "minecraft:cooked_porkchop"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_rabbit",
    "recipe": {
      "crafting_duration": 40,
      "fluid_amount": 10,
      "ingredients": [
        {
          "item": "minecraft:rabbit"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "minecraft:cooked_rabbit"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/cooked_salmon",
    "recipe": {
      "crafting_duration": 20,
      "fluid_amount": 12,
      "ingredients": [
        {
          "item": "minecraft:salmon"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "minecraft:cooked_salmon"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/grain_milk",
    "recipe": {
      "crafting_duration": 100,
      "fluid_amount": 20,
      "ingredients": [
        {
          "tag": "seki:grains/wheat_common"
        },
        {
          "tag": "seki:grains/wheat_common"
        },
        {
          "tag": "seki:grains/wheat_common"
        },
        {
          "item": "meadow:wooden_bucket"
        }
      ],
      "result": {
        "count": 1,
        "id": "meadow:wooden_grain_milk_bucket"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/ham_cheese",
    "recipe": {
      "crafting_duration": 120,
      "fluid_amount": 2,
      "ingredients": [
        {
          "item": "meadow:raw_buffalo_meat"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "result": {
        "count": 2,
        "id": "meadow:sausage_with_cheese"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/rabbit_stew_from_cheese",
    "recipe": {
      "crafting_duration": 80,
      "fluid_amount": 20,
      "ingredients": [
        {
          "item": "minecraft:baked_potato"
        },
        {
          "item": "minecraft:cooked_rabbit"
        },
        {
          "item": "minecraft:bowl"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "result": {
        "count": 6,
        "id": "minecraft:rabbit_stew"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/rennet",
    "recipe": {
      "crafting_duration": 60,
      "fluid_amount": 25,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "item": "minecraft:glass_bottle"
        }
      ],
      "result": {
        "count": 2,
        "id": "meadow:rennet"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:cooking_pot/roasted_buffalo_ham",
    "recipe": {
      "crafting_duration": 40,
      "fluid_amount": 5,
      "ingredients": [
        {
          "item": "meadow:raw_buffalo_meat"
        },
        {
          "item": "meadow:raw_buffalo_meat"
        },
        {
          "item": "meadow:raw_buffalo_meat"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "item": "minecraft:carrot"
        }
      ],
      "result": {
        "count": 2,
        "id": "meadow:roasted_buffalo_ham"
      },
      "type": "meadow:cooking"
    }
  },
  {
    "id": "meadow:doormat",
    "recipe": {
      "category": "misc",
      "key": {
        "#": {
          "tag": "seki:grains/wheat_common"
        }
      },
      "pattern": [
        "###",
        "###"
      ],
      "result": {
        "count": 3,
        "id": "meadow:doormat"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "meadow:straw_bed",
    "recipe": {
      "category": "misc",
      "group": "bed",
      "key": {
        "#": {
          "tag": "seki:grains/wheat_common"
        },
        "X": {
          "tag": "minecraft:planks"
        }
      },
      "pattern": [
        "###",
        "XXX"
      ],
      "result": {
        "count": 1,
        "id": "meadow:straw_bed"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "minersdelight:alt_insect_wrap",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minersdelight:crunchy_bar"
        }
      ],
      "result": {
        "count": 1,
        "id": "minersdelight:insect_wrap"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "minersdelight:bat_cookie",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "minersdelight:smoked_bat_wing"
        },
        {
          "tag": "seki:grains/wheat_common"
        },
        {
          "tag": "seki:grains/wheat_common"
        }
      ],
      "result": {
        "count": 8,
        "id": "minersdelight:bat_cookie"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "minersdelight:cooking/bat_rolls",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/bat_wing"
        },
        {
          "children": [
            {
              "tag": "c:foods/raw_meat"
            },
            {
              "tag": "seki:fish/raw_common_safe"
            },
            {
              "tag": "seki:vegetables/common"
            },
            {
              "tag": "seki:mushrooms/culinary_common"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "minersdelight:bat_rolls"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "minersdelight:cooking/glow_ink_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:glow_ink_sac"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "minersdelight:glow_ink_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "minersdelight:cooking/pasta_with_veggieballs",
    "recipe": {
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "minersdelight:baked_cave_carrot"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "minersdelight:pasta_with_veggieballs"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "minersdelight:cooking/stuffed_squid",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "c:foods/squid"
        },
        {
          "item": "farmersdelight:rice"
        },
        {
          "item": "farmersdelight:rice"
        },
        {
          "children": [
            {
              "item": "minersdelight:cave_carrot"
            },
            {
              "item": "minecraft:carrot"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "c:foods/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "minersdelight:stuffed_squid"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "minersdelight:insect_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "minersdelight:cooked_insect_meat"
        },
        [
          {
            "tag": "minersdelight:cooked_insect_meat"
          },
          {
            "item": "minersdelight:weird_caviar"
          }
        ],
        {
          "tag": "seki:breads/common"
        }
      ],
      "result": {
        "count": 2,
        "id": "minersdelight:insect_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "minersdelight:insect_wrap",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        [
          {
            "item": "minersdelight:arthropod"
          },
          {
            "item": "minersdelight:silverfish_eggs"
          }
        ],
        [
          {
            "item": "minersdelight:arthropod"
          },
          {
            "item": "minersdelight:silverfish_eggs"
          }
        ]
      ],
      "result": {
        "count": 1,
        "id": "minersdelight:insect_wrap"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "minersdelight:squid_sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "c:foods/cooked_squid"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "minersdelight:squid_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "minersdelight:vegan_wrap",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "minersdelight:baked_cave_carrot"
        }
      ],
      "result": {
        "count": 1,
        "id": "minersdelight:vegan_wrap"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "mynethersdelight:cooking/crimson_stroganoff",
    "recipe": {
      "cookingtime": 400,
      "experience": 1,
      "ingredients": [
        {
          "item": "mynethersdelight:minced_strider"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "mynethersdelight:crimson_stroganoff"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "mynethersdelight:cooking/fried_hoglin_chop",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "item": "mynethersdelight:hoglin_loin"
        },
        {
          "item": "minecraft:wheat"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "mynethersdelight:bullet_pepper"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "mynethersdelight:fried_hoglin_chop"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "mynethersdelight:cooking/hot_wings",
    "recipe": {
      "cookingtime": 150,
      "experience": 0.35,
      "ingredients": [
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "mynethersdelight:hot_spice"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "mynethersdelight:hot_wings"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "mynethersdelight:cooking/hotcream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bucket"
      },
      "cookingtime": 50,
      "experience": 1,
      "ingredients": [
        {
          "tag": "mynethersdelight:hot_spice"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "children": [
            {
              "item": "mynethersdelight:bullet_pepper"
            },
            {
              "item": "mynethersdelight:pepper_powder"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "item": "minecraft:magma_cream"
        },
        {
          "item": "minecraft:lava_bucket"
        },
        {
          "item": "minecraft:magma_cream"
        }
      ],
      "recipe_book_tab": "drinks",
      "result": {
        "count": 1,
        "id": "mynethersdelight:hot_cream"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "mynethersdelight:cooking/scotch_eggs",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "c:foods/boiled_egg"
        },
        {
          "tag": "c:foods/boiled_egg"
        },
        {
          "children": [
            {
              "item": "farmersdelight:minced_beef"
            },
            {
              "item": "mynethersdelight:hoglin_sausage"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "mynethersdelight:scotch_eggs"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "mynethersdelight:cooking/spicy_curry",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:meat/raw_meat"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "mynethersdelight:hot_spice"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        },
        {
          "children": [
            {
              "item": "minecraft:pumpkin"
            },
            {
              "item": "farmersdelight:pumpkin_slice"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "mynethersdelight:spicy_curry"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "mynethersdelight:crafting/bleeding_tartar",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "mynethersdelight:minced_strider"
        },
        {
          "item": "mynethersdelight:minced_strider"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:bowl"
        }
      ],
      "result": {
        "count": 1,
        "id": "mynethersdelight:bleeding_tartar"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "mynethersdelight:crafting/breakfast_sampler",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "mynethersdelight:roasted_sausage"
        },
        {
          "item": "mynethersdelight:roasted_sausage"
        },
        [
          {
            "item": "minecraft:honey_bottle"
          },
          {
            "item": "mynethersdelight:strider_egg"
          }
        ],
        {
          "tag": "c:foods/cooked_egg"
        },
        {
          "tag": "c:foods/cooked_egg"
        },
        {
          "tag": "seki:breads/common"
        },
        {
          "item": "minecraft:bowl"
        }
      ],
      "result": {
        "count": 1,
        "id": "mynethersdelight:breakfast_sampler"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "mynethersdelight:crafting/ghast_dough",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "seki:ghasmati_flour"
        },
        {
          "item": "seki:ghasmati_flour"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 2,
        "id": "mynethersdelight:ghast_dough"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "mynethersdelight:crafting/hotdog",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "mynethersdelight:roasted_sausage"
        },
        {
          "tag": "seki:breads/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "mynethersdelight:hotdog"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "mynethersdelight:crafting/sizzling_pudding",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "mynethersdelight:ghasmati"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:eggs/common"
        },
        [
          {
            "item": "minecraft:blaze_powder"
          },
          {
            "item": "mynethersdelight:pepper_powder"
          }
        ],
        {
          "item": "minecraft:bowl"
        }
      ],
      "result": {
        "count": 1,
        "id": "mynethersdelight:sizzling_pudding"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "ratatouille:composting/leather",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:rotten_flesh"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "amount": 50,
          "fluid": "minecraft:water",
          "type": "neoforge:single"
        }
      ],
      "processing_time": 500,
      "results": [
        {
          "id": "minecraft:leather"
        }
      ],
      "type": "ratatouille:composting"
    }
  },
  {
    "id": "ratatouille:composting/slime_ball",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:kelp"
        },
        {
          "item": "minecraft:kelp"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "amount": 50,
          "fluid": "minecraft:water",
          "type": "neoforge:single"
        }
      ],
      "processing_time": 500,
      "results": [
        {
          "id": "minecraft:slime_ball"
        }
      ],
      "type": "ratatouille:composting"
    }
  },
  {
    "id": "ratatouille:mixing/mince_meat",
    "recipe": {
      "ingredients": [
        {
          "tag": "ratatouille:raw_meat"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "results": [
        {
          "amount": 250,
          "id": "ratatouille:mince_meat"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "ratatouille:mixing/residue_to_pulp",
    "recipe": {
      "heat_requirement": "heated",
      "ingredients": [
        {
          "item": "ratatouille:compost_residue"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "amount": 250,
          "fluid": "minecraft:water",
          "type": "neoforge:single"
        }
      ],
      "results": [
        {
          "id": "create:pulp"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "ratatouille:mixing/salty_dough",
    "recipe": {
      "ingredients": [
        {
          "item": "create:wheat_flour"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "amount": 100,
          "fluid": "ratatouille:egg_yolk",
          "type": "neoforge:single"
        }
      ],
      "results": [
        {
          "id": "ratatouille:salty_dough"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "refurbished_furniture:combining/cheese_sandwich",
    "recipe": {
      "ingredients": [
        {
          "item": "refurbished_furniture:bread_slice"
        },
        {
          "tag": "seki:cheese/natural_milk"
        },
        {
          "item": "refurbished_furniture:bread_slice"
        }
      ],
      "result": {
        "count": 1,
        "id": "refurbished_furniture:cheese_sandwich"
      },
      "type": "refurbished_furniture:cutting_board_combining"
    }
  },
  {
    "id": "refurbished_furniture:combining/raw_meatlovers_pizza",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:doughs/flatbread"
        },
        {
          "item": "minecraft:cooked_beef"
        },
        {
          "item": "minecraft:cooked_chicken"
        },
        {
          "item": "minecraft:cooked_porkchop"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "refurbished_furniture:raw_meatlovers_pizza"
      },
      "type": "refurbished_furniture:cutting_board_combining"
    }
  },
  {
    "id": "refurbished_furniture:combining/raw_vegetable_pizza",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:doughs/flatbread"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "refurbished_furniture:raw_vegetable_pizza"
      },
      "type": "refurbished_furniture:cutting_board_combining"
    }
  },
  {
    "id": "seki:dimsum/yeasted_dough",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "kaleidoscope_cookery:raw_dough"
        },
        {
          "tag": "seki:ingredients/yeast"
        }
      ],
      "result": {
        "count": 1,
        "id": "seki:yeasted_dough"
      },
      "type": "kubejs:shapeless"
    }
  },
  {
    "id": "seki:dimsum/youkai_raw_bun",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "seki:leavened_dough_sheet"
        },
        {
          "item": "seki:leavened_dough_sheet"
        },
        {
          "tag": "seki:meat/raw_livestock_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/soybean"
        }
      ],
      "result": {
        "count": 4,
        "id": "youkaisfeasts:raw_bun"
      },
      "type": "kubejs:shapeless"
    }
  },
  {
    "id": "supplementaries:integration/pancake_fd",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:ingredients/sugar_refined"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:doughs/plain_noodle"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 3,
        "id": "supplementaries:pancake"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "trailandtales_delight:cooking/stuffed_sniffer_egg",
    "recipe": {
      "container": {
        "count": 1,
        "id": "trailandtales_delight:sniffer_eggshell"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "item": "trailandtales_delight:pitcher_taro"
        },
        {
          "tag": "c:foods/berry"
        },
        {
          "base": {
            "tag": "seki:vegetables/common"
          },
          "subtracted": {
            "item": "minecraft:melon_slice"
          },
          "type": "neoforge:difference"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "trailandtales_delight:stuffed_sniffer_egg_block"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "vintagedelight:cooking/cheese_pasta",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:cheese/natural_milk"
        },
        {
          "tag": "seki:cheese/natural_milk"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "vintagedelight:cheese_pasta"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "vintagedelight:fermenting/century_egg_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:sniffer_egg"
        },
        {
          "item": "minecraft:coal"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 1,
        "id": "vintagedelight:century_egg"
      },
      "processingTime": 216000,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/fermented_spider_eye_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:spider_eye"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "output": {
        "count": 1,
        "id": "minecraft:fermented_spider_eye"
      },
      "processingTime": 1200,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/kimchi_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "item": "farmersdelight:cabbage_leaf"
        },
        {
          "tag": "seki:ingredients/salt_common"
        },
        {
          "tag": "c:foods/vegetable/chili_pepper"
        }
      ],
      "output": {
        "count": 4,
        "id": "vintagedelight:kimchi"
      },
      "processingTime": 2400,
      "secondaryOutput": {
        "count": 1,
        "id": "vintagedelight:pickled_pepper"
      },
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/pickle_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "tag": "c:foods/vegetable/cucumber"
        },
        {
          "tag": "c:foods/vegetable/cucumber"
        },
        {
          "tag": "c:foods/vegetable/cucumber"
        },
        {
          "tag": "c:foods/vegetable/cucumber"
        },
        {
          "tag": "c:foods/vegetable/cucumber"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 5,
        "id": "vintagedelight:pickle"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/pickled_beetroot_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 4,
        "id": "vintagedelight:pickled_beetroot"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/pickled_egg_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:egg"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 4,
        "id": "vintagedelight:pickled_egg"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/pickled_ghost_pepper_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "vintagedelight:ghost_pepper"
        },
        {
          "item": "vintagedelight:ghost_pepper"
        },
        {
          "item": "vintagedelight:ghost_pepper"
        },
        {
          "item": "vintagedelight:ghost_pepper"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 4,
        "id": "vintagedelight:pickled_pepper"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/pickled_onion_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "c:crops/onion"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 4,
        "id": "vintagedelight:pickled_onion"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/pickled_pitcher_pod_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:pitcher_pod"
        },
        {
          "item": "minecraft:pitcher_pod"
        },
        {
          "item": "minecraft:pitcher_pod"
        },
        {
          "item": "minecraft:pitcher_pod"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 4,
        "id": "vintagedelight:pickled_pitcher_pod"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/slime_block_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "tag": "vintagedelight:slime_ball_fermenting"
        },
        {
          "tag": "vintagedelight:slime_ball_fermenting"
        },
        {
          "tag": "vintagedelight:slime_ball_fermenting"
        },
        {
          "tag": "vintagedelight:slime_ball_fermenting"
        },
        {
          "tag": "vintagedelight:slime_ball_fermenting"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 1,
        "id": "minecraft:slime_block"
      },
      "processingTime": 1200,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/surstromming_from_fermenting",
    "recipe": {
      "ingredients": [
        {
          "tag": "vintagedelight:raw_fish"
        },
        {
          "tag": "vintagedelight:raw_fish"
        },
        {
          "tag": "vintagedelight:raw_fish"
        },
        {
          "tag": "vintagedelight:raw_fish"
        },
        {
          "tag": "vintagedelight:raw_fish"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "output": {
        "count": 5,
        "id": "vintagedelight:surstromming"
      },
      "processingTime": 2400,
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/vinegar_from_jam",
    "recipe": {
      "ingredients": [
        {
          "tag": "c:jam_jars"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "output": {
        "count": 1,
        "id": "vintagedelight:vinegar_mason_jar"
      },
      "processingTime": 2400,
      "secondaryOutput": {
        "count": 3,
        "id": "vintagedelight:organic_mash"
      },
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:fermenting/vinegar_from_jam_bottles",
    "recipe": {
      "container": {
        "item": "minecraft:glass_bottle"
      },
      "ingredients": [
        {
          "tag": "c:jam_bottles"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "output": {
        "count": 1,
        "id": "vintagedelight:vinegar_bottle"
      },
      "processingTime": 2400,
      "secondaryOutput": {
        "count": 1,
        "id": "vintagedelight:organic_mash"
      },
      "type": "vintagedelight:fermenting"
    }
  },
  {
    "id": "vintagedelight:oat_dough_from_eggs",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "seki:oat_flour"
        },
        {
          "item": "seki:oat_flour"
        },
        {
          "item": "seki:oat_flour"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "result": {
        "count": 3,
        "id": "vintagedelight:oat_dough"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "vintagedelight:pb_j",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "item": "vintagedelight:nut_mash_bottle"
        },
        {
          "tag": "vintagedelight:sweet_jam_bottles"
        }
      ],
      "result": {
        "count": 1,
        "id": "vintagedelight:pb_j"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "vintagedelight:salt_lamps/salt_lamp_default",
    "recipe": {
      "category": "misc",
      "key": {
        "#": {
          "item": "minecraft:deepslate_tiles"
        },
        "M": {
          "tag": "seki:ingredients/salt_common"
        },
        "Q": {
          "item": "minecraft:glowstone"
        },
        "X": {
          "item": "vintagedelight:salt_block"
        }
      },
      "pattern": [
        " M ",
        "XQX",
        " # "
      ],
      "result": {
        "count": 1,
        "id": "vintagedelight:salt_lamp_default"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "vintagedelight:salt_lamps/salt_lamp_default2",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "vintagedelight:salt_lamp"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "vintagedelight:salt_lamp_default"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "vintagedelight:salted_cod",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "vintagedelight:salted_cod"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "vintagedelight:salted_salmon",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:ingredients/salt_common"
        }
      ],
      "result": {
        "count": 2,
        "id": "vintagedelight:salted_salmon"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "vintagedelight:stuffed_burrito",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "item": "farmersdelight:beef_patty"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:cheese/natural_milk"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 1,
        "id": "vintagedelight:stuffed_burrito"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "youkaisfeasts:cooking/avgolemono",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:glow_berries"
        },
        {
          "item": "minecraft:glow_berries"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:avgolemono"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/blazing_red_curry",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:crimson_fungus"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "tag": "c:crops/potato"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:blazing_red_curry"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/bowl_of_cream",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:bowl_of_cream"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/cumberland_loin",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "c:foods/raw_boar"
        },
        {
          "tag": "c:foods/raw_boar"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:cumberland_loin"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/dried_fish",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:dried_fish"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/grilled_eel_over_rice",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "c:foods/raw_eel"
        },
        {
          "tag": "c:foods/raw_eel"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:grilled_eel_over_rice"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/lions_head",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "tag": "c:crops/carrot"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:lions_head"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/longevity_noodles",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:longevity_noodles"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/mapo_tofu",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        },
        {
          "item": "minecraft:blaze_powder"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:mapo_tofu"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/matcha_mochi",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:ingredients/matcha"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "youkaisfeasts:matcha_mochi"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/mayonnaise_bottle",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:glass_bottle"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "result": {
        "count": 2,
        "id": "youkaisfeasts:mayonnaise_bottle"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/mochi",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/redbean"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "youkaisfeasts:mochi"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/onigili",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "item": "minecraft:dried_kelp"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "youkaisfeasts:onigili"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/pastitsio",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "item": "farmersdelight:tomato_sauce"
        },
        {
          "tag": "seki:meat/raw_beef"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:pastitsio"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/pork_rice_ball",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:pork_rice_ball"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/sakura_mochi",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/redbean"
        },
        {
          "item": "minecraft:cherry_leaves"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "youkaisfeasts:sakura_mochi"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/sauce_grilled_fish",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:fish/raw_fish"
        },
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "tag": "seki:vegetables/common"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:sauce_grilled_fish"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/sekibankiyaki",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/redbean"
        },
        {
          "item": "youkaisfeasts:butter"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "youkaisfeasts:sekibankiyaki"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/senbei",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "item": "minecraft:dried_kelp"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 3,
        "id": "youkaisfeasts:senbei"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/seven_colored_yokan",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "c:crops/redbean"
        },
        {
          "tag": "c:crops/soybean"
        },
        {
          "item": "minecraft:cherry_leaves"
        },
        {
          "tag": "c:foods/fruits/grape"
        },
        {
          "tag": "seki:ingredients/matcha"
        },
        {
          "item": "youkaisfeasts:udumbara_flower"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:seven_colored_yokan"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/steamed_egg_in_bamboo",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:bamboo"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:steamed_egg_in_bamboo"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/stinky_tofu",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:stinky_tofu"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/sweet_ormosia_mochi_mixed_boiled",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "youkaisfeasts:dango"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:vegetables/common"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:sweet_ormosia_mochi_mixed_boiled"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/tamagoyaki",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "result": {
        "count": 2,
        "id": "youkaisfeasts:tamagoyaki"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/tofu_burger",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "youkaisfeasts:butter"
        },
        {
          "item": "minecraft:sweet_berries"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:tofu_burger"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/tsukimi_dango",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "c:crops/soybean"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "id": "youkaisfeasts:tsukimi_dango"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/tuscan_salmon",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:fish/raw_salmon"
        },
        {
          "tag": "c:foods/tomato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "youkaisfeasts:bowl_of_cream"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:tuscan_salmon"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/yakumo_inari",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "youkaisfeasts:oily_bean_curd"
        },
        {
          "item": "youkaisfeasts:oily_bean_curd"
        },
        {
          "item": "youkaisfeasts:oily_bean_curd"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 3,
        "id": "youkaisfeasts:yakumo_inari"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cooking/yashouma_dango",
    "recipe": {
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:pink_dye"
        },
        {
          "item": "minecraft:green_dye"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:yashouma_dango"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:mixing/bowl_of_cream",
    "recipe": {
      "ingredients": [
        {
          "tag": "c:ice_cubes"
        },
        {
          "amount": 1000,
          "tag": "seki:ingredients/dairy_milk",
          "type": "neoforge:tag"
        }
      ],
      "results": [
        {
          "amount": 250,
          "id": "youkaisfeasts:cream"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "youkaisfeasts:mixing/mayonnaise_bottle",
    "recipe": {
      "ingredients": [
        {
          "tag": "c:foods/butter"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "results": [
        {
          "amount": 500,
          "id": "youkaisfeasts:mayonnaise"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/dassai",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:nether_wart"
        },
        {
          "item": "minecraft:nautilus_shell"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:dassai"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/full_moons_eve",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:nether_wart"
        },
        {
          "item": "youkaisfeasts:udumbara_flower"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:full_moons_eve"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/hakutsuru",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:hakutsuru"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/kappa_village",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "item": "minecraft:seagrass"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:kappa_village"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/kiku",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:brown_mushroom"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:kiku"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/mead",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:honey_bottle"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:mead"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/mio",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:mio"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/suigei",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:sea_pickle"
        },
        {
          "item": "minecraft:kelp"
        },
        {
          "item": "minecraft:pufferfish"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:suigei"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  },
  {
    "id": "youkaisfeasts:simple_fermentation/tengu_tango",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "item": "minecraft:nether_wart"
        },
        {
          "item": "minecraft:phantom_membrane"
        }
      ],
      "inputFluid": {
        "amount": 1000,
        "id": "minecraft:water"
      },
      "outputFluid": {
        "amount": 1000,
        "id": "youkaisfeasts:tengu_tango"
      },
      "results": [],
      "time": 2400,
      "type": "youkaisfeasts:simple_fermentation"
    }
  }
];

ServerEvents.recipes(event => {
  for (const target of FALLBACK_TARGETS) {
    event.remove({ id: target.id })
    event.custom(target.recipe).id(target.id)
  }
})
