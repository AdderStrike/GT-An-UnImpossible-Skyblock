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
                event.level.getBlock(event.block.pos).set("minecraft:campfire",{
                    lit: 'false'
            });
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