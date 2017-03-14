var questionlevel1 = {0:[1,1],1:[2,1],2:[3,1],3:[4,1],4:[5,1],5:[6,1],6:[7,1],7:[8,1],8:[9,1],9:[1,2],
                      10:[2,2],11:[3,2],12:[4,2],13:[5,2],14:[6,2],15:[7,2],16:[8,2]};

var questionlevel2 = {0:[1,3],1:[2,3],2:[3,3],3:[4,3],4:[5,3],5:[6,3],6:[7,3],7:[8,4],8:[1,4],9:[2,4],
                      10:[3,4],11:[4,4],12:[5,4],13:[6,4],14:[1,5],15:[2,5],16:[3,5],17:[4,5],18:[5,5],19:[1,6],
                      20:[2,6],21:[3,6],22:[4,6],23:[1,7],24:[2,7],25:[3,7],26:[1,8],27:[2,8],28:[1,9],29:[1,1],
                      30:[2,1],31:[3,1],32:[4,1],33:[5,1],34:[6,1],35:[7,1],36:[8,1],37:[9,1],38:[1,2],39:[2,2],
                      40:[3,2],41:[4,2],42:[5,2],43:[6,2],44:[7,2],45:[8,2]};

var questionlevel3 = {0:[1,10],1:[2,10],2:[3,10],3:[4,10],4:[5,10],5:[6,10],6:[7,10],7:[8,10],8:[9,10],9:[10,1],
                      10:[10,2],11:[10,3],12:[10,4],13:[10,5],14:[10,6],15:[10,7],16:[10,8],17:[10,9]};

var questionlevel4 = {0:[1,1],1:[2,2],2:[3,3],3:[4,4],4:[5,5],5:[6,6],6:[7,7],7:[8,8],8:[9,9],9:[10,10]};

var questionlevel5 = {0:[9,2],1:[8,3],2:[9,3],3:[7,4],4:[8,4],5:[9,4],6:[6,5],7:[7,5],8:[8,5],9:[9,5],
                      10:[5,6],11:[6,6],12:[7,6],13:[8,6],14:[9,6],15:[4,7],16:[5,7],17:[6,7],18:[7,7],19:[8,7],
                      20:[9,7],21:[3,8],22:[4,8],23:[5,8],24:[6,8],25:[7,8],26:[8,8],27:[9,8],28:[2,9],29:[3,9],
                      30:[4,9],31:[5,9],32:[6,9],33:[7,9],34:[8,9],35:[9,9]};

var answerlevel1 = new Array();
var answerlevel2 = new Array();
var answerlevel3 = new Array();
var answerlevel4 = new Array();
var answerlevel5 = new Array();

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
var questionlevel1_size = Object.size(questionlevel1);
var questionlevel2_size = Object.size(questionlevel2);
var questionlevel3_size = Object.size(questionlevel3);
var questionlevel4_size = Object.size(questionlevel4);
var questionlevel5_size = Object.size(questionlevel5);


for(var i = 0; i < questionlevel1_size;i++){
    answerlevel1[i] = questionlevel1[i][0] + questionlevel1[i][1];
}
for(var i = 0; i < questionlevel2_size;i++){
    answerlevel2[i] = questionlevel2[i][0] + questionlevel2[i][1];
}
for(var i = 0; i < questionlevel3_size;i++){
    answerlevel3[i] = questionlevel3[i][0] + questionlevel3[i][1];
}
for(var i = 0; i < questionlevel4_size;i++){
    answerlevel4[i] = questionlevel4[i][0] + questionlevel4[i][1];
}
for(var i = 0; i < questionlevel5_size;i++){
    answerlevel5[i] = questionlevel5[i][0] + questionlevel5[i][1];
}