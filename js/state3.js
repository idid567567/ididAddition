var demo = {},
    centerX = 1600 / 2,
    centerY = 1000 / 2,
    rockman_1,
    speed = 5;
var startmusic,startbtndown;
var BG,startpageBG,startpageBG_button,loadingbar,loadingbarwidth,loadingbarcompleted;

var index = new Array();
var questionindex = new Array(); 
var answercount;

var blackBG_open_fishing,blackBG_close_fishing;

var scorebar,scorebarX,scorebarY,scorebarcompleted,mask;
var questionrandseed;
var rand;

var t,t2;

var foxpulling,shadow,fishingrodpullingsheet;

var playing_status,complete_status;
var waitingclick;

var correct_fx,wrong_fx;
var answerpannel = new Array();
var anwser_pannel_light = new Array();
var anwser_pannel_redlight = new Array();

var answerpannel_tutorial= new Array();

var question_green_pannel,question_blue_pannel1,question_blue_pannel2;

var game_fishing_music,rightFX,wrongFX,successFX,alertFX,startFX,failureFX,fishingBG,birdFX;

var buttonpositionY;

var first_try;

var tutorial_page1,tutorial_page2,tutorial_page3,continue_text,show_up_continue_text,show_up_changepagearrow1;  
var show_up_time;

var getfishboardX = centerX,
    getfishboardY = 500;


demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {
        game.load.image('blackBG','assets/fishingpage/blackBG.jpg');
        game.load.image('blackBG2','assets/fishingpage/blackBG2.jpg');
        

        //scorebar
        game.load.image('scorebar','assets/gameplay/scorebar.png');
        game.load.image('scorebarred','assets/gameplay/scorebarred.png');
        game.load.image('scorebarBG','assets/gameplay/scorebar_BG.png');
        game.load.image('scorebar_design','assets/gameplay/scorebar_design.png');

        
        
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
        
        game.load.spritesheet('foxgetfishingsheet','assets/charactor/foxgetfishingsheet.png',772,651);
        game.load.spritesheet('fishsheet','assets/charactor/fishsheet.png',157,247);
        
        game.load.image('getfishBG','assets/fishingpage/getfishboardBG.png');
        //btn
        game.load.spritesheet('button_getfish_continue','assets/fishingpage/button_continue_sheet.png',134,82);
        game.load.spritesheet('button_restart_sheet','assets/fishingpage/button_restart_sheet.png',134,82);
        game.load.spritesheet('button_finish_sheet','assets/fishingpage/button_finish_sheet.png',134,82);
        
        game.load.spritesheet('fishbox','assets/fishingpage/fishbox_sheet.png',183,148);
        game.load.image('failBG','assets/fishingpage/failboardBG.png');
        
        //question_pannel
        game.load.image('bonds','assets/fishingpage/question/bonds.png');

        game.load.image('anwser_pannel','assets/fishingpage/question/anwser_pannel1.png');
        
        game.load.spritesheet('question_green_pannel','assets/fishingpage/question/question_green_sheet.png',162,162);
        game.load.spritesheet('question_blue_pannel','assets/fishingpage/question/question_blue_sheet.png',162,162);
        
        
        //fx
        game.load.image('anwser_pannel_light','assets/fishingpage/question/anwser_pannel_light.png');
        game.load.image('anwser_pannel_redlight','assets/fishingpage/question/anwser_pannel_redlight.png');
        
        game.load.image('correct_fx','assets/fishingpage/whiteBG.png');
        game.load.image('wrong_fx','assets/fishingpage/redBG.png');
        
        game.load.spritesheet('blue_FX_sheet','assets/fishingpage/question/blue_FX_sheet.png',250,250);
        game.load.spritesheet('green_FX_sheet','assets/fishingpage/question/green_FX_sheet.png',250,250);
        game.load.spritesheet('red_FX_sheet','assets/fishingpage/question/red_FX_sheet.png',250,250);
        
        game.load.spritesheet('energy_transfer_sheet','assets/fishingpage/question/energy_transfer_sheet.png',250,250);
        
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
        
        //tutorial
        game.load.image('tutorial_page0','assets/fishingpage/tutorial/tutorial_page0.png');
        game.load.image('tutorial_page1','assets/fishingpage/tutorial/tutorial_page1.png');
        game.load.image('tutorial_page2','assets/fishingpage/tutorial/tutorial_page2.png');
        game.load.image('tutorial_page3','assets/fishingpage/tutorial/tutorial_page3.png');
        game.load.image('continue_text','assets/fishingpage/tutorial/continue_text.png');
        game.load.image('tutorial_text','assets/fishingpage/tutorial/tutorial_text.png');
        game.load.image('finger_pointer','assets/fishingpage/tutorial/finger_pointer.png');
        game.load.image('finger_pointer3','assets/fishingpage/tutorial/finger_pointer.png');
        game.load.image('changepagearrow1','assets/fishingpage/tutorial/next_step_arrow.png');
        game.load.image('changepagearrow2','assets/fishingpage/tutorial/next_step_arrow.png');
        game.load.image('changepagearrow3','assets/fishingpage/tutorial/next_step_arrow.png');
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
        
        game.load.image('NEXT_text','assets/fishingpage/tutorial/NEXT_text.png');
        
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
        finalscore = 100;
        scorebarX = 1450;
        scorebarY = 500;
        t=0;
        buttonpositionY = 500;
        playing_status = false;
        waitingclick = false;
        complete_status = false;
        first_try = true;
        show_up_continue_text = true;
        show_up_changepagearrow1  = false;
        show_up_changepagearrow2  = false;
        show_up_changepagearrow3  = false;
        show_up_start_game_text = false;
        show_up_NEXT_text = false;
        addmode = true;
        minusmode = false;

        questionrandseed = 16;
        rand = Math.floor(Math.random()*questionrandseed);
        
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
        

        //scorebar
        scorebarBG = game.add.sprite(scorebarX+10,110,'scorebarBG');
        scorebarBG.anchor.setTo(0.5, 0);
        scorebarBG.scale.setTo(1,1);
        scorebarBG.alpha = 1;
        
        scorebar = game.add.sprite(scorebarX+10,scorebarY,'scorebar');
        scorebar.anchor.setTo(0.5, 0);
        scorebar.scale.setTo(2,1);
        scorebar.alpha = 0;
        
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
        game.add.tween(fishingrod).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   
        
        shadow = game.add.sprite(foxpositionX+50, foxpositionY+290, "shadow");
        shadow.scale.setTo(0.6,0.5);
        
        foxbody = game.add.sprite(foxpositionX+250, foxpositionY+300, "foxbody");
        foxbody.scale.setTo(0.5,0.5);
        foxbody.anchor.setTo(0.7,0.9);
        game.add.tween(foxbody).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        foxtail = game.add.sprite(foxpositionX+145, foxpositionY+300, "foxtail");
        foxtail.animations.add("fishing", [0,1,2,3,4,5,6]);
        foxtail.anchor.setTo(0.4,0.9); 
        foxtail.scale.setTo(0.5,0.5);
        game.add.tween(foxtail).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   

        mark = game.add.button(foxpositionX+250, foxpositionY, "mark",startfishing);
        mark.scale.setTo(0,0);
        mark.anchor.setTo(0.5,1);

        

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
        foxgetfishingsheet.animations.add("foxgetfishingsheet", [0,1,2,3,4,5,6,7,8,9]);
        foxgetfishingsheet.anchor.setTo(0.7,0.9);
        foxgetfishingsheet.alpha = 0;

        fishsheet = game.add.sprite(foxpositionX+410, foxpositionY+300, "fishsheet");
        fishsheet.animations.add("foxgetfishingsheet", [0,1,2]);
        fishsheet.anchor.setTo(0.7,0.9);
        fishsheet.scale.setTo(0.5,0.5);
        fishsheet.angle = -90;
        fishsheet.alpha = 0;
       

        
        getfishBG = game.add.sprite(getfishboardX, getfishboardY, "getfishBG");
        getfishBG.anchor.setTo(0.5,0.5);
        getfishBG.scale.setTo(0,0);
        
        failBG = game.add.sprite(getfishboardX, getfishboardY, "failBG");
        failBG.anchor.setTo(0.5,0.5);
        failBG.scale.setTo(0,0);
        
        //button
        button_finish_sheet = game.add.button(getfishboardX+1, getfishboardY, 'button_finish_sheet', finishstate, this, 1, 0);
        button_finish_sheet.anchor.setTo(0,-1);
        button_finish_sheet.scale.setTo(0,0);
        button_finish_sheet.inputEnabled = false;
        
        button_restart_sheet = game.add.button(getfishboardX+1, getfishboardY, 'button_restart_sheet', resatartfishing, this, 1, 0);
        button_restart_sheet.anchor.setTo(0,-1);
        button_restart_sheet.scale.setTo(0,0);
        button_restart_sheet.inputEnabled = false;
        
        btn_getfish_continue = game.add.button(getfishboardX-1, getfishboardY, 'button_getfish_continue', continuefishing, this, 1, 0);
        btn_getfish_continue.anchor.setTo(1,-1);
        btn_getfish_continue.scale.setTo(0,0);
        btn_getfish_continue.inputEnabled = false;
        
        fishbox = game.add.sprite(getfishboardX, getfishboardY, "fishbox");
        fishbox.animations.add("fishbox", [0,1,2,3,4,5,6,7,8]);
        fishbox.anchor.setTo(0.5,0.5);
        fishbox.scale.setTo(0,0);

        
        //open BG
        blackBG_open_fishing = game.add.sprite(0,0, "blackBG");
        game.add.tween(blackBG_open_fishing).to({alpha:0},1000,'Quad.easeIn',true); 
        //close BG
        blackBG_close_fishing = game.add.sprite(0,0, "blackBG");
        blackBG_close_fishing.alpha = 0;
        
        //fx
        correct_fx = game.add.sprite(0,0,'correct_fx');
        correct_fx.alpha = 0;
        
        wrong_fx = game.add.sprite(0,0,'wrong_fx');
        wrong_fx.alpha = 0;
        
        
        
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
        
    
        answer_number0[0] =  game.add.sprite(questionpositionX-150, buttonpositionY,'0');    
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
        question_green_pannel.animations.add("question_green_pannel_dyn", [0,1,2,3,4,5,6,7,8]);
        question_green_pannel.alpha = 0;

        question_blue_pannel1 = game.add.sprite(questionpositionX+150,questionpositionY,"question_blue_pannel");
        question_blue_pannel1.anchor.setTo(0.5,0.5);
        question_blue_pannel1.animations.add("question_blue_pannel_dyn1", [0,1,2,3,4,5,6,7,8]);
        question_blue_pannel1.alpha = 0;

        question_blue_pannel2 = game.add.sprite(questionpositionX-150,questionpositionY,"question_blue_pannel");
        question_blue_pannel2.anchor.setTo(0.5,0.5);
        question_blue_pannel2.animations.add("question_blue_pannel_dyn2", [0,1,2,3,4,5,6,7,8]);
        question_blue_pannel2.alpha = 0;
        
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
        

        //add question text image  
        for(var i = 0;i<=10;i++){
            question_text0[i] =  game.add.sprite(questionpositionX,questionpositionY-150,'Q'+i+'_green');    
            question_text0[i].anchor.setTo(0.5,0.5);
            question_text0[i].scale.setTo(0.8,0.8); 
            question_text0[i].alpha = 0;     
            //game.add.tween(question_text0[i].scale).to({x:'+0.1',y:'+0.1'},200,'Quad.easeInOut',true,0,false,true).loop(true); 
                
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
        minus_tutorial.scale.setTo(0.8,0.8); 
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
        
        finger_pointer2 = game.add.sprite(textpositionX + 450,textpositionY+50,"finger_pointer");
        finger_pointer2.alpha = 0;
        finger_pointer2.anchor.setTo(0.5,0.5);
        
        
        finger_pointer3 = game.add.sprite(questionpositionX+150, buttonpositionY+50,"finger_pointer");
        finger_pointer3.alpha = 0;
        finger_pointer3.anchor.setTo(0.5,0.5);
        
        finger_pointer4 = game.add.sprite(questionpositionX-400,questionpositionY+150,"finger_pointer");
        finger_pointer4.alpha = 0;
        finger_pointer4.anchor.setTo(0.5,0.5);
        
        finger_pointer5 = game.add.sprite(questionpositionX-150, buttonpositionY+50,"finger_pointer");
        finger_pointer5.alpha = 0;
        finger_pointer5.anchor.setTo(0.5,0.5);        
        
        
        get_fish_tutorial = game.add.sprite(foxpositionX+450, foxpositionY-70,"get_fish_tutorial");
        get_fish_tutorial.anchor.setTo(0.5,0.5);
        get_fish_tutorial.scale.setTo(0,0);

        add_mode_text1 = game.add.sprite(textpositionX ,textpositionY ,"add_mode_text1");
        add_mode_text1.alpha = 0;
        add_mode_text1.anchor.setTo(0,0.5);
        add_mode_text1.scale.setTo(0.6,0.6);
        
        add_mode_text2 = game.add.sprite(questionpositionX-400,buttonpositionY ,"add_mode_text2");
        add_mode_text2.alpha = 0;
        add_mode_text2.anchor.setTo(0.5,0.5);
        add_mode_text2.scale.setTo(0.6,0.6);

        minus_mode_text1 = game.add.sprite(textpositionX ,textpositionY ,"minus_mode_text1");
        minus_mode_text1.alpha = 0;
        minus_mode_text1.anchor.setTo(0,0.5);
        minus_mode_text1.scale.setTo(0.6,0.6);
        
        minus_mode_text2 = game.add.sprite(questionpositionX-400,buttonpositionY,"minus_mode_text2");
        minus_mode_text2.alpha = 0;
        minus_mode_text2.anchor.setTo(0.5,0.5);
        minus_mode_text2.scale.setTo(0.6,0.6);
        
        correct_text1 = game.add.sprite(questionpositionX-600,questionpositionY,"correct_text1");
        correct_text1.alpha = 0;
        correct_text1.anchor.setTo(0,0.5);
        correct_text1.scale.setTo(0.6,0.6);
        
        NEXT_text = game.add.sprite(questionpositionX-400,questionpositionY+100,"NEXT_text");
        NEXT_text.alpha = 0;
        NEXT_text.anchor.setTo(0.5,0.5);
        NEXT_text.scale.setTo(0.4,0.4);
        
        changepagearrow1 = game.add.sprite(textpositionX + 450,textpositionY,"changepagearrow1");
        changepagearrow1.alpha = 0;
        changepagearrow1.scale.setTo(0.5,0.5);
        changepagearrow1.anchor.setTo(0.5,0.5);
         
        changepagearrow2 = game.add.sprite(textpositionX + 450,textpositionY,"changepagearrow2");
        changepagearrow2.alpha = 0;
        changepagearrow2.scale.setTo(0.5,0.5);
        changepagearrow2.anchor.setTo(0.5,0.5);       

        changepagearrow3 = game.add.sprite(textpositionX + 450,textpositionY,"changepagearrow3");
        changepagearrow3.alpha = 0;
        changepagearrow3.scale.setTo(0.5,0.5);
        changepagearrow3.anchor.setTo(0.5,0.5);        
        
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
                    
        alertFX = game.add.audio('alertFX');
        fishingBG = game.add.audio('fishingBG');
        fishingBG.loopFull(1);
    },   
            
    update: function() {
        t++;

        var rand;

        if(playing_status == false && waitingclick == false && complete_status == false  && first_try == false ){
            rand = Math.floor(Math.random()*4+1);
            show_up_time = rand*40;
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
        }
        
        if(t2>0 && waitingclick == true ){
            t2--;
           
        }else if(t2 == 0 && waitingclick == true ){
            t2 = -1;
            waitingclick = false;  
            mark.scale.setTo(0,0);
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
        }else{
            finalscore -= 0.02;
            
        }
        if(scorebarred.alpha > 0){
            scorebarred.alpha -=0.05;
        }
        if(t%200 >= 174){
            foxtail.animations.play("fishing",9,false);
        }else{
            foxtail.animations.stop("fishing");
            foxtail.frame = 0;
        }
        
        if(scorebar.alpha <= 0.5 && scorebar.alpha > 0.48){
            scorebar.alpha = 1;
        }else if(scorebar.alpha > 0.5){
            scorebar.alpha -= 0.03;
        }
        
        if(blackBG_close_fishing.alpha == 1){
            game.state.start('state8');
        }
        
        if(correct_fx.alpha > 0){
            correct_fx.alpha -= 0.1;
        }
        
        if(wrong_fx.alpha > 0){
            wrong_fx.alpha -= 0.1;
        }

        if(anwser_pannel_light[0].alpha > 0){
            anwser_pannel_light[0].alpha -= 0.1;
        }
        
        if( anwser_pannel_redlight[0].alpha > 0 ){
            anwser_pannel_redlight[0].alpha -= 0.1;
        }
        if(anwser_pannel_light[1].alpha > 0){
            anwser_pannel_light[1].alpha -= 0.1;
        }
        
        if( anwser_pannel_redlight[1].alpha > 0 ){
            anwser_pannel_redlight[1].alpha -= 0.1;
        }
        if(anwser_pannel_light[2].alpha > 0){
            anwser_pannel_light[2].alpha -= 0.1;
        }
        
        if( anwser_pannel_redlight[2].alpha > 0 ){
            anwser_pannel_redlight[2].alpha -= 0.1;
        }
     
        if( continue_text.alpha > 0.2 && show_up_continue_text  == true ){
            continue_text.alpha -= 0.05;
        }else if( 0.2 > continue_text.alpha > 0.1 && show_up_continue_text  == true ){
            continue_text.alpha = 1;
        }
        if( changepagearrow1.alpha > 0.2 && show_up_changepagearrow1  == true ){
            changepagearrow1.alpha -= 0.05;
        }else if( 0.2 > changepagearrow1.alpha > 0.15 && show_up_changepagearrow1  == true ){
            changepagearrow1.alpha = 1;
        }
        
        if( changepagearrow2.alpha > 0.2 && show_up_changepagearrow2  == true ){
            changepagearrow2.alpha -= 0.05;
        }else if( 0.2 > changepagearrow2.alpha > 0.15 && show_up_changepagearrow2  == true ){
            changepagearrow2.alpha = 1;
        }
        
        if( changepagearrow3.alpha > 0.2 && show_up_changepagearrow3  == true ){
            changepagearrow3.alpha -= 0.05;
        }else if( 0.2 > changepagearrow2.alpha > 0.15 && show_up_changepagearrow3  == true ){
            changepagearrow3.alpha = 1;
        }
                
        if( start_game_text.alpha > 0.2 && show_up_start_game_text  == true ){
            start_game_text.alpha -= 0.05;
        }else if( 0.2 > start_game_text.alpha > 0.15 && show_up_start_game_text  == true ){
            start_game_text.alpha = 1;
        }
        
        if( NEXT_text.alpha > 0.2 && show_up_NEXT_text  == true ){
            NEXT_text.alpha -= 0.05;
        }else if( 0.2 > NEXT_text.alpha > 0.15 && show_up_NEXT_text  == true ){
            NEXT_text.alpha = 1;
        }
       
        
    }    
}

