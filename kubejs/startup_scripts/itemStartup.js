const PotionUtils = Java.loadClass('net.minecraft.world.item.alchemy.PotionUtils');
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

StartupEvents.registry('item', event => {
  event.create("flammable_binder").texture("kubejs:item/flammable_binder");
  event.create("refined_dirt").texture("kubejs:item/refined_dirt");
  event.create("ph_paper").displayName("pH Paper").texture("kubejs:item/ph_paper");

  let colorList = [
    "red","orange","yellow",
    "lime","green","aqua",
    "cyan","sky","blue",
    "indigo","purple","magenta"
  ];

  let colorColorList = [
    0xFF0000, 0xFF8800, 0xFFFF00,
    0x44FF00, 0x00BB00, 0x00DD66,
    0x00FFFF, 0x0088FF, 0x0000FF,
    0x4400FF, 0x8800FF, 0xFF00FF
  ]

  colorList.forEach((item,index) =>{
    event.create(item+"_photon").modelJson({
      "parent": "item/generated",
      "textures": {
          "layer0": "kubejs:item/photon"
      }
    }).color(0,colorColorList[index]);

    event.create(item+"_photon_caged").modelJson({
      "parent": "item/generated",
      "textures": {
          "layer0": "kubejs:item/photon",
          "layer1": "kubejs:item/photon_frame"
      }
    }).color(0,colorColorList[index]);
  })
  
  $BuiltInRegistries.MOB_EFFECT.forEach(item => {
      let colorInt = item.color;
      let hexColor = '#'+colorInt.toString(16).toUpperCase();
      let fullColor = Color.of(hexColor);
      let name = item.descriptionId.split("effect.minecraft.")[1]
      console.log(name);

      event.create("candy_of_"+name).modelJson({
        "parent":"item/generated",
        "textures": {
          "layer0":"kubejs:item/candy_white",
          "layer1":"kubejs:item/candy_colored",
        }
      }).color(1,fullColor);

      event.create("strong_candy_of_"+name).modelJson({
        "parent":"item/generated",
        "textures": {
          "layer0":"kubejs:item/candy_white",
          "layer1":"kubejs:item/candy_colored",
          "layer2":"kubejs:item/candy_strong"
        }
      }).color(1,fullColor).color(2,fullColor);


  })
 
});

StartupEvents.registry("block", event => {
  event.create("softened_stone")
    .model("kubejs:block/softened_stone")
    .stoneSoundType()
    .tagBlock("minecraft:mineable/pickaxe")
    .resistance(0);
})