demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {
        game.load.image("background", "assets/background/grassland.jpg");
        game.load.spritesheet("poke_mouse", "assets/sprites/poke_mous.png", 240, 290);
    },
    create: function() {
        game.stage.backgroundColor = "#AAAAAA";
        var background = game.add.sprite(0, 0, "background");
        background.scale.setTo(0.7);
        addChangeStateEvent();

        game.physics.startSystem(Phaser.Physics.ARCADE);
        poke_mouse = game.add.sprite(centerX, centerY, "poke_mouse");
        poke_mouse.animations.add("walk", [0, 1]);
        poke_mouse.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(poke_mouse);

    },
    update: function() {
        if (game.physics.arcade.distanceToPointer(poke_mouse, game.input.activePointer) > 300) {
            //  Make the object seek to the active pointer (mouse or touch).
            poke_mouse.animations.play("walk", 10, true);
            game.physics.arcade.moveToXY(poke_mouse, game.input.mousePointer.x, 500, 300);
        } else {
            //  Otherwise turn off velocity because we're close enough to the pointer
            poke_mouse.body.velocity.set(0);
        }
    }
}