var emitter,burst;
var timer;
var total = 10;
var firetime = total*1000;
var mask;
var bombline;
var move;



demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {
        game.load.image("background", "assets/background/grassland.jpg");
        game.load.image("mouse_jump", "assets/sprites/poke_mouse_jump.png");
        game.load.image("cheese_btn", "assets/button/cheese_btn.png");
        game.load.spritesheet("poke_mouse", "assets/sprites/poke_mouse.png", 240, 290);
        
        game.load.image('white','assets/particlestorm/particle/whiteparticle.png');
        game.load.image('yellow','assets/particlestorm/particle/yellowparticle.png');
        game.load.image('red','assets/particlestorm/particle/redparticle.png');
        game.load.image('orange','assets/particlestorm/particle/orangeparticle.png');
      
        game.load.image('bomb','assets/bomb/bomb.png');
        game.load.image('bombline','assets/bomb/bombline.png');
        game.load.image('bombfire','assets/bomb/bombfire.png');


    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#AAAAAA";
        var background = game.add.sprite(0, 0, "background");
        background.scale.setTo(0.7);
        addChangeStateEvent();

        //define how poke_mouse move
        game.physics.startSystem(Phaser.Physics.ARCADE);
        poke_mouse = game.add.sprite(centerX, 750, "poke_mouse");
        poke_mouse.animations.add("walk", [0, 1]);
        poke_mouse.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(poke_mouse);

        game.physics.enable(poke_mouse);
        poke_mouse.body.collideWorldBounds = true;

        //add cheese_btn
        var style_cheese = {
            font: "50px Arial",
            fill: "#000000",
            align: "center"
        };
        cheese_btn_one = createCheeseButton(150, 600, "1", style_cheese);
        cheese_btn_two = createCheeseButton(290, 600, "2", style_cheese);
        cheese_btn_three = createCheeseButton(430, 600, "3", style_cheese);
        cheese_btn_four = createCheeseButton(570, 600, "4", style_cheese);
        cheese_btn_five = createCheeseButton(710, 600, "5", style_cheese);
        cheese_btn_six = createCheeseButton(850, 600, "6", style_cheese);
        cheese_btn_seven = createCheeseButton(990, 600, "7", style_cheese);
        cheese_btn_eight = createCheeseButton(1130, 600, "8", style_cheese);
        cheese_btn_nine = createCheeseButton(1270, 600, "9", style_cheese);
        cheese_btn_ten = createCheeseButton(1410, 600, "10", style_cheese);
        
        
        game.add.sprite(180, 580, "bomb");
        bombline = game.add.sprite(180, 580, "bombline");
    
        //game time
        timer = game.time.create(false);
        timer.loop(1000,updateCounter,this);
        timer.start();
     
           
      
        //fire particle
        emitter = game.add.emitter(750,750,1); 
        emitter.makeParticles(['orange','red','yellow'],0,50,false,false);
        emitter.setRotation(1,0);
        emitter.setAlpha(1,0,1000);
        emitter.setScale(0.2,0,0.2,0,500);
        emitter.gravity = 2000;
        emitter.start(false,500,10);
        emitter.maxParticleSpeed.set(500,-1000);
        emitter.minParticleSpeed.set(-500,0);
        game.add.tween(emitter).to( { emitX: 390 }, 0.8*firetime, 'Linear', true);
      
        
        
        //bombline mask
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(255,660,500,100);
        bombline.mask = mask;

    },
    update: function() {
        if (game.physics.arcade.distanceToXY(poke_mouse, game.input.mousePointer.x, 750) > 30) {
            //  Make the object seek to the active pointer (mouse or touch).
            poke_mouse.animations.play("walk", 10, true);
            game.physics.arcade.moveToXY(poke_mouse, game.input.mousePointer.x, 750, 1000);
            if (game.input.mousePointer.x > poke_mouse.x) {
                poke_mouse.scale.setTo(-0.6, 0.6);
            } else if (game.input.mousePointer.x < poke_mouse.x) {
                poke_mouse.scale.setTo(0.6, 0.6);
            }
        } else {
            //  Otherwise turn off velocity because we're close enough to the pointer
            poke_mouse.body.velocity.set(0);
            poke_mouse.frame = 0;
        }
        
        //bomblinehidden
        if(mask.x <= -360){
            mask.y--;
        }
        else if(-359 <= mask.x && mask.x <= -300){
            mask.y-=0.5;
            mask.x --; 
        } 
        else{
            mask.x --; 
        }
            console.log( mask.x);
      
    }
}


function createCheeseButton(positionX, positionY, text, style) {
    //create button and text on the button
    cheese = game.add.sprite(positionX, positionY, "cheese_btn");
    cheese.scale.setTo(0.8, 0.8);
    cheese.anchor.setTo(0.5, 0.5);
    text = game.add.text(positionX - 5, positionY + 5, text, style);
    text.anchor.set(0.5, 0.5);

    cheese.inputEnabled = true;
    cheese.events.onInputDown.add(startBounceTween, {
        bounceToX: positionX,
        bounceToY: positionY
    });
};

function startBounceTween(cheese_btn) {

    //define how poke_mouse jump
    mouse_jump = game.add.sprite(this.bounceToX, 760, "mouse_jump");
    mouse_jump.scale.setTo(0.7, 0.7);
    mouse_jump.anchor.setTo(0.5, 0.2);

    //set bounce situatiob
    var bounce = game.add.tween(mouse_jump);

    bounce.to({
        y: this.bounceToY
    }, 300, Phaser.Easing.Back.In, false, 0, 0, true);
    bounce.start();
    bounce.onComplete.remove(startBounceTween);
    bounce.onStart.add(function() {
        poke_mouse.visible = false;
    });
    bounce.onComplete.add(function() {
        mouse_jump.destroy();
        poke_mouse.visible = true;
    });
}

//game time function
function updateCounter(){
    total--;
    
    if(total == 0){
        //stop fire
        emitter.on = false;
        
        //explode
        burst = game.add.emitter(300,670,1); 
        burst.makeParticles(['orange','red','yellow'],0,50,false,false);
        burst.setRotation(1,0);
        burst.setAlpha(1,-0.1,400);
        burst.setScale(1,5,1,5,400);
        burst.gravity = -500;
        burst.start(true,0,100,10,false);
     
    }
}
