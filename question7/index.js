var nameapi = document.querySelector("#nameapi");
var buttonapi = document.querySelector("#buttonapi");
var output = document.querySelector("#output");
var finaloutput = document.querySelector("#finaloutput");

var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

function validateapi(){
        fetch(getTranslation(nameapi))
        .then(response => {
            return (response.json());
            
            
        }).then(response => {
            console.log(response);
            console.log("Data is as follows:");
            console.log(response.otp);
            var otp = response.otp;
            output.innerText = otp;

            console.log(response.success);
            var success = response.success;
            output.innerText = "Details: " + otp + " " + success;

            return (response.success);

        })
        .then(response => {
          //  console.log("Second then:" + response);
            //console.log(response.split("-").pop());
            var finalvalue = response;
            finaloutput.innerText = "Success: " + finalvalue;
            //console.log(finalvalue);
             if(finalvalue === true){
                 console.log("Success !!");
             }else{
                  console.log("Faillll !!");
              }
        })
    
    }

    function getTranslation(input){
        
            var fullurl = url + input;
            return fullurl;
        }

buttonapi.addEventListener("click", validateapi)