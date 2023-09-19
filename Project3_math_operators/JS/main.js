
// ADDITION FUNCTION
let x = 5;
let y = 2;
let z = x + y;


function getZ(){
    document.getElementById("Math").innerHTML = z;

}

// SUBTRACTION FUNCTION
function subfunct(){
    var Subtraction= 11 - 8; 
    document.getElementById("output").innerHTML="11 - 8 = " + Subtraction;
}

// MULTIPLICATION FUNCTION
function multfunct(){
    var multiplyThis = 5*9
    document.getElementById("multAns").innerHTML="5 * 9 = " + multiplyThis;
}

// DIVISION FUNCTION
function divFunct(){
    var divideThis = 100 / 25; 
    document.getElementById("divAns").innerHTML="100 / 25 = " + divideThis;
}

// MULTI OPERATORS ASSIGNMENT
function multiOpFunct(){
    var muchMath = (5+5)*2/5-1;
    document.getElementById("multiOpAns").innerHTML="5 plus 5, multiplied by 2, divided by 5, minus one equals " + muchMath;
}

// MODULUS OPERATOR
function modulOp(){
    var moduMath = 14/8;
    document.getElementById("moduAns").innerHTML= "When you divide 14 by 8 you have a remainder of " + moduMath;
}

// UNARY OPERATOR
function negationOperator(){
    var x= 9;
    document.getElementById("unaryAns").innerHTML= -x; 
}

// INCREMENT OPERATOR
function incremOperator() {
var E= 7.2; 
E++;
document.write(E);
}
// the "document-write" method will display output in a new window and you have to hit refresh to get back to the main display page--I am trying to work through how to adjust this.


// DECREMENT OPERATOR
function decremOperator(){
var F= 2.7; 
F--;
document.write(F);
}

// RANDOM NUMBER GENERATION
function getRandNum(){
window.alert(Math.random()*100);
}

// MATH OBJECT demo
// Math.ceil with a numeric string: this is a number string because there is a decimal invovled; this will round to the next largest integer. In cases involving a negative number, the number '-8.34' would then round to '-8' because mathematically -8 is larger.

// I cannot get the math ceil operation to run as a function; only as an html script. I have been unable to call it from js file. 


// Math power; a number to the power of another number/exponent
function powOperator(){
document.getElementById("powOp").innerHTML = Math.pow(3,3);
}