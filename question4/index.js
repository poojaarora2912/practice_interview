var text1 = document.querySelector("#text1");
var submit1 = document.querySelector("#submit1");
var submit2 = document.querySelector("#submit2");
var submit3 = document.querySelector("#submit3");
var output = document.querySelector("#output");

function validate1(){
    text1.style.color = "red";
     }

function validate2(){
    text1.style.color = "green";
}

function validate3(){
    text1.style.color ="blue";
}

submit1.addEventListener("click",validate1);
submit2.addEventListener("click",validate2);
submit3.addEventListener("click",validate3);