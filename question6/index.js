var button1 = document.querySelector("#button1");
var loading = document.querySelector("#loading");

function validate(){
    loading.style.display = "none";
    
}

button1.addEventListener("click", validate)