

// var textoutput = document.querySelector("#textoutput");
// var text2 = document.querySelector("#text2");
// var submitthree = document.querySelector("#submitthree");
// var outputthree = document.querySelector("#outputthree");
// var button1 = document.querySelector("#button1");
// var password = document.querySelector("#password");
// var passwordresult = document.querySelector("#password-result");
// var checker = document.querySelector("#checker");
// var validateage = document.querySelector("#validateage");
// var ageresult = document.querySelector("#age-result");
var nameapi = document.querySelector("#nameapi");
var buttonapi = document.querySelector("#buttonapi");
var project1 = document.querySelector("#project1"); 





// function questionthree(){
//     //document.getElementById("text2").style.color = "red";
    
//     //outputthree.innerHTML = "<h1>" + text2.value + "</h1>";
// }

// function loading(){
// document.getElementById("h1element").style.display = "none";

// }

// function validate(){
//     var password1 = password.value;
//     if(password1.length < 10){
//         passwordresult.innerText = "Not valid!";
//         password.style.color = "red";
//         checker.disabled = "true";
//     }
//     else{
//         passwordresult.innerText="Success!";
//         password.style.color = "green";
//         checker.disabled = "true";
//     }
// }


// //submitthree.addEventListener("click",questionthree);
// //button1.addEventListener("click", loading);
// //checker.addEventListener("click",validate);


// var person1 = {
//     name:"Ram",
//     age:"25",
//     pyuga: "Treta",
// }

// var person2 = {
//     name:"Krishna",
//     age:"21",
//     pyuga: "Dwapar",
// }

// function greaterAge(personA, personB){
    
//     if(personA.age > personB.age){
        
//       ageresult.innerText = "Person 1 age is more";
//     }
//     else{
//        ageresult.innerText = "Person 2 age is more";
//     }
// }

// function greaterPower(personA, personB){
//     console.log(personA.pyuga);
//     console.log(personB.pyuga);
//     var pyuga1 = personA.pyuga;
//     var pyuga2 = personB.pyuga;
//     console.log(pyuga1.localeCompare(pyuga2));
//     if(pyuga1.localeCompare(pyuga2) < 0 ) {
//        ageresult.innerText = "Person 1 power is more";
//      }
//      else{
//         ageresult.innerText = "Person 2 power is more";
//      }
// }

// function greaterTotal(personA, personB){
//     var totalA = Number (personA.age) + Number (personA.name.length*15);
//     var totalB = Number (personB.age) + Number (personB.name.length*15);
//         if(totalA> totalB){
            
//            ageresult.innerText = "Person 1 total is more";
//          }
//          else{
//             ageresult.innerText = "Person 2 total is more";
//          }
//     }

//validateage.addEventListener("click",greaterAge(person1, person2));
//validateage.addEventListener("click",greaterPower(person1, person2));
//validateage.addEventListener("click",greaterTotal(person1, person2));

// var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

// function validateapi(){
//     fetch(getTranslation(nameapi))
//     .then(response => {
//         return (response.json());
        
        
//     }).then(response => {
//         console.log(response);
//         console.log(response.otp);
//         console.log(response.success);
//         return (response.success);
//     })
//     .then(response => {
//         console.log("Second then:" + response);
//         //console.log(response.split("-").pop());
//         var finalvalue = response;
//         console.log(finalvalue);
//          if(finalvalue === true){
//              console.log("Success !!");
//          }else{
//               console.log("Faillll !!");
//           }
//     })

// }

// function getTranslation(input){
//     var fullurl = url + input;
//     return fullurl;
// }

var url = "https://mystery-api.kushanksriraj.repl.co/get"

function validateapi(){
    fetch(url)
    .then(response => {
        console.log("Then: " + response);
        //console.log ("Data: " + response.statusText);
        // if(response.status === 401){
        //     console.log("401 error done !");
        }
    //}
    )
   // .catch(errorHandler);
}

// function errorHandler(error){
//     console.log("Caught!!" + error);
//}

buttonapi.addEventListener("click", validateapi);