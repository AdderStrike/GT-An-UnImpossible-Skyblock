/*let itemTopH = {

}

ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("organic_solution_mix").EUt(0.75*GTValues.VA[GTValues.LV]).duration(100)
        .itemInput(Item.of("croptopia:lettuce",8))
        .inputFluids(Fluid.of("minecraft:water",1000))
        .outputFluids(Fluid.of("gtceu:organic_solution_ph6",1000))


    
    /*
        Since Water has a ph of 6 and Pure Water a ph of 7, this is how it works

        pH 0-4: Sol + 9E = Sol+1
        pH 5: Sol5 + 9P = 10Sol6
        ph 8: Sol8 + W = 2Sol7
        pH 9-15: Sol + 9E = Sol+1

        Since 7 is a median, adding two solutions together that add up to 14 work fine as 2 buckets of ph7
    *//*
    // Basic Dilution
    for (var i = 0; i<5; i++) {
        event.recipes.gtceu.mixer("organic_solution_dilute_water_"+i+"to"+(i+1))
            .EUt(5).duration(20)
            .inputFluids(
                Fluid.of("gtceu:organic_solution_ph"+i,1000),
                Fluid.of("minecraft:water",9000)
            ).outputFluids(Fluid.of("gtceu:organic_solution_ph"+(i+1)),10000)
        
        event.recipes.gtceu.mixer("organic_solution_dilute_pureWater_"+i+"to"+(i+1))
            .EUt(5).duration(20)
            .inputFluids(
                Fluid.of("gtceu:organic_solution_ph"+i,1000),
                Fluid.of("gtceu:distilled_water",9000)
            ).outputFluids(Fluid.of("gtceu:organic_solution_ph"+(i+1)),10000)
    }

    for (var i = 15; i>8; i--) {
        event.recipes.gtceu.mixer("organic_solution_dilute_water_"+i+"to"+(i-1))
            .EUt(5).duration(20)
            .inputFluids(
                Fluid.of("gtceu:organic_solution_ph"+i,1000),
                Fluid.of("minecraft:water",9000)
            ).outputFluids(Fluid.of("gtceu:organic_solution_ph"+(i-1)),10000)
        
        event.recipes.gtceu.mixer("organic_solution_dilute_pureWater_"+i+"to"+(i-1))
            .EUt(5).duration(20)
            .inputFluids(
                Fluid.of("gtceu:organic_solution_ph"+i,1000),
                Fluid.of("gtceu:distilled_water",9000)
            ).outputFluids(Fluid.of("gtceu:organic_solution_ph"+(i-1)),10000)
    }

    event.recipes.gtceu.mixer("organic_solution_dilute_water_8to7")
        .EUt(5).duration(20)
        .inputFluids(
            Fluid.of("gtceu:organic_solution_ph8",1000),
            Fluid.of("minecraft:water",1000)
        ).outputFluids(Fluid.of("gtceu:organic_solution_ph7"),2000)

    event.recipes.gtceu.mixer("organic_solution_dilute_water_5to6")
        .EUt(5).duration(20)
        .inputFluids(
            Fluid.of("gtceu:organic_solution_ph5",1000),
            Fluid.of("gtceu:distilled_water",9000)
        ).outputFluids(Fluid.of("gtceu:organic_solution_ph6"),10000)

    // Summation Dilution
    for (var i=0;i<7;i++){
        event.recipes.gtceu.mixer("organic_solution_dilute_acidBase_"+i+"and"+(14-i))
            .EUt(20).duration(40)
            .inputFluids(
                Fluid.of("gtceu:organic_solution_ph"+i,1000),
                Fluid.of("gtceu:organic_solution_ph"+(14-i),1000)
            ).outputFluids(Fluid.of("gtceu:organic_solution_ph7"),2000)
    }
})*/