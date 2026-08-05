let tickCounter = 0;
let kineticBlockTier = ["ulv","lv","mv","hv"];
let kineticBlockAllowed = [
    "kubejs:"+kineticBlockTier[0]+"_kinetic_input_north",
    "kubejs:"+kineticBlockTier[1]+"_kinetic_input_north",
    "kubejs:"+kineticBlockTier[2]+"_kinetic_input_north",
    "kubejs:"+kineticBlockTier[3]+"_kinetic_input_north"
];

let kineticBlockCount = 0;
let kineticBlockCountType = [];
let kineticBlockCountPos = [];

ServerEvents.loaded(event => {
    //event.server.runCommandSilent(`reload`);
});

BlockEvents.placed(event =>{
    if (kineticBlockAllowed.indexOf(event.block.id)!=-1){
        kineticBlockCount++;

        let givenTier = kineticBlockTier[kineticBlockAllowed.indexOf(event.block.id)];

        let playerGiven = event.player;
        let playerPitch = Math.round(playerGiven.pitch,2);
        let playerYaw = Math.round(playerGiven.yaw,2);
        let setDirection;
        let posToFind;
        if (Math.abs(playerPitch)>=60){
            if (playerPitch<0){
                setDirection="down";
                posToFind = {
                    x:event.block.pos.x,
                    y:event.block.pos.y-1,
                    z:event.block.pos.z
                }
            } else {
                setDirection="up";
                posToFind = {
                    x:event.block.pos.x,
                    y:event.block.pos.y+1,
                    z:event.block.pos.z
                }
            }
        } else if (Math.abs(playerYaw)<=45) {
            setDirection="north";
            posToFind = {
                    x:event.block.pos.x,
                    y:event.block.pos.y,
                    z:event.block.pos.z-1
                }
        } else if (Math.abs(playerYaw)>=135) {
            setDirection="south";
            posToFind = {
                    x:event.block.pos.x,
                    y:event.block.pos.y,
                    z:event.block.pos.z+1
                }
        } else if (playerYaw<0) {
            setDirection="west";
            posToFind = {
                    x:event.block.pos.x-1,
                    y:event.block.pos.y,
                    z:event.block.pos.z
                }
        } else {
            setDirection="east";
            posToFind = {
                    x:event.block.pos.x+1,
                    y:event.block.pos.y,
                    z:event.block.pos.z
                }
        }

        let setBlock = "kubejs:"+givenTier+"_kinetic_input_"+setDirection;
        event.block.set(setBlock);
        
        let stressTaken = 0.0;

        event.server.scheduleRepeatingInTicks(100, function handleKineticBlock(ctx) {
            let blockCurrent = Block.getBlock(setBlock);
            let blockFound = event.level.getBlock(new BlockPos(posToFind.x,posToFind.y,posToFind.z));
            if (blockFound.entity == null) return false;
            let blockData = blockFound.entity.serializeNBT();
            let blockTier = givenTier;
            let seizeChance;
            let stressMultiplier;

            if (blockCurrent.typeData==undefined) {
                Object.defineProperty(blockCurrent,"typeData",{
                    value:{
                        CorrectKinetics:false
                    },
                    writable:true,
                    enumerable:true,
                    configurable:true
                });
            }
            
            if (!blockCurrent.typeData.CorrectKinetics==undefined) {
                Object.defineProperty(blockCurrent.typeData, "CorrectKinetics", {
                    value: false,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            //console.log(blockCurrent+" was placed and "+blockFound.toString()+" is in its direction");
            //console.log(blockData + " is the data provided from "+blockFound);
            //console.log("The keys for the nbtData from "+blockFound+" are "+blockData.allKeys);
            

            if (blockData){
                if (Math.abs(blockData.Speed)>=0 && blockData.Network){
                    let kineticSpeed = blockData.Speed;
                    let kineticNetwork = blockData.Network;
                    
                    //console.log(blockFound + " , has either the speed or network found");
                    //console.log(blockFound+"'s network is "+kineticNetwork.toString());
                    //console.log("Shouldve mentioned that the tag for Capactiy is "+kineticNetwork.Capacity);
                    
                    
                    if (kineticNetwork.Capacity>=0 && kineticNetwork.Stress>=0) {
                        let kineticCapacity = kineticNetwork.Capacity;
                        let kineticStress = kineticNetwork.Stress;

                        if (blockTier=="ulv"){
                            
                            seizeChance = 50;
                            stressMultiplier=8;
                        } else if (givenTier=="lv") {
                            seizeChance = 25;
                            stressMultiplier=16;
                        } else if (givenTier=="mv") {
                            seizeChance = 10;
                            stressMultiplier=32;
                        } else {
                            seizeChance = 5;
                            stressMultiplier=64;
                        }


                        //console.log("The block "+blockFound+" has all pieces of data needed. I daresay it has what we need?");

                        if (kineticCapacity>=(kineticStress+stressTaken-kineticSpeed*stressMultiplier)) {
                            blockCurrent.typeData.CorrectKinetics = true;

                            let seizeRun = Math.floor(Math.random()*1000)+1;
                            if (seizeRun<=seizeChance){
                                stressTaken++;
                                kineticStress+=1;
                                //console.log("We have success! The current stress on this block is "+stressTaken);
                            }
                            
                        } else if (stressTaken>0) {
                            stressTaken = 0.0;
                            blockCurrent.typeData.CorrectKinetics = false;
                            //console.log("Yo we are missing stress!");

                        }
                        //console.log("The current stress on this block is "+stressTaken);

                        if (event.level.getBlock(event.block.pos).id===blockCurrent.id){
                            //ctx.reschedule();
                            //ctx.repeating = true;
                            //console.log("Still going, dont worry!");
                        } else {
                            //ctx.repeating = false;
                            stressTaken = 0.0;
                            //console.log("Hey, the supposed kinetic input isn't there any more");
                            ctx.clear();
                        }
                    }
                }
            }
                
        });
        //event.player.tell(playerPitch+" , "+playerYaw);
    }
});
ItemEvents.canPickUp(event => {
    if (event.item.id.includes("_kinetic_input_")) {
        kineticBlockCount--;
        let itemID = event.item.id;
        let itemTier = itemID.split("_")[0].split(":")[1];
        //console.log("The tier of kinetic input is "+itemTier);
        event.item.count = 0;
        event.player.give("kubejs:"+kineticBlockTier[kineticBlockTier.indexOf(itemTier)]+"_kinetic_input_north");
    }
})
