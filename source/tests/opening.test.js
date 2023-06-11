const path = require('path');
const puppeteer = require('puppeteer');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: 'new' });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

// test('home screen behavior', async () => {
//   const filePath = path.resolve(
//     __dirname,
//     '../opening_screen/opening-screen.html'
//   );
//   await page.goto('file://' + filePath);
//   // Don't test the settings popup

//   // Test the instructions and play buttons
//   // This is more complex as it would involve navigation which is not covered in this example
// });

describe('Opening Page Tests', () => {
  beforeAll(async () => {
    await page.goto(
      'https://cse110-sp23-group30.github.io/cse110-sp23-group30/source/opening_screen/opening-screen.html'
    );
  });

  test('Instructions button redirects to the correct page', async () => {
    await Promise.all([
      page.click('#instructions-button'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    expect(await page.url()).toContain(
      '/source/instruction_screen/instruction.html'
    );
  });

  test('Play button redirects to the correct page', async () => {
    await page.goBack();
    await page.waitForSelector('#play-button');
    await page.click('#play-button');
    expect(await page.url()).toContain('/source/cart_screen/cart.html');
  });

  test('Settings button opens the settings popup', async () => {
    await page.goBack();
    await page.waitForSelector('#settings-button');
    await page.click('#settings-button');
    const displayStyle = await page.$eval(
      '#settings-popup',
      (el) => getComputedStyle(el).display
    );
    expect(displayStyle).toBe('block');
  });
});