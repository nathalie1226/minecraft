var minecraft = {};

minecraft.matrix = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "cloud", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "cloud", "cloud", "cloud", "cloud", "", "cloud", "cloud", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "cloud", "cloud", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tree", "", "", ""],
    ["", "", "", "", "leaf", "", "", "", "", "", "", "", "", "", "", "", "tree", "", "", ""],
    ["", "", "", "leaf", "leaf", "leaf", "", "", "", "", "", "", "", "rock", "rock", "", "tree", "", "", "rock"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"]

];
for (var i = 0; i < 20; i++) {
    var bigBox = $("<div/>");
    bigBox.addClass("row");
    $('body').append(bigBox);
    for (var j = 0; j < 20; j++) {
        var box = $("<div/>");
        box.addClass("box");
        bigBox.append(box);
    }

}

minecraft.init = function () {


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

    minecraft.tool = "shovel";
    minecraft.tile = "";
    minecraft.storedTile = "";

    minecraft.tools = $('.tool');
    minecraft.tools.on('click', minecraft.clickedTool);

    minecraft.tiles = $('.box');
    minecraft.tiles.on('click', minecraft.clickedTile);

    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            if (minecraft.matrix[i][j] === "") {
                minecraft.matrix[i][j] = "sky";
            }
            $('.box').eq(i * 20 + j).data("i", i).data("j", j).addClass(minecraft.matrix[i][j]);
        }
    }
};

minecraft.clickedTool = function (event) {

    minecraft.tool = event.target.id;
  console.log(minecraft.tool);
    
};

minecraft.clickedTile = function (event){

    minecraft.tile = event.target.className;
    console.log(minecraft.tile);
};

minecraft.checkIfClassMatch = function () {
    //take the id of the "clicked tool"  (minecraft.tool)
    if (minecraft.tool === "axe" && minecraft.tile === "box tree" || "box leaf") {
        minecraft.storedTile = minecraft.clickedTile;
    }

    if else (minecraft.tool === "shovel" && minecraft.tile === "box grass" || "box dirt") {
        minecraft.storedTile = minecraft.clickedTile;
    }

    if else (minecraft.tool === "pick" && minecraft.tile === "box rock") {
        minecraft.storedTile = minecraft.clickedTile;
    }

    else {
        minecraft.tool.addClass(".errorClick");
    }
    

};
minecraft.init();
checkIfClassMatch();
