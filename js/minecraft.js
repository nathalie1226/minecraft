
var minecraft={};

minecraft.matrix=[
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","cloud","","","","","","","","","","","","",""],
    ["","","","","cloud","cloud","cloud","cloud","","cloud","cloud","","","","","","","","",""],
    ["","","","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","","","","","","","","",""],
    ["","","","","","","","cloud","cloud","","","","","","","leaf","leaf","leaf","",""],
    ["","","","","","","","","","","","","","","","leaf","leaf","leaf","",""],
    ["","","","","","","","","","","","","","","","leaf","leaf","leaf","",""],
    ["","","","","","","","","","","","","","","","","tree","","",""],
    ["","","","","leaf","","","","","","","","","","","","tree","","",""],
    ["","","","leaf","leaf","leaf","","","","","","","","rock","rock","","tree","","","rock"],
    ["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"]
   
];
for (var i = 0; i < 20; i++) {
    var bigBox = document.createElement('div');
    bigBox.className="row";
    for (var j = 0; j < 20; j++) {
        var box = document.createElement('div');
        box.className = "box";
        bigBox.appendChild(box);
    }
    var board = document.createElement('div');
    board.appendChild(bigBox);
    document.body.appendChild(board);
}

minecraft.init=function(){

    var toolSet = document.createElement('div');
    toolSet.id = "toolSet";
    document.body.appendChild(toolSet);
    
    var toolTree = document.createElement('div');
    toolTree.id = "axe";
    toolTree.className = "tool";
    toolSet.appendChild(toolTree);
    
    var toolRock = document.createElement('div');
    toolRock.id = "pick";
    toolRock.className = "tool";
    toolSet.appendChild(toolRock);
    
    var toolGround = document.createElement('div');
    toolGround.id = "shovel";
    toolGround.className = "tool";
    toolSet.appendChild(toolGround);
  

    for(var i=0;i<minecraft.matrix.length;i++){
        for(var j=0; j<minecraft.matrix[i].length;j++) {
            if (minecraft.matrix[i][j] === "") {
                minecraft.matrix[i][j] = "sky";
            }
            $('.box').eq(i*20+j).data("i",i).data("j",j).addClass(minecraft.matrix[i][j]);

        }
    }
};


minecraft.init();
