/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
function playBackgroundMusic() {
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.play();
}

const messages = [
  /*        message length for better display         */
  'You will have a prosperous future.',
  'Good fortune will come your way.',
  'Seize the day and make it yours.',
  'Your hard work will pay off soon.',
  'Expect a pleasant surprise in the near future.',
  'A thrilling opportunity is on its way.',
  'Your talents will be recognized and rewarded.',
  'Adventure awaits you at every corner.',
  'You will find love in unexpected places.',
  'A new chapter in your life will bring great happiness.',
  'Your creativity will lead you to success.',
  'An exciting journey will soon begin.',
  'Good fortune will follow you wherever you go.',
  'You will receive a pleasant surprise in the near future.',
  'Believe in yourself and all that you are capable of.',
  'Your dreams will become a reality with perseverance.',
  'Great things will come from your positive attitude.',
  'You will make a lasting impression on those you meet.',
  'Opportunities will arise when you least expect them.',
  'Your future is filled with abundance and prosperity.',
  'You are destined for greatness.',
  'Your kindness will be rewarded tenfold.',
];

function shakeCookie() {
  const cookie = document.getElementById('fortune-cookie');
  const message = document.getElementById('fortune-message');

  cookie.innerHTML = '<img src="cookie_before.png" alt="Cracked Cookie">';
  cookie.classList.add('shake-animation');

  // Clear the fortune message
  message.textContent = '';
  // Hide the fortune message
  message.style.display = 'none';

  setTimeout(openFortune, 1000); // Wait 1 second for the shake animation to complete
}

function openFortune() {
  const cookie = document.getElementById('fortune-cookie');
  cookie.classList.remove('shake-animation');
  const message = document.getElementById('fortune-message');

  // Replace the image source with the cracked cookie image
  cookie.innerHTML = '<img src="cookie_after.png" alt="Cracked Cookie">';

  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];
  message.style.display = 'block';
}

function restartGame() {
  // Reset the fortune cookie and message
  const cookie = document.getElementById('fortune-cookie');
  const message = document.getElementById('fortune-message');

  // Replace the image source with the initial cookie image
  cookie.innerHTML = '<img src="cookie_before.png" alt="Fortune Cookie">';

  // Clear the fortune message
  message.textContent = '';
  // Hide the fortune message
  message.style.display = 'none';

  // go to cart screen
}

function goToHome() {
  // Reset the fortune cookie and message
  const cookie = document.getElementById('fortune-cookie');
  const message = document.getElementById('fortune-message');

  // Replace the image source with the initial cookie image
  cookie.innerHTML = '<img src="cookie_before.png" alt="Fortune Cookie">';

  // Clear the fortune message
  message.textContent = '';
  // Hide the fortune message
  message.style.display = 'none';

  // go to home
}

// cookie background animation
function generateFloatingCookies() {
  const numCookies = 8; // Number of floating cookies to generate

  for (let i = 0; i < numCookies; i++) {
    const delay = Math.random() * 10; // Random delay in seconds

    setTimeout(() => {
      const floatingCookie = document.createElement('div');
      floatingCookie.classList.add('floating-cookie');
      floatingCookie.style.setProperty('--x', Math.random().toFixed(2));

      const cookieImage = document.createElement('img');
      cookieImage.src = 'fortune-cookie.png';
      floatingCookie.appendChild(cookieImage);

      document.body.appendChild(floatingCookie);
    }, delay * 1250); // Convert delay to milliseconds
  }
}
generateFloatingCookies();

module.exports = {
  shakeCookie, openFortune, restartGame, goToHome,
};
