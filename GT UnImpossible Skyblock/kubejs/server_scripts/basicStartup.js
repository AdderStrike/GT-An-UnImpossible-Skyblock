ServerEvents.loaded(event => {
    event.server.runCommandSilent(`gamerule waterSourceConversion false`);
});

//DEBUG BEYOND
/*
BlockEvents.broken(event=>{
    console.log(event.block);
});*/

/*
    Basic Parts Assembler =>

        Parts Recipes are for HV and Later, except for the Omnidirectional Conveyor belt, which starts with LV
        MV Parts are strictly in General Assemblers
        
        Motors = (
            1[2][4] Tier-Par Rods
            1[2EV] Tier-Par Magnetized Rods
            4[8EV] Tier-Par 2x Wiring
            2[4EV] Tier-Subpar 1x Cabling
            0[4IV][8] Tier-Par Screws
            2[4][6][8] Tier-Par Foil
            1mB[2][5][10] Tier-Par Lubricant
        )
        
        Pumps = (
            1 Tier-Par Motor
            1[2][4] Tier-Par Rotors
            1 Tier-Par Small Pipe
            1[2][3][4] Tier-Par Plastic Ring
            4[8] Tier-Par Screws
            1mB[2][5][10] Tier-Par Lubricant
        )
        
        Fluid Regulator = (
            1 Tier-Par Pump
            1 Tier-Par Motor
            1 Tier-Subpar Circuit
            2 Tier-Par 1x Wiring
            1[2][3][4] Tier-Par Plastic Ring
            4[8] Tier-Par Screws
        )

        Conveyor Module = (
            2[4EV] Tier-Par Motors
            2mB[5][10][20] Tier-Par Lubricant
            4[8][16] Tier-Par Plastic Sheets
            2 Tier-Par 1x Wiring
        )
        
        Electric Piston = (
            1[2EV] Tier-Par Motors
            5mB[10][20][50] Tier-Par Lubricant
            2[4] Tier-Par Small Gears
            0[1][2] Tier-Par Large Gears
            0[1] Tier-Par Small Spring
            2[4] Tier-Par Rods
            0[1EV] Tier-Par Long Rod
            1[2][3][4] Tier-Par Plate
            0[1IV][2] Tier-Par Double Plate
        )
        
        Robot Arm = (
            2[3][4] Tier-Par Motors
            10mB[20][50][100] Tier-Par Lubricant
            2[4][8] Tier-Par Small Gears
            0[1][2][4] Tier-Par Large Gears
            2[3][4] Tier-Par Small Springs
            0[1][2][4] Tier-Par Springs
            4[6][8] Tier-Par Rods
            0[1][2][4] Tier-Par Long Rods
            1[2][3] Tier-Par Tiny Piping
            2 Tier-Par Plates
            1 Tier-Par Circuit
            2 Tier-Par Pistons
        )
        
        Field Generator = (
            4[16][64][256] Tier-Par Plates
            4[16][64][256] Tier-Par 1x SuperCable
            4 Tier-Par Circuits
            1[4IV][16UV] Tier-Par Fielder Gem [Ender Pearl, Eye of Ender, Quantum Eye, Nether Star, Quantum Star, Quantum Star, Quantum Star, Gravi Star]
        )

        Emitter = (
            4[8] Tier-Par Rods
            1[2][3LuV] Glass[NETHER STAR IV] Lenses
            1 Tier-Par Sensor Gem
            1 Tier-Par Circuit
            1 Tier-Par Plastic Sheet
            1 Tier-Par 1x Wiring
        )
        
        Sensor = (
            4[8] Tier-Par Rods
            1[2][1][2] Glass[NETHER STAR IV] Lenses
            1 Tier-Par Sensor Gem
            1 Tier-Par Circuit
            1[2][4] Tier-Par Plates
            2 Tier-Par 1x Wiring
        )
        
        Power Unit = (
            1 Tier-Par Plastic Sheet
            1 Tier-Par Battery
            1[2] Tier-Par Motors
            1 Tier-Par Small Gear
            1 Tier-Par Rubber Bar
            1 Sulfur Dust
            5[10][20] Tier-Par Screws
        )
        
        Voltage Coil = (
            1 Tier-Par Magnetic Rod
            2[4][8][16] Tier-Par Fine Wire
            1[2][4][8] Tier-Par Fine SuperWire
            1 Tier-Par Spring
        )

        Casings = (
            6 [8][12] Tier-Par Plates
            1 [2IV][4] Tier-Par Frames
            0 [6][12][24] Tier-Par Bolts
            0 [6IV][12][24] Tier-Par Screws
            0 [6IV][12] Tier-Par Double Plates
        )
        
        Hulls = (
            1 Tier-Par Casing
            2 Tier-Par 1x Wiring
            576mb Tier-Par Molten Plastic
            20mb [50][100][200][400][1000] NAK
        )
*/

