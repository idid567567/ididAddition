var demo = {},
    centerX = 1600 / 2,
    centerY = 800 / 2,
    rockman_1,
    speed = 5;

demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {
       
        game.load.image('white','assets/particlestorm/particle/whiteparticle.png');

    },

    create: function() {
        game.stage.backgroundColor = "#444444";
       
        addChangeStateEvent();

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        start_btn = game.add.button(game.world.centerX, 600, "white", goToState1, this, 1, 0);
        start_btn.anchor.setTo(0.5, 0.5);
        start_btn.scale.setTo(4, 4);
      	  
        var starttext = game.add.text(game.world.centerX, 600,'START', { font: "30px Arial", fill: "#444444", align: "center" });
        starttext.anchor.setTo(0.5, 0.5);
    },
    update: function() {},
};

function goToState1() {
    
    game.state.start("state1");
};


function changeState(i, stateNum) {
	console.log("state" + stateNum);
    game.state.start("state" + stateNum);
};

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};

function addChangeStateEvent() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

};