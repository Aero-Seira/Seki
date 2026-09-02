// CUISINE-BAKERIES-DOUGH-LOCK-03 — DO NOT EDIT BY HAND.
// Generated from Delightify-level snapshot 2026-08-27T07:26:19.857388Z.
// Locks the broad bakery:farm-and-charm dough families consumed by immersive stove bread routes.

const TARGETS = [
  {
    "id": "bakery:bread_crate",
    "recipe": {
      "category": "misc",
      "key": {
        "#": {
          "item": "bakery:tray"
        },
        "B": {
          "item": "bakery:bun"
        },
        "U": {
          "tag": "seki:breads/common"
        },
        "V": {
          "item": "bakery:braided_bread"
        },
        "_": {
          "item": "bakery:baguette"
        }
      },
      "pattern": [
        " U ",
        "_BV",
        " # "
      ],
      "result": {
        "count": 1,
        "id": "bakery:bread_crate"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "bakery:bread_with_jam",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "bakery:jam"
        }
      ],
      "result": {
        "count": 5,
        "id": "bakery:bread_with_jam"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "bakery:sandwich",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "seki:meat/cooked_livestock_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "result": {
        "count": 2,
        "id": "bakery:sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "bakery:vegetable_sandwich",
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
        "count": 4,
        "id": "bakery:vegetable_sandwich"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/butter",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 4,
        "id": "farm_and_charm:butter"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/cake_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "count": 12,
        "id": "bakery:cake_dough"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/cat_food",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:meat/cooked_livestock_common"
        },
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "result": {
        "count": 6,
        "id": "farm_and_charm:cat_food"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/dog_food",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:meat/cooked_livestock_common"
        },
        {
          "tag": "seki:meat/raw_beef_common"
        },
        {
          "tag": "farm_and_charm:bones"
        }
      ],
      "result": {
        "count": 4,
        "id": "farm_and_charm:dog_food"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/farmer_salad",
    "recipe": {
      "ingredients": [
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:strawberry"
        }
      ],
      "result": {
        "count": 2,
        "id": "farm_and_charm:farmer_salad"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/fresh_garden_salad",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "candlelight:bowls"
        },
        {
          "item": "minecraft:carrot"
        }
      ],
      "result": {
        "count": 2,
        "id": "candlelight:fresh_garden_salad"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/mozzarella",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "candlelight:water_bottles"
        }
      ],
      "result": {
        "count": 6,
        "id": "candlelight:mozzarella"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/oatmeal_with_strawberries",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "farm_and_charm:oat"
        },
        {
          "tag": "farm_and_charm:strawberry"
        }
      ],
      "result": {
        "count": 2,
        "id": "farm_and_charm:oatmeal_with_strawberries"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/potato_salad",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:baked_potato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:tomato"
        }
      ],
      "result": {
        "count": 2,
        "id": "brewery:potato_salad"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/salad",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "candlelight:bowls"
        },
        {
          "tag": "candlelight:cheeses"
        }
      ],
      "result": {
        "count": 4,
        "id": "candlelight:salad"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:crafting_bowl/sweet_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "bakery:water_bottles"
        }
      ],
      "result": {
        "count": 12,
        "id": "bakery:sweet_dough"
      },
      "type": "farm_and_charm:crafting_bowl"
    }
  },
  {
    "id": "farm_and_charm:farmers_breakfast",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "item": "farm_and_charm:bacon_with_eggs"
        },
        {
          "item": "farm_and_charm:roasted_corn"
        }
      ],
      "result": {
        "count": 1,
        "id": "farm_and_charm:farmers_breakfast"
      },
      "type": "minecraft:crafting_shapeless"
    }
  },
  {
    "id": "farm_and_charm:mincer/flour",
    "recipe": {
      "ingredient": {
        "tag": "seki:grains/wheat_common"
      },
      "recipe_type": "STONE",
      "result": {
        "count": 4,
        "id": "farm_and_charm:flour"
      },
      "type": "farm_and_charm:mincer"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/chicken_teriyaki",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "candlelight:harvest_plate"
        },
        {
          "item": "farm_and_charm:chicken_parts"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "candlelight:chicken_teriyaki"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/chocolate",
    "recipe": {
      "container": {
        "count": 1,
        "id": "bakery:jar"
      },
      "ingredients": [
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:cocoa_beans"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": false,
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "bakery:chocolate_truffle"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/chocolate_jam",
    "recipe": {
      "container": {
        "count": 1,
        "id": "bakery:jar"
      },
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "bakery:chocolate"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "bakery:chocolate_jam"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/chocolate_mousse",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:cocoa_beans"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "candlelight:chocolate_mousse"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/corn_grits",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "farm_and_charm:corn"
        },
        {
          "tag": "farm_and_charm:corn"
        },
        {
          "tag": "seki:flours/plain_wheat"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:corn_grits"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/dumplings",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "brewery:mashed_potatoes"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewery:dumplings"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/goulash",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "item": "minecraft:cooked_beef"
        },
        {
          "item": "farm_and_charm:simple_tomato_soup"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "minecraft:potato"
        }
      ],
      "requireContainer": false,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:goulash"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/khinkali",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farm_and_charm:minced_beef"
        },
        {
          "item": "farm_and_charm:dough"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "candlelight:khinkali"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/mushroom_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "candlelight:mushrooms"
        },
        {
          "tag": "candlelight:red_effect"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "candlelight:mushroom_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/onion_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "tag": "farm_and_charm:onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:onion_soup"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/pasta_with_mozzarella",
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
          "item": "minecraft:egg"
        },
        {
          "tag": "candlelight:red_effect"
        },
        {
          "item": "candlelight:mozzarella"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "candlelight:pasta_with_mozzarella"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/pudding",
    "recipe": {
      "container": {
        "count": 1,
        "id": "bakery:jar"
      },
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "bakery:jam"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requireContainer": false,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "bakery:pudding"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/salmon_on_white_wine",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:salmon"
        },
        {
          "tag": "candlelight:white_effect"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "candlelight:salmon_on_white_wine"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:pot_cooking/sausage",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farm_and_charm:minced_beef"
        },
        {
          "item": "farm_and_charm:minced_beef"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "brewery:sausage"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "farm_and_charm:roaster/bacon_with_eggs",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farm_and_charm:bacon"
        },
        {
          "item": "farm_and_charm:bacon"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "farm_and_charm:bacon_with_eggs"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/barley_patties_with_potatoes",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "farm_and_charm:barley"
        },
        {
          "tag": "farm_and_charm:barley"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "farm_and_charm:barley_patties_with_potatoes"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/beef_patty_with_vegetables",
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
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "item": "minecraft:beetroot"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "farm_and_charm:beef_patty_with_vegetables"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/beef_with_mushroom_in_wine_and_potatoes",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:baked_potato"
        },
        {
          "item": "candlelight:fillet_steak"
        },
        {
          "tag": "candlelight:mushrooms"
        },
        {
          "tag": "candlelight:white_effect"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "candlelight:beef_with_mushroom_in_wine_and_potatoes"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/chicken_wrapped_in_bacon",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farm_and_charm:bacon"
        },
        {
          "item": "farm_and_charm:chicken_parts"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:chicken_wrapped_in_bacon"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/cooked_cod",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:cod"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:cooked_cod"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/cooked_salmon",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "farm_and_charm:corn"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "minecraft:salmon"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:cooked_salmon"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/fillet_steak",
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
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "candlelight:all_effects"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "candlelight:fillet_steak"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/fried_chicken",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "farm_and_charm:chicken_parts"
        },
        {
          "item": "minecraft:chicken"
        },
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "brewery:fried_chicken"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/lamb_with_corn",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:carrot"
        },
        {
          "tag": "farm_and_charm:corn"
        },
        {
          "item": "farm_and_charm:lamb_ham"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:lamb_with_corn"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/oat_pancake",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "farm_and_charm:oat"
        },
        {
          "tag": "farm_and_charm:oat"
        },
        {
          "tag": "farm_and_charm:oat"
        },
        {
          "item": "farm_and_charm:dough"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "farm_and_charm:strawberry"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "farm_and_charm:oat_pancake"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/omelet",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "minecraft:egg"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "farm_and_charm:strawberry"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 6,
        "id": "candlelight:omelet"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/pasta_broccoli",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "candlelight:cheeses"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "candlelight:pasta_with_lettuce"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/pasta_with_bolognese",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "item": "candlelight:bolognese"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "candlelight:cheeses"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "candlelight:pasta_with_bolognese"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/roasted_lamb_with_lettuce",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "farm_and_charm:lamb_ham"
        },
        {
          "tag": "candlelight:red_effect"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "candlelight:roasted_lamb_with_lettuce"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:roaster/sausage_with_oat_patty",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "farm_and_charm:oat"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "farm_and_charm:minced_beef"
        },
        {
          "item": "farm_and_charm:minced_beef"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "farm_and_charm:sausage_with_oat_patty"
      },
      "type": "farm_and_charm:roaster"
    }
  },
  {
    "id": "farm_and_charm:stove/baguette",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "item": "bakeries:salted_dough"
        },
        {
          "item": "bakeries:baguette_dough"
        },
        {
          "item": "farm_and_charm:yeast"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "bakery:baguette"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/baked_lamb_ham",
    "recipe": {
      "experience": 0.5,
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "item": "farm_and_charm:lamb_ham"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:baked_lamb_ham"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/beef_wellington",
    "recipe": {
      "experience": 0.5,
      "ingredients": [
        {
          "item": "farm_and_charm:lamb_ham"
        },
        {
          "item": "farm_and_charm:dough"
        },
        {
          "item": "candlelight:mushroom_soup"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "candlelight:beef_wellington"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/braided_bread",
    "recipe": {
      "experience": 0.125,
      "ingredients": [
        {
          "item": "bakeries:salted_dough"
        },
        {
          "item": "bakeries:salted_dough"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "bakery:braided_bread"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/bread",
    "recipe": {
      "experience": 0.125,
      "ingredients": [
        {
          "item": "bakeries:salted_dough"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "bakery:water_bottles"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "bakery:bread"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/bun",
    "recipe": {
      "experience": 0.125,
      "ingredients": [
        {
          "item": "farm_and_charm:dough"
        },
        {
          "item": "farm_and_charm:yeast"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 5,
        "id": "bakery:bun"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/bundt_cake",
    "recipe": {
      "experience": 0.4,
      "ingredients": [
        {
          "tag": "seki:eggs/common"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "farm_and_charm:yeast"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "bakery:bundt_cake"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/chicken_alfredo",
    "recipe": {
      "experience": 0.5,
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farm_and_charm:chicken_parts"
        },
        {
          "tag": "candlelight:all_effects"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "candlelight:chicken_alfredo"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/crusty_bread",
    "recipe": {
      "experience": 0.3,
      "ingredients": [
        {
          "item": "bakeries:ciabatta_dough"
        },
        {
          "item": "farm_and_charm:yeast"
        },
        {
          "tag": "bakery:water_bottles"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "bakery:crusty_bread"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/farmers_bread",
    "recipe": {
      "experience": 0.3,
      "ingredients": [
        {
          "item": "farm_and_charm:dough"
        },
        {
          "tag": "farm_and_charm:water_bottles"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "farm_and_charm:farmers_bread"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/gingerbread",
    "recipe": {
      "experience": 0.5,
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "farm_and_charm:yeast"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "brewery:gingerbread"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/grandmothers_strawberry_cake",
    "recipe": {
      "experience": 0.35,
      "ingredients": [
        {
          "item": "bakery:cake_dough"
        },
        {
          "tag": "farm_and_charm:strawberry"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "farm_and_charm:grandmothers_strawberry_cake"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/grilled_bacon_sandwich",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "farm_and_charm:raw_bacon"
        },
        {
          "tag": "farm_and_charm:raw_bacon"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "bakery:grilled_bacon_sandwich"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/grilled_salmon_sandwich",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "item": "minecraft:salmon"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "bakery:grilled_salmon_sandwich"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/lasagne",
    "recipe": {
      "experience": 0.75,
      "ingredients": [
        {
          "item": "candlelight:bolognese"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "candlelight:cheeses"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 2,
        "id": "candlelight:lasagne"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/pasta_with_onion_sauce",
    "recipe": {
      "experience": 0.4,
      "ingredients": [
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "tag": "seki:pasta/wheat"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "farm_and_charm:pasta_with_onion_sauce"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/pretzel",
    "recipe": {
      "experience": 0.5,
      "ingredients": [
        {
          "item": "farm_and_charm:dough"
        },
        {
          "item": "farm_and_charm:yeast"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 4,
        "id": "brewery:pretzel"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/roasted_chicken",
    "recipe": {
      "experience": 0.3,
      "ingredients": [
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "item": "farm_and_charm:chicken_parts"
        },
        {
          "item": "minecraft:carrot"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "farm_and_charm:roasted_chicken"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/roasted_corn",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "tag": "farm_and_charm:corn"
        },
        {
          "tag": "farm_and_charm:corn"
        },
        {
          "tag": "seki:ingredients/butter_dairy"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "farm_and_charm:roasted_corn"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/toast",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "bakeries:sweet_dough"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "bakery:toast"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/tropical_fish_supreme",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "item": "minecraft:tropical_fish"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "candlelight:white_effect"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 3,
        "id": "candlelight:tropical_fish_supreme"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "farm_and_charm:stove/waffle",
    "recipe": {
      "experience": 0.2,
      "ingredients": [
        {
          "item": "bakery:sweet_dough"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:eggs/common"
        }
      ],
      "requiresLearning": false,
      "result": {
        "count": 6,
        "id": "bakery:waffle"
      },
      "type": "farm_and_charm:stove"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/butter",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "results": [
        {
          "count": 4,
          "id": "farm_and_charm:butter"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/cake_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "results": [
        {
          "count": 12,
          "id": "bakery:cake_dough"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/cat_food",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:meat/cooked_livestock_common"
        },
        {
          "tag": "seki:fish/raw_common_safe"
        },
        {
          "tag": "seki:meat/raw_poultry_common"
        },
        {
          "tag": "seki:meat/raw_pork_common"
        }
      ],
      "results": [
        {
          "count": 6,
          "id": "farm_and_charm:cat_food"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/dog_food",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:meat/cooked_livestock_common"
        },
        {
          "tag": "seki:meat/raw_beef_common"
        },
        {
          "tag": "farm_and_charm:bones"
        }
      ],
      "results": [
        {
          "count": 4,
          "id": "farm_and_charm:dog_food"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/farmer_salad",
    "recipe": {
      "ingredients": [
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:strawberry"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "farm_and_charm:farmer_salad"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/fresh_garden_salad",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "candlelight:bowls"
        },
        {
          "item": "minecraft:carrot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "candlelight:fresh_garden_salad"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/mozzarella",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "candlelight:water_bottles"
        }
      ],
      "results": [
        {
          "count": 6,
          "id": "candlelight:mozzarella"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/oatmeal_with_strawberries",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:ingredients/dairy_milk"
        },
        {
          "tag": "farm_and_charm:oat"
        },
        {
          "tag": "farm_and_charm:strawberry"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "farm_and_charm:oatmeal_with_strawberries"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/potato_salad",
    "recipe": {
      "ingredients": [
        {
          "item": "minecraft:beetroot"
        },
        {
          "item": "minecraft:baked_potato"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:tomato"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "brewery:potato_salad"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/salad",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "farm_and_charm:tomato"
        },
        {
          "tag": "candlelight:bowls"
        },
        {
          "tag": "candlelight:cheeses"
        }
      ],
      "results": [
        {
          "count": 4,
          "id": "candlelight:salad"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:create/crafting_bowl/sweet_dough",
    "recipe": {
      "ingredients": [
        {
          "tag": "seki:flours/plain_wheat"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "tag": "seki:eggs/common"
        },
        {
          "tag": "bakery:water_bottles"
        }
      ],
      "results": [
        {
          "count": 12,
          "id": "bakery:sweet_dough"
        }
      ],
      "type": "create:mixing"
    }
  },
  {
    "id": "letsdocompat:farmersdelight/pot_cooking/onion_soup",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:breads/common"
        },
        {
          "tag": "farm_and_charm:onion"
        },
        {
          "tag": "farm_and_charm:onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "farm_and_charm:onion_soup"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "minecraft:cake",
    "recipe": {
      "category": "misc",
      "key": {
        "A": {
          "tag": "seki:ingredients/dairy_milk"
        },
        "B": {
          "tag": "seki:ingredients/sugar_refined"
        },
        "C": {
          "tag": "seki:grains/wheat_common"
        },
        "E": {
          "tag": "seki:eggs/common"
        }
      },
      "pattern": [
        "AAA",
        "BEB",
        "CCC"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:cake"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "minecraft:cookie",
    "recipe": {
      "category": "misc",
      "key": {
        "#": {
          "tag": "seki:grains/wheat_common"
        },
        "X": {
          "item": "minecraft:cocoa_beans"
        }
      },
      "pattern": [
        "#X#"
      ],
      "result": {
        "count": 8,
        "id": "minecraft:cookie"
      },
      "type": "minecraft:crafting_shaped"
    }
  },
  {
    "id": "minecraft:packed_mud",
    "recipe": {
      "category": "misc",
      "ingredients": [
        {
          "item": "minecraft:mud"
        },
        {
          "tag": "seki:grains/wheat_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "minecraft:packed_mud"
      },
      "type": "minecraft:crafting_shapeless"
    }
  }
];

ServerEvents.recipes(event => {
  for(const target of TARGETS){
    event.remove({id:target.id})
    event.custom(target.recipe).id(target.id)
  }
})
