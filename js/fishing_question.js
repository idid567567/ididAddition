var answerpannelcheck = new Array();
var style = { font: "100px Arial", fill: "#ffffff", align: "center" };
var style_answer = { font: "80px Arial", fill: "#001010", align: "center" };
var correctFX = 0.7,wrongFX = 0.7;

var answer_number0 = new Array();
var answer_number1 = new Array();
var answer_number2 = new Array();

var question_text0 = new Array();
var question_text1 = new Array();
var question_text2 = new Array();

var answer = new Array();

var questionpositionX = 1050,
    questionpositionY = 300;


var question_mark0,question_mark1;

function checkanswer_fishing0(){
    
    if(answerpannelcheck[0] == true && minusmode == true){

        energy_transfer();
        anwser_pannel_light[0].alpha = correctFX;

        update_question();
        answercount++;

    }else if(answerpannelcheck[0] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        red_FX_sheet1.animations.play("red_FX1",25,false);
        red_FX_sheet1.alpha = 1;
        red_FX_sheet2.animations.play("red_FX2",25,false);
        red_FX_sheet2.alpha = 1;
        red_FX_sheet3.animations.play("red_FX3",25,false);
        red_FX_sheet3.alpha = 1;
        anwser_pannel_redlight[0].alpha = wrongFX;
        update_question();
        
    }else if(answerpannelcheck[0] == true && addmode == true){

        energy_transfer();
      
        anwser_pannel_light[0].alpha = correctFX;
 
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[0] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        red_FX_sheet1.animations.play("red_FX1",25,false);
        red_FX_sheet1.alpha = 1;
        red_FX_sheet2.animations.play("red_FX2",25,false);
        red_FX_sheet2.alpha = 1;
        red_FX_sheet3.animations.play("red_FX3",25,false);
        red_FX_sheet3.alpha = 1;
        wrongFX.play();
        anwser_pannel_redlight[0].alpha = wrongFX;
        update_question();
    }
}

function checkanswer_fishing1(){
    if(answerpannelcheck[1] == true && minusmode == true){

        energy_transfer();
        anwser_pannel_light[1].alpha = correctFX;

        update_question();
        answercount++;

    }else if(answerpannelcheck[1] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        red_FX_sheet1.animations.play("red_FX1",25,false);
        red_FX_sheet1.alpha = 1;
        red_FX_sheet2.animations.play("red_FX2",25,false);
        red_FX_sheet2.alpha = 1;
        red_FX_sheet3.animations.play("red_FX3",25,false);
        red_FX_sheet3.alpha = 1;
        anwser_pannel_redlight[1].alpha = wrongFX;
        update_question();
        
    }else if(answerpannelcheck[1] == true && addmode == true){

        energy_transfer();
        anwser_pannel_light[1].alpha = correctFX; 

        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[1] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        red_FX_sheet1.animations.play("red_FX1",25,false);
        red_FX_sheet1.alpha = 1;
        red_FX_sheet2.animations.play("red_FX2",25,false);
        red_FX_sheet2.alpha = 1;
        red_FX_sheet3.animations.play("red_FX3",25,false);
        red_FX_sheet3.alpha = 1;
        anwser_pannel_redlight[1].alpha = wrongFX;
        update_question();
    }
}

