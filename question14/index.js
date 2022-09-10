var validateage = document.querySelector("#validateage");
var data = document.querySelector("#data");
var ageresult = document.querySelector("#age-result");




validateage.addEventListener("click", function(){

    var person1 = {
        name:"Ram",
        age:"25",
        pyuga: "Treta",
    }
    
    var person2 = {
        name:"Krishna",
        age:"21",
        pyuga: "Dwapar",
    }
    
    data.innerText = "Person 1- Name: " + person1.name + " Age: " + person1.age + " Pyuga:" + person1.pyuga
    + ", Person 2- Name: " + person2.name + " Age: " + person2.age + " Pyuga:" + person2.pyuga;
    

        if(person1.age > person2.age){
           
          ageresult.innerText = "Person 1 age is more";
        }
        else{
           ageresult.innerText = "Person 2 age is more";
        }
    
});

