var emitter,burst;
var timer;
var total;
var firetime;
var mask;
var bombline;
var move;
var cheese;
var gravity = 1.2,vy=0;
var finalscore;

//level1 questionlevel1.length = 17
var questionlevel1 = ['1+1','2+1','3+1','4+1','5+1','6+1','7+1','8+1','9+1','1+2','2+2','3+2','4+2','5+2','6+2','7+2','8+2'];
var answerlevel1   = [  2  ,  3  ,  4  ,  5  ,  6  ,  7  ,  8  ,  9  ,  10 ,  3  ,  4  ,  5  ,  6  ,  7  ,  8  ,  9  ,  10 ];
//level2 = level1+level2 questionlevel2.length = 28
var questionlevel2 = ['1+3','2+3','3+3','4+3','5+3','6+3','7+3','8+4','1+4','2+4','3+4','4+4','5+4','6+4','1+5','2+5','3+5','4+5','5+5',
                      '1+6','2+6','3+6','4+6','1+7','2+7','3+7','1+8','2+8','1+9'];
var answerlevel2   = [  4  ,  5  ,  6  ,  7  ,  8  ,  9  ,  10 ,  9  ,  5  ,  6  ,  7  ,  8  ,  9  ,  10 ,  6  ,  7  ,  8  ,  9  ,  10 ,
                        7  ,  8  ,  9  ,  10 ,  8  ,  9  ,  10 ,  9  ,  10 ,  10 ];
//level3 , questionlevel3.length = 18
var questionlevel3 = ['1+10','2+10','3+10','4+10','5+10','6+10','7+10','8+10','9+10','10+1','10+2','10+3','10+4','10+5','10+6','10+7','10+8','10+9'];
var answerlevel3   = [  11  ,  12  ,  13  ,  14  ,  15  ,  16  ,  17  ,  18  ,  19  ,  11  ,  12  ,  13  ,  14  ,  15  ,  16  ,  17  ,  18  ,  19  ];

//level4 , questionlevel4.length = 10
var questionlevel4 = ['1+1','2+2','3+3','4+4','5+5','6+6','7+7','8+8','9+9','10+10'];
var answerlevel4   = [  2  ,  4  ,  6  ,  8  ,  10 ,  12 ,  14 ,  16 ,  18 ,  20   ];

//level5 = level1+level2+level3+level5 , questionlevel5.length = 36
var questionlevel5 = ['9+2','8+3','9+3','7+4','8+4','9+4','6+5','7+5','8+5','9+5','5+6','6+6','7+6','8+6','9+6','4+7','5+7','6+7','7+7','8+7','9+7',
                      '3+8','4+8','5+8','6+8','7+8','8+8','9+8','2+9','3+9','4+9','5+9','6+9','7+9','8+9','9+9'];
var answerlevel5   = [  11 ,  11 ,  12 ,  11 ,  12 ,  13 ,  11 ,  12 ,  13 ,  14 ,  11 ,  12 ,  13 ,  14 ,  15 ,  11 ,  12 ,  13 ,  14 ,  15 ,  16 ,
                        11 ,  12 ,  13 ,  14 ,  15 ,  16 ,  17 ,  11 ,  12 ,  13 ,  14 ,  15 ,  16 ,  17 ,  18 ];


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
        
        //init parameter
     
        answercount = 0;
        total = 10;
        firetime = total*1000;
        finalscore = 100;
        
        addChangeStateEvent();

        //define how poke_mouse move
        game.physics.startSystem(Phaser.Physics.ARCADE);
        poke_mouse = game.add.sprite(centerX, 500, "poke_mouse");
        poke_mouse.animations.add("walk", [0, 1]);
        poke_mouse.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(poke_mouse);
        game.physics.enable(poke_mouse);
        poke_mouse.body.collideWorldBounds = true;
        
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
        var questionrandseed;
        //which question level 
        if( currentlevel == 1 ){
            questionrandseed = 16;
        }else if( currentlevel == 2 ){
            questionrandseed = 44;
        }else if( currentlevel == 3 ){
            questionrandseed = 17;
        }
                
       //create the order of questions
       for(var i = 0;i<questionrandseed;i++){
           index[i] = i;
       }
    
       for(var i = 0;i<questionamount;i++){
           var rand = Math.floor(Math.random()*(questionrandseed-i));
           questionindex[i] = index[rand];
           index.splice(rand,1);
       }
        
        var style = { font: "65px Arial", fill: "#ffffff", align: "center" };     
        var questionstring;    
        
        //show text: which level
        game.add.text(1200,700,'LEVEL'+currentlevel, style);
        
        //create a question
        if( currentlevel == 1 ){
            questionstring = game.add.text(1200,500,questionlevel1[questionindex[answercount]], style);
        }else if( currentlevel == 2 ){
            var questionlevel12 = questionlevel2.concat(questionlevel1);
            questionstring = game.add.text(1200,500,questionlevel12[questionindex[answercount]], style);
            var answerlevel12 = answerlevel2.concat(answerlevel1);
        }else if( currentlevel == 3 ){
            questionstring = game.add.text(1200,500,questionlevel3[questionindex[answercount]], style);
        }
        
        //after answer check,create a new question
        function updatequestion(){
            if(questionamount == answercount){
                game.state.start("state4");
            }else{
                if( currentlevel == 1 ){
                    questionstring.setText(questionlevel1[questionindex[answercount]]);
                }else if( currentlevel == 2 ){
                    questionstring.setText(questionlevel12[questionindex[answercount]]);
                }else if( currentlevel == 3 ){
                    questionstring.setText(questionlevel3[questionindex[answercount]]);
                }
            }
        }
        
       
            
        //create the answer pannel  
        if( currentlevel == 3 ){
            for(var i = 11 ; i <= 20 ; i++){
                answerpannel[i] = game.add.sprite( 200 + 100*(i-10), 200,"white");
                answerpannel[i].events.onInputDown.add(jump,{param1: i});
                answerpannel[i].inputEnabled = true;  
                game.add.text(240 + 100*(i-10),243,i);
        
                function jump(){
                    if(poke_mouse.y >=500){
                        vy *= -1;
                        poke_mouse.y +=vy;
                        if( answerlevel3[questionindex[answercount]] == this.param1 && currentlevel == 3 ){
                            answercount++;
                            updatequestion();
                        }
                    }            
                }         
            }        
            
        }else if( currentlevel == 1 || currentlevel == 2 ){
            for(var i = 1 ; i <= 10 ; i++){
                answerpannel[i] = game.add.sprite( 200 + 100*i, 200,"white");
                answerpannel[i].events.onInputDown.add(jump,{param1: i});
                answerpannel[i].inputEnabled = true;  
                game.add.text(240 + 100*i,243,' '+i);
        
                function jump(){
                    if(poke_mouse.y >=500){
                        vy *= -1;
                        poke_mouse.y +=vy;
                        if( answerlevel1[questionindex[answercount]] == this.param1 && currentlevel == 1 ){
                            answercount++;    
                            updatequestion();
                        }else if( answerlevel12[questionindex[answercount]] == this.param1 && currentlevel == 2 ){
                            answercount++;    
                            updatequestion();
                        }else if( answerlevel3[questionindex[answercount]] == this.param1 && currentlevel == 3 ){
                            answercount++;
                            updatequestion();
                        }
                    }            
                }         
            }        
        }

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
            mask.x --; 
        }
                                 
        if(poke_mouse.y <=500){
            vy += gravity;
            poke_mouse.y +=vy;
        }else{          
            vy = 20;
        }
        if( questionamount > answercount ){
            finalscore -= 0.05;
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
