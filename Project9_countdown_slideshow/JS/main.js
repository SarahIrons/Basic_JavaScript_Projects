function countdown(){
    var seconds= document.getElementById("seconds").value;
    function tick(){
        seconds = seconds-1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick,1000);
        if (seconds ==-1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";

        }
    }
tick();
}

let slideIndex = 1; 
showSlides(slideIndex);

//NEXT/PREVIOUS CONTROLS
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("foliageFade");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1){slideIndex=slides.length}
    for (i=0; i < slides.length; i++){
        slides[i].style.display="none";

    }
    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
slides[slideIndex-1].style.display = "block";

dots[slideIndex-1].className += " active";
}
//IMPORTANT NOT TO FORGET THE SPACE IN " active" on line 45 above--this caused a bug for me when I ran it initially :) 
