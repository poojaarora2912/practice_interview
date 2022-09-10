var validatetotal = document.querySelector("#validatetotal");
var data = document.querySelector("#data");
var ageresult = document.querySelector("#age-result");

validatetotal.addEventListener("click",function(){
    var person1 = {
           name:"Ram",
           age:"25",
           power: "Treta",
       }
       
       var person2 = {
           name:"Krishna",
           age:"21",
           power: "Dwapar",
       }
       
       data.innerText = "Person 1- Name: " + person1.name + " Age: " + person1.age + " Power:" + person1.power
       + ", Person 2- Name: " + person2.name + " Age: " + person2.age + " Power:" + person2.power;

        var totalA = Number (person1.age) + Number (person1.name.length*35);
        var totalB = Number (person2.age) + Number (person2.name.length*35);
            if(totalA> totalB){
                
               ageresult.innerText = "Person 1 total is more";
             }
             else{
                ageresult.innerText = "Person 2 total is more";
             }
            })