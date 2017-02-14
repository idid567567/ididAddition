var background;
var start_btn;

demo.state1 = function() {};
demo.state1.prototype = {
    preload: function() {
        game.load.image("background", "assets/background/grassland.jpg");
        game.load.spritesheet("start_btn", "assets/button/start_btn.png", 792, 344);

    },

    create: function() {
        game.stage.backgroundColor = "#AAAAAA";
        background = game.add.sprite(0, 0, "background");
        background.scale.setTo(0.7);
        addChangeStateEvent();

        start_btn = game.add.button(game.world.centerX + 100, 600, "start_btn", goToState2, this, 1, 0);
        start_btn.anchor.setTo(0.5, 0.5);
        start_btn.scale.setTo(0.3, 0.3);

        start_btn.onInputOver.add(over, this);
      	

    },
    update: function() {},
};

function goToState2() {
    console.log("state2");
    game.state.start("state2");
};

function over() {
	console.log("hover start_btn");
};