function checkanswer_fishing2(){
    if(answerpannelcheck[2] == true && minusmode == true){
 
        energy_transfer();
        //correct_fx.alpha = correctFX;
        anwser_pannel_light[2].alpha = correctFX; 
        //blue_FX_sheet.animations.play("blue_FX",25,false);
        //blue_FX_sheet.alpha = 1;
        //rightFX.play();
        update_question();
        answercount++;

    }else if(answerpannelcheck[2] == false && minusmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        red_FX_sheet1.animations.play("red_FX1",25,false);
        red_FX_sheet1.alpha = 1;
        red_FX_sheet2.animations.play("red_FX2",25,false);
        red_FX_sheet2.alpha = 1;
        red_FX_sheet3.animations.play("red_FX3",25,false);
        red_FX_sheet3.alpha = 1;
        anwser_pannel_redlight[2].alpha = wrongFX;
        update_question();
        
    }else if(answerpannelcheck[2] == true && addmode == true){
 
        energy_transfer();
        anwser_pannel_light[2].alpha = correctFX;
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[2] == false && addmode == true){
        game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true); 
        scorebarred.alpha = 1;
        wrong_fx.alpha = wrongFX;
        wrongFX.play();
        red_FX_sheet1.animations.play("red_FX1",25,false);
        red_FX_sheet1.alpha = 1;
        red_FX_sheet2.animations.play("red_FX2",25,false);
        red_FX_sheet2.alpha = 1;
        red_FX_sheet3.animations.play("red_FX3",25,false);
        red_FX_sheet3.alpha = 1;
        anwser_pannel_redlight[2].alpha = wrongFX;
        update_question();
    }
}


var question_circle1,question_circle2,question_circle3,bonds;

function create_question(){
        
    question_green_pannel.animations.play("question_green_pannel_dyn",15,true);
    question_blue_pannel1.animations.play("question_blue_pannel_dyn1",15,true);
    question_blue_pannel2.animations.play("question_blue_pannel_dyn2",15,true);
    question_green_pannel.alpha = 1;
    question_blue_pannel1.alpha = 1;
    question_blue_pannel2.alpha = 1;
    bonds.alpha = 1;
    if( addmode == true ){

        show_question_text(-1,0);
        show_question_text(questionlevel1[rand][0],1);
        show_question_text(questionlevel1[rand][1],2);
        /*
        addmode = true;
        minusmode = false;
        */
            
    }
    if( minusmode == true ){

        show_question_text(answerlevel1[rand],0);
        show_question_text(-1,1);
        show_question_text(questionlevel1[rand][1],2);
        /*
        addmode = false;
        minusmode = true;
        */
    }

}

function update_question(){

    rand = Math.floor(Math.random()*questionrandseed);
    if( addmode == true ){

        show_question_text(-1,0);
        show_question_text(questionlevel1[rand][0],1);
        show_question_text(questionlevel1[rand][1],2);
        /*
        addmode = true;
        minusmode = false;
        */
    }
    if( minusmode == true ){

        show_question_text(answerlevel1[rand],0);
        show_question_text(-1,1);
        show_question_text(questionlevel1[rand][1],2);
        /*
        addmode = false;
        minusmode = true;
        */
    }
    update_answerstring();
}





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
                show_number(answerlevel1[rand],i);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                show_number(questionlevel1[rand][0],i);
                answerpannelcheck[i] = true;
            }
        }else{
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
                show_number(answerlevel1[rand],i);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                show_number(questionlevel1[rand][0],i);
                answerpannelcheck[i] = true;
            }
        }else{
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
 
}

function show_question_text(num,i){
    var index = num;
    
    if(num == -1 && i == 0){
        question_mark0.alpha = 0.8;
        question_mark1.alpha = 0;
        for(var n = 0;n<=10;n++){
            question_text0[n].alpha = 0;
        }
    }
    if(num == -1 && i == 1){
        question_mark0.alpha = 0;
        question_mark1.alpha = 0.8;
        for(var n = 0;n<=10;n++){
            question_text1[n].alpha = 0;
        }
    }
    
    for(var n = 0;n<=10;n++){
        if(n == index && i == 0){
            question_text0[n].alpha = 0.8;
        }else if(n != index && i == 0){
            question_text0[n].alpha = 0;
        }else if(n == index && i == 1){
            question_text1[n].alpha = 0.8;
        }else if(n != index && i == 1){
            question_text1[n].alpha = 0;
        }else if(n == index && i == 2){
            question_text2[n].alpha = 0.8;
        }else if(n != index && i == 2){
            question_text2[n].alpha = 0;
        }
    }
 
}