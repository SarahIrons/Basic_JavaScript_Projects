function callLoop() {
let a = 0;
let loopProginfo ="";
while (a < 7) {
    loopProginfo += "<br>The number is "+ a; 
    a++;
}
document.getElementById("Loop").innerHTML= loopProginfo;
}

function getTheLength() {
    let text = "What is the length of THIS string?";
    let length = text.length;
    document.getElementById("stringLength").innerHTML = length;
}

//FOR LOOP ASSIGNMENT
let instruments = ["Scalpel","Forceps","Retractor","Scissors","Needle holder","Trocar","Bone saw","Surgical drill","Speculum","Rongeur"];
let indivInstrument = "";
var x;
function for_Loop(){
    for (x=0;x<instruments.length;x++) {
        indivInstrument += instruments[x]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=indivInstrument;
}


// DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT
function arrayFunction(){
    const candleScents = ["Pumpkin","Chai","Cinnamon","Bonfire","Apple"];
    document.getElementById("Array").innerHTML= candleScents;
    candleScents.splice(4,1,"Crisp autumn air");
    console.log(candleScents[4]);
    document.getElementById("NewArray").innerHTML=candleScents;
}
//I used 'splice' function that listed index position, number of elements to remove, and the name of the new element to add. this is on line 33 of the above code.
//CONST KEYWORD ASSIGNMENT
function constantFunction(){
    const Shirt = {type: "teeshirt", color:"white", design:"plain", sleeve:"short", price:"12"};
    document.getElementById("Shirtinfo").innerHTML=Object.entries(Shirt);
    Shirt.color="black";
    Shirt.price=13;
    Shirt.cut="mockneck";
    document.getElementById("Constant").innerHTML="The cost of the "+ Shirt.cut + " " + Shirt.type + " is " + Shirt.price + " dollars.";
}
//LET KEYWORD ASSIGNMENT
let sky="blue";
if (sky==="blue"){
 let sky="green";
 document.getElementById("SkyGreen").innerHTML=sky;
}
//RETURN STATEMENT CHALLENGE
function Greeting(name){
    return "Hi there, " + name + "!"; 
}

//the return value is displayed in the console log!! (Displays 'Hi there Joe'!)

//OBJECT ASSIGNMENT
function CustFunct(){
let Customer= {Name:"Joe James", Age:40, Region: "Southwest US"};
//Pretend that this customer moved to the NE Coast and we want to update the info in the system. We are about to re-declare the variable 'region' and changing it from SW to NE. 
Customer.Region="Northeast US";
document.getElementById("Customer").innerHTML=Customer.Region;
}

//BREAK AND CONTINUE CHALLENGE
for (let i=1; i<=8; i++){
    if (i === 6) break;
    console.log(i);
  }
//the output is 1 2 3 4 5 in console log. 
  
  for (let d = 1; d <= 5; d++) {
    if (d == 3) 
    {continue;
    }
   console.log(d);
}
//the output is 1 2 4 5 in console log.