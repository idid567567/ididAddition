var flying_engine,flying_engine_light;
var flyvelocity,flyscale,scalerate;
var startdelay,flyingtime;
var game_menu_music;
var whiteBG,whiteBG_leave;
var taskBG;

var house;
var billboard;
var backbutton;
var button1,button2,button3;

demo.state8 = function(){};
demo.state8.prototype = {
  preload: function(){
        
      game.load.image('sky','assets/game_menu/BG.png');
      game.load.image('bluestar','assets/game_menu/starsky.png');
      game.load.image('rock','assets/game_menu/rock.png');
        
      game.load.image('sunlight1','assets/game_menu/sunlight1.png');
      game.load.image('sunlight2','assets/game_menu/sunlight2.png');

      game.load.image('yellowstar','assets/game_menu/yellowstar.png');
      game.load.image('whitestar','assets/game_menu/whitestar.png');
      game.load.spritesheet('flying_engine','assets/game_menu/flying_engine_sheet.png',516,350);
      game.load.spritesheet('billboard','assets/game_menu/billboardsheet.png',274,274);
      game.load.image('flying_engine_light','assets/game_menu/flying_engine_light.png');
      game.load.image('garden','assets/game_menu/garden&road.png');
      game.load.image('city','assets/game_menu/city.png');
      game.load.image('whiteBG','assets/game_menu/whiteBG.png');
      game.load.spritesheet('house','assets/game_menu/myhousesheet.png',367,565);
      game.load.image('flying_bug','assets/game_menu/flying_bug.png');
      game.load.audio('menu', 'assets/audio/menu.mp3');
    
      game.load.image('taskBG','assets/menu/BG.png');
      game.load.spritesheet('backbuttonsheet','assets/menu/backbuttonsheet.png',232,114);
      game.load.spritesheet('button1sheet','assets/menu/button1sheet.png',257,71);
      game.load.spritesheet('button2sheet','assets/menu/button2sheet.png',257,71);
      game.load.spritesheet('button3sheet','assets/menu/button3sheet.png',257,71);
  },
  create: function(){
  	
      game.stage.backgroundColor = "#000000";
      addChangeStateEvent();
      game_menu_music = game.add.audio('menu');
      game_menu_music.loopFull(1);
      
      //init parameter
      flyvelocity = 0;
      startdelay = -1;
      flyingtime = 0;

      
      game.add.sprite(0,0,'sky');

 
      
      house = game.add.button(1233, 30, 'house', gohome, this, 1, 0);
      house.onInputOver.add(over, this);
      //button.onInputOut.add(out, this);
      house.onInputUp.add(up, this);
      game.add.sprite(412,220,'garden');
      game.add.sprite(0,730,'rock');
     
      /*
     
      flying_engine =  game.add.button(550,570,'flying_engine',gotocity,this,1,0);
      game.add.tween(flying_engine).to({y:'+20'},1500,'Quad.easeInOut',true,0,false,true).loop(true); 
      flying_engine_light = game.add.sprite(550,570,'flying_engine_light');
      game.add.tween(flying_engine_light).to({y:'+10'},1500,'Quad.easeInOut',true,0,false,true).loop(true); 
      flying_engine_light.alpha = 0;
        
      flying_engine.scale.setTo(1,1);
      flying_engine.anchor.setTo(1,0);
      flying_engine_light.scale.setTo(1,1);
      flying_engine_light.anchor.setTo(1,0);
     */
      billboard = game.add.button(500, 650, 'billboard', opendailytask, this, 1, 0);
      billboard.onInputOver.add(over, this);
      //button.onInputOut.add(out, this);
      billboard.onInputUp.add(up, this);
      
      
      flying_bug1 = game.add.sprite(1100,800,'flying_bug');
      flying_bug1.scale.setTo(0.2,0.2);
      game.add.tween(flying_bug1).to({y:'-50',x:'+200',alpha:0.2},9000,'Quad.easeInOut',true,0,false,true).loop(true);
    
      flying_bug2 = game.add.sprite(1150,850,'flying_bug');
      flying_bug2.scale.setTo(0.3,0.3);
      game.add.tween(flying_bug2).to({y:'-100',x:'-100',alpha:0.4},3000,'Quad.easeInOut',true,0,false,true).loop(true);

      flying_bug3 = game.add.sprite(1400,950,'flying_bug');
      flying_bug3.scale.setTo(0.4,0.4);
      game.add.tween(flying_bug3).to({y:'-90',x:'+80',alpha:0.1},5000,'Quad.easeInOut',true,0,false,true).loop(true);
  
      flying_bug4 = game.add.sprite(1400,900,'flying_bug');
      flying_bug4.scale.setTo(0.3,0.3);
      game.add.tween(flying_bug4).to({y:'-120',x:'-30',alpha:0.3},6000,'Quad.easeInOut',true,0,false,true).loop(true);
      
      flying_bug5 = game.add.sprite(1350,850,'flying_bug');
      flying_bug5.scale.setTo(0.2,0.2);
      game.add.tween(flying_bug5).to({y:'+50',x:'+30',alpha:0.3},7000,'Quad.easeInOut',true,0,false,true).loop(true);

      flying_bug6 = game.add.sprite(1250,800,'flying_bug');
      flying_bug6.scale.setTo(0.3,0.3);
      game.add.tween(flying_bug6).to({y:'+40',x:'+170',alpha:0.5},5000,'Quad.easeInOut',true,0,false,true).loop(true);

      sunlight1 = game.add.sprite(0,0,'sunlight1');
      game.add.tween(sunlight1).to({alpha:0.2},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
    
      sunlight2 = game.add.sprite(0,0,'sunlight2');
      game.add.tween(sunlight2).to({alpha:0.2},1000,'Quad.easeInOut',true,1000,false,true).loop(true); 
    
      taskBG = game.add.sprite(0,0,'taskBG');
      taskBG.alpha = 0;
      
      backbutton = game.add.button(1200, 800, 'backbuttonsheet', backtomenu ,this, 1, 0);
      backbutton.alpha = 0;
      backbutton.inputEnabled = false;
      
      button1 = game.add.button(300, 350, 'button1sheet', dailynews ,this, 1, 0);
      button2 = game.add.button(300, 500, 'button2sheet', dailytask ,this, 1, 0);
      button3 = game.add.button(300, 650, 'button3sheet', dailyprice ,this, 1, 0);
      button1.alpha = 0;
      button2.alpha = 0;
      button3.alpha = 0;
      button1.inputEnabled = false;
      button2.inputEnabled = false;
      button3.inputEnabled = false;
    

      //openBG
      whiteBG = game.add.sprite(0,0,'whiteBG');
      game.add.tween(whiteBG).to({alpha:0},5000,'Quad.easeIn',true); 
  
      /*
      whiteBG_leave = game.add.sprite(0,0,'whiteBG');
      whiteBG_leave.alpha = 0;
      */
  
  },

  update: function(){
  /*    
      if(startdelay>=0){
          flying_engine_light.alpha += 0.01;
          startdelay--;
      }
      
      if(startdelay==0){
          flying_engine_light.alpha =1;
          flyvelocity = 1;
          flyingtime = 0;
          scalerate = 1999/2000;
          
          flyingtime++;
      }else if(flyingtime>0&&flyingtime<=50){
          flying_engine_light.alpha =1;
          flyvelocity *= 1.035;
          scalerate *= 1999/2000;
          flying_engine_light.x +=flyvelocity;
          flying_engine_light.scale.x *= scalerate;
          flying_engine_light.scale.y *= scalerate;
          
          flying_engine.x +=flyvelocity;
          flying_engine.scale.x *= scalerate;
          flying_engine.scale.y *= scalerate;
          flyingtime++;
      }else if(flyingtime>50){
         
          flying_engine_light.alpha =1;
          flyvelocity *= 0.98;
          flying_engine.x +=flyvelocity;
          flying_engine.scale.x *= scalerate;
          flying_engine.scale.y *= scalerate;
          
          flying_engine_light.x +=flyvelocity;
          flying_engine_light.scale.x *= scalerate;
          flying_engine_light.scale.y *= scalerate;
         
          
      }
      */
  }
}

function gohome(){
    
}

function up() {
    
}

function over() {
   
}

function gotocity(){
    startdelay = 100;
}

function opendailytask(){
   
   
    game.add.tween(taskBG).to({alpha:0.6},500,'Quad.easeOut',true); 
    game.add.tween(backbutton).to({alpha:0.8},500,'Quad.easeOut',true); 
    game.add.tween(button1).to({alpha:1},500,'Quad.easeOut',true); 
    game.add.tween(button2).to({alpha:1},500,'Quad.easeOut',true);
    game.add.tween(button3).to({alpha:1},500,'Quad.easeOut',true);

    backbutton.inputEnabled = true;
    button1.inputEnabled = true;
    button2.inputEnabled = true;
    button3.inputEnabled = true;    
    
    house.inputEnabled = false;
    billboard.inputEnabled = false;
}

function backtomenu(){
    game.add.tween(taskBG).to({alpha:0},500,'Quad.easeOut',true); 
    game.add.tween(backbutton).to({alpha:0},500,'Quad.easeOut',true); 
    game.add.tween(button1).to({alpha:0},500,'Quad.easeOut',true); 
    game.add.tween(button2).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(button3).to({alpha:0},500,'Quad.easeOut',true);

    button1.inputEnabled = false;
    button2.inputEnabled = false;
    button3.inputEnabled = false;
    
    house.inputEnabled = true;
    billboard.inputEnabled = true;
}

function dailynews(){
    
}
function dailytask(){
    game.state.start('state3');
    game_menu_music.stop();
}
function dailyprice(){
    
}

