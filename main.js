
var stars = document.getElementsByTagName('span');
var count = 0; //formiranje stabla, kaunter za ponavljanje funkcija
var num = 26; //visina krošnje
var buttons = Array.from(document.getElementsByTagName('button'));
var shape = "star";
var main = document.getElementsByTagName('main')[0];
creatingTree();

//SHAPE CHANGING
buttons.forEach((el) => {
    el.addEventListener("click", function (el) {
        shape = this.id;
        count = 0;
        main.innerHTML = "";
        creatingTree();
    })
});

//CREATING TREE
function creatingTree() {
    var text = '<div class="line">';
    for (var i = 0; i < num; i++) {
        text += '<span style="margin-left:' + i * (0.7) + 'px"class="glyphicon glyphicon-' + shape + '"></span>';
        main.innerHTML += (text + '</div>');
    }
    if (i == num) {
        trunk();
    }
}

//CREATING TRUNK, CALLING FUNCTION 4 TIMES
function trunk() {
    var text = '<div class="line2">';
    for (let i = 0; i < 5; i++) {
        text += '<div style="color:brown; margin:' + (count - 4) + 'px;" class="glyphicon glyphicon-align-justify"></div>';
    }
    main.innerHTML += (text + '</div>');
    if (++count < 4) {
        runAgain();
        function runAgain() {
            setTimeout(trunk, 1);
        }
    }
}

//COLOR CHANGING
setInterval(function () {
    var interval = Math.floor(Math.random() * 4000);
    for (el of stars) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var comb = `rgb(${r},${g},${b})`;
        el.style.color = comb;
    }
}, 2000)