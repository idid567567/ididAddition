var demo = {},
    centerX = 1600 / 2,
    centerY = 800 / 2,
    rockman_1,
    speed = 5;

demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {
        game.load.image("forest_background", "assets/background/forest_background.jpg");
        game.load.spritesheet("rockman_1", "assets/sprites/moving_rockman.png", 500, 452);
    },
    create: function() {
        game.stage.backgroundColor = "#AAAAAA";
        console.log("state0");
        addChangeStateEvent();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 2560, 1600);
        var forest_background = game.add.sprite(0, 0, "forest_background");
        rockman_1 = game.add.sprite(centerX, centerY, "rockman_1");
        rockman_1.animations.add("walk", [0, 1, 2]);
        rockman_1.anchor.setTo(0.5, 0.5);
        rockman_1.scale.setTo(0.5, 0.5);
        game.physics.enable(rockman_1);
        rockman_1.body.collideWorldBounds = true;

        game.camera.follow(rockman_1);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 200, 0, 600, 600);
    },
    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            rockman_1.x += speed;
            rockman_1.scale.setTo(0.5, 0.5);
            rockman_1.animations.play("walk", 10, true);
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            rockman_1.x -= speed;
            rockman_1.scale.setTo(-0.5, 0.5);
            rockman_1.animations.play("walk", 10, true);
        }

        else {
        	rockman_1.animations.stop("walk");
        	rockman_1.frame = 0;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            rockman_1.y -= speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            rockman_1.y += speed;
        }
    },
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