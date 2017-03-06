var move;
var scorebar,scorebarY,scorebarcompleted,mask;

var index = new Array();
var questionindex = new Array(); 
var answerpannel= new Array();

var answercount;

demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {
        game.load.image('white','assets/particlestorm/particle/whiteparticle.png');
        game.load.image('scorebar','assets/gameplay/scorebar.png');
        game.load.image('scorebarBG','assets/gameplay/scorebarBG.png');
 
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#444444";
        
        //init parameter
        answercount = 0;
        addChangeStateEvent();
        finalscore = 100;
        scorebarY = 500;
         
        scorebarBG = game.add.sprite(100,200,'scorebarBG');
        scorebarBG.anchor.setTo(0, 0);
        scorebar = game.add.sprite(100,scorebarY,'scorebar');
        scorebar.anchor.setTo(0, 0);
        game.add.tween(scorebar).to({alpha:0.5},1000,'Linear',true,false).loop(true);   
        
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(100,200,10,600);
        scorebar.mask = mask;
        var questionrandseed = 16;
        
       //create the order of questions


        var rand = Math.floor(Math.random()*questionrandseed);
        questionindex[answercount] = rand;

	   
        var style = { font: "65px Arial", fill: "#ffffff", align: "center" };     
        var questionstring;    
        questionstring = game.add.text(1200,500,questionlevel1[questionindex[answercount]][0]+ '+' +questionlevel1[questionindex[answercount]][1], style);
        
        function updatequestion(){
            rand = Math.floor(Math.random()*questionrandseed);
            questionindex[answercount] = rand;
            questionstring.setText(questionlevel1[questionindex[answercount]][0]+ '+' +questionlevel1[questionindex[answercount]][1]);

        }
        
        
        game.add.text(1200,700,'Challenge', style);
        
        
        //create the answer pannel        
        for(var i = 1 ; i <= 10 ; i++){
            answerpannel[i] = game.add.sprite( 200 + 100*i, 200,"white");
            answerpannel[i].events.onInputDown.add(checkanswer,{param1: i});
            answerpannel[i].inputEnabled = true;  
            game.add.text(250 + 100*i,243,i);
        
            function checkanswer(){

                    if( answerlevel1[questionindex[answercount]] == this.param1 ){
                        answercount++;    
                        updatequestion();
                        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true);           
                    }
            }         
        }
    },     
    update: function() {
            
            
       
        if(scorebar.y < 800){
            scorebar.y+=2;
            
        }else{
            finalscore = 0;
            game.state.start("state4");
        }
        
        if(scorebar.y <= 200){
            game.state.start("state4");
        }else{
            finalscore -= 0.05;
        }


    }    
}
    


