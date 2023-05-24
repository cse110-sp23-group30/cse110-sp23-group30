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
  
      // Add event listeners for the buttons
      this.querySelector('#homeBtn').addEventListener('click', () => {
        // Handle home button click
        window.location.href = '../opening_screen/opening-screen.html';
      });
  
      this.querySelector('#instructionsBtn').addEventListener('click', () => {
        // Handle instructions button click
        window.location.href = '../instruction_screen/instruction.html';
      });
      
      
      // Get a reference to the settings button
      const settingsBtn = this.querySelector('#settingsBtn');
      
      // Add event listener to the settings button
      settingsBtn.addEventListener('click', () => {
        // Create the settings popup;
      });
    }
  }
  
  customElements.define('header-component', HeaderComponent);

// // Dynamically insert the header into each page
// window.addEventListener('DOMContentLoaded', () => {
//   const headerContainer = document.getElementById('headerContainer');
//   const headerComponent = document.createElement('header-component');
//   headerContainer.appendChild(headerComponent);
// });
  