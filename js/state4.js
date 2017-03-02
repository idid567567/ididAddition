var mask;
var radius;
var i = 0,t=0;

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
      radius = 1;
        
      var style = { font: "65px Arial", fill: "#ffffff", align: "center" }; 
        
      SCORE = game.add.text(100,700,'SCORE:', style);
      scoreshow = game.add.text(400,700,'', style); 
    
      
    
      do_again_btn = game.add.button(game.world.centerX + 200, 700, 'white', backToState2, this, 1, 0);
      do_again_btn.anchor.setTo(0.3, 0.4);
      do_again_btn.scale.setTo(3, 3);
      var style = { font: "30px Arial", fill: "#222222", align: "center" };     
      game.add.text(game.world.centerX + 200, 700,'Play Again', style); 
   
  },
  update: function(){
    /*
        mask = game.add.graphics();  
    mask.beginFill(0xaaaaaa);  
    if(radius<2500){
      mask.drawCircle(centerX,centerY,radius);
    radius*=1.2;  
        console.log('1');
    }
    */
    
      if(i <= finalscore  && t > 60){
          
          scoreshow.setText(i);
          console.log(i);
          i++;2
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
    