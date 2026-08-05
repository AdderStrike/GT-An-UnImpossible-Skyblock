// priority: 0

// Visit the wiki for more info - https://kubejs.com/

Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const Registry = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");



GTCEuStartupEvents.registry('gtceu:material', event => { 

    const EVERY_TOOL = [
    GTToolType.SWORD
    ,GTToolType.PICKAXE
    ,GTToolType.SHOVEL
    ,GTToolType.AXE
    ,GTToolType.HOE
    ,GTToolType.MINING_HAMMER
    ,GTToolType.SPADE
    ,GTToolType.SAW
    ,GTToolType.HARD_HAMMER
    ,GTToolType.SOFT_MALLET
    ,GTToolType.WRENCH
    ,GTToolType.FILE
    ,GTToolType.CROWBAR
    ,GTToolType.SCREWDRIVER
    ,GTToolType.MORTAR
    ,GTToolType.WIRE_CUTTER
    ,GTToolType.SCYTHE
    ,GTToolType.KNIFE
    ,GTToolType.BUTCHERY_KNIFE
    ,GTToolType.PLUNGER
    ,GTToolType.DRILL_LV
    ,GTToolType.DRILL_MV
    ,GTToolType.DRILL_HV
    ,GTToolType.DRILL_EV
    ,GTToolType.DRILL_IV
    ,GTToolType.CHAINSAW_LV
    ,GTToolType.WRENCH_LV
    ,GTToolType.WRENCH_HV
    ,GTToolType.WRENCH_IV
    ,GTToolType.BUZZSAW
    ,GTToolType.SCREWDRIVER_LV
    ,GTToolType.WIRE_CUTTER_LV
    ,GTToolType.WIRE_CUTTER_HV
    ,GTToolType.WIRE_CUTTER_IV
        ];

    event.create('common_metal')
        .ingot().ore()
        .components("5x iron","2x stone","1x quartz_sand","3x tin") 
        .color(0x99ccff).iconSet(GTMaterialIconSet.DULL) 
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.MORTAR_GRINDABLE,
            GTMaterialFlags.SOLDER_MATERIAL_GOOD,
            GTMaterialFlags.GENERATE_LONG_ROD,
        )
        .toolStats(new ToolProperty(1.0, 3.0, 2, 6,EVERY_TOOL));
    
    event.create("stainless_steel_grade_c_304")
        .ingot()
        .liquid(new $FluidBuilder().temperature(2011))
        .color(0xededfd).secondaryColor(0x19191d).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL, 
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
            GTMaterialFlags.NO_SMELTING
        )
        .components("6x iron", "1x chromium", "1x manganese", "1x nickel")
    
    event.create("stainless_steel_grade_b_630")
        .ingot()
        .liquid(new $FluidBuilder().temperature(2500))
        .color(0xedbbfd).secondaryColor(0x331933).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL, 
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
            GTMaterialFlags.NO_SMELTING
        )
        .components("6x iron", "1x titanium", "2x manganese", "2x chromium", "1x niobium")
    
    event.create("stainless_steel_grade_a_409")
        .ingot()
        .liquid(new $FluidBuilder().temperature(2011))
        .color(0xebbedfd).secondaryColor(0x111933).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL, 
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
            GTMaterialFlags.NO_SMELTING
        )
        .components("6x magnetic_iron", "2x chromium", "3x cobalt", "3x nickel", "3x magnetic_neodymium", "1x rhodium_plated_palladium")
    
    event.create("brassonze")
        .ingot()
        .liquid(new $FluidBuilder().temperature(2500))
        .color(0xB59859).secondaryColor(0x362D1B).iconSet(GTMaterialIconSet.SHINY)
        .components("4x brass","4x bronze","1x potin");

    const superConductorMaterials = [
        GTMaterials.ManganesePhosphide,
        GTMaterials.MagnesiumDiboride,
        GTMaterials.MercuryBariumCalciumCuprate,
        GTMaterials.UraniumTriplatinum,
        GTMaterials.SamariumIronArsenicOxide,
        GTMaterials.IndiumTinBariumTitaniumCuprate,
        GTMaterials.UraniumRhodiumDinaquadide,
        GTMaterials.EnrichedNaquadahTriniumEuropiumDuranide,
    ];
    superConductorMaterials.forEach(item => {
        item.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);
    })

    // Fluids
    event.create("spectral_oil").fluid().color(0x000000);

    event.create("ph_solution").fluid().color(0x44ff99);

    let orgSolColorList = [
        0x880000,
        0xBB0000,
        0xBB6600,
        0xAA8800,
        0x999900,
        0x66AA00,
        0x33BB00,
        0x00DD00,
        0x00BB88,
        0x009999,
        0x0052DD,
        0x0000CC,
        0x5200BB,
        0x520088,
        0x660066,
        0x880088
    ]
    for (var i = 0; i <= 15; i++) {
        event.create("organic_solution_ph"+i).fluid().color(orgSolColorList[i]);
    }
});

