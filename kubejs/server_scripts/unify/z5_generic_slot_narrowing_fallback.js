// CUISINE-SLOT-NARROW-FALLBACK-05（v14）— DO NOT EDIT BY HAND.
// Generated from the Delightify-level runtime snapshot 2026-08-28T05:55:00.748Z.
// These 38 culinary/beverage recipes serialize their ingredient slots with custom codecs, so the
// recipe-event replaceInput in z_cooking_tag_narrowing.js and z4_generic_slot_narrowing.js cannot reach them.
// Each entry is the copied raw_json with ONLY mapped ingredient tags rewritten to their Seki family; every other
// field (container, carrier, fluid slots, time, experience) is preserved verbatim.

const SLOT_TARGETS = [
  {
    "id": "ends_delight:food/stir_fried_shulker_meat",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:vegetables/onion"
        },
        {
          "tag": "seki:vegetables/tomato"
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
          "tag": "c:foods/shulker_meat"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "ends_delight:stir_fried_shulker_meat"
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
              "tag": "seki:meat/raw_livestock_common"
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
          "tag": "seki:vegetables/carrot_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
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
          "tag": "seki:vegetables/onion"
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
    "id": "farmersdelight:cooking/rabbit_stew",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:vegetables/potato_common"
        },
        {
          "item": "minecraft:rabbit"
        },
        {
          "tag": "seki:vegetables/carrot_common"
        },
        {
          "children": [
            {
              "item": "minecraft:brown_mushroom"
            },
            {
              "item": "minecraft:red_mushroom"
            }
          ],
          "type": "neoforge:compound"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "minecraft:rabbit_stew"
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
          "tag": "seki:vegetables/tomato"
        },
        {
          "tag": "seki:vegetables/onion"
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
          "tag": "seki:vegetables/onion"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:vegetables/potato_common"
        },
        {
          "tag": "seki:fruits/berry_culinary"
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
    "id": "farmersdelight:cooking/vegetable_noodles",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "tag": "seki:vegetables/carrot_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
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
    "id": "letsdocompat:farm_and_charm/cooking/bamboo_mizuyokan",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "ingredients": [
        {
          "tag": "seki:crops/redbean"
        },
        {
          "potion": "minecraft:water",
          "type": "l2core:potion"
        },
        {
          "item": "minecraft:bamboo"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "youkaisfeasts:bamboo_mizuyokan"
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
          "tag": "seki:vegetables/carrot_common"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
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
    "id": "letsdocompat:farm_and_charm/cooking/fake_meatloaf",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/carrot_cave_baked"
        },
        {
          "tag": "seki:vegetables/carrot_cave_baked"
        },
        [
          {
            "item": "minersdelight:baked_cave_carrot"
          },
          {
            "item": "minecraft:carrot"
          }
        ],
        {
          "tag": "seki:vegetables/onion"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "minersdelight:fake_meatloaf"
      },
      "type": "farm_and_charm:pot_cooking"
    }
  },
  {
    "id": "letsdocompat:farm_and_charm/cooking/rabbit_stew",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/potato_common"
        },
        {
          "item": "minecraft:rabbit"
        },
        {
          "tag": "seki:vegetables/carrot_common"
        },
        [
          {
            "item": "minecraft:brown_mushroom"
          },
          {
            "item": "minecraft:red_mushroom"
          }
        ]
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "minecraft:rabbit_stew"
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
          "tag": "seki:vegetables/tomato"
        },
        {
          "tag": "seki:vegetables/onion"
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
    "id": "letsdocompat:farm_and_charm/cooking/spicy_hoglin_stew",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        [
          {
            "item": "mynethersdelight:hoglin_loin"
          },
          {
            "item": "mynethersdelight:hoglin_sausage"
          },
          {
            "item": "mynethersdelight:roasted_sausage"
          },
          {
            "item": "mynethersdelight:cooked_loin"
          }
        ],
        {
          "tag": "seki:vegetables/potato_common"
        },
        {
          "tag": "seki:vegetables/carrot_common"
        },
        [
          {
            "item": "mynethersdelight:bullet_pepper"
          },
          {
            "item": "mynethersdelight:pepper_powder"
          }
        ]
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "mynethersdelight:spicy_hoglin_stew"
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
          "tag": "seki:vegetables/onion"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:vegetables/potato_common"
        },
        {
          "tag": "seki:fruits/berry_culinary"
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
          "tag": "seki:vegetables/onion"
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
    "id": "letsdocompat:farm_and_charm/cooking/vegetable_noodles",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/carrot_common"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        },
        {
          "tag": "seki:pasta/wheat"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
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
    "id": "letsdocompat:farm_and_charm/food/stir_fried_shulker_meat",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "ingredients": [
        {
          "tag": "seki:vegetables/onion"
        },
        {
          "tag": "seki:vegetables/tomato"
        },
        [
          {
            "item": "minecraft:chorus_fruit"
          },
          {
            "item": "ends_delight:chorus_fruit_grain"
          }
        ],
        {
          "tag": "c:foods/shulker_meat"
        }
      ],
      "requireContainer": true,
      "requiresLearning": false,
      "result": {
        "count": 1,
        "id": "ends_delight:stir_fried_shulker_meat"
      },
      "type": "farm_and_charm:pot_cooking"
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
              "tag": "seki:meat/raw_livestock_common"
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
    "id": "minersdelight:cooking/fake_meatloaf",
    "recipe": {
      "container": {
        "count": 1,
        "id": "minecraft:bowl"
      },
      "cookingtime": 400,
      "experience": 2,
      "ingredients": [
        {
          "tag": "seki:vegetables/carrot_cave_baked"
        },
        {
          "tag": "seki:vegetables/carrot_cave_baked"
        },
        {
          "children": [
            {
              "item": "minersdelight:baked_cave_carrot"
            },
            {
              "item": "minecraft:carrot"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "tag": "seki:vegetables/onion"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "minersdelight:fake_meatloaf"
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
          "tag": "seki:vegetables/onion"
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
    "id": "mynethersdelight:cooking/spicy_hoglin_stew",
    "recipe": {
      "experience": 1,
      "ingredients": [
        {
          "children": [
            {
              "item": "mynethersdelight:hoglin_loin"
            },
            {
              "item": "mynethersdelight:hoglin_sausage"
            },
            {
              "item": "mynethersdelight:roasted_sausage"
            },
            {
              "item": "mynethersdelight:cooked_loin"
            }
          ],
          "type": "neoforge:compound"
        },
        {
          "tag": "seki:vegetables/potato_common"
        },
        {
          "tag": "seki:vegetables/carrot_common"
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
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "mynethersdelight:spicy_hoglin_stew"
      },
      "type": "farmersdelight:cooking"
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
          "tag": "seki:eggs/cooked"
        },
        {
          "tag": "seki:eggs/cooked"
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
    "id": "youkaisfeasts:cooking/bamboo_mizuyokan",
    "recipe": {
      "container": {
        "count": 1,
        "id": "youkaisfeasts:saucer"
      },
      "experience": 0.1,
      "ingredients": [
        {
          "tag": "seki:crops/redbean"
        },
        {
          "potion": "minecraft:water",
          "type": "l2core:potion"
        },
        {
          "item": "minecraft:bamboo"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "youkaisfeasts:bamboo_mizuyokan"
      },
      "type": "farmersdelight:cooking"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_mixed/california_roll",
    "recipe": {
      "base": "youkaisfeasts:california",
      "first": [
        {
          "item": "youkaisfeasts:mayonnaise_bottle"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:california_roll"
      },
      "second": [
        {
          "tag": "seki:vegetables/cucumber_slice"
        },
        {
          "item": "youkaisfeasts:tamagoyaki_slice"
        },
        {
          "item": "youkaisfeasts:imitation_crab"
        }
      ],
      "type": "youkaisfeasts:cuisine_mixed"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_mixed/rainbow_futomaki",
    "recipe": {
      "base": "youkaisfeasts:futomaki",
      "first": [
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:rainbow_futomaki"
      },
      "second": [
        {
          "tag": "seki:vegetables/cucumber_slice"
        },
        [
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:beetroot"
          }
        ],
        {
          "item": "youkaisfeasts:tamagoyaki_slice"
        },
        {
          "item": "youkaisfeasts:imitation_crab"
        },
        {
          "tag": "seki:fish/raw_salmon_slice"
        }
      ],
      "type": "youkaisfeasts:cuisine_mixed"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_mixed/salmon_futomaki",
    "recipe": {
      "base": "youkaisfeasts:futomaki",
      "first": [
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:salmon_futomaki"
      },
      "second": [
        {
          "tag": "seki:vegetables/cucumber_slice"
        },
        [
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:beetroot"
          }
        ],
        {
          "item": "youkaisfeasts:imitation_crab"
        },
        {
          "tag": "seki:fish/raw_salmon_slice"
        }
      ],
      "type": "youkaisfeasts:cuisine_mixed"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_ordered/chicken_roll",
    "recipe": {
      "base": "youkaisfeasts:hosomaki",
      "input": [
        {
          "item": "minecraft:beetroot"
        },
        {
          "tag": "seki:meat/cooked_poultry_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "culturaldelights:chicken_roll"
      },
      "type": "youkaisfeasts:cuisine_ordered"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_ordered/egg_roll",
    "recipe": {
      "base": "youkaisfeasts:hosomaki",
      "input": [
        {
          "tag": "seki:eggs/cooked"
        },
        {
          "tag": "seki:eggs/cooked"
        },
        {
          "tag": "seki:eggs/cooked"
        }
      ],
      "result": {
        "count": 4,
        "id": "culturaldelights:egg_roll"
      },
      "type": "youkaisfeasts:cuisine_ordered"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_ordered/kappa_maki",
    "recipe": {
      "base": "youkaisfeasts:hosomaki",
      "input": [
        {
          "item": "youkaisfeasts:soy_sauce_bottle"
        },
        {
          "tag": "seki:vegetables/cucumber_slice"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:kappa_maki"
      },
      "type": "youkaisfeasts:cuisine_ordered"
    }
  },
  {
    "id": "youkaisfeasts:cuisine_ordered/midori_roll",
    "recipe": {
      "base": "youkaisfeasts:hosomaki",
      "input": [
        {
          "tag": "seki:vegetables/cucumber_whole"
        },
        {
          "tag": "c:crops/avocado"
        }
      ],
      "result": {
        "count": 1,
        "id": "culturaldelights:midori_roll"
      },
      "type": "youkaisfeasts:cuisine_ordered"
    }
  },
  {
    "id": "youkaisfeasts:immediate_soup/miso",
    "recipe": {
      "color": -1,
      "id": "youkaisfeasts:miso",
      "input": [
        {
          "fluid": "youkaisfeasts:soy_sauce",
          "type": "youkaisfeasts:slip_bottle"
        },
        {
          "tag": "seki:crops/soybean"
        }
      ],
      "time": 100,
      "type": "youkaisfeasts:immediate_soup"
    }
  },
  {
    "id": "youkaisfeasts:kettle/genmai_tea",
    "recipe": {
      "input": [
        {
          "tag": "c:tea_leaves/green"
        },
        {
          "tag": "c:tea_leaves/green"
        },
        {
          "tag": "seki:rice/common"
        },
        {
          "tag": "seki:rice/common"
        }
      ],
      "result": {
        "amount": 1000,
        "id": "youkaisfeasts:genmai_tea"
      },
      "time": 100,
      "type": "youkaisfeasts:kettle"
    }
  },
  {
    "id": "youkaisfeasts:kettle/green_water",
    "recipe": {
      "input": [
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
        "amount": 1000,
        "id": "youkaisfeasts:green_water"
      },
      "time": 100,
      "type": "youkaisfeasts:kettle"
    }
  },
  {
    "id": "youkaisfeasts:kettle/tea_mocha",
    "recipe": {
      "input": [
        {
          "tag": "c:tea_leaves/black"
        },
        {
          "tag": "c:tea_leaves/black"
        },
        {
          "item": "minecraft:cocoa_beans"
        },
        {
          "tag": "seki:ingredients/dairy_milk"
        }
      ],
      "result": {
        "amount": 1000,
        "id": "youkaisfeasts:tea_mocha"
      },
      "time": 100,
      "type": "youkaisfeasts:kettle"
    }
  },
  {
    "id": "youkaisfeasts:unordered_cooking/higan_soup",
    "recipe": {
      "input": [
        {
          "item": "minecraft:soul_sand"
        },
        {
          "tag": "seki:vegetables/common"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:higan_soup"
      },
      "time": 200,
      "type": "youkaisfeasts:unordered_cooking"
    }
  },
  {
    "id": "youkaisfeasts:unordered_cooking/hokkaido_salmon_hotpot",
    "recipe": {
      "input": [
        {
          "fluid": "youkaisfeasts:soy_sauce",
          "type": "youkaisfeasts:slip_bottle"
        },
        {
          "tag": "seki:crops/soybean"
        },
        {
          "item": "youkaisfeasts:tofu"
        },
        {
          "item": "minecraft:kelp"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "minecraft:potato"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:vegetables/cabbage_strict"
        },
        {
          "tag": "seki:vegetables/onion"
        },
        {
          "tag": "c:foods/raw_salmon"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:hokkaido_salmon_hotpot"
      },
      "time": 200,
      "type": "youkaisfeasts:unordered_cooking"
    }
  },
  {
    "id": "youkaisfeasts:unordered_cooking/signature_mushroom_stew",
    "recipe": {
      "input": [
        {
          "fluid": "youkaisfeasts:soy_sauce",
          "type": "youkaisfeasts:slip_bottle"
        },
        {
          "item": "minecraft:red_mushroom"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "tag": "seki:mushrooms/culinary_common"
        }
      ],
      "result": {
        "count": 1,
        "id": "youkaisfeasts:signature_mushroom_stew"
      },
      "time": 200,
      "type": "youkaisfeasts:unordered_cooking"
    }
  }
];

ServerEvents.recipes(event => {
  for (const target of SLOT_TARGETS) {
    event.remove({ id: target.id })
    event.custom(target.recipe).id(target.id)
  }
})