/*
    Basic Machine Assembler => 
        Machine recipes are stricly MV and Later!
        Upgrades come as tiers increase. Check the brackets.
        A HULL IS ALLOWED TO BE REPLACE BY A TIER SUBPAR MACHINE OF THAT KIND SO LONG AS A TRANSFORMER DOWN IS THROWN IN AS WELL

        Converters nA = (
            1 Hull,
            {
                n Copper Wire: MV
                n Overcharged Iron Wire: HV
                n Overcharged Gold Wire: EV
                n Overcharged Diamond Wire: IV
                n Fine Platinum Wire: Luv
                n Fine Naquadah Wire: ZPM
                n Fine Europium Wire: UV
                n Fine Americium Wire: UHV+
            },
            4 nX Tier-Par Cables
        )

        Transformer nA = (
            1 Hull,
            4 nA Tier-Below Cabling
            1 nA Tier-Par Cabling
        )
        
        Generators = (
            1 Hull,
            1[2] Tier-Par Rotor
            1 Tier-Par Circuit
            2 Tier-Par Piping
            4 Tier-Par 1x Cabling
            2 Tier-Par Tanks
            1[2] Tier-Par Motor
            2[4] Tier-Par Small Gears
        )
        
        Diode = (
            1 Hull
            1 Tier-Par Circuit
            2 16x Tier-Par Wiring
            2[4][8][16] Tier-Par Diodes
        )

        Battery Buffer nA = (
            1 Hull,
            2 nA Tier-Par Cabling
            4 nA Tier-Subpar Wiring
            1 Tier-Par Crate
        )

        Turbo Charger = (
            1 Hull
            1 16a Tier-Par Battery Buffer
            1 Tier-Par Diode
            2 Tier-Par Circuits
            4[8] Tier-Par 1x Cabling
        )
        
        Pump Machine = (
            1 Hull
            1 Tier-Subpar Circuit
            1 Tier-Par Pump
            1 Tier-Par 1x Cabling
        )
        
        Fishing Machine = (
            1 Hull
            1 Tier-Subpar Circuit
            1 Fishing Rod
            1 Tier-Par Crate
        )

        Block Breaker = (
            1 Hull
            1 Tier-Subpar Circuit
            1 Tier-Par Drill Head
            1 Tier-Par Motor
            2 Tier-Par 1x Cabling
        )

        Electric Furnace = (
            1 Hull, 
            {
                1 Resistive Heater: MV-IV, 
                1 Superheater: LuV+
            },
            1 Converter 1A,
            1 Tier-Subpar Circuit
            2 2x Tier-Par Wiring,
            4 1x Tier-Subpar Wiring,
        )
        
        Alloy Smelter = (
            1 Hull, 
            {
                1 Resistive Heater: MV
                1 Seared Melter + Resistive Heater: HV
                1 Smeltery + Resistive Heater: EV
                1 Superheater: IV
                1 Scorched Melter + Superheater: Luv
                1 Scorchery + Superheater: ZPM+
            }
            1 Converter 1A,
            1 Tier-Par Circuit
            4 1x Tier-Par Wiring
        )

        Arc Furnace = (
            1 Hull,
            {
                Graphite Dust: MV,
                Enriched Carbon: HV,
                Diamond Rods: EV+
            },
            1 Tier-Par Tank
            4 4x Tier-Par Wiring
            2 4x Tier-Subpar Cabling
            1[2] Tier-Par Circuit
        )

        General Assembler = (
            1 Hull,
            2[3][4] Tier-Par Circuits,
            2[4][6] Tier Robot Arms,
            {
                2 Conveyor Modules: MV
                3[4][6] Omnidirection Conveyor Modules: HV+
            },
            2[4][6][8] 1x Tier-Par Cabling,
            0[1][2][3][4] Tier - Machine Casings,
            {
                1 Red Alloy 1x Wires: MV,
                1 Copper 1x Wires: HV
                2 Annealed Copper 1x Wires: EV
                2 Fine Silver Wire: IV
                3 Fine Gold Wire: Luv
                4 Fine Platinum Wire: ZPM+
            },
            1 Tier-Par Tank
        )
        
        Autoclave = (
            1 Hull,
            1 Tier Fluid Regulator
            1 Tier-Par Circuit
            {
                Rubber Sheet: MV
                PE: HV
                PTFE: EV
                PolyBenzo: IV+
            }
            2 Tier-Par Tanks
            2 Tier-Par 1x Cabling
        )
        
        Bender = (
            1 Hull,
            1 Tier-Subpar Circuit
            2 Tier-Par Pistons
            2[4IV] Tier-Par Motors
            0[1] Tier-Par Conveyor Modules
            2 Tier-Par 1x Cabling
        )
        
        Brewery = (
            1 Hull,
            1 Tier-Par Circuit
            2 Tier-Par Tanks
            1[2][4][8] Tier-Par Glass Blocks
            0[1IV][2] Tier-Par Distillery
            0[1EV] Tier-Par Fermenter
            1[2] Tier-Par Fluid Regulator
            1 Tier-Par Catalyzer Spring
            4 Tier-Par Cabling
            2[4][8][16] Tier-Par Small Piping
        )
        
        Canner = (
            1 Hull,
            1 Tier-Par Circuit,
            4 Tier-Par Tanks,
            [0][1EV] Tier-Par Packer
            [0][1IV] Tier-Par Robot Arms,
            1 Tier-Par Conveyor Module,
            1 Tier-Par 1x Cabling,
        )

        Centrifuge = (
            1 Hull,
            8 Tier-Par Tanks
            1[4] Tier-Par Glass Blocks
            1[2][3] Tier-Par Fluid Regulators
            2[4][6] Tier-Par Pumps
            2[8][32] Tier-Par Medium Piping
            2[4IV] Tier-Part Circuits
            2 Tier-Par Motors
            4 Tier-Par 1x Cabling
        )
        
        Chemical Bath = (
            1 Hull,
            4 Tier-Par Tanks
            1[2] Tier-Par Glass Blocks
            1 Tier-Par Fluid Regulator
            1 Tier-Par Robot Arm
            1 Tier-Subpar Circuit
            2 Tier-Par 1x Cabling
        )

        Chemical Reactor = (
            1 Hull,
            2[4] Tier-Par Circuits
            0[1EV] Tier-Par Chem Bath
            6[4][2][0] Tier-Par Tanks
            1[2] Tier Part Glass Blocks
            2[3][4] Tier-Par Fluid Regulators
            0[1EV][2] Tier-Par Pumps
            0[1IV] Tier-Par Centrifuge
            0[2][4][6] Tier-Par Acid-Proof Tanks
            [0][1] Tier-Par Mixer
            4 Tier-Par 2x Cabling
            2 Tier-Subpar 1x Wiring
            2[8][32][128] Tier-Par Plastic Medium Piping
            1[2][4] Tier-Par Rotors
        )

        Compressor = (
            1 Hull,
            1 Tier-Subpar Circuits
            2 Tier-Par 1x Cabling
            2[4EV][6LuV] Tier-Par Pistons
        )
        
        Cutter = (
            1 Hull,
            1 Tier-Par Tank,
            1 Tier-Par Buzzsaw Blade
            1 Conveyor Module
            1 Tier-Subpar Circuit
            2 Tier-Par 1x Cabling
        )

        Distillery = (
            1 Hull,
            2 Tier-Par Tanks
            1[2] Tier-Par Fluid Regulator
            1 Tier-Par Catalyzer Spring
            1 Tier-Par Circuit
            2 Tier-Par 1x Wiring
            1[2][4][8] Tier-Par Glass Blocks
            2[4][8][16] Tier-Par Small Piping
        )

        Electrolyzer = (
            1 Hull,
            8 Tier-Par Tanks,
            1[2][3] Tier-Par Circuits
            2[4][6] Tier-Par Fluid Regulator
            0[2][4] Tier-Par Pumps
            2[4][8] Tier-Par Small Piping
            {
                1[2][4] Electrolytic Cores: MV-EV
                1 Electrolytic Cell: IV+
            }
            4 4x Tier-Par Wiring
            4 2x Tier-Par Cabling
            2 1x Tier-Subpar Cabling
            1 Tier-Par Centrifuge
        )
        
        Electromagnetic Separator = (
            1 Hull,
            1 Tier-Subpar Circuit
            1 Conveyor
            {
                1 Magnetic Steel Rod: MV
                1 GTCEU Magnet: HV
                1 Redstone Magnet: EV
                1 Layered Magnet: IV
                1 Fluxuated Magnet: LuV
                1 Netheritic Magnet: ZPM
                1 Magnetic Attraction Unit: UV+
            }
            2 1x Tier-Par Cabling
            1 Tier-Par Polarizer
            1 Tier-Par Sifter
        )
        
        Extractor = (
            1 Hull
            1 Tier-Par Piston
            1 Tier-Subpar Circuit
            1 Tier-Par Tank
            1 Tier-Par Glass Block
            0[1] Fluid-Regulator
            1 Fluid Pump
            1[2] Tier-Par Small Piping
            2 1x Tier-Par Cabling
        )

        Extruder = (
            1 Hull,
            1 Tier-Par Circuit
            1 Tier-Par Piston
            1 Conveyor
            2 1x Tier-Par Cabling
        )
        
        Fermenter = (
            1 Hull,
            1 Tier-Par Circuit
            1[2] Tier-Par Pumps
            2 Tier-Par Tanks
            1[2][4] Tier-Par Glass Blocks
            4 1x Tier-Par Cabling
        )

        Fluid Heater = (
            1 Hull,
            {
                1 Resistive Heater: MV-IV, 
                1 Superheater: LuV+
            }
            1 Tier-Subpar Circuit
            1[2] Tier-Par Pumps
            2 Tier-Par Tanks
            1[2] Tier-Par Glass Blocks
            2 1x Tier-Par Cabling
        )

        Fluid Solidifier = (
            1 Hull,
            2[4][8] Heat Pipes
            1 Tier-Subpar Circuit
            1 Tier-Par Tank
            1 Tier-Par Pump
            1[2] Tier-Par Glass Blocks
            2 1x Tier-Par Cabling
        )
        
        Forge Hammer = (
            1 Hull
            1 Tier-Subpar Circuit
            1 Tier-Par Piston
            1 1x Tier-Par Cabling
            1 Anvil
        )

        Forming Press = (
            1 Hull
            1 Tier-Subpar Circuit
            2 Tier-Par Piston
            1 Tier-Par Forge Hammer
            1 1x Tier-Par Cabling
        )
        
        Lathe = (
            1 Hull
            1 Tier-Par Circuit
            1 Conveyor Module
            1 Tier-Par Grinding Wheel
            2 1x Tier-Par Cabling
            1[2] Tier-Par Motor
        )
        
        Scanner = (
            1 Hull
            3[4][6] Tier-Par Circuits
            2[3] Tier-Par Scanner
            0[2EV] Tier-Below Emitter
            {
                1[2] Conveyor Module: MV-HV
                2[3][6] Omnidirectional Conveyor Module: EV+
            }
            {
                2 Red Alloy 1x Wires: MV,
                3 Copper 1x Wires: HV
                4 Annealed Copper 1x Wires: EV
                5 Fine Silver Wire: IV
                6 Fine Gold Wire: Luv
                8 Fine Platinum Wire: ZPM+
            }
            1[2][4] Tier-Par 2x Cabling
            2[4][8] Tier-Subpar 1x Wiring
            0[1IV][2][4] Tier-Par Robot Arms
        )
        
        Mixer = (
            1 Hull
            1 Tier-Par Circuit
            2 Tier-Par Motors
            1[4][16] Tier-Par Glass Blocks
            1[2][4] Tier-Par Rotors
            3 Tier-Par Tanks
            2[3][4] Tier-Par Fluid Regulators
            0[1][2] Tier-Par Fluid Pumps
            4[16][64] Tier-Par Medium Piping
            4 1x Tier-Par Cabling
        )

        Ore Washer = (
            1 Hull
            1 Tier-Subpar Circuit
            1 Tier-Par Chem Bath
            1 Tier-Par Glass Block
            2 Tier-Par Tanks
            2 1x Tier-Par Cabling
        )
        
        Packer = (
            1 Hull,
            1 Tier-Subpar Circuit
            0[1] Tier-Par Compressor
            1 Tier-Par Piston
            2 1x Tier-Par Cabling
            2 Tier-Par Crates
            2 1x Tier-Par Cabling
        )

        Polarizer = (
            1 Hull,
            1 Tier-Subpar Circuit
            {
                1 Magnetic Steel Rod: MV
                1 GTCEU Magnet: HV
                1 Redstone Magnet: EV
                1 Layered Magnet: IV
                1 Fluxuated Magnet: LuV
                1 Netheritic Magnet: ZPM
                1 Magnetic Attraction Unit: UV+
            }
            4[8EV][16Luv] 2x Tier-Par Cabling
            2[4][8IV] 1x Tier-Subpar Wiring
            2[4][8] Tier-Par Magnetized Rod
        )
        
        Laser Engraver = (
            1 Hull,
            1[2][4] Tier-Par Circuits
            1[2][3] Tier-Par Robot Arms
            {
                1[2] Tier-Par Conveyor Belts: MV-HV
                2[3] Tier-2Below Omnidirectional Conveyor Belts: EV+
            }
            {
                1 Laser:MV
                1 Laser + Laser Amplifier: HV
                2 Tier-Par Emitters + 2 Lasers + 2 Laser Amplifier + Laser Tractor Beam: EV
                4[8][16] Tier-Par Emitters + 2[4][8] Laser Pipes: IV+
            }
            1[2][4][8][16][32][64] Glass Lenses
            2[4][8][16] 2x Tier-Par Cabling
            4[8][16][64] 1x Tier-Subpar Wiring
        )
        
        Sifter = (
            1 Hull,
            1 Tier-Subpar Circuit
            1[2] Tier-Par Motors
            {
                1 Item Filter: MV
                1 Fluid Filter + 2 Item Filters: HV
                1 Filter Casing + 2 Fluid Filters + 4 Item Filters: EV
                8[16] Item Filter + 4[8] Fluid Filters + 1 Filter Casing + 1[2] Carbon Mesh: IV+
            }
            2 1x Tier-Par Cabling
        )
        
        Thermal Centrifuge = (
            1 Hull,
            1 Tier-Par Circuit
            1 Tier-Par Centrifuge
            2[4] Tier-Par Motors
            4[8] 1x Tier-Par Cabling
        )
        
        Wiremill = (
            1 Hull,
            1 Tier-Subpar Circuit
            1[2] Tier-Par Bending Unit
            2 Tier-Par Motors
            1[2] Tier-Par Piston
            2 1x Tier-Par Cabling
        )
        
        Circuit Assembler (OH BOY) = (
            1 Hull,
            2[4][6] Tier-Par Circuits
            0[1EV] Tier-Par Transformer UP
            1[2][3] Tier-ABOVE Circuits
            0[1][2] Tier-ABOVE Casings
            0[1EV] Tier-ABOVE Laser Engraver
            1 General Assembler
            {
                1 Tier-Par Conveyor Belt: MV,
                2[3][6] Tier-Par Omni Directional Conveyor Belt: HV+
            }
            1[2][3] Tier-Par Robot Arms
            {
                8 Copper 1x Wires: MV
                8 Annealed Copper 1x Wires: HV
                12 Fine Silver Wire: EV
                12 Fine Gold Wire: IV
                16 Fine Platinum Wire: LuV
                32 Fine Naquadah Wire: ZPM+
            }
            1 Tier-Par Tank
            4 2x Tier-Par Cabling
            8 1x Tier-Par Wiring
            16 2x Tier-Subpar Cabling
            32 1x Tier-Subpar Wiring
        )
        
        Gas Collector = (
            1 Hull,
            1 Tier-Subpar Circuits
            1 Tier-Par Pumps
            1 Tier-Par Tank
            2 1x Tier-Par Cabling
        )

        Rock Breaker = (
            1 Hull,
            1 Tier Subpar Circuit
            1 Tier-Par Motor
            1 Tier-Par Drill Head
            1 Tier-Par Crate
            2 1x Tier-Par Cabling
            1 Tier-Par Block Breaker
        )
        
        Air Scrubber = (
            1 Hull,
            1 Tier Par Gas Collector,
            2 Fluid Filters
            1 Pump
            1 2x Tier-Par Wiring
        )

        Miner = (
            1 Hull
            1 Tier-Par Macerator
            1 Tier-Par Rock Breaker
            1[2][4] Tier-Par Drill Heads
            1[2][4] Tier-Par Motors
            1 Tier-Par Crate
            1[2] Tier-Par Circuits
            2 Tier-Par 1x Cabling
        )
        
        World Accelerator = (
            1 Hull
            2[4][8][16] Tier-Par Emitters
            4[8][16][32] Tier-Par Field Generators
            1[3][9][27][81][243][729] nX Compressed Torcherinos
            2[4][8][16] Tier-Par Circuits
            1[2][4][8] Tier-ABOVE Circuits
        )
        
        Item Collector = (
            1 Hull,
            1 Tier-Par Circuit
            1[9][25] Hoppers
            1 Tier-Par Crate
        )
        
        Buffer = (
            1 Hull
            1 Tier-Par Crate
        )
        
        Multiblock Busses = (
            1 Hull
            1 Tier-Par Crate
            4 Tier-Par Screws
        )
        
        Multiblock Fluid Hatches = (
            1 Hull
            1 Tier-Par Tank
            4 Tier-Par Screws
        )
        
        Energy Hatch = (
            1 Hull
            1 Tier-Par Circuit
            1[2EV] Tier-Par Voltage Coil
            1[2][4] Tier-Par Power Chip
            4 2x Tier-Par Wiring
            1[2][4] 1x TierSubpar Cabling
            50 mB [100][200][500] Tier-Par Coolant
        )

        Dynamo Hatch = (
            1 Hull
            1 Tier-Par Circuit
            1[2EV] Tier-Par Voltage Coil
            1[2][4] Tier-Par Power Chip 
            4 2x Tier-Par Wiring
            1[2][4] Tier-Par Conductor Spring
        )
        
        Muffler Hatch = (
            1 Hull
            1 Tier-Par Circuit
            1 Rotor
            1 Tier-Par Crate
            1 Item Filter
        )
        
        Rotor Holder = (
            1 Hull
            1 Motor
            1 Machine Casing
            2HV[4][8] Tier-Par Gears
        )

*/

