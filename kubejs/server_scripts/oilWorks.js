//ignore:true
/*ServerEvents.recipes(event => {
    event.recipes.gtceu.distillation_tower("spectral_oil_full_dist").duration(400).EUt(0.6*GTValues.VA[GTValues.HV])
    .inputFluids(
        Fluid.of("gtceu:spectral_oil",50*1000)
    ).outputFluids(
        Fluid.of("gtceu:coal_tar",50*125),
        Fluid.of("gtceu:oil_heavy",50*125),
        Fluid.of("gtceu:oil",50*125),
        Fluid.of("gtceu:oil_light",50*125),
        Fluid.of("gtceu:coal_gas",50*125),
        Fluid.of("gtceu:sulfuric_gas",50*125),
        Fluid.of("gtceu:natural_gas",50*125),
    ).itemOutput(Item.of('compressium:coal_2'));
});

GTCEuServerEvents.fluidVeins(event => {
    event.add('gtceu:spectral_oil', vein => {
        vein.dimensions('minecraft:overworld') // 
        vein.fluid(() => Fluid.of('gtceu:spectral_oil').fluid) 
        vein.weight(40)
        vein.minimumYield(200)
        vein.maximumYield(8000)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(10)
    });
});
*/