var x = Math.round(Math.random() * 2);
var y = x + 1;
var btn = document.getElementsByClassName("btn btn-primary");
for (var i = 0; i < btn.length; i++) {
    if (i == x) {
        btn[i].setAttribute('onclick', 'win(); disable()');
    } else {
        btn[i].setAttribute('onclick', 'lost(); disable()');
    }
}
function lost() {
    document.getElementById("card-title").style.color = "red";
    document.getElementById('card-title').innerHTML = "you lost!";
    document.getElementById('card-text').innerHTML = "The winner button was " + y + "";
}
function win() {
    document.getElementById("card-title").style.color = "green";
    document.getElementById('card-title').innerHTML = "you win!";
    document.getElementById('card-text').innerHTML = "Congratulations!!!";
}
function disable() {
    var elems = document.getElementsByClassName("btn btn-primary");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }
}