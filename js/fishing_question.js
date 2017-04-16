var answerpannelcheck = new Array();
var style = { font: "100px Arial", fill: "#ffffff", align: "center" };
var style_answer = { font: "80px Arial", fill: "#001010", align: "center" };
var correctFX = 0.7,wrongFX = 0.7;

var answer_number0 = new Array();
var answer_number1 = new Array();
var answer_number2 = new Array();

function checkanswer_fishing0(){
    if(answerpannelcheck[0] == true && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},50,'Linear',true); 
        correct_fx.alpha = correctFX;
        anwser_pannel_light[0].alpha = correctFX;
        rightFX.play();
        update_question();
        answercount++;

    }else if(answerpannelcheck[0] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        anwser_pannel_redlight[0].alpha = wrongFX;
        update_question();
        
    }else if(answerpannelcheck[0] == true && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},50,'Linear',true); 
        correct_fx.alpha = correctFX;
        anwser_pannel_light[0].alpha = correctFX;
        rightFX.play();
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[0] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        anwser_pannel_redlight[0].alpha = wrongFX;
        update_question();
    }
}

function checkanswer_fishing1(){
    if(answerpannelcheck[1] == true && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},50,'Linear',true);
        correct_fx.alpha = correctFX;
        anwser_pannel_light[1].alpha = correctFX;
        rightFX.play();
        update_question();
        answercount++;

    }else if(answerpannelcheck[1] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        anwser_pannel_redlight[1].alpha = wrongFX;
        update_question();
        
    }else if(answerpannelcheck[1] == true && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},50,'Linear',true); 
        correct_fx.alpha = correctFX;
        anwser_pannel_light[1].alpha = correctFX; 
        rightFX.play();
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[1] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        anwser_pannel_redlight[1].alpha = wrongFX;
        update_question();
    }
}

function checkanswer_fishing2(){
    if(answerpannelcheck[2] == true && minusmode == true){
        game.add.tween(scorebar).to({y:'-100'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},50,'Linear',true); 
        correct_fx.alpha = correctFX;
        anwser_pannel_light[2].alpha = correctFX; 
        rightFX.play();
        update_question();
        answercount++;

    }else if(answerpannelcheck[2] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        anwser_pannel_redlight[2].alpha = wrongFX;
        update_question();
        
    }else if(answerpannelcheck[2] == true && addmode == true){
        game.add.tween(scorebar).to({y:'-100'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'-100'},50,'Linear',true); 
        correct_fx.alpha = correctFX;
        anwser_pannel_light[2].alpha = correctFX;
        rightFX.play();
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[2] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        anwser_pannel_redlight[2].alpha = wrongFX;
        update_question();
    }
}

var question_circle1,question_circle2,question_circle3,bonds;

function create_question(){
        
    var questionpositionX = 1000,
        questionpositionY = 300,
        numberpositionX = 970,
        numberpositionY = 250;
    
    bonds = game.add.sprite(questionpositionX,questionpositionY,"bonds");
    bonds.anchor.setTo(0.5,1);
    
    question_circle1 = game.add.sprite(questionpositionX,questionpositionY-150,"question_pannel1");
    question_circle1.anchor.setTo(0.5,0.5);
    

    question_circle2 = game.add.sprite(questionpositionX+150,questionpositionY,"question_pannel2");
    question_circle2.anchor.setTo(0.5,0.5);

    
    question_circle3 = game.add.sprite(questionpositionX-150,questionpositionY,"question_pannel2");
    question_circle3.anchor.setTo(0.5,0.5);


    
    if( rand%2 == 0 ){
        questionstring1 = game.add.text(numberpositionX+150,numberpositionY,questionlevel1[rand][0],style);
        questionstring2 = game.add.text(numberpositionX-150,numberpositionY,questionlevel1[rand][1],style);
        questionstring3 = game.add.text(numberpositionX,numberpositionY-150,'?',style);
        addmode = true;
        minusmode = false;
            
    }
    if( rand%2 == 1 ){
        questionstring1 = game.add.text(numberpositionX+150,numberpositionY,'?',style);
        questionstring2 = game.add.text(numberpositionX-150,numberpositionY,questionlevel1[rand][1],style);
        questionstring3 = game.add.text(numberpositionX,numberpositionY-150,answerlevel1[rand],style);
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

            answerpannel[i].alpha = 0.9; 
            answerpannel[i].inputEnabled = true;  
    }
    answerpannel[0].events.onInputDown.add(checkanswer_fishing0);
    answerpannel[1].events.onInputDown.add(checkanswer_fishing1);
    answerpannel[2].events.onInputDown.add(checkanswer_fishing2);
    create_answerstring();
}

var answernumberX = 775,
    answernumberY = 460;

