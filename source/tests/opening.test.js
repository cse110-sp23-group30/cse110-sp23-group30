
const puppeteer = require('puppeteer');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

test('home screen behavior', async () => {
  await page.goto('file:///path/to/your/index.html');

  // Test the settings popup
  await page.click("#settings-button");
  let style = await page.$eval('#settings-popup', (el) => el.style.display);
  expect(style).toBe('block');

  await page.click(".close");
  style = await page.$eval('#settings-popup', (el) => el.style.display);
  expect(style).toBe('none');

  // Test the instructions and play buttons
  // This is more complex as it would involve navigation which is not covered in this example
});