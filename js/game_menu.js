var background;
var level1_btn;
var currentlevel;

demo.game_menu = function() {};
demo.game_menu.prototype = {
    preload: function() {
       
        game.load.image('white','assets/particlestorm/particle/whiteparticle.png');

    },

    create: function() {
        game.stage.backgroundColor = "#444444";
        
        addChangeStateEvent();
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //level1 button
        level1_btn = game.add.button(game.world.centerX, 600, "white", goTolevel1, this, 1, 0);
        level1_btn.anchor.setTo(0.5, 0.5);
        level1_btn.scale.setTo(4, 4);
        level1_btn.onInputOver.add(over, this);
      	  
        var level1text = game.add.text(game.world.centerX, 600,'LEVEL1', { font: "30px Arial", fill: "#444444", align: "center" });
        level1text.anchor.setTo(0.5, 0.5);
        
        //level2 button
        level2_btn = game.add.button(game.world.centerX + 400, 600, "white", goTolevel2, this, 1, 0);
        level2_btn.anchor.setTo(0.5, 0.5);
        level2_btn.scale.setTo(4, 4);
        level2_btn.onInputOver.add(over, this);
      	  
        var level2text = game.add.text(game.world.centerX + 400, 600,'LEVEL2', { font: "30px Arial", fill: "#444444", align: "center" });
        level2text.anchor.setTo(0.5, 0.5);
        
        //level3 button
        level3_btn = game.add.button(game.world.centerX + 400, 200, "white", goTolevel3, this, 1, 0);
        level3_btn.anchor.setTo(0.5, 0.5);
        level3_btn.scale.setTo(4, 4);
        level3_btn.onInputOver.add(over, this);
      	  
        var level3text = game.add.text(game.world.centerX + 400, 200,'LEVEL3', { font: "30px Arial", fill: "#444444", align: "center" });
        level3text.anchor.setTo(0.5, 0.5);
        
       
        Challengebtn = game.add.button(game.world.centerX - 600, 400, "white", goTochallenge);
        Challengebtn.anchor.setTo(0.5, 0.5);
        Challengebtn.scale.setTo(4, 4);
         var Challenge = game.add.text(game.world.centerX - 600, 400,'Challenge', { font: "30px Arial", fill: "#444444", align: "center" });
        Challenge.anchor.setTo(0.5, 0.5);
        
        function goTolevel1() {
            game.state.start("state2");
            currentlevel = 1;
        }
        function goTolevel2() {
            game.state.start("state2");
            currentlevel = 2;
        }
        function goTolevel3() {
            game.state.start("state2");
            currentlevel = 3;
        }
        function goTochallenge() {
            game.state.start("state3");
        }
        
    },
    update: function() {
        
    }
};


function over() {
	
};
