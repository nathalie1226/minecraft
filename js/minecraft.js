
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
    document.body.appendChild(bigBox);
}

minecraft.init=function(){
    
    // for(var r=0;r<minecraft.matrix.length;r++) {
    //     for (var c = 0; c < minecraft.matrix[r].length; c++) {
    //         if (minecraft.matrix[r][c] === "") {
    //             minecraft.matrix[r][c] = "sky";
    //         }
    //     }
    // }
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
