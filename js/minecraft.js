//Landing page ~ Welcome Screen ~ Enter player name
var LandingPage = {};

LandingPage.init = function(){
    $(document).ready(function(){
        $(".btn-post").one("click",function(){
            var btn = $(this);
            btn.animate({top: "427px"});
            btn.text("START");
            btn.id="start";
            $(this).click(function(){
                $("#landingPage").fadeOut();
                $('.game').show();
            })
        });
    })
}

LandingPage.init();

LandingPage.getName = function () {
    return $("#playerName").val();
};

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

//creating the answer matrix in order to check if what the player submits corresponds to the answer
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
//creating another answer matrix
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
        $('.game').append(bigBox);    }

}
//creating a function that allows the player to choose which picture he wants to recreate
minecraft.selectedImage = function () {
    if ($(".example.selected").length == 0 ) {
        var selected = $(this);
        selected.addClass('selected');
        if (selected.attr('id') === "first") {
            minecraft.example = minecraft.AnswerMatrix;
            $('#first').height(350);
            $('#first').width(350);
            $('#second').css('display','none');
        }
        else if (selected.attr('id') === "second") {
            minecraft.example = minecraft.AnswerMatrix2;
            $('#second').height(350);
            $('#second').width(350);
            $('#first').css('display','none');
        }
    }
};


//function initialisation that will be called first
minecraft.init = function () {

    $('img').on("click", minecraft.selectedImage); //adding an event listener to the images
    $('#treasure').attr("data-saved-tile", ""); // creating a data called 'saved-tile' that will save the value of the saved-tile
    minecraft.tool = "shovel"; //variable that stocks the tool selected
    minecraft.tile = ""; //variable that stocks the tile selected
    minecraft.storedTile = ""; //variable that stocks the value of the stored tile
    minecraft.example=[]; //matrix that contains the image chosen by the player (the one he wants to recreate)
    $('#submit').on('click', minecraft.checkIfWon); //adding an event listener to the submit button that will check if the player won the game

    minecraft.tools = $('.tool');
    minecraft.tools.on('click', minecraft.clickedTool);

    minecraft.tiles = $('.box');
    minecraft.tiles.on('click', minecraft.checkIfBoxMatches);

    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            if (minecraft.matrix[i][j] === "") {
                minecraft.matrix[i][j] = "sky";
                minecraft.AnswerMatrix[i][j] = "sky";
                minecraft.AnswerMatrix2[i][j]="sky";
            } //inside every matrix when the element is empty it means that there needs tp be sky so i am adding the sky in all three matrices throught loops
            $('.box').eq(i * 20 + j).data("i", i).data("j", j).addClass(minecraft.matrix[i][j]);
//adding to every box data that will contain the index of the matrix and adding the class to the boxes according to the matrix.
        }
    }
};
//function that savec the id of the clicked tool inside the variable minecraft.tool
minecraft.clickedTool = function (event) {
    minecraft.tools.removeClass("selected");
    $(this).addClass("selected");
    minecraft.tool = this.id;
};




//function that checks if the tool selected can be used on the tile selected 
minecraft.checkIfBoxMatches = function () {

    var tileClicked = $(this);
    minecraft.tile = tileClicked.prop('class').replace("box ", "");

//checking if the proper tool is selected for the proper tile
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
    // if the selected tool does not match the tile you have an error
    else {

        var div = document.getElementById(minecraft.tool);
        div.className += ' errorClick';
        setTimeout(function () {
            div.className = 'tool';
        }, 1000);
    }

};


//inner function that if the right tool selects the right tile, takes the class of the tile selected and saves it inside the storedTile and then reloads the matrix
minecraft.moveTile =  function(tileClicked) {
    minecraft.storedTile = minecraft.tile;
    $('#treasure').attr("data-saved-tile", minecraft.tile);
    minecraft.matrix[tileClicked.data("i")][tileClicked.data("j")] = 'box sky';
    minecraft.renderBoard();
};

//checks if every element of the matrix is equal to the example matrix
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
        $('#message').text('congratulations '+$("#playerName").val()+'!!! you are the best!!!');
        $('#lightbox').show();
    } else {
        $('#message').text('sorry you lost');
        $('#lightbox').show();
    }
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



