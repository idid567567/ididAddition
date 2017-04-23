var correctFX = 0.7;

//correct fx for tutorial-----------------------------------------------------------------------------------------------------

var energy_transfer_sheet1_tween;

function energy_transfer1_tutorial(){
    
    energy_transfer_sheet1.alpha = 1;
    energy_transfer_sheet1.animations.play("energy_transfer_sheet1_dynamic",10,true);
    energy_transfer_sheet1_tween = game.add.tween(energy_transfer_sheet1).to({x:scorebarX+10,y:scorebarY},800,'Quad.easeIn',true); 
    energy_transfer_sheet1_tween.onComplete.add(completed_energy_transfer_sheet1_tutorial, this);


}
function completed_energy_transfer_sheet1_tutorial(){
    energy_transfer_sheet1.alpha = 0;
    game.add.tween(scorebar).to({y:'-100'},500,'Linear',true); 
    game.add.tween(scorebarred).to({y:'-100'},500,'Linear',true);
    correct_fx.alpha = correctFX;
    game.add.tween(correct_fx).to({alpha:0},200,'Quad.easeOut',true);
    scorebar_right_fx_sheet.animations.play("scorebar_right_fx_dynamic",15,false);
    scorebar_right_fx_sheet.alpha = 1;    
    add_energyFX.play();
    tutorial_q2();
}
var energy_transfer_sheet2_tween;

function energy_transfer2_tutorial(){
    
    energy_transfer_sheet2.alpha = 1;
    energy_transfer_sheet2.animations.play("energy_transfer_sheet2_dynamic",10,true);
    energy_transfer_sheet2_tween = game.add.tween(energy_transfer_sheet2).to({x:scorebarX+10,y:scorebar.y},800,'Quad.easeIn',true); 
    energy_transfer_sheet2_tween.onComplete.add(completed_energy_transfer_sheet2_tutorial, this);

}

var start_game_text_tween;

function completed_energy_transfer_sheet2_tutorial(){
    energy_transfer_sheet2.alpha = 0;
    game.add.tween(scorebar).to({y:'-100'},500,'Linear',true); 
    game.add.tween(scorebarred).to({y:'-100'},500,'Linear',true);
    correct_fx.alpha = correctFX;
    game.add.tween(correct_fx).to({alpha:0},200,'Quad.easeOut',true);
    scorebar_right_fx_sheet.animations.play("scorebar_right_fx_dynamic",15,false);
    scorebar_right_fx_sheet.alpha = 1;
    add_energyFX.play();
    start_game_text_tween = game.add.tween(start_game_text).to({alpha:1},500,'Linear',true,500);
    start_game_text_tween.onComplete.add(completed_start_game_text, this);
    
}

//correct fx-----------------------------------------------------------------------------------------------------------------

var energy_transfer_sheet_tween;

function energy_transfer(i){
    
    if(minusmode == true){            
        energy_transfer_sheet.x = questionpositionX+150;
        energy_transfer_sheet.y = questionpositionY;
        blue_FX_sheet.animations.play("blue_FX",20,false);
        blue_FX_sheet.alpha = 1;
    }else if(addmode == true){
        energy_transfer_sheet.x = questionpositionX;
        energy_transfer_sheet.y = questionpositionY-150;        
        green_FX_sheet.animations.play("green_FX",20,false);
        green_FX_sheet.alpha = 1;    
    }
    rightFX.play();
    anwser_pannel_light[i].alpha = correctFX;
    game.add.tween(anwser_pannel_light[i]).to({alpha:0},500,'Quad.easeOut',true);
    energy_transfer_sheet.alpha = 1;
    energy_transfer_sheet.animations.play("energy_transfer_sheet_dynamic",10,true);
    energy_transfer_sheet_tween = game.add.tween(energy_transfer_sheet).to({x:scorebarX+10,y:scorebar.y},200,'Quad.easeIn',true); 
    energy_transfer_sheet_tween.onComplete.add(completed_energy_transfer_sheet, this);

}

function completed_energy_transfer_sheet(){
    energy_transfer_sheet.alpha = 0;
    game.add.tween(scorebar).to({y:'-100'},200,'Linear',true); 
    game.add.tween(scorebarred).to({y:'-100'},200,'Linear',true);
    correct_fx.alpha = correctFX;
    game.add.tween(correct_fx).to({alpha:0},200,'Quad.easeOut',true);
    scorebar_right_fx_sheet.animations.play("scorebar_right_fx_dynamic",20,false);
    scorebar_right_fx_sheet.alpha= 1;
    add_energyFX.play();
}

//wrong fx-----------------------------------------------------------------------------------------------------------------

function scorebar_wrong_fx(i){
    game.add.tween(scorebar).to({y:'+50'},50,'Linear',true); 
    game.add.tween(scorebarred).to({y:'+50'},50,'Linear',true);
    scorebarred.alpha = 0.6;
    wrongFX.play();
    red_FX_sheet1.animations.play("red_FX1",25,false);
    red_FX_sheet1.alpha = 1;
    red_FX_sheet2.animations.play("red_FX2",25,false);
    red_FX_sheet2.alpha = 1;
    red_FX_sheet3.animations.play("red_FX3",25,false);
    red_FX_sheet3.alpha = 1;            
    scorebar_wrong_fx_sheet.animations.play("scorebar_wrong_fx_dynamic",20,false);
    scorebar_wrong_fx_sheet.alpha= 1;
    anwser_pannel_redlight[i].alpha = wrongFX;
}