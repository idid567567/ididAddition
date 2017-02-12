demo.state2 = function(){};
demo.state2.prototype = {
  preload: function(){
  	game.load.image("background", "assets/background/grassland.jpg");
  },
  create: function(){
  	game.stage.backgroundColor = "#AAAAAA";
  	var background = game.add.sprite(0, 0, "background");
  	background.scale.setTo(0.7);
  	addChangeStateEvent();
  },
  update: function(){},
}