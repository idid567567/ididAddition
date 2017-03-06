var i,t;

demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){
      game.load.image('white','assets/particlestorm/particle/whiteparticle.png');
  },
  create: function(){
    
      game.stage.backgroundColor = "#444444";
      
      //init parameter
      i = 0;
      t=0;
  	     
      addChangeStateEvent();  
        
      var style = { font: "65px Arial", fill: "#ffffff", align: "center" }; 
        
      SCORE = game.add.text(100,700,'SCORE:', style);
      scoreshow = game.add.text(400,700,'', style);     
      
      do_again_btn = game.add.button(game.world.centerX + 200, 700, 'white', backToState2);
      do_again_btn.anchor.setTo(0.3, 0.4);
      do_again_btn.scale.setTo(3, 3);
      var style = { font: "30px Arial", fill: "#222222", align: "center" };     
      game.add.text(game.world.centerX + 200, 700,'Play Again', style); 

      level_page_btn = game.add.button(game.world.centerX + 550, 700, 'white', BackToGameMenu);
      level_page_btn.anchor.setTo(0.3, 0.4);
      level_page_btn.scale.setTo(3, 3);     
      game.add.text(game.world.centerX + 550, 700,'Level Page', style); 
      
  },
  update: function(){
      
      //show score
      if(finalscore == -0.05){scoreshow.setText(0);}
      if(i <= finalscore  && t > 60){
          scoreshow.setText(i);
          i++;
      }else{
          t++;
      }  
  } 
}

function backToState2(){
    if(i >= finalscore){
        game.state.start("state2");
    
    }
}

function BackToGameMenu(){
    if(i >= finalscore){
        game.state.start("game_menu");
    
    }
}
    
    