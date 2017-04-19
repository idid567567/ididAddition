
var tween_continue_text;
function start_tutorial(){
 
    tween_continue_text = game.add.tween(continue_text).to({alpha:0},500,'Linear',true);
    tween_continue_text.onComplete.add(completed_continue_text, this);
    click_to_continue.inputEnabled = false;
    show_up_continue_text = false;
}
function completed_continue_text(){
    alertFX.play();
    game.add.tween(mark_tutorial.scale).to({x:2.2,y:2.2},200,Phaser.Easing.Elastic.Out,true); 
    finger_pointer.alpha = 1;
    game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true); 
}

function startfishing_tutorial(){
    finger_pointer.alpha = 0;
    mark_tutorial.scale.setTo(0,0);
    mark_tutorial.inputEnabled = false;
    scorebarBG.alpha = 1;       
    scorebar.alpha = 1;
    tutorial_q1();

} 

var changepagearrow1_tween;

function tutorial_q1(){
    
    question_green_pannel.animations.play("question_green_pannel_dyn",15,true);
    question_blue_pannel1.animations.play("question_blue_pannel_dyn1",15,true);
    question_blue_pannel2.animations.play("question_blue_pannel_dyn2",15,true);
    question_green_pannel.alpha = 1;
    question_blue_pannel1.alpha = 1;
    question_blue_pannel2.alpha = 1;
    bonds.alpha = 1;
    show_question_text(-1,0);
    show_question_text(4,1);
    show_question_text(2,2);  
    for(var i = 0;i<=2;i++){
        answerpannel_tutorial[i].alpha = 0.9; 
    }

    show_number(3,0);
    show_number(4,1);
    show_number(6,2);
         
    changepagearrow1_tween = game.add.tween(changepagearrow1).to({alpha:1},500,'Linear',true);
    changepagearrow1_tween.onComplete.add(completed_changepagearrow1, this);
    game.add.tween(add_mode_text1).to({alpha:1},500,'Linear',true);
    
}
function completed_changepagearrow1(){
    changepagearrow1.events.onInputDown.add(tutorial_q1_2);
    changepagearrow1.inputEnabled = true; 
    show_up_changepagearrow1 = true;
    finger_pointer2.alpha = 1;
    game.add.tween(finger_pointer2).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);
}


function tutorial_q1_2(){
    show_up_changepagearrow1  = false;
    finger_pointer2.alpha = 0;
    changepagearrow1_tween = game.add.tween(changepagearrow1).to({alpha:0},500,'Linear',true);
    game.add.tween(add_mode_text1).to({alpha:0},1000,'Linear',true);
    add_mode_text2_tween = game.add.tween(add_mode_text2).to({alpha:1},500,'Linear',true,500);
    add_mode_text2_tween.onComplete.add(completed_add_mode_text2, this);
}

function completed_add_mode_text2(){
    finger_pointer3.alpha = 1;
    game.add.tween(finger_pointer3).to({y:'+20'},500,'Linear',true,0,false,false).loop(true); 
    answerpannel_tutorial[2].events.onInputDown.add(correct_answer_tutorial);
    answerpannel_tutorial[2].inputEnabled = true;
}

var changepagearrow2_tween;

function correct_answer_tutorial(){
    
    finger_pointer3.alpha = 0;
    add_mode_text2.alpha = 0;
    answerpannel_tutorial[2].inputEnabled = false;
    game.add.tween(scorebar).to({y:'-100'},500,'Linear',true); 
    game.add.tween(scorebarred).to({y:'-100'},500,'Linear',true);
    correct_fx.alpha = correctFX;
    anwser_pannel_light[2].alpha = correctFX;
    green_FX_sheet.animations.play("green_FX",25,false);
    green_FX_sheet.alpha = 1;
    rightFX.play();
    correct_text1.alpha = 1;
    changepagearrow2_tween = game.add.tween(changepagearrow2).to({alpha:1},500,'Linear',true);
    changepagearrow2_tween.onComplete.add(completed_changepagearrow2, this);
}
function completed_changepagearrow2(){
    changepagearrow2.events.onInputDown.add(tutorial_q2);
    changepagearrow2.inputEnabled = true; 
    show_up_changepagearrow2 = true;
    finger_pointer4.alpha = 1;
    game.add.tween(finger_pointer4).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);
}

