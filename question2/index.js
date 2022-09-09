var text1 = document.querySelector("#text1");
var increase = document.querySelector("#increase");
var decrease = document.querySelector("#decrease");

function increaseFont(){
        //textoutput.innerText = text1.value;
        var fontsize1 = window.getComputedStyle(textoutput).fontSize;
        console.log(fontsize1);
        var fontsize2 = fontsize1.replace("px","");
        console.log(fontsize2);
        fontsize2 = Number(fontsize2);
        console.log(fontsize2);
        fontsize2 = fontsize2+2;
        console.log(fontsize2);
        fontsize2 = fontsize2 + "px";
        console.log(fontsize2);
    
        document.getElementById("text1").style.fontSize=fontsize2;
    }

    function decreaseFont(){
        //textoutput.innerText = text1.value;
        var fontsize1 = window.getComputedStyle(textoutput).fontSize;
        console.log(fontsize1);
        var fontsize2 = fontsize1.replace("px","");
        console.log(fontsize2);
        fontsize2 = Number(fontsize2);
        console.log(fontsize2);
        fontsize2 = fontsize2-2;
        console.log(fontsize2);
        fontsize2 = fontsize2 + "px";
        console.log(fontsize2);
    
        document.getElementById("text1").style.fontSize=fontsize2;
    }

    increase.addEventListener("click",increaseFont);
    decrease.addEventListener("click", decreaseFont);