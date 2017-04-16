var questionstring1,questionstring2,questionstring3;

var answer = new Array();
var answerpannel = new Array();
var answerpannelstring = new Array();
var addmode,minusmode;

function checkanswer(){
    if(this.param1 == questionlevel1[rand][0] && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;

    }else if(this.param1 != questionlevel1[rand][0] && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
        
    }else if(this.param1 == answerlevel1[rand] && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;
        
        
    }else if(this.param1 != answerlevel1[rand] && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
    }
}

function createquestion(){
        
    var questionpositionX = 1000,
        questionpositionY = 300;
    
   
        
    if( rand%2 == 0 ){
        questionstring1 = game.add.text(questionpositionX+150,questionpositionY,questionlevel1[rand][0],style);
        questionstring2 = game.add.text(questionpositionX-150,questionpositionY,questionlevel1[rand][1],style);
        questionstring3 = game.add.text(questionpositionX,questionpositionY-150,'?',style);
        addmode = true;
        minusmode = false;
            
    }
    if( rand%2 == 1 ){
        questionstring1 = game.add.text(questionpositionX+150,questionpositionY,'?',style);
        questionstring2 = game.add.text(questionpositionX-150,questionpositionY,questionlevel1[rand][1],style);
        questionstring3 = game.add.text(questionpositionX,questionpositionY-150,answerlevel1[rand],style);
        addmode = false;
        minusmode = true;

    }

}

function update_question(){

    rand = Math.floor(Math.random()*questionrandseed);
    if( rand%2 == 0 ){
        questionstring1.setText(questionlevel1[rand][0]);
        questionstring2.setText(questionlevel1[rand][1]);
        questionstring3.setText('?');
        addmode = true;
        minusmode = false;
    }
    if( rand%2 == 1 ){
        questionstring1.setText('?');
        questionstring2.setText(questionlevel1[rand][1]);
        questionstring3.setText(answerlevel1[rand]);
        addmode = false;
        minusmode = true;
    }
    createanswerbutton();
}

var buttonpositionY = 800;

function createanswerbutton(){
    var answerindex = 0;
    createanswer();
    for(var i = 0;i<=2;i++){
        if( rand%3 == i ){
            if(addmode == true){
                answerpannel[i] = game.add.sprite( buttonpositionY+200*i, 500,"button");
                answerpannel[i].scale.setTo(0.3,0.3); 
                answerpannel[i].events.onInputDown.add(checkanswer,{param1: answerlevel1[rand]});
                answerpannel[i].inputEnabled = true;  
                answerpannelstring[i] = game.add.text(buttonpositionY+200*i,500,answerlevel1[rand],style);
            }
            if(minusmode == true){
                answerpannel[i] = game.add.sprite( buttonpositionY+200*i, 500,"button");
                answerpannel[i].scale.setTo(0.3,0.3); 
                answerpannel[i].events.onInputDown.add(checkanswer,{param1: questionlevel1[rand][0]});
                answerpannel[i].inputEnabled = true;  
                answerpannelstring[i] = game.add.text(buttonpositionY+200*i,500,questionlevel1[rand][0],style);
            }
        }else{
            answerpannel[i] = game.add.sprite( buttonpositionY+200*i, 500,"button");
            answerpannel[i].scale.setTo(0.3,0.3); 
            answerpannel[i].events.onInputDown.add(checkanswer,{param1: answer[answerindex]});
            answerpannel[i].inputEnabled = true;  
            answerpannelstring[i] = game.add.text(buttonpositionY+200*i,500,answer[answerindex],style);
            answerindex++;
        }
    }
}


function createanswer(){
    answer[0] = Math.floor(Math.random()*10);
    answer[1] = Math.floor(Math.random()*10);
    if(addmode == true){
        if(answer[0] == answer[1] || answer[0] == answerlevel1[rand] || answer[1] == answerlevel1[rand]){
            createanswer();
        
        }
    }
    if(minusmode == true){
        if(answer[0] == answer[1] || answer[0] == questionlevel1[rand][0] || answer[1] == questionlevel1[rand][0]){
            createanswer();
        
        }
    }

}
