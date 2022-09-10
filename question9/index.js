var nameapi = document.querySelector("#nameapi");
var buttonapi = document.querySelector("#buttonapi");
var output = document.querySelector("#output");

var url = "https://mystery-api.kushanksriraj.repl.co/get"

function validateapi(){
    fetch(url)
    .then(response => {
        if(response.status === 404){
        console.log("404 error!");
        output.innerText = "Page not found!";
        }
        else if(response.status === 401){
            console.log("404 error!");
            output.innerText = "User not logged in!";
        }else{
            output.innerText = "Other error!"
        }
    })
}

buttonapi.addEventListener("click", validateapi);
   