function create_answerstring(){

    var answerindex = 0;
    createanswervalue();
   
    for(var i = 0;i<=2;i++){
        if( rand%3 == i ){
            if(addmode == true){
                //answerpannelstring[i] = game.add.text(answernumberX+200*i,answernumberY,answerlevel1[rand],style_answer);
                show_number(answerlevel1[rand],i);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                //answerpannelstring[i] = game.add.text(answernumberX+200*i,answernumberY,questionlevel1[rand][0],style_answer);
                show_number(questionlevel1[rand][0],i);
                answerpannelcheck[i] = true;
            }
        }else{
            //answerpannelstring[i] = game.add.text(answernumberX+200*i,answernumberY,answer[answerindex],style_answer);
            show_number(answer[answerindex],i);
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
                //answerpannelstring[i].setText(answerlevel1[rand]);
                show_number(answerlevel1[rand],i);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                //answerpannelstring[i].setText(questionlevel1[rand][0]);
                show_number(questionlevel1[rand][0],i);
                answerpannelcheck[i] = true;
            }
        }else{
            //answerpannelstring[i].setText(answer[answerindex]);
            show_number(answer[answerindex],i);
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



function show_number(num,i){
    var index = num;
    
    for(var n = 0;n<=10;n++){
        if(n == index && i == 0){
            answer_number0[n].alpha = 1;
        }else if(n != index && i == 0){
            answer_number0[n].alpha = 0;
        }else if(n == index && i == 1){
            answer_number1[n].alpha = 1;
        }else if(n != index && i == 1){
            answer_number1[n].alpha = 0;
        }else if(n == index && i == 2){
            answer_number2[n].alpha = 1;
        }else if(n != index && i == 2){
            answer_number2[n].alpha = 0;
        }
    }
    /*
    if( num == 0 && i == 0 ){
        answer_number0[0].alpha = 1;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }            
    if( num == 1 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 1;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }else if( num == 2 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 1; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;
    }
    if( num == 3 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 1;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;
    }
    if( num == 4 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 1;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }
    if( num == 5 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 1;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }
    if( num == 6 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 1;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }
    if( num == 7 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 1;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }
    if( num == 8 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 1;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 0;

    }
    if( num == 9 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 1;
        answer_number0[10].alpha = 0;

    }
    if( num == 10 && i == 0 ){
        answer_number0[0].alpha = 0;
        answer_number0[1].alpha = 0;
        answer_number0[2].alpha = 0; 
        answer_number0[3].alpha = 0;
        answer_number0[4].alpha = 0;
        answer_number0[5].alpha = 0;
        answer_number0[6].alpha = 0;
        answer_number0[7].alpha = 0;
        answer_number0[8].alpha = 0;
        answer_number0[9].alpha = 0;
        answer_number0[10].alpha = 1;

    }
   
//------------------------------
    if( num == 0 && i == 1 ){
        answer_number1[0].alpha = 1;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;

    }                
    if( num == 1 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 1;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;

    }else if( num == 2 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 1; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 3 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 1;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 4 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 1;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 5 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 1;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 6 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 1;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 7 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 1;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 8 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 1;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 0;
    }
    if( num == 9 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 1;
        answer_number1[10].alpha = 0;
    }
    if( num == 10 && i == 1 ){
        answer_number1[0].alpha = 0;
        answer_number1[1].alpha = 0;
        answer_number1[2].alpha = 0; 
        answer_number1[3].alpha = 0;
        answer_number1[4].alpha = 0;
        answer_number1[5].alpha = 0;
        answer_number1[6].alpha = 0;
        answer_number1[7].alpha = 0;
        answer_number1[8].alpha = 0;
        answer_number1[9].alpha = 0;
        answer_number1[10].alpha = 1;
    }
//----------------------------------
    if( num == 0 && i == 2 ){
        answer_number2[0].alpha = 1;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;

    }                
    if( num == 1 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 1;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;

    }else if( num == 2 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 1; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 3 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 1;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 4 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 1;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 5 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 1;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 6 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 1;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 7 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 1;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 8 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 1;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 0;
    }
    if( num == 9 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 1;
        answer_number2[10].alpha = 0;
    }
    if( num == 10 && i == 2 ){
        answer_number2[0].alpha = 0;
        answer_number2[1].alpha = 0;
        answer_number2[2].alpha = 0; 
        answer_number2[3].alpha = 0;
        answer_number2[4].alpha = 0;
        answer_number2[5].alpha = 0;
        answer_number2[6].alpha = 0;
        answer_number2[7].alpha = 0;
        answer_number2[8].alpha = 0;
        answer_number2[9].alpha = 0;
        answer_number2[10].alpha = 1;
    }
     */
   
}