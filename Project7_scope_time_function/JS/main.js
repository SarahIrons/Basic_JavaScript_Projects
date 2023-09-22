//LOCAL AND GLOBAL VARIABLE ASSIGNMENT
var globVar = 13;
  
function addOne() {
    globVar = globVar + 1;
}

function print() {
    console.log("The output value is "+ globVar);
} 

addOne();

print(); 

//resource as guide: https://www.scaler.com/topics/javascript-global-variable/


function functionWithLocalVariable(){
    let localVariable = "I am a local variable being passed to another function.";
    functionThatUsesTheLocalVariable(localVariable);
  }
  
  function functionThatUsesTheLocalVariable(variable){
    console.log(variable);
  }
  
  functionWithLocalVariable();

  //resource as guide for local variable exercise: https://devpractical.com/local-variable-javascript/#:~:text=Local%20Variable%20Within%20Function%20and%20Block%20Example&text=log(totalpages)%3B%20console.,scope%20variable%20inside%20function%20getWordExistInPage%20.

  function localVari(){
    num1=11;
    num2=2;
    document.write(num1+num2);
    }
//this above function will give output of '13 displayed in console log.


//Intentional error assignment

//function fixThisCode(){
   // var Dots=700;
    //var Dashes=21;

//}
//document.write(Dots+Dashes);
//I get error in console log--main.js:47 Uncaught ReferenceError: Dots is not defined
    
//to debug I will: write the addition function inside of the code since these are local variables. 
function fixThisCode(){
     let Dots=700;
    let Dashes=21;
document.write(Dots+Dashes);
}


function getTheTime(){
  var time= new Date().getHours();
  if (time < 12) {
    document.getElementById("Greeting").innerHTML="Hi! Did you eat breakfast? I prefer coffee and eggs.";
  } else if (time >= 12 && time < 17) {
    document.getElementById("Greeting").innerHTML="Hello! Good afternoon.";
  } else if (time >= 17 && time < 20) {
    document.getElementById("Greeting").innerHTML="Good Evening.";
  } else  {
    document.getElementById("Greeting").innerHTML="Have a great night; pleasant dreams!";
  }
}
//I modified the above function to use the getElementbyID and to ensure that it would display correct format of time. I also modified the greetings. The 'if' statements use '&&' which are logical boolean operators to apply if both/all of info is true; otherwise it would render as false. This is how the if statements are able to render the appropriate greeting based on time/hours.

//IF STATEMENT ASSIGNMENT
function countApples(){
  var apple=200;  
  if(apple>100){  
  document.write("There are more than 100 apples in the crate.");  
  }  
}
//ELSE IF STATEMENTS
//this is going to be similar to the above function 'get the time'.

function Time_function(){
  var Time=new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  }
    else if (Time >= 12 == Time < 18) {
      Reply = "It is afternoon.";
    }
    else{
      Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML= Reply;
    }  
//a few more notes below about the logical operators (to help me remember/learn)
    //The equality ( == ) operator checks whether its two operands are equal, returning a Boolean result.
//The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
