const canCreateFromList = (eventGiven,itemRequirements,countRequirements) => {
    let pInventory = eventGiven.player.inventory;
    
    itemRequirements.forEach((element,index) => {
        if (!pInventory.contains(element)) return false;

        if (pInventory.countItem(element)<countRequirements[index]) return false;
    });

    return true;

}

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of("kubejs:flammable_binder",1),
        [
            "2x minecraft:sugar",
            "minecraft:stick",
            "#forge:seeds"
        ]
    )

    event.shapeless(
        Item.of("gtceu:wood_plate",1),
        [
            "3x minecraft:stick",
            "kubejs:flammable_binder"
        ]
    )

    event.shapeless(
        Item.of("gtceu:impure_hematite_dust",1).withChance(0.25),
        [
            "kubejs:flammable_binder",
            Item.of("woodenbucket:wooden_bucket","FluidName:'minecraft:water'"),
            "gtceu:hematite_indicator",
            "gtceu:fertilizer"
        ]
    )

    event.shapeless(
        Item.of("gtceu:crushed_hematite_ore"),
        [
            "2x gtceu:impure_hematite_dust",
            "kubejs:flammable_binder",
            "minecraft:stick"
        ]
    )

    event.shapeless(
        Item.of("gtceu:raw_hematite"),
        [
            "gtceu:crushed_hematite_ore",
            "2x kubejs:flammable_binder",
            "minecraft:calcite"
        ]
    )
})

BlockEvents.broken(event=>{
    if (event.block == "minecraft:sugar_cane" && event.player.mainHandItem == "minecraft:flint"){
        let chance = Math.floor(Math.random()*11);

        if (chance > 6) {

            event.level.getBlock(event.block.pos).set("minecraft:air");
            event.player.give((chance-6)+"x gtceu:tiny_sugar_dust");
            event.cancel();
        } else if (chance == 0) {
            event.player["mainHandItem()"].setCount(event.player.mainHandItem.count-1);
        }
        event.cancel();
    }

    
})

BlockEvents.rightClicked("minecraft:scaffolding",event => {
    //console.log(event.player.mainHandItem.id)
    if (event.player.mainHandItem.id == "gtceu:wood_plate") {
        if (canCreateFromList(event,["gtceu:wood_plate"], 4)) event.level.getBlock(event.block.pos).set("minecraft:oak_slab");

        event.player.mainHandItem.setCount(event.player.mainHandItem.count-4);
    }
});

BlockEvents.rightClicked("minecraft:campfire", event => {
    let player = event.player;
    let mainHandItem = player.mainHandItem;
    let offHandItem = player.offHandItem;

    if (mainHandItem.id=="minecraft:flint"&&offHandItem.id=="gtceu:raw_hematite"||offHandItem.id=="minecraft:flint"&&mainHandItem.id=="gtceu:raw_hematite"){
        let randomInt = Math.floor(Math.random()*11);
        if (randomInt>=5) {
            event.block.set("minecraft:campfire",{lit:true});
        } else if (randomInt >2) {
            let hematite = [mainHandItem.id,offHandItem.id].indexOf("gtceu:raw_hematite");
            [event.player.mainHandItem,event.player.offHandItem][hematite].setCount([event.player.mainHandItem,event.player.offHandItem][hematite].count-1);
        } else if (randomInt >0) {
            let flint = [mainHandItem.id,offHandItem.id].indexOf("minecraft:flint");
            [event.player.mainHandItem,event.player.offHandItem][flint].setCount([event.player.mainHandItem,event.player.offHandItem][flint].count-1);
        } else {
            event.player.mainHandItem.setCount(event.player.mainHandItem.count-1);
            event.player.offHandItem.setCount(event.player.offHandItem.count-1);
        }
    }

})

BlockEvents.rightClicked("minecraft:oak_slab",event => {
    if (event.player.mainHandItem.id == "kubejs:flammable_binder") {
        let list_needed = [
            "gtceu:wooden_plate",
            "minecraft:stick",
            "minecraft:bamboo",
            "kubejs:flammable_binder",
        ]

        let num_list = [6,8,12,6];

        if (canCreateFromList(event,list_needed, num_list)) {
            let hasWheat = canCreateFromList(event,["minecraft:wheat"],10);
            let hasRye = canCreateFromList(event,["pamhc2crops:ryeitem"],10);
            let hasBarley = canCreateFromList(event,["pamhc2crops:barleyitem"],10);
            if (hasWheat || hasRye || hasBarley) {
                event.block.set("minecraft:campfire",{lit:false});
            num_list.push(10);
            if (hasWheat) list_needed.push("minecraft:wheat");
            else if (hasRye) list_needed.push("pamhc2crops:ryeitem");
            else if (hasBarley) list_needed.push("pamhc2crops:barleyitem");

            let playerInventory = event.player.inventory;
            let playerInventoryItems = playerInventory.allItems;

            for (var i=0;i<playerInventoryItems.length;i++) {
                if (list_needed.indexOf(playerInventoryItems[i].id)!=-1) {
                    let givenItem = playerInventory.getItem(i);
                    let givenIndex = list_needed.indexOf(playerInventoryItems[i].id);

                    

                    playerInventory.setItem(i,givenItem.setCount(givenItem.count-num_list[givenIndex]));

                }
            }
                
                
                //console.log(event.level.getBlock(event.block.pos));
            }
            
        };
    }

    //event.player.inventory.countItem()
});