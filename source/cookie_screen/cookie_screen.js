const messages = [
    "You will have a prosperous future.",
    "Good fortune will come your way.",
    "Seize the day and make it yours.",
    "Your hard work will pay off soon.",
    "Expect a pleasant surprise in the near future.",
];
  
function shakeCookie() {
    const cookie = document.getElementById("fortune-cookie");
    const message = document.getElementById("fortune-message");

    cookie.innerHTML = '<img src="cookie_before.png" alt="Cracked Cookie">';
    cookie.classList.add("shake-animation");

    // Clear the fortune message
    message.textContent = "";
    // Hide the fortune message
    message.style.display = "none";

    setTimeout(openFortune, 1000); // Wait 1 second for the shake animation to complete
}
  
function openFortune() {
    const cookie = document.getElementById("fortune-cookie");
    cookie.classList.remove("shake-animation");
    const message = document.getElementById("fortune-message");
  
    // Replace the image source with the cracked cookie image
    cookie.innerHTML = '<img src="cookie_after.png" alt="Cracked Cookie">';
  
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.style.display = "block";
}

function restartGame() {
    // Reset the fortune cookie and message
    const cookie = document.getElementById("fortune-cookie");
    const message = document.getElementById("fortune-message");
  
    // Replace the image source with the initial cookie image
    cookie.innerHTML = '<img src="cookie_before.png" alt="Fortune Cookie">';
  
    // Clear the fortune message
    message.textContent = "";
    // Hide the fortune message
    message.style.display = "none";
}
  
function goToHome() {
    // Implement 
}
module.exports = {shakeCookie, openFortune, restartGame, goToHome}