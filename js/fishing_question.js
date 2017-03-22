var answerpannelcheck = new Array();

function checkanswer_fishing0(){
    if(answerpannelcheck[0] == true && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;

    }else if(answerpannelcheck[0] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
        
    }else if(answerpannelcheck[0] == true && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[0] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
    }
}

function checkanswer_fishing1(){
    if(answerpannelcheck[1] == true && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;

    }else if(answerpannelcheck[1] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
        
    }else if(answerpannelcheck[1] == true && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[1] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
    }
}

function checkanswer_fishing2(){
    if(answerpannelcheck[2] == true && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;

    }else if(answerpannelcheck[2] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
        
    }else if(answerpannelcheck[2] == true && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},100,'Linear',true); 
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[2] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},100,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},100,'Linear',true); 
        scorebarred.alpha = 1;
        update_question();
    }
}

function create_question(){
        
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
    update_answerstring();
}

var buttonpositionY = 800;

function create_answer_button(){

    for(var i = 0;i<=2;i++){
            answerpannel[i] = game.add.sprite( buttonpositionY+200*i, 500,"button");
            answerpannel[i].scale.setTo(0.3,0.3); 
            answerpannel[i].inputEnabled = true;  
    }
    answerpannel[0].events.onInputDown.add(checkanswer_fishing0);
    answerpannel[1].events.onInputDown.add(checkanswer_fishing1);
    answerpannel[2].events.onInputDown.add(checkanswer_fishing2);
    create_answerstring();
}
function create_answerstring(){
    var answerindex = 0;
    createanswervalue();
    for(var i = 0;i<=2;i++){
        if( rand%3 == i ){
            if(addmode == true){
                answerpannelstring[i] = game.add.text(buttonpositionY+200*i,500,answerlevel1[rand],style);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                answerpannelstring[i] = game.add.text(buttonpositionY+200*i,500,questionlevel1[rand][0],style);
                answerpannelcheck[i] = true;
            }
        }else{
            answerpannelstring[i] = game.add.text(buttonpositionY+200*i,500,answer[answerindex],style);
            answerpannelcheck[i] = false;
            answerindex++;
        }
    }
}

function update_answerstring(){
    var answerindex = 0;
    createanswervalue();
    for(var i = 0;i<=2;i++){
        if( rand%3 == i ){
            if(addmode == true){
                answerpannelstring[i].setText(answerlevel1[rand]);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                answerpannelstring[i].setText(questionlevel1[rand][0]);
                answerpannelcheck[i] = true;
            }
        }else{
            answerpannelstring[i].setText(answer[answerindex]);
            answerpannelcheck[i] = false;
            answerindex++;
        }
    }
}


function createanswervalue(){
    answer[0] = Math.floor(Math.random()*10);
    answer[1] = Math.floor(Math.random()*10);
    if(addmode == true){
        if(answer[0] == answer[1] || answer[0] == answerlevel1[rand] || answer[1] == answerlevel1[rand]){
            createanswervalue();
        
        }
    }
    if(minusmode == true){
        if(answer[0] == answer[1] || answer[0] == questionlevel1[rand][0] || answer[1] == questionlevel1[rand][0]){
            createanswervalue();
        
        }
    }

}