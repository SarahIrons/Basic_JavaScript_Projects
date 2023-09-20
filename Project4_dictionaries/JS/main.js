function plantDictionary() {
    var houseplant1 = {
        Name:"Money tree",
        Color:"green",
        Flowers:"no",
        okPet:"Yes",
       okBeginner:"Yes",
    }

    var houseplant2 = {
        Name:"Cactus",
        Color:"green",
        Flowers:"yes",
        okPet:"Yes",
       okBeginner:"Yes",
    }

    document.getElementById("Plant").innerHTML=houseplant1.Name;

    document.getElementById("plantinfo").innerHTML = "Is a " + houseplant1.Name + " plant pet-safe? "+ houseplant1.okPet; 

    delete houseplant1.Flowers;
    document.getElementById("plantDictionary").innerHTML=houseplant1.Flowers;

}
// DICTIONARY CHALLENGE
    // Try to create a dictionary of KVPs where two pairs have identical keys. Attempt to run it in the browser and observe what happens.

// When there were identical keys with same answer the code still ran. when there was a different value (no vs yes) the more recent value displayed. This was attempted at lines 6 & 7 with "ok for pets" question and answers being yes or no. I removed the duplicate line after the exercise.

// DELETE ASSIGNMENT
// this code is on lines 22 thru 24. it returned a 'null' answer upon reviewing the console inspection in browser.