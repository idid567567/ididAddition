var demo = {},
    centerX = 1600 / 2,
    centerY = 1000 / 2,
    rockman_1,
    speed = 5;
var startmusic,startbtndown;
var BG,startpageBG,startpageBG_button,loadingbar,loadingbarwidth,loadingbarcompleted;
 
demo.startpage = function() {};
demo.startpage.prototype = {
    preload: function() {
       
        game.load.image('startpageBG','assets/background/startpageBG.png');
        game.load.image('startbutton','assets/button/startpress.png');
      
        game.load.audio('startmusic', 'assets/audio/startpage.mp3');
        game.load.audio('startbtndown', 'assets/audio/start_btndown.mp3');
        game.load.audio('startbtnover', 'assets/audio/start_btnover.mp3');

    },

    create: function() {
        
        
        startpageBG = game.add.sprite(0,0,'startpageBG');
        startpageBG.anchor.setTo(0, 0);
        startmusic = game.add.audio('startmusic');
        
        startmusic.play();
        startbtndown = game.add.audio('startbtndown');
        startbtnover = game.add.audio('startbtnover');
         
        loadingbar = game.add.graphics();
        loadingbar.beginFill(0xffffff);
        loadingbarwidth = 0;
       
                 

       
        addChangeStateEvent();
        

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        
    },
    update: function() {
        

        if(loadingbarwidth<692){
            loadingbarwidth +=4;
            loadingbar.drawRect(centerX-277,671,loadingbarwidth,4);
        }else if(loadingbarwidth == 692){
            startpageBG_button = game.add.button(0,0,'startpageBG', startgame);  
            loadingbarwidth +=2; 
            start_btn = game.add.sprite(game.world.centerX, 710, "startbutton");
            start_btn.alpha = 0;

            start_btn.anchor.setTo(0.5, 0.6);
            start_btn.scale.setTo(0.3,0.3);

            game.add.tween(start_btn).to({alpha:1},1500,'Linear',true,0,false,true).loop(true);  
            loadingbarcompleted = game.add.graphics();
            loadingbarcompleted.beginFill(0xffffff); 
            loadingbarcompleted.drawRect(centerX-277,671,692,4);
        }
    
    }
  

    
};


function startgame() {
    BG = game.add.graphics();
    BG.beginFill(0x000000); 
    BG.drawRect(0,0,1600,1000);
    BG.alpha = 0;
    
    var tween = game.add.tween(BG).to({alpha:1},1500,'Linear',true);
    game.add.tween(startpageBG).to({alpha:0},1500,'Linear',true);
    if(startpageBG.alpha == 1){
        tween.onStart.add(started, this);
        tween.onComplete.add(completed, this);
    }


    
     
         
    
   
};

function started(){
    startmusic.stop();
    startbtndown.play();

}

function completed() {

     game.state.start("loadingpage");

}





