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

    var toolGround = document.createElement('div');
    toolGround.id = "saved";
    toolGround.className = "storedTile";
    toolSet.appendChild(toolGround);

    $('#saved').on('click',minecraft.clickedSavedTile);
    $('.sky').on('contextmenu',function(event){
        if (minecraft.tool==="") {
            var savedTile = $('.storedTile').removeClass('storedTile');
            this.className += savedTile;
        }
    });
    // minecraft.replaceSavedTile=function(clickEvent){
    //     clickEvent.preventDefault();
    //     if (minecraft.tool==="") {
    //         var savedTile = $('.storedTile').removeClass('storedTile');
    //         this.className += savedTile;
    //     }
    //     // this.className==='box sky'
    // };
    // $(this).bind("contextmenu", function(e) {
    //     e.preventDefault();
    // });

    minecraft.tool = "shovel";
    minecraft.tile = "";
    minecraft.storedTile = "";

    minecraft.tools = $('.tool');
    minecraft.tools.on('click', minecraft.clickedTool);

    minecraft.tiles = $('.box');
    minecraft.tiles.on('click', minecraft.checkIfBoxMatches);

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

    minecraft.tool = this.id;
    console.log(minecraft.tool);

};

minecraft.clickedSavedTile=function(){
 minecraft.tool="";
};

// minecraft.clickedTile = function (event) {
//
//     minecraft.tile = event.target.className;
//     console.log(minecraft.tile);
//
// };

minecraft.checkIfBoxMatches = function () {
    console.log($(this));

    var tileClicked = this;
    console.log(tileClicked);
    // console.log($(this).data('i'));

    minecraft.tile = tileClicked.className;
    console.log(minecraft.tile);
    if (minecraft.tool === "axe" && (minecraft.tile === "box tree" || minecraft.tile === "box leaf")) {
        minecraft.storedTile = minecraft.tile;
        $('.storedTile').removeClass().addClass(minecraft.tile).removeClass('box').addClass('storedTile');
        tileClicked.className="box";
        minecraft.matrix[$(this).data("i")][($(this)).data("j")] = 'box';
        minecraft.renderBoard();
        console.log($(this).data("i"));
        console.log($(this).data("j"));
        console.log(minecraft.matrix);

    }
    else if (minecraft.tool === "shovel" && (minecraft.tile === "box grass") || (minecraft.tile === "box dirt")) {
        minecraft.storedTile = minecraft.tile;
        $('.storedTile').removeClass().addClass(minecraft.tile).removeClass('box').addClass('storedTile');
        tileClicked.className="box";
        minecraft.matrix[$(this).data("i")][($(this)).data("j")] = 'box';
        minecraft.renderBoard();

    }
    else if (minecraft.tool === "pick" && minecraft.tile === "box rock") {
        minecraft.storedTile = minecraft.tile;
        $('.storedTile').removeClass().addClass(minecraft.tile).removeClass('box').addClass('storedTile');
        tileClicked.className="box";
        minecraft.matrix[$(this).data("i")][($(this)).data("j")] = 'box';
        minecraft.renderBoard();
    }

    else {
        console.log(document.getElementById(minecraft.tool));
        var div=document.getElementById(minecraft.tool);
        div.className += ' errorClick';
        setTimeout(function(){
            div.className='tool';
        }, 2000);


    }
};


minecraft.renderBoard = function () {
    minecraft.tiles
        .removeClass("sky")
        .removeClass("tree")
        .removeClass("leaf")
        .removeClass("dirt")
        .removeClass("grass")
        .removeClass("rock");

    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            minecraft.tiles.eq(i * 20 + j).addClass(minecraft.matrix[i][j]);
        }
    }
}
minecraft.init();



