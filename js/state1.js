var background;
var start_btn;

demo.state1 = function() {};
demo.state1.prototype = {
    preload: function() {
       
        game.load.image('white','assets/particlestorm/particle/whiteparticle.png');

    },

    create: function() {
        game.stage.backgroundColor = "#444444";
       
        addChangeStateEvent();

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        start_btn = game.add.button(game.world.centerX, 600, "white", goToState2, this, 1, 0);
        start_btn.anchor.setTo(0.5, 0.5);
        start_btn.scale.setTo(4, 4);

        start_btn.onInputOver.add(over, this);
      	  
        var starttext = game.add.text(game.world.centerX, 600,'START', { font: "30px Arial", fill: "#444444", align: "center" });
        starttext.anchor.setTo(0.5, 0.5);
    },
    update: function() {},
};

function goToState2() {
    
    game.state.start("state2");
};

function over() {
	
};