ItemEvents.modification(event => {
    const forceTo64WithOneHit = (itemToChange) => {
        event.modify(itemToChange, item => {
        //item.maxStackSize = 64;
    });
    }

    let commonMetalToolArray = [
        "gtceu:common_metal_scythe",
        "gtceu:common_metal_hammer",
        "gtceu:common_metal_mortar",
        "gtceu:iv_common_metal_drill",
        "gtceu:ev_common_metal_drill",
        "gtceu:hv_common_metal_drill",
        "gtceu:mv_common_metal_drill",
        "gtceu:lv_common_metal_drill",
        "gtceu:lv_common_metal_chainsaw",
        "gtceu:common_metal_buzzsaw",
        "gtceu:common_metal_pickaxe",
        "gtceu:common_metal_shovel",
        "gtceu:common_metal_mallet",
        "gtceu:common_metal_axe",
        "gtceu:common_metal_file",
        "gtceu:iv_common_metal_wire_cutter",
        "gtceu:hv_common_metal_wire_cutter",
        "gtceu:lv_common_metal_wire_cutter",
        "gtceu:common_metal_wire_cutter",
        "gtceu:iv_common_metal_wrench",
        "gtceu:hv_common_metal_wrench",
        "gtceu:lv_common_metal_wrench",
        "gtceu:common_metal_mining_hammer",
        "gtceu:common_metal_saw",
        "gtceu:common_metal_screwdriver",
        "gtceu:common_metal_spade",
        "gtceu:common_metal_wrench",
        "gtceu:lv_common_metal_screwdriver",
        "gtceu:common_metal_sword",
        "gtceu:common_metal_knife",
        "gtceu:common_metal_butchery_knife",
        "gtceu:common_metal_plunger",
        "gtceu:common_metal_crowbar",
        "gtceu:common_metal_hoe",
    ]
    commonMetalToolArray.forEach(tool=> {
        forceTo64WithOneHit(tool);
    }
    )
    console.info("Yo, items are modified!");
});

