var text1 = document.querySelector("#text1");
var submit1 = document.querySelector("#submit1");
var submit2 = document.querySelector("#submit2");
var submit3 = document.querySelector("#submit3");
var output = document.querySelector("#output");

function validate1(){
    output.innerHTML = "<h1>" + text1.value + "</h1>";
     }

function validate2(){
    output.innerHTML = "<h2>" + text1.value + "</h2>";
}

function validate3(){
    output.innerHTML = "<h3>" + text1.value + "</h3>";
}

submit1.addEventListener("click",validate1);
submit2.addEventListener("click",validate2);
submit3.addEventListener("click",validate3);