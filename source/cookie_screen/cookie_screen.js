// const variables
const cookie = document.getElementById("fortune-cookie");
const message = document.getElementById("fortune-message");

// videos
const videoPlayer = document.getElementById("video-player");
const fullscreenVideo = document.getElementById("fullscreen-video");
let videoStarted = false;
videoPlayer.volume = 0;

// credit
const creditElement = document.getElementById("credit");

// video array for animation
const videos = [
  "source/cookie_screen/media/video_blue.mp4",
  "source/cookie_screen/media/video_gold.mp4",
  "source/cookie_screen/media/video_purple.mp4",
];

// array of messages
const messages = [
  /*        message length for better display         */
  "You will have a prosperous future.",
  "Good fortune will come your way.",
  "Seize the day and make it yours.",
  "Your hard work will pay off soon.",
  "Expect a pleasant surprise in the near future.",
  "A thrilling opportunity is on its way.",
  "Your talents will be recognized and rewarded.",
  "Adventure awaits you at every corner.",
  "You will find love in unexpected places.",
  "A new chapter in your life will bring great happiness.",
  "Your creativity will lead you to success.",
  "An exciting journey will soon begin.",
  "Good fortune will follow you wherever you go.",
  "You will receive a pleasant surprise in the near future.",
  "Believe in yourself and all that you are capable of.",
  "Your dreams will become a reality with perseverance.",
  "Great things will come from your positive attitude.",
  "You will make a lasting impression on those you meet.",
  "Opportunities will arise when you least expect them.",
  "Your future is filled with abundance and prosperity.",
  "You are destined for greatness.",
  "Your kindness will be rewarded tenfold.",
];

/**
 * Shake the fortune cookie and display a random fortune message.
 */
function shakeCookie() {
  // prevent user clicking multiple times
  cookie.classList.remove("shake-animation");

  cookie.innerHTML =
    '<img src="source/cookie_screen/media/cookie_before.png" alt="Cracked Cookie">';
  // Clear the fortune message
  message.textContent = "";
  // Hide the fortune message
  message.style.display = "none";

  // Increase the credit by 100
  if (creditElement !== null) {
    const creditText = creditElement.textContent;
    credit = parseInt(creditText);
    credit += 100;
    creditElement.textContent = credit;
  }

  // Randomly select a video from the 'videos' array
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  // Set the source of the video player to the randomly selected video
  if (videoPlayer !== null) {
    videoPlayer.src = randomVideo;
    fullscreenVideo.style.display = "block";
    videoPlayer.play();
    videoPlayer.volume = 1;
  }

  // skip if dont wanna see animation
  document.addEventListener("click", skipVideo);
}

/**
 * Skip the video animation and open the fortune cookie directly.
 */
function skipVideo() {
  if (videoStarted && videoPlayer.currentTime != videoPlayer.duration) {
    videoPlayer.currentTime = videoPlayer.duration;
  }
}
if (videoPlayer) {
  videoPlayer.addEventListener("playing", function () {
    videoStarted = true;
  });

  videoPlayer.addEventListener("ended", function () {
    fullscreenVideo.style.display = "none";
    openFortune();
  });
}

/**
 * Open the fortune cookie and display a random fortune message.
 */
function openFortune() {
  // remove animation before another if user clicks frequenly
  cookie.classList.remove("shake-animation");
  // Clear the fortune message
  message.textContent = "";
  // Hide the fortune message
  message.style.display = "none";

  cookie.classList.add("shake-animation");
  setTimeout(function () {
    cookie.classList.remove("shake-animation");

    // Replace the image source with the cracked cookie image
    cookie.innerHTML =
      '<img src="source/cookie_screen/media/cookie_after.png" alt="Cracked Cookie">';

    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.style.display = "block";
  }, 1000);
}

/**
 * Restart the game by going back to the cart screen.
 */
function restartGame() {
  // Replace the image source with the initial cookie image
  cookie.innerHTML =
    '<img src="source/cookie_screen/media/cookie_before.png" alt="Fortune Cookie">';

  // Clear the fortune message
  message.textContent = "";
  // Hide the fortune message
  message.style.display = "none";
  // go to cart screen
  localStorage.clear();
  window.location.href = "source/opening_screen/opening-screen.html";
}

// Export the functions
//module.exports = { shakeCookie, openFortune, restartGame, goToHome };
