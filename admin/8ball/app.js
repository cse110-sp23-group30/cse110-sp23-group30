/**
  @description An implementation of the Magic 8 Ball game using JavaScript.
  This program uses an array of messages and randomly selects one
  to display when the user shakes the ball. The user can also enter
  a question in an input field and the program will display a response.
  The program also allows the user to override the default messages
  with all yes or all no responses by clicking the left or right side
  of the screen, respectively. When the user accumulates enough points
  from shaking the ball, a secret message is revealed indicating this
  functionality.
  @version 1.0
  @author Blue Moon 30ers
*/

/**
 * @description Array of default messages to display.
 */
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

/**
 * @description Override messages for all no reponses.
 */
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
/**
 * @description Override messages for all yes messages.
 */
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

/**
 * @description Dom elements.
 */
const magic8Ball = document.querySelector("#magic-8-ball");
const magic8BallMessage = document.querySelector("#magic-8-ball-message");
const shakeBtn = document.querySelector("#shake-btn");
const input = document.getElementById("question-input");
const clickCounter = document.getElementById("click-counter");

/**
 * @description Shake count.
 */
let shakeCount = 0;

/**
 * @description Flags for message overrides.
 */
var overrideY = false;
var overrideN = false;

/**
 * @description Counter for shake points.
 */
var counter = 0;

/**
  Sets the overrideY flag to true and overrideN flag to false.
  Called when the left side of the screen is clicked.
*/
function overrideYes() {
    overrideY = true;
    overrideN = false;
}

/**
  Sets the overrideN flag to true and overrideY flag to false.
  Called when the right side of the screen is clicked.
*/
function overrideNo() {
    overrideN = true;
    overrideY = false;
}

/**
  Handles the main event when the shake button is clicked.
  Removes any animation classes from the elements, updates the
  shake count and displays a secret message if the user accumulates
  enough shake points.
*/
function clicked() {
    // Remove any animation classes
    magic8BallMessage.style.opacity = "0";
    magic8Ball.classList.remove("shake");
    magic8BallMessage.classList.remove("hologram");
    if (input.value != null && input.value !== "") {
        shakeCount += 10;
        if (shakeCount == 100) {
            let secretIcon = document.createElement("span");
            secretIcon.innerText =
                "Congratulations! You have accumulated enough points to see the secret: Clicking the left side of the screen always gives a positive answer while clicking the right side of the screen always gives a negative answer!";
            secretIcon.id = "secret-icon";
            document.getElementById("secret").appendChild(secretIcon);
            secretIcon.style.display = "inline";
        }
    }

    clickCounter.textContent = `Shake Points: ${shakeCount}`;
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
        magic8BallMessage.style.opacity = "1";
    }, 2000);
}

shakeBtn.addEventListener("click", clicked);