//console.log(GTCraftingComponents.OMNI_CONVEYOR);
ServerEvents.recipes(event => {
    //Replacements for Stainless Steel => Stainless Steel 304 Only
    event.replaceInput(
        {type:"gtceu:electric_blast_furnace"},
        "gtceu:stainless_steel_dust",
        "gtceu:stainless_steel_grade_c_304_dust"
    );

    event.replaceOutput(
        {type:"gtceu:electric_blast_furnace"},
        "gtceu:stainless_steel_ingot",
        "gtceu:stainless_steel_grade_c_304_ingot"
    );
    
    /* Skipped due to power thrusters being made in part assemblers now
    event.replaceInput(
        {input:"gtceu:stainless_steel_ring",type:"gtceu:assembler"},
        "gtceu:stainless_steel_ring",
        "gtceu:stainless_steel_grade_c_304_ring"
    );
    */

    /* Replaced due to parts assemblers
    event.replaceInput(
        [
            {input:"gtceu:small_stainless_steel_gear",type:"gtceu:assembler"},
            {input:"gtceu:small_stainless_steel_gear",type:"minecraft:crafting_shaped"},
            {input:"gtceu:small_stainless_steel_gear",type:"minecraft:crafting_shapeless"}
        ],
        "gtceu:small_stainless_steel_gear",
        "gtceu:small_stainless_steel_grade_c_304_gear"
    );
    */
    event.replaceInput(
        {output:"minecraft:piston"},
        "gtceu:small_stainless_steel_gear",
        "gtceu:small_stainless_steel_grade_c_304_gear"
    );

    event.replaceInput(
        {input:"gtceu:stainless_steel_foil",type:"gtceu:assembler"},
        "gtceu:stainless_steel_foil",
        "gtceu:stainless_steel_grade_c_304_foil"
    );

    /* Skipped due to machine assemblers
    event.replaceInput(
        {output:"gtceu:hv_combustion"},
        "gtceu:stainless_steel_gear",
        "gtceu:stainless_steel_grade_c_304_gear"
    );
    */    

    /*Replaced due to parts assemblers
    event.replaceInput(
        [
            {output:"gtceu:hv_electric_motor"},
            {output:"gtceu:hv_electric_piston"},
            {output:"gtceu:robot_arm"},
            {output:"minecraft:piston"}
        ],
        "gtceu:stainless_steel_rod",
        "gtceu:stainless_steel_grade_c_304_rod"
    );
    */
    event.replaceInput(
        [
            {output:"minecraft:piston"}
        ],
        "gtceu:stainless_steel_rod",
        "gtceu:stainless_steel_grade_c_304_rod"
    );

    /*event.replaceInput(
        {output:"gtceu:advanced_monitor"},
        "gtceu:stainless_steel_plate",
        "gtceu:stainless_steel_grade_c_304_plate"
    );*/
    
})