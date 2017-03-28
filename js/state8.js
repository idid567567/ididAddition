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


var newscardX = centerX - 250,
    newscardY = centerY - 44;

var daitytaskcardX = centerX + 100,
    daitytaskcardY = centerY - 44;

var confirm_status = false,
    daily_task_status = false,
    complete_task_status = false;

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
      game.load.image('blackBG','assets/game_menu/blackBG.jpg');
      
      game.load.spritesheet('house','assets/game_menu/myhousesheet.png',367,565);
      game.load.image('flying_bug','assets/game_menu/flying_bug.png');
      game.load.audio('menu', 'assets/audio/menu.mp3');
    
      game.load.image('taskBG','assets/menu/BG.png');
      game.load.image('newscardBG','assets/menu/newscard.png');
      game.load.image('daitytaskcardBG','assets/menu/daitytaskcard.png');
      game.load.image('newscardword','assets/menu/newscardword.png');
      game.load.image('changepagearrow','assets/menu/changepagearrow.png');
      game.load.image('textslide','assets/menu/arrow.png');
      
      game.load.spritesheet('btn_confirm_sheet','assets/menu/btn_confirm_sheet.png',134,82);
      game.load.spritesheet('btn_back_sheet','assets/menu/btn_back_sheet.png',134,82);
      game.load.spritesheet('btn_accept_sheet','assets/menu/btn_accept_sheet.png',134,82);
       game.load.spritesheet('btn_complete_sheet','assets/menu/btn_complete_sheet.png',134,82);
      
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
      
      //billboard
      taskBG = game.add.sprite(centerX,centerY,'taskBG');
      taskBG.anchor.setTo(0.5,0.5);
      taskBG.scale.setTo(1,1);
      taskBG.alpha = 0;
      
      changepagearrow = game.add.sprite(centerX+360,centerY-30,'changepagearrow');
      changepagearrow.anchor.setTo(0.5,0.5);
      changepagearrow.scale.setTo(1,1);
      changepagearrow.alpha = 0;
      
      
      newscardBG = game.add.sprite(newscardX,newscardY,'newscardBG');
      newscardBG.anchor.setTo(0.5,0.5);
      newscardBG.scale.setTo(0,0);
      
      newscardword = game.add.sprite(newscardX,newscardY,'newscardword');
      newscardword.anchor.setTo(0.5,0.5);
      newscardword.scale.setTo(1,1);
      newscardword.alpha = 0;
      
      textslide = game.add.sprite(newscardX,newscardY+40,'textslide');
      textslide.anchor.setTo(0.5,0.5);
      //game.add.tween(textslide).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true); 
      textslide.alpha = 0;
  
      btn_confirm = game.add.button(newscardX,newscardY, 'btn_confirm_sheet', confirm_news, this, 1, 0);
      btn_confirm.anchor.setTo(0.5,-1);
      btn_confirm.scale.setTo(0,0);  
      btn_confirm.inputEnabled = false;
      
      
      daitytaskcardBG = game.add.sprite(daitytaskcardX,daitytaskcardY,'daitytaskcardBG');
      daitytaskcardBG.anchor.setTo(0.5,0.5);
      daitytaskcardBG.scale.setTo(0,0);   
      
      btn_accept = game.add.button(daitytaskcardX,daitytaskcardY, 'btn_accept_sheet', accept_task, this, 1, 0);
      btn_accept.anchor.setTo(0.5,-1);
      btn_accept.scale.setTo(0,0);  
      btn_accept.inputEnabled = false;

      btn_complete = game.add.button(daitytaskcardX,daitytaskcardY, 'btn_complete_sheet', complete_task, this, 1, 0);
      btn_complete.anchor.setTo(0.5,-1);
      btn_complete.scale.setTo(0,0);  
      btn_complete.inputEnabled = false;
        
      btn_back = game.add.button(centerX+343,centerY+205, 'btn_back_sheet', back_to_menu, this, 1, 0);
      btn_back.anchor.setTo(0.5,0.5);
      btn_back.scale.setTo(1,1);  
      btn_back.alpha = 0;
      btn_back.inputEnabled = false;
 
      //openBG
      whiteBG = game.add.sprite(0,0,'whiteBG');
      game.add.tween(whiteBG).to({alpha:0},3000,'Quad.easeIn',true); 
      
      //closeBG
      blackBG = game.add.sprite(0,0,'blackBG');
      blackBG.alpha = 0;
  },

  update: function(){
      if(textslide.alpha <= 0.5 && textslide.alpha >= 0.49){
          textslide.alpha = 1;
      }else if(textslide.alpha > 0.5){
          textslide.alpha -= 0.02;
      }
    
      if(changepagearrow.alpha <= 0.5 && changepagearrow.alpha >= 0.49){
          changepagearrow.alpha = 1;
      }else if(changepagearrow.alpha > 0.5){
          changepagearrow.alpha -= 0.02;
      }
      
      if( blackBG.alpha == 1 ){
          game.state.start('state3');
      }

  }
}
function gohome(){
    
}

