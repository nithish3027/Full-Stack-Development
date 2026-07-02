var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var result = document.getElementById("result");
var btn = document.getElementById("btn");

btn.onmouseover = function() {
    btn.style.backgroundColor = "red";
}
btn.onmouseout = function() {
    btn.style.backgroundColor = "blue";
}

function add() {
    var total = Number(num1.value) + Number(num2.value);
    result.textContent = total;
}
