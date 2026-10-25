
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of("gtceu:fertilizer",1),
        [
            "gtceu:calcite_dust",
            "gtceu:gypsum_dust",
            "gtceu:hematite_dust"
        ]
    )

    event.shapeless(
        Item.of("minecraft:dirt",2),
        [
            "minecraft:gravel",
            "minecraft:sand",
            "#forge:crops",
            "#forge:seeds"
        ]
    )

    event.shaped(
        Item.of("minecraft:coarse_dirt",4),
        [
            "AB ",
            "BA ",
            "   "
        ], {
            A: "minecraft:dirt",
            B: "minecraft:gravel"
        }
    )

    event.shaped(
        Item.of("agricraft:wooden_crop_sticks",1),
        [
            "AA ",
            "BB ",
            "   "
        ],
        {
            A:"minecraft:wheat",
            B:"gtceu:stone_rod"
        }
        
    )

    event.shaped(
        Item.of("woodenbucket:wooden_bucket","{Damage:25}"),
        [
            "AB ",
            "AA ",
            "   "
        ],
        {
            A:"minecraft:bamboo",
            B:"gtceu:calcite_dust"
        }
    )

    event.shapeless(
        Item.of("minecraft:packed_mud"),
        [
            "3x minecraft:wheat",
            "minecraft:mud"
        ]
    )

    event.shapeless(
        Item.of("minecraft:packed_mud"),
        [
            "3x pamhc2crops:ryeitem",
            "minecraft:mud"
        ]
    )

    event.shapeless(
        Item.of("minecraft:packed_mud"),
        [
            "3x pamhc2crops:barleyitem",
            "minecraft:mud"
        ]
    )

    event.shaped(
        Item.of("minecraft:mud_bricks"),
        [
            "AA ",
            "AA ",
            "   "
        ],
        {
            A:"minecraft:packed_mud"
        }
    )

    event.shaped(
        Item.of("minecraft:mud_brick_slab",2),
        [
            "AA ",
            "BB ",
            "   ",
        ],
        {
            A:"minecraft:flint",
            B:"minecraft:mud_bricks"
        }
    )

    event.shaped(
        Item.of("minecraft:mud_brick_stairs",4),
        [
            "BA ",
            "BB ",
            "   ",
        ],
        {
            A:"minecraft:flint",
            B:"minecraft:mud_bricks"
        }
    )

    event.shaped(
        Item.of("minecraft:mud_brick_wall",2),
        [
            "AB ",
            "AB ",
            "   ",
        ],
        {
            A:"minecraft:flint",
            B:"minecraft:mud_bricks"
        }
    )

    event.shaped(
        Item.of("gtceu:primitive_water_catcher"),
        [
            "AB ",
            "CD ",
            "   "
        ],
        {
            A:"woodenbucket:wooden_bucket",
            B:"minecraft:mud_brick_wall",
            C:"minecraft:mud_brick_stairs",
            D:"minecraft:mud_bricks"
        }
    )

});

BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
    //console.log(event.player.mainHandItem);
    if (event.player.mainHandItem.hasTag("minecraft:hoes")){
        let chance = Math.floor(Math.random()*10);
        if (chance==0) event.player.give("minecraft:wheat_seeds");
    }
});

BlockEvents.broken(event=>{
    if (event.block == "minecraft:wheat"||event.block=="pamhc2crops:pamryecrop"||event.block=="pamhc2crops:pambarleycrop") {
        if (event.block.properties.age==7&&event.player.mainHandItem.id=="minecraft:flint"&&event.player.shiftKeyDown){
            event.player.give("gtceu:small_wheat_dust");
        }
    }
});

BlockEvents.rightClicked("minecraft:dirt",event=>{
    let playerItem = event.player.mainHandItem;
    if (playerItem=="minecraft:wheat"||playerItem=="pamhc2crops:ryeitem"||playerItem=="pamhc2crops:barleyitem"){
        if (event.player.shiftKeyDown){
            playerItem.setCount(playerItem.count-1);
            event.block.set("rechiseled:dirt_muddy");
        }
    }
});

BlockEvents.rightClicked("rechiseled:dirt_muddy",event=>{
    if (event.player.mainHandItem=="gtceu:wheat_dust"&&event.player.shiftKeyDown){
        if (event.level.raining||event.level.thundering){
            event.block.set("minecraft:mud");
            event.player.mainHandItem.setCount(event.player.mainHandItem.count-1);
        }
    }
});

