const messages = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
];

//overdide msgs, feel free to modify
//all no msg
const secretN = [
  "No",
  "Nah",
  "Nope",
  "Not at all",
  "Negative",
  "Absolutely not",
  "Uh-uh",
  "No way",
  "I don't think so",
];
//all yes msg
const secretY = [
  "Yuh",
  "Hell yeah",
  "Yup",
  "Sure",
  "Absolutely",
  "Indeed",
  "You bet",
  "Definitely",
  "Affirmative",
];

const magic8Ball = document.querySelector("#magic-8-ball");
const magic8BallMessage = document.querySelector("#magic-8-ball-message");
const shakeBtn = document.querySelector("#shake-btn");
const input = document.getElementById("question-input");
const clickCounter = document.getElementById("click-counter");
let shakeCount = 0;

//overrides if true
var overrideY = false;
var overrideN = false;

//counter
var counter = 0;

//called when left or right of screen is clicked
function overrideYes() {
  overrideY = true;
  overrideN = false;
}
function overrideNo() {
  overrideN = true;
  overrideY = false;
}

//main event
<<<<<<< HEAD
shakeBtn.addEventListener("click", () => {
  //increment counter
  counter = counter + 1;
  //Update the counter to website
  document.getElementById("counter").innerHTML= "Times Shaken: " + counter;
=======
function clicked() {
>>>>>>> cf56bd5448596a0ec70d86776d41bbaff0f7f7d5
  // Remove any animation classes
  magic8BallMessage.style.opacity = '0';
  magic8Ball.classList.remove("shake");
  magic8BallMessage.classList.remove("hologram");
  shakeCount++;
  clickCounter.textContent = `Shake count: ${shakeCount}`;
  // Clear message before shaking
  magic8BallMessage.textContent = "";

  // Trigger a reflow (flush the CSS changes and restart the animation)
  void magic8Ball.offsetWidth;

  // Add the animation class to the ball
  // as well to the text
  magic8Ball.classList.add("shake");
  magic8BallMessage.classList.add("hologram");

  // Wait for the animation to end (2s) before displaying a message
  // was 1 seconds now changed to 2 second
  setTimeout(() => {
    var randomIndex = Math.floor(Math.random() * messages.length);
    let randomMessage = "";

    //case: no input
    if (input.value == null || input.value === "") {
      randomMessage = "There was no question";
    } else {
      //checks whether to override messages with all yes or all no answers
      if (overrideY) {
        randomIndex = Math.floor(Math.random() * secretY.length);
        randomMessage = secretY[randomIndex];
        overrideY = false;
      } else if (overrideN) {
        randomIndex = Math.floor(Math.random() * secretN.length);
        randomMessage = secretN[randomIndex];
        overrideN = false;
      } else {
        randomMessage = messages[randomIndex];
      }
    }
    magic8BallMessage.textContent = randomMessage;
    magic8BallMessage.style.opacity = '1';
  }, 2000);
}

shakeBtn.addEventListener("click", clicked);
