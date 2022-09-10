var validatepower = document.querySelector("#validatepower");
var data = document.querySelector("#data");
var ageresult = document.querySelector("#age-result");

validatepower.addEventListener("click",function(){
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
    
        console.log(person1.power);
        console.log(person2.power);
        var power1 = person1.power;
        var power2 = person2.power;
        console.log(power1.localeCompare(power2));
        if(power1.localeCompare(power2) < 0 ) {
           ageresult.innerText = "Person 1 power is more";
         }
         else{
            ageresult.innerText = "Person 2 power is more";
         }
        
        }
        )