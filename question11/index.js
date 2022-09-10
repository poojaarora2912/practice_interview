var password = document.querySelector("#password");
var passwordresult = document.querySelector("#password-result");
var checker = document.querySelector("#checker");

function validate(){
    var password1 = password.value;
    if(password1.length < 10){
        passwordresult.innerText = "Not valid!";
        password.style.color = "red";
        
    }
    else{
        passwordresult.innerText="Success!";
        password.style.color = "green";
        checker.disabled = false;
    }
}




password.addEventListener("input",validate);