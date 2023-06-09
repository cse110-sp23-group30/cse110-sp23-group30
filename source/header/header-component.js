class HeaderComponent extends HTMLElement {
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

  initEventListeners() {
    const homeButton = this.querySelector("#homeBtn");
    homeButton.addEventListener("click", () => {
      this.homeNavigation();
    });

    const instructionsButton = this.querySelector("#instructionsBtn");
    instructionsButton.addEventListener("click", () => {
      this.instructionsNavigation();
    });

    const settingsButton = this.querySelector("#settingsBtn");
    settingsButton.addEventListener("click", () => {
      this.openSettings();
    });
  }

  homeNavigation() {
    window.location.href = "../opening_screen/opening-screen.html";
  }

  instructionsNavigation() {
    // Make sure instructions returns back to screen it was on
    let orgLink = window.location.href;
    localStorage.setItem("orglink", JSON.stringify(orgLink));

    // Handle instructions button click
    window.location.href = "../instruction_screen/instruction.html";
  }

  openSettings() {
    document.getElementById("settings-popup").style.display = "block";
  }
}

customElements.define("header-component", HeaderComponent);

function init() {}

// Close button functionality
const closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", () => {
  closeSettings();
});

function closeSettings() {
  document.getElementById("settings-popup").style.display = "none";
}
