var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var output = document.querySelector("#output");

var sum=0, sub=0, mul=1, div=1;

function computeadd(){
    const number1 = parseInt(num1.value);
    const number2 = parseInt(num2.value);
    sum = number1 + number2;
    output.innerText = "Sum of:" + number1 + " and" + number2 + " is " + sum;
}
function computesubtract(){
    const number1 = parseInt(num1.value);
    const number2 = parseInt(num2.value);
    sub = number1 - number2;
    output.innerText = "Sum of:" + number1 + " and " + number2 + " is " + sub;
}
function computemultiply(){
    const number1 = parseInt(num1.value);
    const number2 = parseInt(num2.value);
    mul = number1 * number2;
    output.innerText = "Sum of:" + number1 + " and " + number2 + " is " + mul;
}
function computedivide(){
    const number1 = parseInt(num1.value);
    const number2 = parseInt(num2.value);
    div = number1/ number2;
    output.innerText = "Sum of:" + number1 + " and " + number2 + " is " + div;
}

add.addEventListener("click",computeadd);
subtract.addEventListener("click",computesubtract);
multiply.addEventListener("click",computemultiply);
divide.addEventListener("click",computedivide);