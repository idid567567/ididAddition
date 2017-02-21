var mask;

demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){},
  create: function(){
   	game.stage.backgroundColor = "#F33392";
  	addChangeStateEvent();
    
    mask = game.add.graphics(0,0);  
    mask.beginFill(0xaaaaaa);  
    mask.drawRect(200,200,300,200);
      
    game.input.addMoveCallback(move,this);
      
   
  },
  update: function(){},
}

function move(pointer,x,y){
    mask.x = x - 200;
    mask.y = y - 200;
}