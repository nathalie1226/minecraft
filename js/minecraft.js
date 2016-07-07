var minecraft = {}; //creates the minecraft object
//creating the matrix
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

//creating the answer matrix
minecraft.AnswerMatrix = [
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
minecraft.AnswerMatrix2 = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "cloud", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "cloud", "cloud", "cloud", "cloud", "", "cloud", "cloud", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "cloud", "cloud", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tree", "", "", ""],
    ["", "", "", "rock", "", "", "", "", "", "", "", "", "", "", "", "", "tree", "", "", ""],
    ["", "", "rock", "rock", "rock", "", "", "", "", "", "", "", "", "leaf", "leaf", "", "tree", "", "", "leaf"],
    ["grass", "grass", "grass", "grass", "grass", "", "", "", "", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "", "", "", "", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "", "", "", "", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "", "", "", "", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "", "", "", "", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"]


];

//creating the board
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
minecraft.selectedImage = function () {
    if ($(".example.selected").length == 0 ) {
        var selected = $(this);
        selected.addClass('selected');
        if (selected.attr('id') === "first") {
            minecraft.example = minecraft.AnswerMatrix
        }
        else if (selected.attr('id') === "second") {
            minecraft.example = minecraft.AnswerMatrix2
        }
    }
};
minecraft.shuffle = function () {

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};
//function initialisation that will be called first
minecraft.init = function () {

    $('img').on("click", minecraft.selectedImage);
    $('#treasure').attr("data-saved-tile", "");
    minecraft.tool = "shovel";
    minecraft.tile = "";
    minecraft.storedTile = "";
    minecraft.example=[];
    $('#submit').on('click', minecraft.checkIfWon);

    minecraft.tools = $('.tool');
    minecraft.tools.on('click', minecraft.clickedTool);

    minecraft.tiles = $('.box');
    minecraft.tiles.on('click', minecraft.checkIfBoxMatches);

    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            if (minecraft.matrix[i][j] === "") {
                minecraft.matrix[i][j] = "sky";
                minecraft.AnswerMatrix[i][j] = "sky";
            }
            $('.box').eq(i * 20 + j).data("i", i).data("j", j).addClass(minecraft.matrix[i][j]);

        }
    }
};

minecraft.clickedTool = function (event) {
    minecraft.tool = this.id;
};




minecraft.checkIfWon = function () {
    var foundProblem = false;
    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            if (minecraft.matrix[i][j] !== minecraft.example[i][j]) {
                foundProblem = true;
                break;
            }
        }
    }
    if (!foundProblem) {
        $('#message').text('congrats');
        $('#lightbox').show();
    } else {
        $('#message').text('sorry you lost');
        $('#lightbox').show();
    }
};
//function that checks if the tool selected can be used on the tile selected 
minecraft.checkIfBoxMatches = function () {

    var tileClicked = $(this);
    minecraft.tile = tileClicked.prop('class').replace("box ", "");


    if (minecraft.tool === "axe" && (tileClicked.hasClass("tree") || tileClicked.hasClass("leaf"))) {
        minecraft.moveTile (tileClicked);
    }
    else if (minecraft.tool === "shovel" && (tileClicked.hasClass("grass")) || (tileClicked.hasClass("dirt"))) {
        minecraft.moveTile (tileClicked);

    }
    else if (minecraft.tool === "pick" && tileClicked.hasClass("rock")) {
        minecraft.moveTile (tileClicked);
    }
    // to reposition the tiles that were saved you need to select the 'treasure tool' and then you can click anywhere in the 'sky' and put it there
    else if (minecraft.tool === "treasure" && tileClicked.hasClass("sky")) {
        var saved = $('#treasure').attr("data-saved-tile");
        tileClicked.addClass(saved).removeClass('sky');
        minecraft.matrix[tileClicked.data("i")][tileClicked.data("j")] = $('#treasure').attr("data-saved-tile");
        minecraft.renderBoard();
        $('#treasure').attr("data-saved-tile", " ");


    }
    // if the selected tool does not match the tile you can an'error
    else {

        var div = document.getElementById(minecraft.tool);
        div.className += ' errorClick';
        setTimeout(function () {
            div.className = 'tool';
        }, 2000);
    }

};


//inner function that if the tool selects the right tile takes the class of the tile selected and saves it inside the storedTile and then reloads the matrix
minecraft.moveTile =  function(tileClicked) {
    minecraft.storedTile = minecraft.tile;
    $('#treasure').attr("data-saved-tile", minecraft.tile);
    minecraft.matrix[tileClicked.data("i")][tileClicked.data("j")] = 'box sky';
    minecraft.renderBoard();
};

//updating the board according to the matrix
minecraft.renderBoard = function () {
    minecraft.tiles

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
};
minecraft.init();



