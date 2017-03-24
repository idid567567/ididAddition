demo.state9 = function(){};
demo.state9.prototype = {
  preload: function(){
              game.load.spritesheet('foxgetfishingsheet','assets/charactor/foxgetfishingsheet.png',772,651);

  },
  create: function(){
  	
      game.stage.backgroundColor = "#B34002";
  	
      addChangeStateEvent();
      
      
      foxgetfishingsheet = game.add.sprite(800,700, "foxgetfishingsheet");
      foxgetfishingsheet.animations.add("foxgetfishingsheet", [0,1,2,3,4,5,6,7,8,9]);
      foxgetfishingsheet.anchor.setTo(0.7,0.9);
      foxgetfishingsheet.animations.play("foxgetfishingsheet",10,true);

  },
  update: function(){},
}