var mask;
var radius;

demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){},
  create: function(){
   	
  	addChangeStateEvent();
    radius = 1;
  
   
     
      
   
  },
  update: function(){
        mask = game.add.graphics();  
    mask.beginFill(0xaaaaaa);  
       mask.drawCircle(centerX,centerY,radius);
    radius*=1.2;
    

  },
}


    