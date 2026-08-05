ItemEvents.modification(event => {

    event.modify("#minecraft_signs",item =>{
        item.burnTime = 300;
    });

    event.modify("#minecraft:non_flammable_wood",item =>{
        item.burnTime = 0;
    })
});