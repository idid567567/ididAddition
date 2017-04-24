var index = new Array();
var questionindex = new Array(); 
var answercount;

var blackBG_open_fishing,blackBG_close_fishing;

var scorebar,scorebarX,scorebarY,scorebarcompleted,mask;


var foxtail_time,t2;

var foxpulling,shadow,fishingrodpullingsheet;

var playing_status,complete_status;
var waitingclick;


var anwser_pannel_light = new Array();
var anwser_pannel_redlight = new Array();

var answerpannel_tutorial= new Array();



var game_fishing_music,rightFX,wrongFX,successFX,alertFX,startFX,failureFX,fishingBG,birdFX;

var buttonpositionY;

var first_try;

var show_up_time,waiting_time;

var tween_continue_text,
    foxbody_tween,foxtail_tween,
    fishingrod_tween,
    scorebar_full_tween;

var foxtail_animation,
    question_green_pannel_animation,
    question_blue_pannel1_animation,
    question_blue_pannel2_animation,
    fishsheet_animation,
    foxgetfishingsheet_animation,
    foxgetfishing_purple_sheet_animation,
    fish_sheet_purple_animation;

demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {
        game.load.image('blackBG','assets/fishingpage/blackBG.jpg');
        game.load.image('blackBG2','assets/fishingpage/blackBG2.jpg');
        
        game.load.image('button','assets/button/redbutton.png');
        //scorebar
        game.load.image('scorebar','assets/gameplay/scorebar.png');
        game.load.image('scorebarred','assets/gameplay/scorebarred.png');
        game.load.image('scorebarBG','assets/gameplay/scorebar_BG.png');
        game.load.image('scorebar_design','assets/gameplay/scorebar_design.png');
        game.load.image('scorebar_full','assets/gameplay/scorebar_full.png');
        
        
        game.load.image('BG','assets/fishingpage/BG.png');
        game.load.image('greenatmosphere','assets/fishingpage/greenatmosphere.png');
        game.load.image('yellowatmosphere','assets/fishingpage/yellowatmosphere.png');
        game.load.image('whiteatmosphere','assets/fishingpage/whiteatmosphere.png');
        game.load.image('sunlight1','assets/fishingpage/sunlight1.png');
        game.load.image('sunlight2','assets/fishingpage/sunlight2.png');
        
        game.load.image('fishingrod','assets/charactor/fishingrod.png');
        game.load.image('mark','assets/charactor/mark.png');
 
        game.load.image('foxbody','assets/charactor/fox_fishingbody.png');
        game.load.image('shadow','assets/charactor/shadow.png');
        game.load.spritesheet('foxtail','assets/charactor/tailsheet2.png',717,677);
        game.load.image('tail','assets/charactor/tail.png');
        
        game.load.spritesheet('foxpulling','assets/charactor/pullingsheet.png',718,678);
        game.load.spritesheet('fishingrodpullingsheet','assets/charactor/fishingrodpullingsheet.png',512,446);
        
        game.load.spritesheet('foxfalling','assets/charactor/fallingsheet2.png',450,328);
        game.load.spritesheet('dropfishingrod','assets/charactor/dropfishingrodsheet.png',512,431);
        
        //fish_sheet
        game.load.spritesheet('foxgetfishingsheet','assets/charactor/foxgetfishingsheet.png',780,651);
        game.load.spritesheet('fishsheet','assets/charactor/fishsheet.png',157,247);
        game.load.spritesheet('foxgetfishing_purple_sheet','assets/charactor/foxgetfishing_purple_sheet.png',780,651);
        game.load.spritesheet('fish_sheet_purple','assets/charactor/fish_sheet_purple.png',157,247);

        game.load.image('fox_getfishsheet_lastframe','assets/charactor/fox_getfishsheet_lastframe.png');
        
        game.load.image('getfishBG','assets/fishingpage/getfishboardBG.png');
        game.load.spritesheet('button_getfish_continue','assets/fishingpage/button_continue_sheet.png',134,82);
        game.load.spritesheet('button_getfish_backhome','assets/fishingpage/button_back_home_sheet.png',134,82);
        
        game.load.image('fishbox_orange','assets/fishingpage/fishbox_orange.png');
        game.load.image('fishbox_purple','assets/fishingpage/fishbox_purple.png');
        game.load.spritesheet('fishbox_sheet_highlight','assets/fishingpage/fishbox_sheet_highlight.png',183,148);
        
        game.load.image('failBG','assets/fishingpage/failboardBG.png');
        
        //question_pannel
        game.load.image('bonds','assets/fishingpage/question/bonds.png');

        game.load.image('anwser_pannel','assets/fishingpage/question/anwser_pannel1.png');
        
        game.load.spritesheet('question_green_pannel','assets/fishingpage/question/question_green_sheet002.png',250,250);
        game.load.spritesheet('question_blue_pannel','assets/fishingpage/question/question_blue_sheet002.png',250,250);
        
        
        //fx
        game.load.image('anwser_pannel_light','assets/fishingpage/question/anwser_pannel_light.png');
        game.load.image('anwser_pannel_redlight','assets/fishingpage/question/anwser_pannel_redlight.png');
        
        game.load.image('correct_fx','assets/fishingpage/whiteBG.png');
        
        game.load.spritesheet('question_pannel_create_fx','assets/fishingpage/question/question_pannel_create_fx.png',250,250);
        
        game.load.spritesheet('blue_FX_sheet','assets/fishingpage/question/blue_FX_sheet.png',250,250);
        game.load.spritesheet('green_FX_sheet','assets/fishingpage/question/green_FX_sheet.png',250,250);
        game.load.spritesheet('red_FX_sheet','assets/fishingpage/question/red_FX_sheet.png',250,250);
        
        game.load.spritesheet('energy_transfer_sheet','assets/fishingpage/question/energy_transfer_sheet.png',250,250);
        game.load.spritesheet('scorebar_wrong_fx_sheet','assets/gameplay/scorebar_wrong_fx_sheet.png',200,728);
        game.load.spritesheet('scorebar_right_fx_sheet','assets/gameplay/scorebar_right_fx_sheet.png',200,728);

        //answer_pannel_number
        game.load.image('0','assets/fishingpage/question/0.png');
        game.load.image('1','assets/fishingpage/question/1.png');
        game.load.image('2','assets/fishingpage/question/2.png');
        game.load.image('3','assets/fishingpage/question/3.png');
        game.load.image('4','assets/fishingpage/question/4.png');
        game.load.image('5','assets/fishingpage/question/5.png');
        game.load.image('6','assets/fishingpage/question/6.png');
        game.load.image('7','assets/fishingpage/question/7.png');
        game.load.image('8','assets/fishingpage/question/8.png');
        game.load.image('9','assets/fishingpage/question/9.png');
        game.load.image('10','assets/fishingpage/question/10.png');
        
        //question_pannel_text
        game.load.image('Q0_blue','assets/fishingpage/question/Q0_blue.png');
        game.load.image('Q1_blue','assets/fishingpage/question/Q1_blue.png');
        game.load.image('Q2_blue','assets/fishingpage/question/Q2_blue.png');
        game.load.image('Q3_blue','assets/fishingpage/question/Q3_blue.png');
        game.load.image('Q4_blue','assets/fishingpage/question/Q4_blue.png');
        game.load.image('Q5_blue','assets/fishingpage/question/Q5_blue.png');
        game.load.image('Q6_blue','assets/fishingpage/question/Q6_blue.png');
        game.load.image('Q7_blue','assets/fishingpage/question/Q7_blue.png');
        game.load.image('Q8_blue','assets/fishingpage/question/Q8_blue.png');
        game.load.image('Q9_blue','assets/fishingpage/question/Q9_blue.png');
        game.load.image('Q10_blue','assets/fishingpage/question/Q10_blue.png');       
        game.load.image('Qmark_blue','assets/fishingpage/question/Qmark_blue.png');          
        
        game.load.image('Q0_green','assets/fishingpage/question/Q0_green.png');
        game.load.image('Q1_green','assets/fishingpage/question/Q1_green.png');
        game.load.image('Q2_green','assets/fishingpage/question/Q2_green.png');
        game.load.image('Q3_green','assets/fishingpage/question/Q3_green.png');
        game.load.image('Q4_green','assets/fishingpage/question/Q4_green.png');
        game.load.image('Q5_green','assets/fishingpage/question/Q5_green.png');
        game.load.image('Q6_green','assets/fishingpage/question/Q6_green.png');
        game.load.image('Q7_green','assets/fishingpage/question/Q7_green.png');
        game.load.image('Q8_green','assets/fishingpage/question/Q8_green.png');
        game.load.image('Q9_green','assets/fishingpage/question/Q9_green.png');
        game.load.image('Q10_green','assets/fishingpage/question/Q10_green.png');       
        game.load.image('Qmark_green','assets/fishingpage/question/Qmark_green.png'); 
        
        game.load.audio('fishing', 'assets/audio/fishing.mp3');
        game.load.audio('rightFX', 'assets/audio/rightFX.mp3');
        game.load.audio('wrongFX', 'assets/audio/wrongFX.mp3');
        game.load.audio('successFX', 'assets/audio/successFX.mp3');
        game.load.audio('failureFX', 'assets/audio/failureFX.mp3');
        game.load.audio('alertFX', 'assets/audio/alertFX.mp3');
        game.load.audio('startFX', 'assets/audio/startFX.mp3');
        game.load.audio('fishingBG', 'assets/audio/fishingBG.mp3');
        game.load.audio('birdFX', 'assets/audio/birdFX.mp3');  
        game.load.audio('clickFX', 'assets/audio/clickFX.mp3');  
        game.load.audio('add_energyFX', 'assets/audio/add_energyFX.mp3');  

        
        
        //tutorial
        game.load.image('continue_text','assets/fishingpage/tutorial/continue_text.png');
        game.load.image('tutorial_text','assets/fishingpage/tutorial/tutorial_text.png');
        game.load.image('finger_pointer','assets/fishingpage/tutorial/finger_pointer.png');
        game.load.image('finger_pointer3','assets/fishingpage/tutorial/finger_pointer.png');
        game.load.spritesheet('tutorial_frame_sheet','assets/fishingpage/tutorial/tutorial_frame_sheet.png',400,300);
        
        //tutorial_text
        game.load.image('add_mode_text1','assets/fishingpage/tutorial/add_mode_text1.png');
        game.load.image('add_mode_text2','assets/fishingpage/tutorial/add_mode_text2.png');
        game.load.image('minus_mode_text1','assets/fishingpage/tutorial/minus_mode_text1.png');
        game.load.image('minus_mode_text2','assets/fishingpage/tutorial/minus_mode_text2.png');
        game.load.image('start_game_text','assets/fishingpage/tutorial/start_game_text.png');
        game.load.image('get_fish_tutorial','assets/fishingpage/tutorial/get_fish_tutorial.png');
        
        game.load.image('correct_text1','assets/fishingpage/tutorial/correct_text.png');

        game.load.image('Qmark_tutorial','assets/fishingpage/tutorial/Qmark_tutorial.png');
        game.load.image('equal_mark_tutorial','assets/fishingpage/tutorial/equal_mark_tutorial.png');
        
        game.load.image('plus_tutorial','assets/fishingpage/tutorial/plus.png');
        game.load.image('minus_tutorial','assets/fishingpage/tutorial/minus.png');
        game.load.image('tutorial_number_2','assets/fishingpage/tutorial/2_tutorial.png');
        game.load.image('tutorial_number_4','assets/fishingpage/tutorial/4_tutorial.png');
        game.load.image('tutorial_number_9','assets/fishingpage/tutorial/9_tutorial.png');
        
        
        

        
        
        
        
    },
    create: function() {
        //define backgroung
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //init parameter
        answercount = 0;
        addChangeStateEvent();
        scorebarX = 1450;
        scorebarY = 500;
        foxtail_time = 200;
        buttonpositionY = 500;
        playing_status = false;
        waitingclick = false;
        complete_status = false;
        first_try = true;




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
        

        //scorebar-----------------------------------------------------
        scorebarBG = game.add.sprite(scorebarX+10,110,'scorebarBG');
        scorebarBG.anchor.setTo(0.5, 0);
        scorebarBG.scale.setTo(1,1);
        scorebarBG.alpha = 1;
        
        scorebar = game.add.sprite(scorebarX+10,scorebarY,'scorebar');
        scorebar.anchor.setTo(0.5, 0);
        scorebar.scale.setTo(2,1);
        scorebar.alpha = 0;
    
        
        scorebar_full = game.add.sprite(scorebarX+10,110,'scorebar_full');
        scorebar_full.anchor.setTo(0.5, 0);
        scorebar_full.scale.setTo(1,1);
        scorebar_full.alpha = 0;     
        
        scorebarred = game.add.sprite(scorebarX+10,scorebarY,'scorebarred');
        scorebarred.anchor.setTo(0.5, 0);
        scorebarred.scale.setTo(2,1);
        scorebarred.alpha = 0;
        
        scorebar_design = game.add.sprite(scorebarX+10,110,'scorebar_design');
        scorebar_design.anchor.setTo(0.5, 0);
        scorebar_design.scale.setTo(1,1);
        scorebar_design.alpha = 1;
   
        
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(scorebarX,200,20,600);
        scorebar.mask = mask;
        scorebarred.mask = mask;
        
        var foxpositionX = 150,
            foxpositionY = 500;
        
        fishingrod = game.add.sprite(foxpositionX+275, foxpositionY+400,'fishingrod');
        fishingrod.anchor.setTo(-0.1,1.2);
        fishingrod_tween = game.add.tween(fishingrod).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   
        
        shadow = game.add.sprite(foxpositionX+50, foxpositionY+290, "shadow");
        shadow.scale.setTo(0.6,0.5);
        
        foxbody = game.add.sprite(foxpositionX+250, foxpositionY+300, "foxbody");
        foxbody.scale.setTo(0.5,0.5);
        foxbody.anchor.setTo(0.7,0.9);
        foxbody_tween = game.add.tween(foxbody).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        
        foxtail = game.add.sprite(foxpositionX+145, foxpositionY+300, "foxtail");
        foxtail_animation = foxtail.animations.add("fishing", [0,1,2,3,4,5,6]);
        foxtail.anchor.setTo(0.4,0.9); 
        foxtail.scale.setTo(0.5,0.5);
        foxtail_tween = game.add.tween(foxtail).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   

        mark = game.add.button(foxpositionX+250, foxpositionY, "mark",startfishing);
        mark.scale.setTo(0,0);
        mark.anchor.setTo(0.5,1);
        mark.inputEnabled = false;

        

        fishingrodpullingsheet = game.add.sprite(foxpositionX+670, foxpositionY+290, "fishingrodpullingsheet");
        fishingrodpullingsheet.animations.add("fishingrodpulling", [0,1,2,3,4]);

        fishingrodpullingsheet.anchor.setTo(0.7,0.9);
        fishingrodpullingsheet.alpha = 0;
        
        foxpulling = game.add.sprite(foxpositionX+250, foxpositionY+300, "foxpulling");
        foxpulling.animations.add("pulling", [0,1,2,3,4,5,6,7,8,9]);

        foxpulling.scale.setTo(0.5,0.5);
        foxpulling.anchor.setTo(0.7,0.9);
        foxpulling.alpha = 0;

        foxfalling = game.add.sprite(foxpositionX+400, foxpositionY+300, "foxfalling");
        foxfalling.animations.add("foxfalling", [0,1,2,3,4,5,6,7,8,9]);

        foxfalling.anchor.setTo(0.7,0.9);
        foxfalling.alpha = 0;

        dropfishingrod = game.add.sprite(foxpositionX+400, foxpositionY+300, "dropfishingrod");
        dropfishingrod.animations.add("dropfishingrod", [0,1,2,3]);

        dropfishingrod.anchor.setTo(0.7,0.9);
        dropfishingrod.alpha = 0;

        foxgetfishingsheet = game.add.sprite(foxpositionX+500, foxpositionY+300, "foxgetfishingsheet");
        foxgetfishingsheet_animation = foxgetfishingsheet.animations.add("foxgetfishingsheet", [0,1,2,3,4,5,6,7,8,9]);
        foxgetfishingsheet.anchor.setTo(0.7,0.9);
        foxgetfishingsheet.alpha = 0;
        
        fishsheet = game.add.sprite(foxpositionX+480, foxpositionY+290, "fishsheet");
        fishsheet.anchor.setTo(0.7,0.9);
        fishsheet.scale.setTo(0.5,0.5);
        fishsheet.angle = -90;
        fishsheet.alpha = 0;       
        fishsheet_animation = fishsheet.animations.add("fishsheet_dynamic", [0,1,2]);
        
        foxgetfishing_purple_sheet = game.add.sprite(foxpositionX+500, foxpositionY+300, "foxgetfishing_purple_sheet");
        foxgetfishing_purple_sheet_animation = foxgetfishing_purple_sheet.animations.add("foxgetfishing_purple_sheet", [0,1,2,3,4,5,6,7,8,9]);
        foxgetfishing_purple_sheet.anchor.setTo(0.7,0.9);
        foxgetfishing_purple_sheet.alpha = 0;
        
        fish_sheet_purple = game.add.sprite(foxpositionX+480, foxpositionY+290, "fish_sheet_purple");
        fish_sheet_purple.anchor.setTo(0.7,0.9);
        fish_sheet_purple.scale.setTo(0.5,0.5);
        fish_sheet_purple.angle = -90;
        fish_sheet_purple.alpha = 0;
        fish_sheet_purple_animation = fish_sheet_purple.animations.add("fish_sheet_purple_dynamic", [0,1,2]);
        
        fox_getfishsheet_lastframe = game.add.sprite(foxpositionX+500, foxpositionY+300, "fox_getfishsheet_lastframe");
        fox_getfishsheet_lastframe.anchor.setTo(0.7,0.9);
        fox_getfishsheet_lastframe.alpha = 0;
        
        var getfishboardX = centerX,
            getfishboardY = 500;
        
        getfishBG = game.add.sprite(getfishboardX, getfishboardY, "getfishBG");
        getfishBG.anchor.setTo(0.5,0.5);
        getfishBG.scale.setTo(0,0);
        
        failBG = game.add.sprite(getfishboardX, getfishboardY, "failBG");
        failBG.anchor.setTo(0.5,0.5);
        failBG.scale.setTo(0,0);
        
        btn_getfish_backhome = game.add.button(getfishboardX+1, getfishboardY, 'button_getfish_backhome', backhome, this, 1, 0);
        btn_getfish_backhome.anchor.setTo(0,-1);
        btn_getfish_backhome.scale.setTo(0,0);
        btn_getfish_backhome.inputEnabled = false;
        
        btn_getfish_continue = game.add.button(getfishboardX-1, getfishboardY, 'button_getfish_continue', continuefishing, this, 1, 0);
        btn_getfish_continue.anchor.setTo(1,-1);
        btn_getfish_continue.scale.setTo(0,0);
        btn_getfish_continue.inputEnabled = false;
                
        fishbox_orange = game.add.sprite(getfishboardX, getfishboardY, "fishbox_orange");
        fishbox_orange.anchor.setTo(0.5,0.5);
        fishbox_orange.scale.setTo(0,0);

        fishbox_purple = game.add.sprite(getfishboardX, getfishboardY, "fishbox_purple");
        fishbox_purple.anchor.setTo(0.5,0.5);
        fishbox_purple.scale.setTo(0,0);
        
        fishbox_sheet_highlight = game.add.sprite(getfishboardX, getfishboardY, "fishbox_sheet_highlight");
        fishbox_sheet_highlight.anchor.setTo(0.5,0.5);
        fishbox_sheet_highlight.scale.setTo(0,0);
        fishbox_sheet_highlight_animation = fishbox_sheet_highlight.animations.add("fishbox_sheet_highlight", [0,1,2,3,4,5,6,7]);
        
        //open BG
        blackBG_open_fishing = game.add.sprite(0,0, "blackBG");
        game.add.tween(blackBG_open_fishing).to({alpha:0},1000,'Quad.easeIn',true); 
        //close BG
        blackBG_close_fishing = game.add.sprite(0,0, "blackBG");
        blackBG_close_fishing.alpha = 0;
        
        //fx
        correct_fx = game.add.sprite(0,0,'correct_fx');
        correct_fx.alpha = 0;

        tutorial_frame_sheet = game.add.sprite(questionpositionX-440,questionpositionY+40,"tutorial_frame_sheet");
        tutorial_frame_sheet.anchor.setTo(0.5,0.5);
        tutorial_frame_sheet.scale.setTo(0.9,0.9);
        tutorial_frame_sheet.animations.add("tutorial_frame_sheet_dyn", [0,1,2,3,4,5,6,7,8,9]);
        tutorial_frame_sheet.alpha = 0;

        
        
        
        for(var i = 0;i<=2;i++){
            answerpannel[i] = game.add.sprite( questionpositionX+150*(i-1), buttonpositionY,"anwser_pannel");
            answerpannel[i].scale.setTo(0.8,0.8); 
            answerpannel[i].anchor.setTo(0.5,0.5);
            answerpannel[i].alpha = 0; 
   
        }
        for(var i = 0;i<=2;i++){
            answerpannel_tutorial[i] = game.add.sprite( questionpositionX+150*(i-1), buttonpositionY,"anwser_pannel");
            answerpannel_tutorial[i].scale.setTo(0.8,0.8); 
            answerpannel_tutorial[i].anchor.setTo(0.5,0.5);
            answerpannel_tutorial[i].alpha = 0; 
   
        }        
        //add 0~10 answer number image    
        for(var i = 1;i<11;i++){
      
            answer_number0[i] =  game.add.sprite(questionpositionX-150, buttonpositionY,i);    
            answer_number0[i].scale.setTo(0.8,0.8); 
            answer_number0[i].anchor.setTo(0.5,0.5);   
            answer_number0[i].alpha = 0;     
                
            answer_number1[i] =  game.add.sprite(questionpositionX, buttonpositionY,i);    
            answer_number1[i].scale.setTo(0.8,0.8); 
            answer_number1[i].anchor.setTo(0.5,0.5);   
            answer_number1[i].alpha = 0; 
                
            answer_number2[i] =  game.add.sprite(questionpositionX+150, buttonpositionY,i);    
            answer_number2[i].scale.setTo(0.8,0.8); 
            answer_number2[i].anchor.setTo(0.5,0.5);   
            answer_number2[i].alpha = 0; 
   
        }    
        
    
        answer_number0[0] = game.add.sprite(questionpositionX-150, buttonpositionY,'0');    
        answer_number0[0].scale.setTo(0.8,0.8); 
        answer_number0[0].anchor.setTo(0.5,0.5);   
        answer_number0[0].alpha = 0;     
                
        answer_number1[0] =  game.add.sprite(questionpositionX, buttonpositionY,'0');    
        answer_number1[0].scale.setTo(0.8,0.8); 
        answer_number1[0].anchor.setTo(0.5,0.5);   
        answer_number1[0].alpha = 0; 
                
        answer_number2[0] =  game.add.sprite(questionpositionX+150, buttonpositionY,'0');    
        answer_number2[0].scale.setTo(0.8,0.8); 
        answer_number2[0].anchor.setTo(0.5,0.5);   
        answer_number2[0].alpha = 0;  
        
        answer_number2[0] =  game.add.sprite(questionpositionX+150, buttonpositionY,'0');    
        answer_number2[0].scale.setTo(0.8,0.8); 
        answer_number2[0].anchor.setTo(0.5,0.5);   
        answer_number2[0].alpha = 0;  


        
        
        //question number bond image
        bonds = game.add.sprite(questionpositionX,questionpositionY,"bonds");
        bonds.anchor.setTo(0.5,1);
        bonds.alpha = 0;
       
        question_green_pannel = game.add.sprite(questionpositionX,questionpositionY-150,"question_green_pannel");
        question_green_pannel.anchor.setTo(0.5,0.5);
        question_green_pannel.alpha = 0;
        question_green_pannel_animation = question_green_pannel.animations.add("question_green_pannel_dyn", [0,1,2,3,4,5,6,7]);
        

        question_blue_pannel1 = game.add.sprite(questionpositionX+150,questionpositionY,"question_blue_pannel");
        question_blue_pannel1.anchor.setTo(0.5,0.5);
        question_blue_pannel1.alpha = 0;
        question_blue_pannel1_animation = question_blue_pannel1.animations.add("question_blue_pannel_dyn1", [0,1,2,3,4,5,6,7]);
        

        question_blue_pannel2 = game.add.sprite(questionpositionX-150,questionpositionY,"question_blue_pannel");
        question_blue_pannel2.anchor.setTo(0.5,0.5);
        question_blue_pannel2.alpha = 0;
        question_blue_pannel2_animation = question_blue_pannel2.animations.add("question_blue_pannel_dyn2", [0,1,2,3,4,5,6,7]);
        
        question_pannel1_create_fx = game.add.sprite(questionpositionX,questionpositionY-150,"question_pannel_create_fx");
        question_pannel1_create_fx.anchor.setTo(0.5,0.5);
        question_pannel1_create_fx.alpha = 0;
        question_pannel1_create_fx_animation = question_pannel1_create_fx.animations.add("question_pannel1_create_fx", [0,1,2,3,4,5,6,7,8,9]);
        
        question_pannel2_create_fx = game.add.sprite(questionpositionX+150,questionpositionY,"question_pannel_create_fx");
        question_pannel2_create_fx.anchor.setTo(0.5,0.5);
        question_pannel2_create_fx.alpha = 0;
        question_pannel2_create_fx_animation = question_pannel2_create_fx.animations.add("question_pannel2_create_fx", [0,1,2,3,4,5,6,7,8,9]);

        question_pannel3_create_fx = game.add.sprite(questionpositionX-150,questionpositionY,"question_pannel_create_fx");
        question_pannel3_create_fx.anchor.setTo(0.5,0.5);
        question_pannel3_create_fx.alpha = 0;
        question_pannel3_create_fx_animation = question_pannel3_create_fx.animations.add("question_pannel3_create_fx", [0,1,2,3,4,5,6,7,8,9]);

        //FX
        blue_FX_sheet = game.add.sprite(questionpositionX+150,questionpositionY,"blue_FX_sheet");
        // blue_FX_sheet.scale.setTo(0.6,0.6);
        blue_FX_sheet.anchor.setTo(0.5,0.5);
        blue_FX_sheet.animations.add("blue_FX", [0,1,2,3,4,5,6,7]);
        blue_FX_sheet.alpha = 0;
        
        green_FX_sheet = game.add.sprite(questionpositionX,questionpositionY-150,"blue_FX_sheet");
        green_FX_sheet.anchor.setTo(0.5,0.5);
        green_FX_sheet.animations.add("green_FX", [0,1,2,3,4,5,6,7]);
        green_FX_sheet.alpha = 0;

        red_FX_sheet1 = game.add.sprite(questionpositionX,questionpositionY-150,"red_FX_sheet");
        red_FX_sheet1.anchor.setTo(0.5,0.5);
        red_FX_sheet1.animations.add("red_FX1", [0,1,2,3,4,5,6,7]);
        red_FX_sheet1.alpha = 0;

        red_FX_sheet2 = game.add.sprite(questionpositionX+150,questionpositionY,"red_FX_sheet");
        red_FX_sheet2.anchor.setTo(0.5,0.5);
        red_FX_sheet2.animations.add("red_FX2", [0,1,2,3,4,5,6,7]);
        red_FX_sheet2.alpha = 0;
        
        red_FX_sheet3 = game.add.sprite(questionpositionX-150,questionpositionY,"red_FX_sheet");
        red_FX_sheet3.anchor.setTo(0.5,0.5);
        red_FX_sheet3.animations.add("red_FX3", [0,1,2,3,4,5,6,7]);
        red_FX_sheet3.alpha = 0;
        
        energy_transfer_sheet = game.add.sprite(questionpositionX,questionpositionY-150, "energy_transfer_sheet");
        energy_transfer_sheet.animations.add("energy_transfer_sheet1_dynamic", [0,1,2,3,4,5,6,7]);
        energy_transfer_sheet.anchor.setTo(0.5,0.5);
        energy_transfer_sheet.alpha = 0;
        
        energy_transfer_sheet1 = game.add.sprite(questionpositionX,questionpositionY-150, "energy_transfer_sheet");
        energy_transfer_sheet1.animations.add("energy_transfer_sheet1_dynamic", [0,1,2,3,4,5,6,7]);
        energy_transfer_sheet1.anchor.setTo(0.5,0.5);
        energy_transfer_sheet1.alpha = 0;
        
        energy_transfer_sheet2 = game.add.sprite(questionpositionX+150,questionpositionY, "energy_transfer_sheet");
        energy_transfer_sheet2.animations.add("energy_transfer_sheet2_dynamic", [0,1,2,3,4,5,6,7]);
        energy_transfer_sheet2.anchor.setTo(0.5,0.5);
        energy_transfer_sheet2.alpha = 0;
        
        scorebar_wrong_fx_sheet = game.add.sprite(scorebarX+10,110, "scorebar_wrong_fx_sheet");
        scorebar_wrong_fx_sheet.animations.add("scorebar_wrong_fx_dynamic", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        scorebar_wrong_fx_sheet.anchor.setTo(0.5,0);
        scorebar_wrong_fx_sheet.alpha = 0;
        
        scorebar_right_fx_sheet = game.add.sprite(scorebarX+10,110, "scorebar_right_fx_sheet");
        scorebar_right_fx_sheet.animations.add("scorebar_right_fx_dynamic", [0,1,2,3,4,5,6,7,8,9,10,11]);
        scorebar_right_fx_sheet.anchor.setTo(0.5,0);
        scorebar_right_fx_sheet.alpha = 0;

        //add question text image  
        for(var i = 0;i<=10;i++){
            question_text0[i] =  game.add.sprite(questionpositionX,questionpositionY-150,'Q'+i+'_green');    
            question_text0[i].anchor.setTo(0.5,0.5);
            question_text0[i].scale.setTo(0.8,0.8); 
            question_text0[i].alpha = 0;     
                
            question_text1[i] =  game.add.sprite(questionpositionX+150,questionpositionY,'Q'+i+'_blue');    
            question_text1[i].anchor.setTo(0.5,0.5);   
            question_text1[i].scale.setTo(0.8,0.8);
            question_text1[i].alpha = 0; 
                
            question_text2[i] =  game.add.sprite(questionpositionX-150,questionpositionY,'Q'+i+'_blue');    
            question_text2[i].anchor.setTo(0.5,0.5);
            question_text2[i].scale.setTo(0.8,0.8);
            question_text2[i].alpha = 0; 
        }
        //add question mark image 
        question_mark0 =  game.add.sprite(questionpositionX,questionpositionY-150,'Qmark_green');    
        question_mark0.anchor.setTo(0.5,0.5);   
        question_mark0.alpha = 0;     
                
        question_mark1 =  game.add.sprite(questionpositionX+150,questionpositionY,'Qmark_blue');    
        question_mark1.anchor.setTo(0.5,0.5);   
        question_mark1.alpha = 0; 
                
        tutorial_number_2 = game.add.sprite(questionpositionX-150,questionpositionY,'tutorial_number_2');    
        tutorial_number_2.scale.setTo(0.8,0.8); 
        tutorial_number_2.anchor.setTo(0.5,0.5);   
        tutorial_number_2.alpha = 0; 
        
        tutorial_number_4 = game.add.sprite(questionpositionX+150,questionpositionY,'tutorial_number_4');    
        tutorial_number_4.scale.setTo(0.8,0.8); 
        tutorial_number_4.anchor.setTo(0.5,0.5);   
        tutorial_number_4.alpha = 0; 
        
        tutorial2_number_2 = game.add.sprite(questionpositionX-150,questionpositionY,'tutorial_number_2');    
        tutorial2_number_2.scale.setTo(0.8,0.8); 
        tutorial2_number_2.anchor.setTo(0.5,0.5);   
        tutorial2_number_2.alpha = 0;
        
        tutorial2_number_9 = game.add.sprite(questionpositionX,questionpositionY-150,'tutorial_number_9');    
        tutorial2_number_9.scale.setTo(0.8,0.8); 
        tutorial2_number_9.anchor.setTo(0.5,0.5);   
        tutorial2_number_9.alpha = 0;
        
        plus_tutorial = game.add.sprite(questionpositionX,questionpositionY,'plus_tutorial');    
        plus_tutorial.scale.setTo(0.8,0.8); 
        plus_tutorial.anchor.setTo(0.5,0.5);   
        plus_tutorial.alpha = 0;
        
        minus_tutorial = game.add.sprite(questionpositionX-500,questionpositionY,'minus_tutorial');    
        minus_tutorial.scale.setTo(0.4,0.4); 
        minus_tutorial.anchor.setTo(0.5,0.5);   
        minus_tutorial.alpha = 0;
        
        Qmark_tutorial = game.add.sprite(questionpositionX,questionpositionY-150,'Qmark_tutorial');    
        Qmark_tutorial.anchor.setTo(0.5,0.5);   
        Qmark_tutorial.alpha = 0;    
        
        Qmark_tutorial2 = game.add.sprite(questionpositionX+150,questionpositionY,'Qmark_tutorial');    
        Qmark_tutorial2.anchor.setTo(0.5,0.5);   
        Qmark_tutorial2.alpha = 0; 
        
        equal_mark_tutorial = game.add.sprite(questionpositionX-390,questionpositionY,'equal_mark_tutorial');    
        equal_mark_tutorial.anchor.setTo(0.5,0.5);   
        equal_mark_tutorial.alpha = 0;
        
        //tutorial page
        continue_text = game.add.sprite(centerX,centerY+200, "continue_text");
        continue_text.anchor.setTo(0.5,0.5);     
        continue_text.scale.setTo(0.5,0.5);  
        tween_continue_text = game.add.tween(continue_text).to({alpha:0.2},500,'Linear',true,0,false,false).loop(true);
        
        click_to_continue = game.add.button(0,0, "blackBG",start_tutorial);
        click_to_continue.alpha = 0;
        
        mark_tutorial = game.add.button(foxpositionX+250, foxpositionY, "mark",startfishing_tutorial);
        mark_tutorial.scale.setTo(0,0);
        mark_tutorial.anchor.setTo(0.5,1);
        
        var textpositionX = 200,
            textpositionY = 250;
        
        finger_pointer = game.add.sprite(foxpositionX+250, foxpositionY-50,"finger_pointer");
        finger_pointer.alpha = 0;
        finger_pointer.anchor.setTo(0.5,0.5);
        
        get_fish_tutorial = game.add.sprite(foxpositionX+450, foxpositionY-70,"get_fish_tutorial");
        get_fish_tutorial.anchor.setTo(0.5,0.5);
        get_fish_tutorial.scale.setTo(0,0);

        add_mode_text2 = game.add.sprite(questionpositionX-440,buttonpositionY-120 ,"add_mode_text2");
        add_mode_text2.alpha = 0;
        add_mode_text2.anchor.setTo(0.5,0.5);
        add_mode_text2.scale.setTo(0.5,0.5);

        minus_mode_text2 = game.add.sprite(questionpositionX-440,buttonpositionY-120 ,"minus_mode_text2");
        minus_mode_text2.alpha = 0;
        minus_mode_text2.anchor.setTo(0.5,0.5);
        minus_mode_text2.scale.setTo(0.5,0.5);
        
        correct_text1 = game.add.sprite(questionpositionX-600,questionpositionY,"correct_text1");
        correct_text1.alpha = 0;
        correct_text1.anchor.setTo(0,0.5);
        correct_text1.scale.setTo(0.6,0.6);

        start_game_text = game.add.sprite(centerX,centerY+200,"start_game_text");
        start_game_text.alpha = 0;
        start_game_text.scale.setTo(0.5,0.5);
        start_game_text.anchor.setTo(0.5,0.5);  

        
        //fx
        for(var i = 0;i<=2;i++){
            anwser_pannel_light[i] = game.add.sprite(questionpositionX+150*(i-1), buttonpositionY,'anwser_pannel_light');
            anwser_pannel_light[i].anchor.setTo(0.5,0.5);   
            anwser_pannel_light[i].alpha = 0;  

            anwser_pannel_redlight[i] = game.add.sprite(questionpositionX+150*(i-1),buttonpositionY,'anwser_pannel_redlight');
            anwser_pannel_redlight[i].anchor.setTo(0.5,0.5);   
            anwser_pannel_redlight[i].alpha = 0;  
        }
     
        //sound
        rightFX = game.add.audio('rightFX');
        wrongFX = game.add.audio('wrongFX');
        successFX = game.add.audio('successFX');
        startFX = game.add.audio('startFX');
        failureFX = game.add.audio('failureFX');
        clickFX = game.add.audio('clickFX');
        add_energyFX = game.add.audio('add_energyFX');            
        alertFX = game.add.audio('alertFX');
        fishingBG = game.add.audio('fishingBG');
        fishingBG.loopFull(1);
    },   
            
    update: function() {
        
        if(playing_status == false && waitingclick == false && complete_status == false  && first_try == false ){
            waiting_time = Math.floor(Math.random()*4+1);
            show_up_time = waiting_time*40;
            waitingclick = true;
            console.log(waitingclick);
        }
        
        if(show_up_time > 0 && mark.scale.x == 0 && playing_status == false && complete_status == false ){
            show_up_time--;          
        }
        if(show_up_time == 0 && mark.scale.x == 0 && playing_status == false && complete_status == false ){
            alertFX.play();
            t2 = 40;
            game.add.tween(mark.scale).to({x:2.2,y:2.2},200,Phaser.Easing.Elastic.Out,true);
            mark.inputEnabled = true;
        }
        
        if(t2>0 && waitingclick == true ){
            t2--;
           
        }else if(t2 == 0 && waitingclick == true ){
            t2 = -1;
            waitingclick = false;  
            mark.scale.setTo(0,0);
            mark.inputEnabled = false;
        }       
            
        

        if(scorebar.y < 800 && playing_status == true){
            scorebar.y += 1.5;
            scorebarred.y += 1.5;
            
        }
        if(scorebar.y >= 800 && playing_status == true){
           failfishing();
            
        }
        
        if(scorebar.y <= 215 && playing_status == true){
            finishfishing();
        }
        if(scorebarred.alpha > 0){
            scorebarred.alpha -=0.05;
        }
        
        //foxtail_dynamic--------------------------------------------------------------------------------------
        
        if( foxtail_time == 0   && playing_status == false && complete_status == false ){
            foxtail_animation = foxtail.animations.play("fishing",9,false);
            foxtail_time = 200;
        }else if( foxtail_animation.isPlaying == false  && playing_status == false && complete_status == false ){
            foxtail_time--;
            foxtail_animation.stop();
            foxtail.frame = 0;
        }

    }    
}
var foxpulling_tween,fishingrodpullingsheet_tween;
function startfishing(){

    foxpulling.animations.play("pulling",100,true);
    foxpulling.alpha = 1;
    fishingrodpullingsheet.animations.play("fishingrodpulling",20,true);
    fishingrodpullingsheet.alpha = 1;
    
    foxpulling_tween = game.add.tween(foxpulling).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    fishingrodpullingsheet_tween = game.add.tween(fishingrodpullingsheet).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    
    game.add.tween(shadow).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    scorebar.y = 500; 
    scorebarred.y = 500;        
    mark.scale.setTo(0,0);      
    playing_status = true;       
    mark.inputEnabled = false;
    
    create_question(); 
    create_answer_button();
    
    fishingrod_tween.pause();
    foxbody_tween.pause();
    foxtail_tween.pause();
             
    game.add.tween(scorebar).to({alpha:1},300,'Quad.easeInOut',true);
    
    scorebar_tween.resume();
    foxtail.alpha = 0;
    foxtail.animations.stop("fishing");
    foxbody.alpha = 0;
    fishingrod.alpha = 0;
    
    
    startFX.play();
    fishingBG.stop(); 
    game_fishing_music = game.add.audio('fishing');
    game_fishing_music.loopFull(1);

}
function clean_pannel(){
    
    for(var n = 0;n<=10;n++){
        game.add.tween(answer_number0[n]).to({alpha:0},500,'Quad.easeInOut',true);
        game.add.tween(answer_number1[n]).to({alpha:0},500,'Quad.easeInOut',true);
        game.add.tween(answer_number2[n]).to({alpha:0},500,'Quad.easeInOut',true);

        game.add.tween(question_text0[n]).to({alpha:0},500,'Quad.easeInOut',true);
        game.add.tween(question_text1[n]).to({alpha:0},500,'Quad.easeInOut',true);
        game.add.tween(question_text2[n]).to({alpha:0},500,'Quad.easeInOut',true);
    }
    game.add.tween(question_mark0).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(question_mark1).to({alpha:0},500,'Quad.easeInOut',true);
    
    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel[i]).to({alpha:0},500,'Quad.easeInOut',true);
        answerpannel[i].inputEnabled = false; 
    }

    game.add.tween(bonds).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(question_green_pannel).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(question_blue_pannel1).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(question_blue_pannel2).to({alpha:0},500,'Quad.easeInOut',true);
    
    question_green_pannel_animation.stop();
    question_blue_pannel1_animation.stop();
    question_blue_pannel2_animation.stop();

}

