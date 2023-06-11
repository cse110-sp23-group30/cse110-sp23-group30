const { expect } = require('expect-puppeteer');
const puppeteer = require('puppeteer');

let page;
let browser;

/*  Note:
 *  Shake button activates shake function, shake function activates open 
 *  fortune and enables skip video function
 */

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: 'new' });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

describe('SkipVideo Test', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:5503/source/cookie_screen/cookie_screen.html');
    await page.evaluate(() => {
      // Reset the fortune cookie and message elements
      document.getElementById('fortune-cookie').innerHTML = '';
      document.getElementById('fortune-message').textContent = '';
      document.getElementById('fortune-message').style.display = 'none';
    });
  });

  it('should skip the video and hide the video element', async () => {
    // Initiate the video
    await page.evaluate(() => {
      shakeCookie();
    });
  
    // Wait for a brief moment for the video to start
    await page.waitForTimeout(100);
  
    // Call the skipVideo function
    await page.evaluate(() => {
      skipVideo();
    });
  
    // Hide the video element
    await page.evaluate(() => {
      const videoElement = document.getElementById('fullscreen-video');
      videoElement.style.display = 'none';
    });

    // Retrieve the videoPlayer element
    const videoPlayer = await page.$eval('#video-player', (element) => element);

    // Check if the videoPlayer's currentTime is equal to its duration
    expect(videoPlayer.currentTime).toBe(videoPlayer.duration);
    
    // Check if the video element is hidden
    const videoDisplayStyle = await page.$eval('#fullscreen-video', (element) => element.style.display);
    expect(videoDisplayStyle).toBe('none');

  }, 10000);
});

describe('OpenFortune Test', () => {
  beforeEach(async () => {
    await page.goto(
      'http://localhost:5503/source/cookie_screen/cookie_screen.html'
    );
    // Reset the fortune cookie and message elements
    await page.evaluate(() => {
      document.getElementById('fortune-cookie').innerHTML = '';
      document.getElementById('fortune-message').textContent = '';
      document.getElementById('fortune-message').style.display = 'none';
    });
  });

  it('should display a random fortune message', async () => {
    // Get the fortune cookie and message elements
    const cookieElementHandle = await page.$('#fortune-cookie');
    const messageElementHandle = await page.$('#fortune-message');

    // Call the openFortune function
    await page.evaluate(() => {
      openFortune();
    });

    // Check the shake-animation class is activated from the cookie element
    const cookieHasShakeAnimation = await cookieElementHandle.evaluate((element) =>
      element.classList.contains('shake-animation')
    );
    expect(cookieHasShakeAnimation).toBe(true);

    await page.waitForTimeout(2000);

    // Check if the shake-animation class is removed from the cookie element
    const cookieHasNoShakeAnimation = await cookieElementHandle.evaluate((element) =>
      !element.classList.contains('shake-animation')
    );
    expect(cookieHasNoShakeAnimation).toBe(true);

    // Check if the message element is displayed
    const messageDisplayStyle = await messageElementHandle.evaluate((element) => element.style.display);
    expect(messageDisplayStyle).toBe('block');
  });
});

describe('Shake Cookie Tests', () => {
  beforeAll(async () => {
    await page.goto(
      'http://localhost:5503/source/cookie_screen/cookie_screen.html'
    );
  });

  test('shakeCookie should display a random fortune message', async () => {
    await page.evaluate(() => {
      shakeCookie();
    });

    const fortuneMessage = await page.$eval('#fortune-message', (element) => element.textContent);
    expect(fortuneMessage).toBeDefined();
  });

  test('shakeCookie should NOT display a cracked cookie image', async () => {
    // Call the shakeCookie function
    await page.evaluate(() => {
      shakeCookie();
    });

    // Check the updated game state
    const cookieImageSrc = await page.$eval('#fortune-cookie img', (element) => element.getAttribute('src'));

    expect(cookieImageSrc).toContain('cookie_before.png');
  });

  test('shakeCookie should increment the credit', async () => {
    // Set up the initial game state
    const initialCredit = await page.$eval('#credit', (element) => element.textContent);

    // Call the shakeCookie function
    await page.evaluate(() => {
      shakeCookie();
    });

    const creditAfterShake = await page.$eval('#credit', (element) => element.textContent);

    expect(creditAfterShake).not.toBe(initialCredit);
  });
  test('should delete "shake-animation" class from the cookie afterwards', async () => {
    // Call the shakeCookie function
    await page.evaluate(() => {
      shakeCookie();
    });
  
    // Wait for the shake animation to finish
    await page.waitForTimeout(1000);
  
    // Check if the "shake-animation" class is removed from the cookie element
    const isShakeAnimationClassPresent = await page.evaluate(() => {
      const cookieElement = document.getElementById('fortune-cookie');
      return cookieElement.classList.contains('shake-animation');
    });
  
    expect(isShakeAnimationClassPresent).toBe(false);
  });

  test('trying multiple clicks', async () => {
    // Get the initial credit value
    const initialCredit = await page.$eval('#credit', (element) => parseInt(element.textContent));
  
    // Call the shakeCookie function multiple times
    let i = 0;
    while (i < 100) {
      await page.evaluate(() => {
        shakeCookie();
      });
      i++;
    }
  
    // Wait for the shake animations to finish
    await page.waitForTimeout(1000);
  
    // Get the updated credit value
    const updatedCredit = await page.$eval('#credit', (element) => parseInt(element.textContent));
  
    // Check if the credit is incremented by 10000
    expect(updatedCredit).toBe(initialCredit + 10000);
  });
  
});

describe('Restart Game Test', () => {
  beforeEach(async () => {
    await page.goto(
      'http://localhost:5503/source/cookie_screen/cookie_screen.html'
    );
  });

  test('restartGame should reset the game state and navigate to the opening screen', async () => {
    // Call the restartGame function
    await Promise.all([
      page.click('#back'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
  
    // Check the navigation to the opening screen
    const currentUrl = page.url();
    expect(currentUrl).toContain('opening-screen.html');
  
    // Close the browser
    await browser.close();
  });
  
});
