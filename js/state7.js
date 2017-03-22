
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
        game.load.image('BG','assets/fishingpage/BG.png');
        game.load.image('greenatmosphere','assets/fishingpage/greenatmosphere.png');
        game.load.image('yellowatmosphere','assets/fishingpage/yellowatmosphere.png');
        game.load.image('whiteatmosphere','assets/fishingpage/whiteatmosphere.png');
        game.load.image('sunlight1','assets/fishingpage/sunlight1.png');
        game.load.image('sunlight2','assets/fishingpage/sunlight2.png');
        game.load.image('grove','assets/fishingpage/grove.png');
 
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#444444";
        
        //init parameter
        finalscore = 100;
        scorebarY = 500;
        
        addChangeStateEvent();
        
        
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
        scorebar = game.add.sprite(100,scorebarY,'scorebar');
        scorebar.anchor.setTo(0, 0);
        scorebarred = game.add.sprite(100,scorebarY,'scorebarred');
        scorebarred.anchor.setTo(0, 0);
        scorebarred.alpha = 0;
        game.add.tween(scorebar).to({alpha:0.5},1000,'Linear',true,false).loop(true);   
        
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(100,200,10,600);
        scorebar.mask = mask;
        scorebarred.mask = mask;
        
        
        var b1 = game.add.button(centerX-50,500,'redbutton1',checkanswer1);
        var b2 = game.add.button(centerX+250,500,'redbutton2',checkanswer2);
        
        b1.alpha = 0.3;
        b2.alpha = 0.3;
        
        b1.scale.setTo(0.5,0.5);
        b2.scale.setTo(0.5,0.5);
        
        b1.anchor.setTo(0.5,0.5);
        b2.anchor.setTo(0.5,0.5);
        
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
            scorebar.y+=2.5;
            scorebarred.y+=2.5;
            
        }else{
            finalscore = 0;
            game.state.start("state4");
        }
        
        if(scorebar.y <= 200){
            game.state.start("state4");
        }else{
            finalscore -= 0.02;
            
        }
        if(scorebarred.alpha > 0){
            scorebarred.alpha -=0.05;
        }


    }    
}
    