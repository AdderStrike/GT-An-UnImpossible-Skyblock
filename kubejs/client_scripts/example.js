// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ItemEvents.tooltip(event => {
    let voltageArray = ["ulv","lv","mv","hv"];
    let stressRequirements = [8,16,32,64]

    voltageArray.forEach((item,index) =>{
        event.add("kubejs:"+item+"_kinetic_input_north",Text.of("Warning: This hatch requires "+stressRequirements[index]+"*RPM Stress Units available for a multiblock to function").gold());
    });
})

ClientEvents.lang('en_us', event => {
    // Rename a vanilla block
    event.add("block.gtceu.primitive_water_catcher","Primitive Water Catcher");
    event.add("material.gtceu.common_metal","Common Metal");
    event.add("material.gtceu.stainless_steel_grade_c_304","Stainless Steel Grade C_304");
    event.add("material.gtceu.stainless_steel_grade_b_630","Stainless Steel Grade B_630");
    event.add("material.gtceu.stainless_steel_grade_a_409","Stainless Steel Grade A_409");
    event.add("material.gtceu.spectral_oil","Spectral Oil")
    event.add("gtceu.jei.bedrock_fluid.spectral_oil","Spectral Oil")
});


console.info('Hello, World! (Loaded client scripts)')

