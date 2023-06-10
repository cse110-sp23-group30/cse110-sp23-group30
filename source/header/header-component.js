class HeaderComponent extends HTMLElement {
  /**
   * Adds the HTML data for the page to display the header element.
   */
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="container">
          <img src="../assets/BlueMoon.png" alt="Logo" class="logo">
          <h1 class="header-title">The Blue Moon Express</h1>
          <div class="button-group">
            <button id="homeBtn">Home</button>
            <button id="instructionsBtn">Instructions</button>
            <button id="settingsBtn">Settings</button>
          </div>
        </div>
      </header>
    `;

    this.initEventListeners();
  }

  /**
   * Adds event listeners for each of the components inside the header.
   */
  initEventListeners() {
    const homeButton = this.querySelector('#homeBtn');
    homeButton.addEventListener('click', () => {
      this.homeNavigation();
    });

    const instructionsButton = this.querySelector('#instructionsBtn');
    instructionsButton.addEventListener('click', () => {
      this.instructionsNavigation();
    });

    const settingsButton = this.querySelector('#settingsBtn');
    settingsButton.addEventListener('click', () => {
      this.openSettings();
    });
  }

  /**
   * Redirects the user back to the home page.
   */
  homeNavigation() {
    window.location.href = '../opening_screen/opening-screen.html';
  }

  /**
   * Redirects the user back to the instruction screen.
   */
  instructionsNavigation() {
    // Make sure instructions returns back to screen it was on
    let orgLink = window.location.href;
    localStorage.setItem('orglink', JSON.stringify(orgLink));

    // Handle instructions button click
    window.location.href = '../instruction_screen/instruction.html';
  }

  /**
   * Opens the settings popup for users to change their voleume/sound.
   */
  openSettings() {
    document.getElementById('settings-popup').style.display = 'block';

    const volumeSlider = document.getElementById('musicVolume');
    volumeSlider.addEventListener('input', () => {
      const audioPlayer = document.getElementById('audioPlayer');
      const musicVolume = volumeSlider.value / 100;
      audioPlayer.volume = musicVolume;
      audioPlayer.play();
    });
  }
}

customElements.define('header-component', HeaderComponent);

/**
 * Initializes the header and adds a function to clost the settings popup.
 */
function init() {}

// Close button functionality
const closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', () => {
  closeSettings();
});

/**
 * Closes the settings popup.
 */
function closeSettings() {
  document.getElementById('settings-popup').style.display = 'none';
}
