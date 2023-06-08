class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="container">
          <img src="source/assets/BlueMoon.png" alt="Logo" class="logo">
          <h1 class="header-title">The Blue Moon Express</h1>
          <div class="button-group">
            <button id="homeBtn">Home</button>
            <button id="instructionsBtn">Instructions</button>
            <button id="settingsBtn">Settings</button>
          </div>
        </div>
      </header>
    `;

    // Add event listeners for the buttons
    this.querySelector("#homeBtn").addEventListener("click", () => {
      // Handle home button click
      window.location.href = "source/opening_screen/opening-screen.html";
    });

    this.querySelector("#instructionsBtn").addEventListener("click", () => {
      // Make sure instructinos returns back to screen it was on
      let orgLink = window.location.href;
      localStorage.setItem("orglink", JSON.stringify(orgLink));

      // Handle instructions button click
      window.location.href = "source/instruction_screen/instruction.html";
    });

    // Get a reference to the settings button
    const settingsBtn = this.querySelector("#settingsBtn");

    // Add event listener to the settings button
    settingsBtn.addEventListener("click", () => {
      // Check if the settings panel already exists
      document.getElementById("settings-popup").style.display = "block";

      const volumeSlider = document.getElementById("musicVolume");
      volumeSlider.addEventListener("input", () => {
        // Get a reference to the audio element
        const audioPlayer = document.getElementById("audioPlayer");
        // Adjust the music volume based on the slider value
        const musicVolume = volumeSlider.value / 100;
        audioPlayer.volume = musicVolume;
        audioPlayer.play();
      });
    });

    const closeSettings = document.getElementsByClassName("close")[0];

    closeSettings.addEventListener("click", () => {
      document.getElementById("settings-popup").style.display = "none";
    });
  }
}

customElements.define("header-component", HeaderComponent);

// // Dynamically insert the header into each page
// window.addEventListener('DOMContentLoaded', () => {
//   const headerContainer = document.getElementById('headerContainer');
//   const headerComponent = document.createElement('header-component');
//   headerContainer.appendChild(headerComponent);
// });
