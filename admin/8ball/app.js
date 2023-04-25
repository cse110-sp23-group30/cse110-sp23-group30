const messages = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'Outlook not so good',
    'My sources say no',
    'Very doubtful'
  ];
  
  const magic8Ball = document.querySelector('#magic-8-ball');
  const magic8BallMessage = document.querySelector('#magic-8-ball-message');
  const shakeBtn = document.querySelector('#shake-btn');
  
  shakeBtn.addEventListener('click', () => {
    // Remove any animation classes
    magic8Ball.classList.remove('shake');
    magic8BallMessage.classList.remove('hologram');

    // Clear message before shaking 
    magic8BallMessage.textContent = '';
  
    // Trigger a reflow (flush the CSS changes and restart the animation)
    void magic8Ball.offsetWidth;
  
    // Add the animation class to the ball
    // as well to the text
    magic8Ball.classList.add('shake');
    magic8BallMessage.classList.add('hologram');
  
    // Wait for the animation to end (2s) before displaying a message
    // was 1 seconds now changed to 2 second
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomIndex];
      magic8BallMessage.textContent = randomMessage;
    }, 2000);
  });
  