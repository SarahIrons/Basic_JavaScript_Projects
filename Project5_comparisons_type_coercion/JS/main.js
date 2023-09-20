// coercion function
document.write("61"+ 4);

// NaN exercises
function functNaN() {
    document.getElementById("Test").innerHTML= 0/0;
};

function functisNaN() {
document.getElementById("isNaNTest").innerHTML= isNaN('this is a string');
};

function functisNaN01() {
    document.getElementById("isNaNTest01").innerHTML= isNaN('007');
}

// I want to run the function to get results of true and then false for the string and the 007 outputs. But then I had a question-can I run same isNaN function on both or do I need separate function called for these two separate things? when I tried to put brackets around all three of the functions above, it yielded one 'false' result. i did that to try and run all three things at same time to make it clean and efficient. 
// now I will make a separate 2nd function to call and try to see if I can use it to run for the items of a string of words and the number 007. 
// It seems like I need separate queries for each separate item instead of being able to run a function on more than one item. this feels/seems inefficient.
// I was able to run/execute all of the code/functions when I separately named the same function of isNaN to target the lines as separate entities.


// Infinity

function dispInfinity(){
document.write(2E310);
}

function dispNegInfinity(){
document.write(-3E310);
}

// BOOLEAN LOGIC
function dispBoolean(){
    document.write(10>2);
}
function dispBoolean01(){
    document.write(10<2);
}

// CONSOLE.LOG ASSIGNMENT
console.log(8+3);
// this yielded output '11' in console log.
console.log(2<1);
// this yielded output 'false in console log.
// DOUBLE EQUAL SIGNS ASSIGNMENT
console.log(3==3);
// yielded 'true' output in console log.
console.log(2==3);
// yielded 'false in console log.
// TRIPLE EQUAL SIGNS
console.log(10===10);
// data type and value are same, thus true output
console.log(10==='10');
// data type and value are differing (false) because one is string and other is number.
console.log(1===2);
// data type is same but value is 1 vs 2 so result will be false.
// LOGICAL OPERATORS
function dispLogOp1(){
document.write(11<20 && 10< 11);
}
// will display as true since 11 is less than 20 and 10 is less than 11.
function dispLogOp2(){
document.write(9>10 && 1<2);
}
// will display as false because 10 is greater than 9. 
function dispLogOp3(){
document.write(17>16||3<2);
}
//will display as true because 17 is greater than 16 even though 3 is greater than 2.
function dispLogOp4(){
 document.write(1>100||9>99);
}
//will display false since neither statement is true. 
//NOT OPERATOR
function notFunct(){
    document.getElementById("Not Operator").innerHTML=!(35>17);
}
//this would return output 'false' since 35 is greater than 17.
function notFunct01(){
    document.getElementById("Not Operator 01").innerHTML=!(17>22);
}
//this will return output true because it's a double negative.
