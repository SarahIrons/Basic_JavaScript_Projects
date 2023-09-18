// this is the script for the button function!
function myFunction() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Easy");
    x.appendChild(t);
    document.body.appendChild(x);
  }

  // this is a concatenated string using the  += operator:
 


  function beeFact()  {
    var sentence = "Using a combination of virtual stereo systems and intersecting laser beams,";
    sentence += " researchers in Querétaro, Mexico, found that a bumblebee\’s wings beat an impressive 200 times each second.";
    document.getElementById("Concatenate").innerHTML = sentence;
  }
// resource for bee fact: Treehugger website https://www.treehugger.com/bumblebee-facts-5119379 
// I got stuck because at first I did not name my functions differently. Also I missed a semi colon in the beeFact function section. I was able to catch it with the VS code calling attention to that area and alerting me to that section to look more at it until I found the error!!