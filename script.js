var ids = ["btn1", "btn2", "btn3"];
var x = Math.round(Math.random() * 2);
var y = x + 1;
document.getElementById("btn1").addEventListener("click",
    function () {
        document.getElementById("card-title").style.color = "red";
        document.getElementById('card-title').innerHTML = "you Lost!";
        document.getElementById('card-text').innerHTML = "The winner button was " + y + "";
    }
);
document.getElementById("btn2").addEventListener("click",
    function () {
        document.getElementById("card-title").style.color = "red";
        document.getElementById('card-title').innerHTML = "you Lost!";
        document.getElementById('card-text').innerHTML = "The winner button was " + y + "";
    }
);
document.getElementById("btn3").addEventListener("click",
    function () {
        document.getElementById("card-title").style.color = "red";
        document.getElementById('card-title').innerHTML = "you Lost!";
        document.getElementById('card-text').innerHTML = "The winner button was " + y + "";
    }
);
document.getElementById(ids[x]).addEventListener("click",
    function () {
        document.getElementById("card-title").style.color = "green";
        document.getElementById('card-title').innerHTML = "you win!";
        document.getElementById('card-text').innerHTML = "Congratulations!!!";
    }
);
function disable() {
    var elems = document.getElementsByClassName("btn btn-primary");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }
}