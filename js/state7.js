
var scorebar,scorebarY,scorebarcompleted,mask;

var index = new Array();
var questionindex = new Array(); 
var answerpannel= new Array();



demo.state7 = function() {};
demo.state7.prototype = {
    preload: function() {
        game.load.image('redbutton1','assets/button/redbutton.png');
        game.load.image('redbutton2','assets/button/redbutton.png');
        game.load.image('scorebar','assets/gameplay/scorebar.png');
        game.load.image('scorebarred','assets/gameplay/scorebarred.png');
        game.load.image('scorebarBG','assets/gameplay/scorebarBG.png');
 
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#444444";
        
        //init parameter
        
        addChangeStateEvent();
        
        finalscore = 100;
        scorebarY = 500;
         
        scorebarBG = game.add.sprite(750,200,'scorebarBG');
        scorebarBG.anchor.setTo(0, 0);
        scorebar = game.add.sprite(750,scorebarY,'scorebar');
        scorebar.anchor.setTo(0, 0);
        scorebarred = game.add.sprite(750,scorebarY,'scorebarred');
        scorebarred.anchor.setTo(0, 0);
        scorebarred.alpha = 0;
        game.add.tween(scorebar).to({alpha:0.5},1000,'Linear',true,false).loop(true);   
        
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(750,200,10,600);
        scorebar.mask = mask;
        scorebarred.mask = mask;
        
        
        var b1 = game.add.button(150,200,'redbutton1',checkanswer1);
        var b2 = game.add.button(800,200,'redbutton2',checkanswer2);
        
        b1.onInputDown.add(this.tint,b1);
        b2.onInputDown.add(this.tint,b2);
        
        b1.onInputUp.add(this.untint,b1);
        b2.onInputUp.add(this.untint,b2);
        
        var questionrandseed = 16;
        

        var style = { font: "200px Arial", fill: "#ffffff", align: "center" };
        
        randoms();
        var rand1,rand2;
        var answerleft;
        var answerright; 
        var checkanswerleft; 
        var checkanswerright; 

        
        function randoms(){
            rand1 = Math.floor(Math.random()*questionrandseed);
            rand2 = Math.floor(Math.random()*questionrandseed);

            if(answerlevel1[rand1] == rand2){
                randoms();
            }
        }
        
        if(Math.floor(Math.random()*questionrandseed)%2 == 1){
            answerleft = game.add.text(350,400,answerlevel1[rand1], style);
            answerright = game.add.text(900,400,rand2, style);
            
            checkanswerleft = true;
            checkanswerright = false;
        }else{
            answerleft = game.add.text(350,400,rand2,style);
            answerright = game.add.text(900,400,answerlevel1[rand1], style);   
            
            checkanswerleft = false;
            checkanswerright = true;
        }           
        

        

        var question = game.add.text(600,0,questionlevel1[rand1][0]+ '+' +questionlevel1[rand1][1],style);
        
        function updatequestion(){
            question.setText(questionlevel1[rand1][0]+ '+' +questionlevel1[rand1][1]);
            if(Math.floor(Math.random()*questionrandseed)%2 == 1){
                answerleft.setText(answerlevel1[rand1]);
                answerright.setText(rand2);
                
                checkanswerleft = true;
                checkanswerright = false;
            }else{
                answerleft.setText(rand2);
                answerright.setText(answerlevel1[rand1]);    
                
                checkanswerleft = false;
                checkanswerright = true;
        }           

        }
        function checkanswer1(){
            if(checkanswerleft == true){
                randoms();
                updatequestion();
                game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
                game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
            }else{
                randoms();
                updatequestion(); 
                game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
                game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true);
                scorebarred.alpha = 1;
            }
        }
        function checkanswer2(){
            if(checkanswerright == true){
                randoms();
                updatequestion();    
                game.add.tween(scorebar).to({y:'-100'},100,'Linear',true);
                game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true);
            }else{
                randoms();
                updatequestion(); 
                game.add.tween(scorebar).to({y:'+50'},100,'Linear',true);
                game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true);
                scorebarred.alpha = 1;
            }
        }
        
        

    },
    tint:function(){
        this.tint = 0xbbbbbb;
    
    }, 
    untint:function(){
        this.tint = 0xffffff;
    
    }, 

    update: function() {
     
        if(scorebar.y < 800){
            scorebar.y+=1;
            scorebarred.y+=1;
            
        }else{
            finalscore = 0;
            game.state.start("state5");
        }
        
        if(scorebar.y <= 200){
            game.state.start("state5");
        }else{
            finalscore -= 0.02;
            
        }
        if(scorebarred.alpha > 0){
            scorebarred.alpha -=0.05;
        }


    }    
}
    