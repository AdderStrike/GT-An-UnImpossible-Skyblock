// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.
    event.remove({type:"minecraft:crafting_shaped",output:"minecraft:furnace"});
    event.remove([{type:"minecraft:smelting",output:"gtceu:common_metal_ingot"},{type:"minecraft:blasting",output:"gtceu:common_metal_ingot"}]);
    event.remove({mod:"torcherino"});

    event.smelting("minecraft:iron_ingot","gtceu:common_metal_dust");
    //You monster
    event.shaped(
        Item.of("minecraft:furnace"),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A:"#minecraft:stone_tool_materials",
            B:"gtceu:small_common_metal_gear"
        }
    );

    //Gravel Procurement
    event.shapeless(
      Item.of('minecraft:gravel', 1), 
      [
        '4x #forge:surface_rocks'
      ]
    );
    
    //Stoneworks
    event.shapeless(
      Item.of("gtceu:stone_dust", 1),
      [
        "gtceu:tiny_calcite_dust",
        "gtceu:tiny_gypsum_dust",
        "gtceu:tiny_hematite_dust",
        "minecraft:gravel"
      ]
    )

    event.shapeless(
      Item.of("gtceu:stone_rod",1),
      [
        "2x gtceu:stone_dust",
        "gtceu:tiny_calcite_dust",
        "minecraft:flint"
      ]
    )

    event.shapeless(
      Item.of("gtceu:stone_plate",1),
      [
        "4x gtceu:stone_dust"
      ]
    )

    event.shapeless(
      Item.of("minecraft:scaffolding",1),
      [
        "4x gtceu:stone_rod"
      ]
    )
    
    //Rock Former
    event.shaped(
        Item.of("gtceu:tiny_flint_dust",3),
        [
          "AA ",
          "B  ",
          "   "
        ],
        {
          A:"minecraft:flint",
          B:"gtceu:stone_plate"
        }
    )

    event.shapeless(
      Item.of("gtceu:tiny_granite_dust",1),
      [
        "3x gtceu:tiny_flint_dust",
        "gtceu:tiny_calcite_dust"
      ]
    )
    
    event.shapeless(
      Item.of("gtceu:tiny_diorite_dust",1),
      [
        "2x gtceu:tiny_gypsum_dust",
        "gtceu:tiny_calcite_dust",
        "gtceu:tiny_granite_dust"
      ]
    )

    event.shapeless(
      Item.of("gtceu:small_andesite_dust",1),
      [
        "3x gtceu:stone_dust",
        "gtceu:tiny_diorite_dust"
      ]
    )

    //Finally we can get out of this chapter one
    event.shaped(
        Item.of("create:andesite_scaffolding"),
        [
          "BA ",
          "BB ",
          "   "
        ],
        {
          A:"minecraft:scaffolding",
          B:"gtceu:andesite_dust"
        }
    )
});

BlockEvents.rightClicked("minecraft:dirt", event => {
  if (event.player.isShiftKeyDown()&&event.player.mainHandItem.empty) {
    let randomInt = Math.floor(Math.random()*100)+1;
    if (randomInt>=80){
      event.player.give("gtceu:hematite_indicator");
    } else if (randomInt>=60){
      event.player.give("gtceu:calcite_indicator");
    } else if (randomInt>50){
      event.player.give("gtceu:gypsum_indicator");
    }
}});

//Tulips
ServerEvents.tags("item", event=>{
  event.add("forge:tulips","minecraft:red_tulip");
  event.add("forge:tulips","minecraft:orange_tulip");
  event.add("forge:tulips","minecraft:white_tulip");
  event.add("forge:tulips","minecraft:pink_tulip");
});


console.info('Hello, World! (Loaded server scripts)');

