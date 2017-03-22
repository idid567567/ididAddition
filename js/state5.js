
var questionindex = new Array(); 
var answerpannel = new Array();

var answercount;

var addmode,minusmode;

var questionrandseed;
var questionstring1,questionstring2,questionstring3;
var style = { font: "120px Arial", fill: "#ffffff", align: "center" };
var rand;
var answer = new Array();
demo.state5 = function() {};
demo.state5.prototype = {
    preload: function() {
        game.load.image('button','assets/button/redbutton.png');
 
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#444444";
                game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //init parameter
        answercount = 0;
        
        
        //addChangeStateEvent();
        finalscore = 100;
        
        questionrandseed = 16;
        rand = Math.floor(Math.random()*questionrandseed);
             
        
        
        if( rand%2 == 0 ){
            questionstring1 = game.add.text(950,350,questionlevel1[rand][0],style);
            questionstring2 = game.add.text(650,350,questionlevel1[rand][1],style);
            questionstring3 = game.add.text(800,200,'?',style);
            addmode = true;
            minusmode = false;
            
        }
        if( rand%2 == 1 ){
            questionstring1 = game.add.text(950,350,'?',style);
            questionstring2 = game.add.text(650,350,questionlevel1[rand][1],style);
            questionstring3 = game.add.text(800,200,answerlevel1[rand],style);
            addmode = false;
            minusmode = true;

        }
        

        //create answerpannel
        
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(checkinput, null, null, 1);
        game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(checkinput, null, null, 2);
        game.input.keyboard.addKey(Phaser.Keyboard.THREE).onDown.add(checkinput, null, null, 3);
        game.input.keyboard.addKey(Phaser.Keyboard.FOUR).onDown.add(checkinput, null, null, 4);
        game.input.keyboard.addKey(Phaser.Keyboard.FIVE).onDown.add(checkinput, null, null, 5);
        game.input.keyboard.addKey(Phaser.Keyboard.SIX).onDown.add(checkinput, null, null, 6);
        game.input.keyboard.addKey(Phaser.Keyboard.SEVEN).onDown.add(checkinput, null, null, 7);
        game.input.keyboard.addKey(Phaser.Keyboard.EIGHT).onDown.add(checkinput, null, null, 8);
        game.input.keyboard.addKey(Phaser.Keyboard.NINE).onDown.add(checkinput, null, null, 9);

        
        
    },     
    update: function() {}    
}



function updatequestion(){
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
}

function checkinput(i,num){
    if( addmode == true && num == answerlevel1[rand] ){
        updatequestion();
    }
    if( minusmode == true && num == questionlevel1[rand][0] ){
       updatequestion();
    }

}
