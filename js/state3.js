var index = new Array();
var questionindex = new Array(); 
var answercount;


var scorebar,scorebarY,scorebarcompleted,mask;
var questionrandseed;
var rand;

var t,t2;

var foxpulling,shadow,fishingrodpullingsheet;

var playing_status;
var waitingclick;

demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {
        game.load.image('button','assets/button/redbutton.png');
        game.load.image('scorebar','assets/gameplay/scorebar.png');
        game.load.image('scorebarred','assets/gameplay/scorebarred.png');
        game.load.image('scorebarBG','assets/gameplay/scorebarBG.png');
        game.load.image('BG','assets/fishingpage/BG.png');
        game.load.image('greenatmosphere','assets/fishingpage/greenatmosphere.png');
        game.load.image('yellowatmosphere','assets/fishingpage/yellowatmosphere.png');
        game.load.image('whiteatmosphere','assets/fishingpage/whiteatmosphere.png');
        game.load.image('sunlight1','assets/fishingpage/sunlight1.png');
        game.load.image('sunlight2','assets/fishingpage/sunlight2.png');
        game.load.image('grove','assets/fishingpage/grove.png');
        game.load.image('fishingrod','assets/charactor/fishingrod.png');
        game.load.image('mark','assets/charactor/mark.png');
 
        game.load.image('foxbody','assets/charactor/fox_fishingbody.png');
        game.load.image('shadow','assets/charactor/shadow.png');
        game.load.spritesheet('foxtail','assets/charactor/tailsheet2.png',717,677);
        game.load.image('tail','assets/charactor/tail.png');
        
        game.load.spritesheet('foxpulling','assets/charactor/pullingsheet.png',718,678);
        game.load.spritesheet('fishingrodpullingsheet','assets/charactor/fishingrodpullingsheet.png',512,446);

        
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#444444";
        
        //init parameter
        answercount = 0;
        addChangeStateEvent();
        finalscore = 100;
        scorebarY = 500;
        t=0;
        playing_status = false;
        waitingclick = false;

        questionrandseed = 16;
        rand = Math.floor(Math.random()*questionrandseed);
        
        game.add.sprite(0,0,'BG');
        sunlight1 = game.add.sprite(0,0,'sunlight1');
        sunlight2 = game.add.sprite(0,0,'sunlight2');
        game.add.tween(sunlight1).to({alpha:0.2},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        game.add.tween(sunlight2).to({alpha:0.2},1000,'Quad.easeInOut',true,1000,false,true).loop(true); 
        
        yellowatmosphere = game.add.sprite(0,0,'yellowatmosphere');
        game.add.tween(yellowatmosphere).to({alpha:0.7},1000,'Quad.easeInOut',true,0,false,true).loop(true); 

        whiteatmosphere = game.add.sprite(0,0,'whiteatmosphere');
        game.add.tween(whiteatmosphere).to({alpha:0.7},1000,'Quad.easeInOut',true,1000,false,true).loop(true); 

        greenatmosphere = game.add.sprite(0,0,'greenatmosphere');
        game.add.tween(greenatmosphere).to({alpha:0.9},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        
        game.add.sprite(0,0,'grove');
        
        scorebarBG = game.add.sprite(100,200,'scorebarBG');
        scorebarBG.anchor.setTo(0, 0);
        scorebarBG.alpha = 0;
        scorebar = game.add.sprite(100,scorebarY,'scorebar');
        scorebar.anchor.setTo(0, 0);
        scorebar.alpha = 0;
        scorebarred = game.add.sprite(100,scorebarY,'scorebarred');
        scorebarred.anchor.setTo(0, 0);
        scorebarred.alpha = 0;

        
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(100,200,10,600);
        scorebar.mask = mask;
        scorebarred.mask = mask;
   
        var foxpositionX = 150,
            foxpositionY = 500;
        
        fishingrod = game.add.sprite(foxpositionX+275, foxpositionY+400,'fishingrod');
        fishingrod.anchor.setTo(-0.1,1.2);
        game.add.tween(fishingrod).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   
        
        shadow = game.add.sprite(foxpositionX+50, foxpositionY+290, "shadow");
        shadow.scale.setTo(0.6,0.5);
        
        foxbody = game.add.sprite(foxpositionX+250, foxpositionY+300, "foxbody");
        foxbody.scale.setTo(0.5,0.5);
        foxbody.anchor.setTo(0.7,0.9);
        game.add.tween(foxbody).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        foxtail = game.add.sprite(foxpositionX+145, foxpositionY+300, "foxtail");
        foxtail.animations.add("fishing", [0,1,2,3,4,5,6]);
        foxtail.anchor.setTo(0.4,0.9); 
        foxtail.scale.setTo(0.5,0.5);
        game.add.tween(foxtail).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   

        mark = game.add.button(foxpositionX+250, foxpositionY, "mark",startfishing);
        mark.scale.setTo(0,0);
        mark.anchor.setTo(0.5,1);

        

        fishingrodpullingsheet = game.add.sprite(foxpositionX+670, foxpositionY+290, "fishingrodpullingsheet");
        fishingrodpullingsheet.animations.add("fishingrodpulling", [0,1,2,3,4]);


        fishingrodpullingsheet.anchor.setTo(0.7,0.9);
        fishingrodpullingsheet.alpha = 0;
        
        foxpulling = game.add.sprite(foxpositionX+250, foxpositionY+300, "foxpulling");
        foxpulling.animations.add("pulling", [0,1,2,3,4,5,6,7,8,9]);

        foxpulling.scale.setTo(0.5,0.5);
        foxpulling.anchor.setTo(0.7,0.9);
        foxpulling.alpha = 0;


        
    },     
    update: function() {
        t++;
        
        var rand;
        if(playing_status == false && waitingclick == false ){
            rand = Math.floor(Math.random()*300);
        }
        
        
        if(rand == 15 && mark.scale.x == 0){
            waitingclick = true;
            t2 = 20;
            game.add.tween(mark.scale).to({x:2,y:2},200,'Quad.easeOut',true);
        }
        
        if(t2>0){
            t2--;
           
        }else if(t2 == 0){
            
            waitingclick = false;  
            mark.scale.setTo(0,0);
        }       
            
        
        var a = t%200;
        if(scorebar.y < 800 && playing_status == true){
            scorebar.y+=0.5;
            scorebarred.y+=0.5;
            
        }else{
            finalscore = 0;
            
        }
        
        if(scorebar.y <= 200 && playing_status == true){
            finishfishing();
        }else{
            finalscore -= 0.02;
            
        }
        if(scorebarred.alpha > 0){
            scorebarred.alpha -=0.05;
        }
        if(t%200 >= 174){
            foxtail.animations.play("fishing",9,false);
        }else{
            foxtail.animations.stop("fishing");
            foxtail.frame = 0;
        }
    }    
}


    
function startfishing(){
    foxpulling.animations.play("pulling",100,true);
    foxpulling.alpha = 1;
    fishingrodpullingsheet.animations.play("fishingrodpulling",20,true);
    fishingrodpullingsheet.alpha = 1;
    
    game.add.tween(foxpulling).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    game.add.tween(fishingrodpullingsheet).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    game.add.tween(shadow).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    scorebar.y = 500;        
    console.log('fishingmode');        
    mark.scale.setTo(0,0);      
    playing_status = true;       

    create_question(); 
    create_answer_button();
       
    scorebarBG.alpha = 1;       
    scorebar.alpha = 1;
    game.add.tween(scorebar).to({alpha:0.8},1000,'Linear',true,false).loop(true);
    foxtail.alpha = 0;
    foxtail.animations.stop("fishing");
    foxbody.alpha = 0;
    fishingrod.alpha = 0;

}
function finishfishing(){
    //game.state.start('state3'); 
    console.log('stopmode');  
    playing_status = false; 
    scorebarBG.alpha = 0;
    scorebar.alpha = 0;
    scorebar.y = -1000;
    game.add.tween(scorebar).to({alpha:0},100,'Linear',true);

    questionstring1.setText(' ');
    questionstring2.setText(' ');
    questionstring3.setText(' ');
    answerpannelstring[0].setText(' ');
    answerpannelstring[1].setText(' ');
    answerpannelstring[2].setText(' ');
    answerpannel[0].alpha = 0;
    answerpannel[1].alpha = 0;
    answerpannel[2].alpha = 0;
    answerpannel[0].inputEnabled = false;  
    answerpannel[1].inputEnabled = false;  
    answerpannel[2].inputEnabled = false;  

    
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    foxtail.alpha = 1;
    foxbody.alpha = 1;
    fishingrod.alpha = 1;
    
}