var changepagearrow3_tween;

function tutorial_q2(){
    show_up_changepagearrow2 = false;
    changepagearrow2.inputEnabled = false;
    changepagearrow2.alpha = 0;
    correct_text1.alpha = 0;
    finger_pointer4.alpha = 0;
    show_question_text(9,0);
    show_question_text(-1,1);
    show_question_text(2,2);  

    answerpannel_tutorial[0].inputEnabled = true;  

    show_number(7,0);
    show_number(5,1);
    show_number(2,2);

 
    changepagearrow3_tween = game.add.tween(changepagearrow3).to({alpha:1},500,'Linear',true);
    changepagearrow3_tween.onComplete.add(completed_changepagearrow3, this);
    game.add.tween(minus_mode_text1).to({alpha:1},1000,'Linear',true);

}
function completed_changepagearrow3(){
    
    changepagearrow3.events.onInputDown.add(tutorial_q2_1);
    changepagearrow3.inputEnabled = true; 
    show_up_changepagearrow3 = true;
    finger_pointer4.alpha = 1;
    game.add.tween(finger_pointer4).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);
}

var minus_mode_text2_tween;

function tutorial_q2_1(){
    changepagearrow3.alpha = 0;
    changepagearrow3.inputEnabled = false;
    show_up_changepagearrow3 = false;
    finger_pointer4.alpha = 0;
    game.add.tween(minus_mode_text1).to({alpha:0},500,'Linear',true);
    minus_mode_text2_tween = game.add.tween(minus_mode_text2).to({alpha:1},500,'Linear',true,500);
    minus_mode_text2_tween.onComplete.add(completed_minus_mode_text2, this);
}

function completed_minus_mode_text2(){
    answerpannel_tutorial[0].events.onInputDown.add(correct_answer_tutorial2);
    answerpannel_tutorial[0].inputEnabled = true;
    finger_pointer5.alpha = 1;
    game.add.tween(finger_pointer5).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);
}

var start_game_text_tween;

function correct_answer_tutorial2(){
    
    finger_pointer5.alpha = 0;
    minus_mode_text2.alpha = 0;
    answerpannel_tutorial[0].inputEnabled = false;
    game.add.tween(scorebar).to({y:'-100'},500,'Linear',true); 
    game.add.tween(scorebarred).to({y:'-100'},500,'Linear',true);
    correct_fx.alpha = correctFX;
    anwser_pannel_light[0].alpha = correctFX;
    green_FX_sheet.animations.play("green_FX",25,false);
    green_FX_sheet.alpha = 1;
    rightFX.play();
    correct_text1.alpha = 1;
    start_game_text_tween = game.add.tween(start_game_text).to({alpha:1},500,'Linear',true,500);
    start_game_text_tween.onComplete.add(completed_start_game_text, this);
}

function completed_start_game_text(){
    finger_pointer2.alpha = 1;
    show_up_start_game_text  = true;
    start_game_text.events.onInputDown.add(finish_tutorial);
    start_game_text.inputEnabled = true;    
}

function finish_tutorial(){
    show_up_start_game_text  = false;
    start_game_text.inputEnabled = false;
    start_game_text.alpha = 0;
    for(var n = 0;n<=10;n++){
        answer_number0[n].alpha = 0;
        answer_number1[n].alpha = 0;
        answer_number2[n].alpha = 0;
        question_text0[n].alpha = 0;
        question_text1[n].alpha = 0;
        question_text2[n].alpha = 0;
        question_mark0.alpha = 0;
        question_mark1.alpha = 0;
    }
    scorebarBG.alpha = 0;       
    scorebar.alpha = 0;
    for(var i = 0;i<=2;i++){
        answerpannel_tutorial[i].alpha = 0; 
    }
    finger_pointer2.alpha = 0;
    correct_text1.alpha = 0;
    bonds.alpha = 0;
    question_green_pannel.alpha = 0;
    question_blue_pannel1.alpha = 0;
    question_blue_pannel2.alpha = 0;
    
    blue_FX_sheet.alpha = 0;
    green_FX_sheet.alpha = 0;
    first_try = false;
}