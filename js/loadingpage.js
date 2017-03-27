var mouse_step = new Array();
var delay = 20;
var t



demo.loadingpage = function() {};
demo.loadingpage.prototype = {
    preload: function() {
       game.load.image('startpageBG','assets/loadingpage/loadingpage.png');
        game.load.image('mouse_step','assets/loadingpage/mouse_step.png');
       
    },

    create: function() {
        
        //init parameter
        t = 0;
        
        
       game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        for(var i = 0;i<3;i++){
            mouse_step[i] = game.add.sprite(280+50*i,810, "mouse_step");
            mouse_step[i].scale.setTo(0.3, 0.3);
            mouse_step[i].alpha = 0;

        }
        
        
       
      
      
      
        
    },
    update: function() {
        if(t % 201 == 50){
            mouse_step[0].alpha = 1;
        }
        if(t % 201 == 160){
            mouse_step[0].alpha = 0;
        }
        if(t % 201 == 50 + delay){
            mouse_step[1].alpha = 1;
        }
        if(t % 201 == 160 + delay){
            mouse_step[1].alpha = 0;
        }
        if(t % 201 == 50 + 2*delay){
            mouse_step[2].alpha = 1;
        }
        if(t % 201 == 160 + 2*delay){
            mouse_step[2].alpha = 0;
        }
       if(t == 201){
             game.state.start('state8');
        }
            
        
        t++;

    }
  

    
};
