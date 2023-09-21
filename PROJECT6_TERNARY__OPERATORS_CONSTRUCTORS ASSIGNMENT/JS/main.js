function rideFunct() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride. "; 
}

// TERNARY OPERATORS CHALLENGE
function ageFunct() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote.":"You are old enough to vote so get out there and SAVE DEMOCRACY!";
    document.getElementById("Vote").innerHTML = Can_vote + " "; 
}


//KEYWORDS
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle ("Ford","Pinto",1971,"Mustard");

function myFunct() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}



//NEW KEYWORD ASSIGNMENT

function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

var Carlo = new Person ("Carlo","Irons");
var Jody = new Person("Jody","Roach");
//var Pat = new new ("Patrick","Roach");
var Pat = new Person ("Patrick","Roach");

function nuCodeWhoDis () {
document.getElementById("New_and_This").innerHTML = "Hello, " + Carlo.firstName + "&nbsp" + Carlo.lastName + "! I hope you have a great rest of your day.";
}

//RESERVED KEYWORD CHALLENGE

   // Patrick Roach is listed as not a constructor when I tried running the function as above. On line 45 I changed var Pat from variable 'Person' to variable named 'new' which did not render since it is a reserved word in JavaScript. see below for console output--
   //Uncaught TypeError: ("Patrick" , "Roach") is not a constructor
    //at main.js:45:15
    //2main.js:54 Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
        //at nuCodeWhoDis01 (main.js:54:75)
        //at HTMLButtonElement.onclick (index.html:33:36)
//end console output

function Sibling(firstName, lastName, age) {
    this.first_Name = firstName;
    this.last_Name = lastName;
    this.age = age;
  }

/*   window.onload = function sibInfo() {
    console.log('The Script will load now.');
} */
  var sister1 = new Sibling ("Jenny","Sloas",43);
  var sister2 = new Sibling ("Julie","Cave",46);



function sibInfo() {
document.getElementById("siblingInformation").innerHTML = "I have two sisters named " + sister1.first_Name +" and "+ sister2.first_Name +".";
  }

  //I had a hard time getting the pages to load so I put in a script to get window to load and THEN set off the function after this step takes place. line 70 in JS file; found on Geeks for Geeks 
  //  https://www.geeksforgeeks.org/how-to-run-a-function-when-the-page-is-loaded-in-javascript/
  //OK the above did not work but I'm leaving it in to show that I was trying to work it out!!
  
  //I took out this code/function separately in a test file and it WORKED. I was still unsure where it was bugging in this assignment folder. It ended up being broken at the past assignment point where we were asked to incorrectly name a variable with a reserved name. This is commented/noted within Lines 52-60 above. When I removed line 45 of code I GOT THE FUNCTION TO WORK !!!


    //NESTED FUNCTIONS
    

function addSquares(x,y){
    document.getElementById("Nested_Function").innerHTML = sumSqus();
    function sumSqus() {
        function squfunct(numToSquare) {
            return numToSquare * numToSquare; 
        }
        return squfunct(x) + squfunct(y);  
    };
}
//The nested functions were/are CHALLENGING for me to grasp. I found this online and adjusted it to reflect the assignment to use the get element by id method. I was running into errors because I was not fully understanding the concept until further studying and working through it. It was helpful to re-name variable 'z' as 'num to Square' to explain what the function was doing; as I was hitting an error by not defining 'z' initially. 
