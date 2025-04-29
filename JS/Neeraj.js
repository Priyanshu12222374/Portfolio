// Typing Animation Logic
const phrases = ["B.Tech CSE Student", "Machine Learning", "UI/UX Designer"];
const typingText = document.getElementById("typing-text");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function typeEffect() {
    currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, letterIndex--);
    } else {
        typingText.textContent = currentPhrase.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 300); // Pause before next phrase
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Navbar Toggle Logic
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.classList.add("show");
}

function closemenu() {
    sidemenu.classList.remove("show");
}

// Make openmenu and closemenu globally available
window.openmenu = openmenu;
window.closemenu = closemenu;

let isPopupOpen = false;

function handleGifClick() {
    const gif = document.getElementById("gifButton");
    const popup = document.getElementById("gifPopup");

    if (!isPopupOpen) {
        gif.src = "images/gif1.gif"; // Set your alternate GIF here
        popup.style.display = "block";
    } else {
        gif.src = "images/gif2.gif"; // Switch back to original
        popup.style.display = "none";
    }

    isPopupOpen = !isPopupOpen;
}
