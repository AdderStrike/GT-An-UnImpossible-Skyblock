/*
    Handles All Tags
*/
ServerEvents.recipes(event =>{
    //This block of code is to reduce the number of errors here.

    event.remove({input:"#ae2:metal_ingots",not:{input:"#forge:gems"}});
    event.remove({input:"#ae2:metal_ingots"});

    event.replaceInput(
        {input:"#forge:rawmutton"},
        "#forge:rawmutton",
        "#forge:raw_mutton"
    );
    event.replaceInput(
        {input:"#croptopia:beef_mutton"},
        "#croptopia:beef_mutton",
        "#forge:raw_mutton"
    );

    event.replaceInput(
        {input:"#forge:rawfish"},
        "#forge:rawfish",
        "#forge:raw_fishes"
    );
    event.replaceInput(
        {input:"#croptopia:fishes"},
        "#croptopia:fishes",
        "#minecraft:fishes"
    );
    event.replaceInput(
        {input:"#forge:raw_fishes"},
        "#forge:raw_fishes",
        "#minecraft:fishes"
    );

    event.remove({input:"#croptopia:flourable",not:{input:"forge:grain"}});
    event.remove({input:"#forge:fiber",not:{input:"forge:crops"}});
    event.remove({input:"#forge:flour_plants"});
    event.remove({input:"#forge:paper_plants"});

    event.replaceInput(
        {input:"#forge:rawbeef"},
        "#forge:rawbeef",
        "#forge:raw_beef"
    );
    event.replaceInput(
        {input:"#forge:rawchicken"},
        "#forge:rawchicken",
        "#forge:raw_chicken"
    );
    event.replaceInput(
        {input:"#forge:rawpork"},
        "#forge:rawpork",
        "#forge:raw_pork"
    );
    event.replaceInput(
        {input:"#forge:rawrabbit"},
        "#forge:rawrabbit",
        "#forge:raw_rabbit"
    );

    event.replaceInput(
        {input:"#forge:water"},
        "#forge:water",
        "#forge:water_items"
    );
    event.replaceInput(
        {input:"#forge:water_bottles"},
        "#forge:water_bottles",
        "#forge:water_items"
    );

    event.replaceInput(
        {input:"#tconstruct:planklike"},
        "#tconstruct:planklike",
        "#minecraft:planks"
    );
})


ServerEvents.tags('item', event => {

    //Tag Breaker Part
    
    event.removeAll("ae2:all_quartz");
    event.removeAll("ae2:metal_ingots");
    event.removeAll("brewinandchewin:pizza_toppings");
    event.removeAll("createaddition:plant_foods");
    event.removeAll("createaddition:plants");
    event.removeAll("croptopia:beef_mutton");
    event.removeAll("croptopia:fishes");
    event.removeAll("croptopia:flourable");
    event.removeAll("forge:fiber");
    event.removeAll("forge:fishes");
    event.removeAll("forge:flour_plants");
    event.removeAll("forge:paper_plants");
    event.removeAll("forge:protein");
    event.removeAll("forge:raw_seafood");

    event.add("forge:raw_beef","#forge:rawbeef");
    event.removeAll("forge:rawbeef");

    event.add("forge:raw_chicken","#forge:rawchicken");
    event.removeAll("forge:rawchicken");

    event.add("forge:raw_fishes","#forge:rawfish");
    event.removeAll("forge:rawfish");

    event.add("forge:raw_mutton","#forge:rawmutton");
    event.removeAll("forge:rawmutton");

    event.add("forge:raw_pork","#forge:rawpork");
    event.removeAll("forge:rawpork");

    event.add("forge:raw_rabbit","#forge:rawrabbit");
    event.removeAll("forge:rawrabbit");

    event.add("forge:water_items","#forge:water");
    event.add("forge:water_items","#forge:water_bottles");
    event.removeAll("forge:water");
    event.removeAll("forge:water_bottles");
    
    event.removeAll("tconstruct:planklike");
    event.removeAll("tconstruct:seeds");

    event.add("minecraft:vines","#tconstruct:slimy_vines");
    event.add("minecraft:vines","minecraft:vine");
    event.add("minecraft:vines","minecraft:twisting_vines");
    event.add("minecraft:vines","minecraft:weeping_vines");

    event.add("minecraft:villager_plantable_seeds","#forge:seeds");

    //Tag Maker part
    const nonFlammableSigns = [
        "tconstruct:greenheart_sign",
        "tconstruct:skyroot_sign",
        "tconstruct:bloodshroom_sign",
        "tconstruct:enderbark_sign",
        "tconstruct:greenheart_hanging_sign",
        "tconstruct:skyroot_hanging_sign",
        "tconstruct:bloodshroom_hanging_sign",
        "tconstruct:enderbark_hanging_sign",
    ];
    nonFlammableSigns.forEach(sign=>{
        event.add("minecraft:non_flammable_wood",sign);
    });

    const woodenList = [
        event.get('minecraft:planks').getObjectIds(),
        event.get("minecraft:wooden_stairs").getObjectIds(),
        event.get("minecraft:wooden_slabs").getObjectIds(),
        event.get("minecraft:wooden_fences").getObjectIds(),
        event.get("forge:fence_gates/wooden").getObjectIds(),
        event.get("minecraft:wooden_doors").getObjectIds(),
        event.get("minecraft:wooden_trapdoors").getObjectIds(),
        event.get("minecraft:wooden_pressure_plates").getObjectIds(),
        event.get("minecraft:wooden_buttons").getObjectIds(),
        event.get("minecraft:signs").getObjectIds(),
        event.get("minecraft:hanging_signs").getObjectIds()
    ];

    const kubeWoodenTagList = [
        'planks',
        'stairs',
        'slabs',
        'fences',
        'fence_gates',
        'doors',
        'trapdoors',
        'pressure_plates',
        'buttons',
        "signs",
        "hanging_signs"
    ];

    const woodenBlacklist = event.get("minecraft:non_flammable_wood").getObjectIds();
    woodenList.forEach((woodenItemList,index) => {
        woodenItemList.forEach(woodenItem => {
            if (!woodenBlacklist.contains(woodenItem)) event.add("kubejs:flammable_"+kubeWoodenTagList[index], woodenItem);
        });
    });

    event.add("kubejs:flammable_planks","minecraft:bamboo_mosaic");
    event.add("kubejs:flammable_slabs","minecraft:bamboo_mosaic_slab");
    event.add("kubejs:flammable_stairs","minecraft:bamboo_mosaic_stairs");

});
