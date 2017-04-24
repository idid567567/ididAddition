var rand_fish;
function fish_sheet(){
    
    rand_fish= Math.floor(Math.random()*8);

    console.log(rand_fish);
    if( rand_fish == 0 ){
        foxgetfishingsheet.animations.play("foxgetfishingsheet",8,false);
        foxgetfishingsheet.alpha = 1;

        foxgetfishingsheet_animation.onComplete.add(function () {	
            fishsheet.alpha = 1;
            fishsheet.animations.play("fishsheet_dynamic",15,true);
            foxgetfishingsheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
    }else if( rand_fish == 1 ){

        foxgetfishing_purple_sheet.animations.play("foxgetfishing_purple_sheet",8,false);
        foxgetfishing_purple_sheet.alpha = 1;

        foxgetfishing_purple_sheet_animation.onComplete.add(function () {	
            fish_sheet_purple.alpha = 1;
            fish_sheet_purple.animations.play("fish_sheet_purple_dynamic",15,true);
            foxgetfishing_purple_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }else if( rand_fish == 2 ){

        foxgetfishing_yellow_sheet.animations.play("foxgetfishing_yellow_sheet",8,false);
        foxgetfishing_yellow_sheet.alpha = 1;

        foxgetfishing_yellow_sheet_animation.onComplete.add(function () {	
            fish_sheet_yellow.alpha = 1;
            fish_sheet_yellow.animations.play("fish_sheet_yellow_dynamic",15,true);
            foxgetfishing_yellow_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }else if( rand_fish == 3 ){

        foxgetfishing_green_sheet.animations.play("foxgetfishing_green_sheet",8,false);
        foxgetfishing_green_sheet.alpha = 1;

        foxgetfishing_green_sheet_animation.onComplete.add(function () {	
            fish_sheet_green.alpha = 1;
            fish_sheet_green.animations.play("fish_sheet_green_dynamic",15,true);
            foxgetfishing_green_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }else if( rand_fish == 4 ){

        foxgetfishing_light_blue_sheet.animations.play("foxgetfishing_light_blue_sheet",8,false);
        foxgetfishing_light_blue_sheet.alpha = 1;

        foxgetfishing_light_blue_sheet_animation.onComplete.add(function () {	
            fish_sheet_light_blue.alpha = 1;
            fish_sheet_light_blue.animations.play("fish_sheet_light_blue_dynamic",15,true);
            foxgetfishing_light_blue_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }else if( rand_fish == 5 ){

        foxgetfishing_grey_sheet.animations.play("foxgetfishing_grey_sheet",8,false);
        foxgetfishing_grey_sheet.alpha = 1;

        foxgetfishing_grey_sheet_animation.onComplete.add(function () {	
            fish_sheet_grey.alpha = 1;
            fish_sheet_grey.animations.play("fish_sheet_grey_dynamic",15,true);
            foxgetfishing_grey_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }else if( rand_fish == 6 ){

        foxgetfishing_dark_blue_sheet.animations.play("foxgetfishing_dark_blue_sheet",8,false);
        foxgetfishing_dark_blue_sheet.alpha = 1;

        foxgetfishing_dark_blue_sheet_animation.onComplete.add(function () {	
            fish_sheet_dark_blue.alpha = 1;
            fish_sheet_dark_blue.animations.play("fish_sheet_dark_blue_dynamic",15,true);
            foxgetfishing_dark_blue_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }else if( rand_fish == 7 ){

        foxgetfishing_red_sheet.animations.play("foxgetfishing_red_sheet",8,false);
        foxgetfishing_red_sheet.alpha = 1;

        foxgetfishing_red_sheet_animation.onComplete.add(function () {	
            fish_sheet_red.alpha = 1;
            fish_sheet_red.animations.play("fish_sheet_red_dynamic",15,true);
            foxgetfishing_red_sheet.alpha = 0;
            fox_getfishsheet_lastframe.alpha = 1;
        }, this);        
        
    }

}
function clean_fish_dynamic(){
    game.add.tween(fishbox_purple.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_orange.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_yellow.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_green.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_light_blue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_grey.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_dark_blue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_red.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    
    game.add.tween(fishbox_sheet_highlight.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);  
    fishbox_sheet_highlight_animation.stop();
    
    fishsheet_animation.stop();
    fishsheet.alpha = 0;
    fish_sheet_purple_animation.stop();
    fish_sheet_purple.alpha = 0;
    fish_sheet_yellow_animation.stop();
    fish_sheet_yellow.alpha = 0;
    fish_sheet_green_animation.stop();
    fish_sheet_green.alpha = 0;
    fish_sheet_light_blue_animation.stop();
    fish_sheet_light_blue.alpha = 0;
    fish_sheet_grey_animation.stop();
    fish_sheet_grey.alpha = 0;
    fish_sheet_dark_blue_animation.stop();
    fish_sheet_dark_blue.alpha = 0;
    fish_sheet_red_animation.stop();
    fish_sheet_red.alpha = 0;    
    fox_getfishsheet_lastframe.alpha = 0;    
}
function fish_box_dynamic(){
     
    game.add.tween(fishbox_sheet_highlight.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    fishbox_sheet_highlight.animations.play("fishbox_sheet_highlight",15,true);
    if( rand_fish == 0 ){
        game.add.tween(fishbox_orange.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 1 ){
        game.add.tween(fishbox_purple.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 2 ){
        game.add.tween(fishbox_yellow.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 3 ){
        game.add.tween(fishbox_green.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 4 ){
        game.add.tween(fishbox_light_blue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 5 ){
        game.add.tween(fishbox_grey.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 6 ){
        game.add.tween(fishbox_dark_blue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 7 ){
        game.add.tween(fishbox_red.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }
   
}