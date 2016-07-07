/**
 * Created by itc_user on 7/7/2016.
 */
AnswerMatrix2 = [
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
    ["dirt", "dirt", "dirt", "dirt", "dirt","", "", "", "", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "", "", "", "", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"]


];
function init () {
    for (var r = 0; r < 20; r++) {
        var bigBox = $("<div/>");
        bigBox.addClass("row");
        $('body').append(bigBox);
        for (var c = 0; c < 20; c++) {
            var box = $("<div/>");
            box.addClass("box");
            bigBox.append(box);
        }
    }

    for (var i = 0; i < AnswerMatrix.length; i++) {
        for (var j = 0; j < AnswerMatrix[i].length; j++) {
            if (AnswerMatrix[i][j] === "") {
                AnswerMatrix[i][j] = "sky";
            }
            $('.box').eq(i * 20 + j).data("i", i).data("j", j).addClass(AnswerMatrix[i][j]);

        }
    }
};

init();
