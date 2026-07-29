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
})