StartupEvents.registry('block', event => {
    let directionArray = ["up","down","north","south","east","west"];
    let voltageArray = ["ulv","lv","mv","hv"];
    let voltageMarking = ["§8","§f","§b","§6"];

    voltageArray.forEach((item,index)=>{
        directionArray.forEach(itemDirection =>{
            let foundDirectionIndex = directionArray.indexOf(itemDirection);
            let directionArraySliceStart = directionArray.slice(0,foundDirectionIndex);
            let directionArraySliceEnd = directionArray.slice(foundDirectionIndex+1,directionArray.length);
            let directionArrayMatch=[directionArray[foundDirectionIndex]].concat(directionArraySliceStart,directionArraySliceEnd);

            event.create(item+'_kinetic_input_'+itemDirection)
                .displayName(voltageMarking[index]+item.toUpperCase()+" Kinetic Input Hatch")
                .texture(directionArrayMatch[0],"kubejs:block/"+item+"_kinetic_input_hatch_facing")
                .texture(directionArrayMatch[1],"kubejs:block/"+item+"_kinetic_input_hatch_nonfacing")
                .texture(directionArrayMatch[2],"kubejs:block/"+item+"_kinetic_input_hatch_nonfacing")
                .texture(directionArrayMatch[3],"kubejs:block/"+item+"_kinetic_input_hatch_nonfacing")
                .texture(directionArrayMatch[4],"kubejs:block/"+item+"_kinetic_input_hatch_nonfacing")
                .texture(directionArrayMatch[5],"kubejs:block/"+item+"_kinetic_input_hatch_nonfacing")
                .stoneSoundType()
                .hardness(1)
                .resistance(1)
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('minecraft:needs_iron_tool')
                
        })
    })
    /*
    event.create('simple_rotational_input')
    .displayName("§8ULV Kinetic Input Hatch")
    .texture("up","kubejs:block/simple_kinetic_input_hatch_nonfacing")
    .texture("down","kubejs:block/simple_kinetic_input_hatch_nonfacing")
    .texture("north","kubejs:block/simple_kinetic_input_hatch_facing")
    .texture("south","kubejs:block/simple_kinetic_input_hatch_nonfacing")
    .texture("east","kubejs:block/simple_kinetic_input_hatch_nonfacing")
    .texture("west","kubejs:block/simple_kinetic_input_hatch_nonfacing")
    .stoneSoundType()
    .hardness(1)
    .resistance(1)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool');
    */
    
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_water_catcher', 'multiblock')
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('W   W', 'W   W', 'W   W','WBBBW', 'OSSSO')
            .aisle('  W  ', '  W  ', ' TBT ','BDDDB', 'E   V')
            .aisle(' WBW ', ' W W ', ' B B ','BD DB', 'E   V')
            .aisle('  K  ', '  W  ', ' TBT ','BDDDB', 'E   V')
            .aisle('W   W', 'W   W', 'W   W','WBBBW', 'ONNNO')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks('minecraft:mud_brick_wall'))
            .where('B', Predicates.blocks('minecraft:mud_bricks'))
            .where("T", Predicates.states(Utils.parseBlockState("minecraft:mud_brick_slab[type=top]")))
            .where('D', Predicates.states(Utils.parseBlockState("minecraft:mud_brick_slab[type=bottom]")))
            .where('O', Predicates.states(Utils.parseBlockState("minecraft:mud_brick_stairs[shape=inner_left]")))
                //.or(Predicates.states(Utils.parseBlockState("minecraft:mud_brick_stairs[shape=inner_right]")))
            .where('N', Predicates.states(Utils.parseBlockState("minecraft:mud_brick_stairs[facing=south]")))
            .where('S', Predicates.states(Utils.parseBlockState("minecraft:mud_brick_stairs[facing=north]")))
            .where('E', Predicates.states(Utils.parseBlockState("minecraft:mud_brick_stairs[facing=west]")))
            .where('V', Predicates.states(Utils.parseBlockState("minecraft:mud_brick_stairs[facing=east]")))
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/multiblock/large_boiler_bronze"
        )
})
console.info('Hello, World! (Loaded startup scripts)');
//console.log(Block.getBlock("minecraft:mud_brick_stairs").blockStates);
//console.log(Block.getBlock("minecraft:mud_brick_stairs").blockStates[0]);

StartupEvents.registry("item", event=>{
    let omniConveyor = (name,displayName) => {
        event.create(name).texture("kubejs:item/"+name).displayName(displayName);
    }

    omniConveyor("lv_omni_conveyor","LV Omnidirectional Conveyor");
    omniConveyor("mv_omni_conveyor","MV Omnidirectional Conveyor");
    omniConveyor("hv_omni_conveyor","HV Omnidirectional Conveyor");
    omniConveyor("ev_omni_conveyor","EV Omnidirectional Conveyor");

})

GTCEuStartupEvents.craftingComponents(event => {
    let ITEM_CRAFTING_COMPONENT = event.createItem("omni_conveyor", 'kubejs:lv_omni_conveyor')
        .addItem(GTValues.LV, Item.of('kubejs:lv_omni_conveyor'))
        .addItem(GTValues.MV, Item.of('kubejs:mv_omni_conveyor'))
        .addItem(GTValues.HV, Item.of('kubejs:hv_omni_conveyor'))
        .addItem(GTValues.EV, Item.of('kubejs:ev_omni_conveyor'))
        .addItem(GTValues.IV, Item.of('kubejs:iv_omni_conveyor'))
        .addItem(GTValues.LuV, Item.of('kubejs:luv_omni_conveyor'))
        .addItem(GTValues.ZPM, Item.of('kubejs:zpm_omni_conveyor'))
        .addItem(GTValues.UV, Item.of('kubejs:uv_omni_conveyor'))
    // 
    
    event.setItem(GTCraftingComponents.PLATE,GTValues.LuV,Item.of("gtceu:stainless_steel_grade_a_409_plate"));
    event.setItem(GTCraftingComponents.PLATE,GTValues.HV,Item.of("gtceu:stainless_steel_grade_c_304_plate"));
})


