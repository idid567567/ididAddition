var emitter,burst;
var timer;
var total = 10;
var firetime = total*1000;
var mask;
var bombline;
var move;
var cheese;
var gravity = 1.2,vy=0;

var question = ['1+1','1+2','2+1','1+3','2+2','3+1'];
var answer = [ 2 , 3 , 3 , 4 , 4 , 4 ];

var index = new Array();
var questionindex = new Array(); 
var answerpannel= new Array();

var questionamount = 6;
var answercount = 0;

demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {
        
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
        game.stage.backgroundColor = "#444444";
        
       
        addChangeStateEvent();

        //define how poke_mouse move
        game.physics.startSystem(Phaser.Physics.ARCADE);
        poke_mouse = game.add.sprite(centerX, 500, "poke_mouse");
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
        

        
       //create the order of questions
       for(var i = 0;i<questionamount;i++){
           index[i] = i;
       }
    
        for(var i = 0;i<questionamount;i++){
            var rand = Math.floor(Math.random()*(6-i));
            questionindex[i] = index[rand];
            index.splice(rand,1);
        }
        
        
        
	   var style = { font: "65px Arial", fill: "#ffffff", align: "center" };     
        var questionstring;    
        questionstring = game.add.text(1000,110,question[questionindex[answercount]], style);
        
        function updatequestion(){
            if(questionamount == answercount){
                game.state.start("state3");
            }else{
                questionstring.setText(question[questionindex[answercount]]);

            }
        }
            
                  
        
        game.add.button(100,200,'white',function(){
                
            if(poke_mouse.y >=500){
                vy *= -1;
                poke_mouse.y +=vy;
            }
        });
        game.add.text(150,243,0);

        
        game.add.button(200,200,'white',function(){
                
            if(poke_mouse.y >=500){
                vy *= -1;
                poke_mouse.y +=vy;
            }
        });
        game.add.text(250,243,1);
        
        
        game.add.button(300,200,'white',function(){
                
            if(poke_mouse.y >=500){
                vy *= -1;
                poke_mouse.y +=vy;

            if(questionindex[answercount] == 0){
                answercount++; 
                updatequestion();
            }
            
            }
        });
        game.add.text(350,243,2);

        
        game.add.button(400,200,'white',function(){
                
            if(poke_mouse.y >=500){
                vy *= -1;
                poke_mouse.y +=vy;
            }
            if(questionindex[answercount] == 1 || questionindex[answercount] == 2 ){
                answercount++;    
                updatequestion();
            }

        
        });
        game.add.text(450,243,3);
        
        game.add.button(500,200,'white',function(){
                
            if(poke_mouse.y >=500){
                vy *= -1;
                poke_mouse.y +=vy;
            }
            if(questionindex[answercount] == 3 || questionindex[answercount] == 4 || questionindex[answercount] == 5 ){
                answercount++;    
                updatequestion();
            }
        });
        game.add.text(550,243,4);
            
        
  
            
        
        
        
        
       

    },
    update: function() {
       
        if (game.physics.arcade.distanceToXY(poke_mouse, game.input.mousePointer.x, 500) > 50) {
            //  Make the object seek to the active pointer (mouse or touch).
            poke_mouse.animations.play("walk", 10, true);
            game.physics.arcade.moveToXY(poke_mouse, game.input.mousePointer.x, 500, 700);
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
            //console.log(mask.x);
            mask.x --; 
        }
    
       
        
  
            
      if(poke_mouse.y <=500){
          vy += gravity;
          poke_mouse.y +=vy;

      }else{          
          vy = 20;
      }
        
        
        
       
            
    }
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
