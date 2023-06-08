window.addEventListener("DOMContentLoaded", init);

/**
 * Adds proper event listeners to each button on the opening screen and routes them to their
 * respective functions.
 */
function init() {
  document
    .getElementById("instructions-button")
    .addEventListener("click", openInstructions);
  document.getElementById("play-button").addEventListener("click", playGame);
  document
    .getElementById("settings-button")
    .addEventListener("click", openSettings);
}

/**
 * When the instructions button is clicked, this function will route the user to the instructions
 * screen.
 */
function openInstructions() {
  // Make sure instructinos returns back to screen it was on
  let orgLink = window.location.href;
  localStorage.setItem("orglink", JSON.stringify(orgLink));

  window.location.href = "/source/instruction_screen/instruction.html";
}

/**
 * When the play button is clicked, this function will route the user to the next screen in
 * order to play the game.
 */
function playGame() {
  window.location.href = "/source/cart_screen/cart.html";
}

/**
 * When the settings button is clicked, this function will display a settings popup which will
 * allow users to be able to adjust the sound volume as well as the music volume.
 */
function openSettings() {
  document.getElementById("settings-popup").style.display = "block";

  const volumeSlider = document.getElementById("musicVolume");
  volumeSlider.addEventListener("input", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const musicVolume = volumeSlider.value / 100;
    audioPlayer.volume = musicVolume;
    audioPlayer.play();
  });
}