function up() {
    
}

function over() {
   
}


function opendailytask(){
    
    if(confirm_status == false){
        newscardBG.alpha = 1;
        newscardBG.scale.setTo(0,0);
        btn_confirm.alpha = 1; 
        btn_confirm.scale.setTo(0,0);
        btn_confirm.inputEnabled = true;

        game.add.tween(newscardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
        game.add.tween(btn_confirm.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
        game.add.tween(newscardword).to({alpha:1},1000,'Quad.easeOut',true,1500);
        game.add.tween(textslide).to({alpha:1},1000,'Quad.easeOut',true,1500);
    
    }
    
    
    daitytaskcardBG.alpha = 1;
    daitytaskcardBG.scale.setTo(0,0);
    
    if(daily_task_status == true && complete_task_status == false){
        btn_complete.alpha = 1;
        btn_complete.scale.setTo(0,0);
        game.add.tween(btn_complete.scale).to({x:1,y:1},500,'Quad.easeOut',true,1200);
        btn_complete.inputEnabled = true;
        game.add.tween(daitytaskcardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1200);
    }
   
    if(daily_task_status == false && complete_task_status == false){
        btn_accept.alpha = 1;
        btn_accept.scale.setTo(0,0);
        game.add.tween(btn_accept.scale).to({x:1,y:1},500,'Quad.easeOut',true,1200);
        btn_accept.inputEnabled = true;
        game.add.tween(daitytaskcardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1200);
    }
    
    
    game.add.tween(taskBG).to({alpha:1},500,'Quad.easeOut',true); 
    game.add.tween(changepagearrow).to({alpha:1},500,'Quad.easeOut',true);  
    game.add.tween(btn_back).to({alpha:1},500,'Quad.easeOut',true); 

    btn_back.inputEnabled = true;
    
    house.inputEnabled = false;
    billboard.inputEnabled = false;
}

function back_to_menu(){
    game.add.tween(taskBG).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(changepagearrow).to({alpha:0},500,'Quad.easeOut',true); 
    game.add.tween(btn_back).to({alpha:0},500,'Quad.easeOut',true); 
    game.add.tween(newscardBG).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(btn_confirm).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(newscardword).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(textslide).to({alpha:0},500,'Quad.easeOut',true);

    
    game.add.tween(daitytaskcardBG).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(btn_accept).to({alpha:0},500,'Quad.easeOut',true);

    btn_back.inputEnabled = false;
    btn_accept.inputEnabled = false;
    btn_confirm.inputEnabled = false;
    
    house.inputEnabled = true;
    billboard.inputEnabled = true;
}

function confirm_news(){
    
    
    game.add.tween(newscardBG).to({alpha:0},500,'Quad.easeOut',true); 
    game.add.tween(newscardword).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(textslide).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(btn_confirm).to({alpha:0},500,'Quad.easeOut',true);
    
    if(complete_task_status == false){
        daitytaskcardX = newscardX;
        game.add.tween(daitytaskcardBG).to({x:daitytaskcardX},500,'Quad.easeOut',true,500);
        game.add.tween(btn_accept).to({x:daitytaskcardX},500,'Quad.easeOut',true,500);
        game.add.tween(btn_complete).to({x:daitytaskcardX},500,'Quad.easeOut',true,500);
        
    }

    
    confirm_status = true;

}

function complete_task(){
       
    game.add.tween(daitytaskcardBG).to({alpha:0},500,'Quad.easeOut',true);
    game.add.tween(btn_complete).to({alpha:0},500,'Quad.easeOut',true);
    
    btn_complete.inputEnabled = false;

    complete_task_status = true;
}

function accept_task(){
      
    game_menu_music.stop(); 
    game.add.tween(blackBG).to({alpha:1},500,'Quad.easeIn',true); 
}