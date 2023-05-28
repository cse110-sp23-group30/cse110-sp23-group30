window.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById("settings-button").addEventListener("click", showSettings);
    document.getElementsByClassName("close")[0].addEventListener("click", closeSettings);
    document.getElementById("instructions-button").addEventListener("click", openInstructions);
    document.getElementById("play-button").addEventListener("click", playGame);
}

function openInstructions() {
    // Link to Instructions Screen

      window.location.href = "/source/instruction_screen/instruction.html"; // Redirect to home screen

}

function playGame() {
    // Link to Food Selection Screen
    window.location.href = "/source/cart_screen/cart.html";
}

function showSettings() {
    document.getElementById("settings-popup").style.display = "block";
}

function closeSettings() {
    document.getElementById("settings-popup").style.display = "none";
}