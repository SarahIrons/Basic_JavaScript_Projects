//Concatenation
function catSmorgasbord(){
    var part01 ="The cats feasted upon ";
    var part02 ="an array of delightful treats ";
    var part03 ="including tuna, chicken, shrimp,";
    var part04 ="and the finest babbling brook water.";
    var fullPhrase= part01.concat(part02,part03,part04);
    document.getElementById("ConCat10Ate").innerHTML= fullPhrase;
}

//SLICE() METHOD
function sliceMethod() {
    var Sentence = "Menu options included salads, subs and pizza.";
    var Section=Sentence.slice(39,44);
    document.getElementById("Slice").innerHTML= Section;
}

//above returned text 'pizza'-- LOL get it?!? I quickly used Google Drive to do a character count of the sentence. But instead I should  run a function of length property. I will try that now.

//FUNCTION TO GET CHARACTER COUNT
function getSentCharLength() {
var Sentence="Menu options included salads, subs and pizza.";
Sentence.length;
document.getElementById("charCount").innerHTML = Sentence.length;
}

//toUpperCase  method
function toUpper(){
    var sentExamp="I like the sound of crunching leaves!";
    var toMakeCap= sentExamp.toUpperCase();
    document.getElementById("makeAllCap").innerHTML=sentExamp.toUpperCase();

}

//search() method
function findMind(){
let text="The Pixies have a song called '\Where is my Mind.\'";
let position=text.search("Mind");
document.getElementById("findWordMind").innerHTML=position;
}

//NUMBER METHODS
function stringNumbersHere(){
    var X=8675309;
    document.getElementById("StringerBell").innerHTML=X.toString();
}

//TOPRECISION() METHOD
function Preciseness(){
    var X=867.53090123456
    document.getElementById("Precise").innerHTML=X.toPrecision(7);
}

//toFixed() method
function toFixxo(){
    let num=9.99123
    let n=num.toFixed(2);
    document.getElementById("Fixxo").innerHTML=n;
}

//valueOf() method
function wheresVal(){
    let text="Here is a sentence with some text that represents a string. The valueOf method will return the contents of this string.It is apparently not used a lot but can be a way to render a boolean value or search within a string.";
    let result=text.valueOf();
    document.getElementById("findVal").innerHTML=result;
}