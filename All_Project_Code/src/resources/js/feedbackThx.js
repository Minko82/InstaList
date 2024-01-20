// Personalized name
let name = document.querySelector("#name");

// Typewriter effect
var i = 0;
var txt = "Your message has been recorded!";
var speed = 50;

function typeWriter() {
if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
   }
}

// Confirmation overlay

window.onload= on();
    
function on() {
    document.getElementById("overlay").style.display = "block";
    typeWriter();
}

function off() {
    document.getElementById("overlay").style.display = "none";
}