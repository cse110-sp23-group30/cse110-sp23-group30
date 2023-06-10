
/**
 * Redirects to the opening screen.
 */
function goBack() {
  // Go back to page it came from
  window.location.href = 'https://cse110-sp23-group30.github.io/cse110-sp23-group30/source/opening_screen/opening-screen.html';
}

const keyframesAnimation = `
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
       opacity: 1;
    }
  }

   @keyframes glossyAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = keyframesAnimation;
document.head.appendChild(styleElement);

module.exports = {
  goBack: goBack
};