window.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementsByClassName("close")[0].addEventListener("click", closeSettings);
    document.getElementById("instructions-button").addEventListener("click", openInstructions);
    document.getElementById("play-button").addEventListener("click", playGame);
}

function openInstructions() {
    // Link to Instructions Screen
    window.location.href = "/source/instruction_screen/instruction.html";
}

function playGame() {
    // Link to Food Selection Screen
    window.location.href = "/source/cart_screen/cart.html";
}