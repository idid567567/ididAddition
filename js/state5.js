var data = new Array();
data = {0:[1,1],1:[1,2],2:[1,3]};

demo.state5 = function(){};
demo.state5.prototype = {
  preload: function(){
     game.load.spritesheet("poke_mouse", "assets/sprites/poke_mouse.png", 240, 290);
    game.load.image('white','assets/particlestorm/particle/whiteparticle.png');
    
  },
  create: function(){
    game.stage.backgroundColor = "#444444";
    addChangeStateEvent();
    
  
    poke_mouse = game.add.sprite(centerX, 500, "poke_mouse");
    white =  game.add.sprite( "white");

      
      var white ;       
      white = game.add.button(100,500,'white',function(){
          if(poke_mouse.y >=500){
              vy *= -1;
              poke_mouse.y +=vy;
              console.log(vy); 
          }
          
              
    });      
      
  },
  update: function(){
       
 
            
      if(poke_mouse.y <=500){
          vy += gravity;
          poke_mouse.y +=vy;
         
      }else{          
          vy = 20;
      }
     
      
      
  }
}