function finishfishing(){

    if(daily_task_status == false){
        daily_task_status = true;
    }
    
    complete_status = true;
    playing_status = false; 
    
    clean_pannel();
    
    scorebar_full.alpha = 1;
    scorebar_full_tween = game.add.tween(scorebar_full).to({alpha:'-0.2'},500,'Quad.easeInOut',true,0,false,true).loop(true);
    
    scorebar.alpha = 0;
    scorebar_tween.pause();

    foxpulling_tween.pause();
    fishingrodpullingsheet_tween.pause();
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    fish_sheet();
    


    shadow.alpha = 0;
    showupfishboard();    
    game_fishing_music.stop();
    successFX.play();   
}
var rand_fish;
function fish_sheet(){
    
    rand_fish= Math.floor(Math.random()*2);
    
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
        
    }

}

function failfishing(){
    complete_status = true;
    playing_status = false; 
    
    scorebar_tween.pause();
    scorebar.alpha = 0;
    
    clean_pannel();
    
    foxpulling.animations.stop("fishing");
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    foxpulling_tween.pause();
    fishingrodpullingsheet_tween.pause();
    foxfalling.animations.play("foxfalling",9,false);
    game.add.tween(foxfalling).to({x:'+40'},400,'Quad.easeOut',true);
    foxfalling.alpha = 1;
    
    dropfishingrod.animations.play("dropfishingrod",12,false,true);
    game.add.tween(dropfishingrod).to({x:'+500'},100,'Quad.easeOut',true);
    dropfishingrod.alpha = 1;
    shadow.alpha = 0;
    
    showupfailboard();
    game_fishing_music.stop();
    failureFX.play();
}
function backhome(){
    game.add.tween(blackBG_close_fishing).to({alpha:1},1000,'Quad.easeIn',true); 
    
}
function continuefishing(){

    complete_status = false;
    
    btn_getfish_backhome.inputEnabled = false;
    btn_getfish_continue.inputEnabled = false;
    game.add.tween(fishbox_purple.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_orange.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(fishbox_sheet_highlight.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    
    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_backhome.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(getfishBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_backhome.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(failBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    fishbox_sheet_highlight_animation.stop();
    foxfalling.alpha = 0;
    
    fishsheet_animation.stop();
    fishsheet.alpha = 0;
    fish_sheet_purple_animation.stop();
    fish_sheet_purple.alpha = 0;
    fox_getfishsheet_lastframe.alpha = 0;
    
    fishingrod.alpha = 1;
    foxbody.alpha = 1;
    foxtail.alpha = 1;
    
    fishingrod_tween.resume();
    foxbody_tween.resume();
    foxtail_tween.resume();
    
    fishingBG.loopFull(1);
    startFX.play();
    
    scorebar_full_tween.stop();
    game.add.tween(scorebar_full).to({alpha:0},500,'Quad.easeInOut',true);
}
function showupfishboard(){
    game.add.tween(fishbox_sheet_highlight.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    if( rand_fish == 0 ){
        game.add.tween(fishbox_orange.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 1 ){
        game.add.tween(fishbox_purple.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }

    game.add.tween(btn_getfish_continue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(btn_getfish_backhome.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(getfishBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(fishbox_sheet_highlight.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    fishbox_sheet_highlight.animations.play("fishbox_sheet_highlight",15,true);
    
    btn_getfish_backhome.inputEnabled = true;
    btn_getfish_continue.inputEnabled = true;
}

function showupfailboard(){
    
    game.add.tween(btn_getfish_continue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(btn_getfish_backhome.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(failBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    
    btn_getfish_backhome.inputEnabled = true;
    btn_getfish_continue.inputEnabled = true;
}