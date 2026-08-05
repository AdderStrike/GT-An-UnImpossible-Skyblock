ServerEvents.recipes(event => {
    event.campfireCooking("kubejs:softened_stone","#tconstruct:workstation_rock",0,200)
})

let dustTransform = {
    "gtceu:granite_dust":"minecraft:granite",
    "gtceu:diorite_dust":"minecraft:diorite",
    "gtceu:andesite_dust":"minecraft:andesite",
    "gtceu:deepslate_dust":"minecraft:deepslate",
    "gtceu:tuff_dust":"minecraft:tuff",
    "gtceu:granite_red_dust":"gtceu:red_granite",
    "gtceu:marble_dust":"gtceu:marble",
}

let dustList = Object.keys(dustTransform)

BlockEvents.rightClicked('kubejs:softened_stone', event => {
    console.log("Attempting block transformation")
    if (event.level.canSeeSky(event.block.pos)) {
        console.log("This block can see the sky")
        if(event.level.raining) {
            console.log("It is raining")
            if(dustList.find(event.player.mainHandItem.id)) {
                console.log("Ayo, my stone should be turning...");
                event.block.set(dustTransform[event.player.mainHandItem.id]);
                event.player.mainHandItem.setCount(event.player.mainHandItem.count-1);
            }
        }   
    }
})