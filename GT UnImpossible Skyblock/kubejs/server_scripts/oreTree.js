ServerEvents.recipes(event => {

    const oreRecipeMaker = (previousOre, targetOre) =>{
        event.shaped(
            Item.of("gtceu:"+targetOre+"_ore"),
            [
                "ABA",
                "BCB",
                "ABA"
            ],
            {
                A:"gtceu:crushed_"+previousOre+"_ore",
                B:"gtceu:impure_"+previousOre+"_dust",
                C:"gtceu:"+targetOre+"_dust"
            }
        )
    }

    //Available at the start of chapter 2
    //Pure Loop (can be gotten using standard greg processing)
    oreRecipeMaker("common_metal","iron");

    oreRecipeMaker("iron","nickel");
    oreRecipeMaker("iron","tin");
    oreRecipeMaker("iron","gold");

    oreRecipeMaker("nickel","cobalt");
    oreRecipeMaker("nickel","iron");
    oreRecipeMaker("nickel","platinum");

    oreRecipeMaker("tin","iron");
    
    oreRecipeMaker("gold","copper");
    oreRecipeMaker("gold","silver");
    oreRecipeMaker("gold","nickel");

    oreRecipeMaker("cobalt","cobaltite");

    oreRecipeMaker("platinum","nickel");
    oreRecipeMaker("platinum","cobalt");
    oreRecipeMaker("platinum","palladium");

    oreRecipeMaker("copper","cobalt");
    oreRecipeMaker("copper","nickel");
    oreRecipeMaker("copper","gold");

    oreRecipeMaker("silver","lead");
    oreRecipeMaker("silver","sulfur");
    oreRecipeMaker("silver","gold");

    oreRecipeMaker("cobaltite","sulfur");
    oreRecipeMaker("cobaltite","cobalt");

    oreRecipeMaker("lead","silver");
    oreRecipeMaker("lead","sulfur");

    //Mische Loop (Uses the Ore Sorter) [Requires Create and Steam Age to activate]
    //Iron Ore can be sorted into main ores
    /*
        Iron Ore => 
            Iron
            Pyrite
            Granitic Mineral Sand
            Magnetite
            Hematite
            (Yellow) Limonite
            Common Metal
            Basaltic Mineral Sand
            Goethite
    */

    // It also isn't just iron. Any ore from the pure loop 
    // can be sorted as long as all of its derivatives aren't
    // in the pure loop
    /*
        Tin Ore =>
            Tin
            Cassiterite
            Cassiterite Sand
    */

    /*
        Nickel Ore =>
            Nickel
            Garnierite
            Pentlandite
    */

    /*
        Copper Ore =>
            Copper
            Chalcocite
            Chalcopyrite
            Tetrahedrite
            Malachite
            Bornite
    */

    /*
        Lead Ore =>
            Lead
            Galena
    */

    oreRecipeMaker("pyrite","sulfur");
    oreRecipeMaker("pyrite","iron");
    oreRecipeMaker("pyrite","tricalcium_phosphate");

    oreRecipeMaker("granitic_mineral_sand","magnetite");
    oreRecipeMaker("granitic_mineral_sand","gold");

    oreRecipeMaker("magnetite","iron");
    oreRecipeMaker("magnetite","gold");

    oreRecipeMaker("hematite","iron");
    oreRecipeMaker("hematite","magnetite");

    oreRecipeMaker("yellow_limonite","iron");
    oreRecipeMaker("yellow_limonite","goethite");
    oreRecipeMaker("yellow_limonite","nickel");

    oreRecipeMaker("basaltic_mineral_sand","magnetite");
    oreRecipeMaker("basaltic_mineral_sand","gold");

    oreRecipeMaker("goethite","yellow_limonite");
    oreRecipeMaker("goethite","malachite");
    oreRecipeMaker("goethite","iron");

    oreRecipeMaker("cassiterite","tin");

    oreRecipeMaker("cassiterite_sand","tin");

    oreRecipeMaker("garnierite","iron");
    oreRecipeMaker("garnierite","nickel");

    oreRecipeMaker("pentlandite","iron");
    oreRecipeMaker("pentlandite","cobalt");
    oreRecipeMaker("pentlandite","sulfur");

    oreRecipeMaker("chalcocite","sulfur");
    oreRecipeMaker("chalcocite","silver");

    oreRecipeMaker("chalcopyrite","pyrite");
    oreRecipeMaker("chalcopyrite","cobalt");
    oreRecipeMaker("chalcopyrite","gold");

    oreRecipeMaker("malachite","goethite");
    oreRecipeMaker("malachte","calcite");

    oreRecipeMaker("bornite","pyrite");
    oreRecipeMaker("bornite","cobalt");
    oreRecipeMaker("bornite","gold");

    oreRecipeMaker("galena","sulfur");
    oreRecipeMaker("galena","silver");

    oreRecipeMaker("tricalcium_phosphate","apatite");
    oreRecipeMaker("tricalcium_phosphate","pyrochlore");
    
    oreRecipeMaker("calcite","sodalite");
    
    oreRecipeMaker("apatite","tricalcium_phosphate");
    oreRecipeMaker("apatite","pyrochlore");

    oreRecipeMaker("pyrochlore","apatite");

    oreRecipeMaker("sodalite","lazurite");
    oreRecipeMaker("sodalite","lapis");

    oreRecipeMaker("lazurite","sodalite");
    oreRecipeMaker("lazurite","lapis");
    
    oreRecipeMaker("lapis","lazurite");
    oreRecipeMaker("lapis","sodalite");
    oreRecipeMaker("lapis","pyrite");
});