function startfishing(){
   
    foxpulling.animations.play("pulling",100,true);
    foxpulling.alpha = 1;
    fishingrodpullingsheet.animations.play("fishingrodpulling",20,true);
    fishingrodpullingsheet.alpha = 1;
    
    game.add.tween(foxpulling).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    game.add.tween(fishingrodpullingsheet).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    game.add.tween(shadow).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    scorebar.y = 500; 
    scorebarred.y = 500;       
    mark.scale.setTo(0,0); 
    
    playing_status = true;  


    create_question(); 
    create_answer_button();
             
    scorebar.alpha = 1;
    foxtail.alpha = 0;
    foxtail.animations.stop("fishing");
    foxbody.alpha = 0;
    fishingrod.alpha = 0;
    
    
    startFX.play();
    fishingBG.stop();
    game_fishing_music = game.add.audio('fishing');
    game_fishing_music.loopFull(1);

}
function finishstate(){
    game.add.tween(blackBG_close_fishing).to({alpha:1},1000,'Quad.easeIn',true);
    button_finish_sheet.inputEnabled = false;
    button_restart_sheet.inputEnabled = false;
    btn_getfish_continue.inputEnabled = false;  
}
function resatartfishing(){
    complete_status = false;
    
    button_finish_sheet.inputEnabled = false;
    button_restart_sheet.inputEnabled = false;
    btn_getfish_continue.inputEnabled = false;
    game.add.tween(fishbox.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(button_restart_sheet.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(getfishBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(button_restart_sheet.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(button_finish_sheet.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(failBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    
    foxfalling.alpha = 0;
    foxgetfishingsheet.alpha = 0;
    fishsheet.alpha = 0;
    
    fishingrod.alpha = 1;
    foxbody.alpha = 1;
    foxtail.alpha = 1;
    
    fishingBG.loopFull(1);
    startFX.play();    
}
function finishfishing(){

    complete_status = true;
    playing_status = false; 
    scorebar.alpha = 0;
    scorebar.y = -1000;
    game.add.tween(scorebar).to({alpha:0},100,'Linear',true);

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
    for(var n = 0;n<=2;n++){
        answerpannel[n].alpha = 0;
        answerpannel[n].inputEnabled = false;     
    }
    
    bonds.alpha = 0;
    question_green_pannel.alpha = 0;
    question_blue_pannel1.alpha = 0;
    question_blue_pannel2.alpha = 0;
    
    blue_FX_sheet.alpha = 0;
    green_FX_sheet.alpha = 0;

    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    foxgetfishingsheet.animations.play("foxgetfishingsheet",8,false);
    foxgetfishingsheet.alpha = 1;
    fishsheet.animations.play("foxgetfishingsheet",20,true);
    
    game.add.tween(fishsheet).to({alpha:1},100,'Quad.easeOut',true,1100);

    shadow.alpha = 0;
    showupfishboard();
    game_fishing_music.stop();
    successFX.play();
}

function failfishing(){
    complete_status = true;
    playing_status = false; 

    scorebar.alpha = 0;
    scorebar.y = -1000;

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
    for(var n = 0;n<=2;n++){
        answerpannel[n].alpha = 0;
        answerpannel[n].inputEnabled = false;     
    }
    
    
    bonds.alpha = 0;
    question_green_pannel.alpha = 0;
    question_blue_pannel1.alpha = 0;
    question_blue_pannel2.alpha = 0;
    
    foxpulling.animations.stop("fishing");
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
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

function continuefishing(){
    addmode = false;
    minusmode = true;
    complete_status = false;
    
    button_restart_sheet.inputEnabled = false;
    btn_getfish_continue.inputEnabled = false;
    game.add.tween(fishbox.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(button_restart_sheet.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(getfishBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(button_restart_sheet.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(failBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    
    foxfalling.alpha = 0;
    foxgetfishingsheet.alpha = 0;
    fishsheet.alpha = 0;
    
    fishingrod.alpha = 1;
    foxbody.alpha = 1;
    foxtail.alpha = 1;
    
    fishingBG.loopFull(1);
    startFX.play();
 
}
function showupfishboard(){
    if(addmode == true){
        btn_getfish_continue.x = getfishboardX-1;
        btn_getfish_continue.y = getfishboardY;
        btn_getfish_continue.anchor.setTo(1,-1);
        
        button_restart_sheet.x = getfishboardX+1;
        button_restart_sheet.y = getfishboardY;
        button_restart_sheet.anchor.setTo(0,-1);
        
        game.add.tween(fishbox.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        game.add.tween(btn_getfish_continue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        game.add.tween(button_restart_sheet.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        game.add.tween(getfishBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000); 
        btn_getfish_continue.inputEnabled = true;
        button_restart_sheet.inputEnabled = true;
    }
    if(minusmode == true){
        button_finish_sheet.x = getfishboardX-1;
        button_finish_sheet.y = getfishboardY;
        button_finish_sheet.anchor.setTo(1,-1);
        
        button_restart_sheet.x = getfishboardX+1;
        button_restart_sheet.y = getfishboardY;
        button_restart_sheet.anchor.setTo(0,-1);
        
        game.add.tween(fishbox.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        game.add.tween(button_finish_sheet.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        game.add.tween(button_restart_sheet.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        game.add.tween(getfishBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
        button_finish_sheet.inputEnabled = true;
        button_restart_sheet.inputEnabled = true;
    }
    fishbox.animations.play("fishbox",15,true);


}

function showupfailboard(){
    
    //game.add.tween(btn_getfish_continue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    button_restart_sheet.x = getfishboardX;
    button_restart_sheet.y = getfishboardY;
    button_restart_sheet.anchor.setTo(0.5,-1);
    game.add.tween(button_restart_sheet.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(failBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    
    button_restart_sheet.inputEnabled = true;
    btn_getfish_continue.inputEnabled = true;
}