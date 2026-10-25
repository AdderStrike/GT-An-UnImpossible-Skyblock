
const replaceBlockWithBlock = (eventGiven,coordTarget,itemRequiredId,itemCountRequired,blockPlacedId,possibleReplacerId) => {
    const blockPos = eventGiven.block.pos;
    const supposedBlockPos = new BlockPos(blockPos.x+coordTarget[0],blockPos.y+coordTarget[1],blockPos.z+coordTarget[2]);
    const supposedBlock = eventGiven.level.getBlock(supposedBlockPos);
    let playerMainHandItem = eventGiven.player.mainHandItem;
    if (playerMainHandItem.id == itemRequiredId&&playerMainHandItem.count>=itemCountRequired&&supposedBlock.id=="minecraft:air"){
        playerMainHandItem.setCount(playerMainHandItem.count-itemCountRequired);
        supposedBlock.set(blockPlacedId);
        if (possibleReplacerId!="") eventGiven.block.set(possibleReplacerId);
    }
}

const replaceBlockWithItemHadTag = (eventGiven,tagRequiredId,itemCountRequired,droppedItem) => {
    let playerMainHandItem=eventGiven.player.mainHandItem;
    if (playerMainHandItem.hasTag(tagRequiredId)&&playerMainHandItem.count>=itemCountRequired) {
        playerMainHandItem.setCount(playerMainHandItem.count-itemCountRequired);
        eventGiven.block.set("minecraft:air");
        eventGiven.player.give(droppedItem);
    }
}

ServerEvents.recipes(event => {
    // Primitive Conversions: 16 tiny dust => 1 regular dust
    const powderCrudeConversionList = ["flint","hematite","calcite","gypsum","granite","diorite","andesite"]
    powderCrudeConversionList.forEach(element => {
        event.shapeless(
            Item.of("gtceu:small_"+element+"_dust",1),
            ["4x gtceu:tiny_"+element+"_dust"]
        );
    });
    
    //The Plot to Sandy Dirt
    event.shapeless(
        Item.of("minecraft:suspicious_gravel",1),
        [
            "minecraft:gravel",
            "3x gtceu:calcite_dust"
        ]
    )

    event.shapeless(
        Item.of("minecraft:calcite",4),
        [
            "create:andesite_scaffolding",
            "minecraft:suspicious_gravel",
            "2x gtceu:calcite_dust"
        ]
    )

    //Sands
    const sandList = ["minecraft:sand","minecraft:red_sand","biomesoplenty:orange_sand","biomesoplenty:black_sand"];
    const sandAdditive = ["gtceu:tiny_flint_dust","gtceu:hematite_dust","gtceu:gypsum_dust","gtceu:flint_dust"];

    sandList.forEach((sand,index)=>{
        event.shapeless(
            Item.of(sand,2),
            [
                "2x biomeswevegone:white_sand",
                "2x "+sandAdditive[index]
            ]
        )
    });
    
    event.shapeless(
        Item.of("minecraft:suspicious_sand",4),
        [
            "minecraft:sand",
            "minecraft:red_sand",
            "biomesoplenty:orange_sand",
            "biomesoplenty:black_sand"
        ]
    );

    event.shapeless(
        Item.of("biomeswevegone:sandy_dirt",2),
        [
            "minecraft:suspicious_sand",
            "minecraft:suspicious_gravel",
            "2x gtceu:gypsum_dust"
        ]
    );

    //Stone Tools
    event.shaped(
        Item.of('minecraft:stone_pickaxe',"{Damage:102}"),
        
        [
            "AA ",
            "AB ",
            "   "
        ],
        {
            A:"create:limestone",
            B:"#forge:rods"
        }
    );
    event.shaped(
        Item.of("minecraft:stone_hoe","{Damage:102}"),
        [
            "AA ",
            " B ",
            "   "
        ],
        {
            A:"create:limestone",
            B:"#forge:rods"
        }
    );
    event.shaped(
        Item.of("minecraft:stone_axe","{Damage:102}"),
        [
            "AA ",
            "BA ",
            "   "
        ],
        {
            A:"create:limestone",
            B:"#forge:rods"
        }
    );
    event.shaped(
        Item.of("minecraft:stone_shovel","{Damage:102}"),
        [
            " A ",
            " B ",
            "   "
        ],
        {
            A:"create:limestone",
            B:"#forge:rods"
        }
    );
    event.shaped(
        Item.of("minecraft:stone_sword","{Damage:102}"),
        [
            " A ",
            "B  ",
            "   "
        ],
        {
            A:"create:limestone",
            B:"#forge:rods"
        }
    );
});

//Converts Calcite to White Sand when holding flint
BlockEvents.broken("minecraft:calcite",event => {
    if (event.player.mainHandItem.id == "minecraft:flint") {
        event.block.set("biomeswevegone:white_sand");
        event.cancel();
    };
    
});

//Calcite Replication
BlockEvents.rightClicked("minecraft:calcite",event=>{
    replaceBlockWithBlock(event,[0,1,0],"gtceu:calcite_dust",9,"minecraft:calcite","");
});

//Sandy Dirt conversion to coarse dirt
BlockEvents.rightClicked("biomeswevegone:sandy_dirt",event=>{
    replaceBlockWithBlock(event,[0,1,0],"minecraft:calcite",1,"create:limestone","minecraft:coarse_dirt");
});

// Stone Pickaxe Making
BlockEvents.rightClicked("create:limestone",event =>{
    replaceBlockWithItemHadTag(event,"forge:rods",1,Item.of('minecraft:stone_pickaxe',"{Damage:102}"));
});

