const puppeteer = require('puppeteer');
let browser;
let page;
jest.setTimeout(10000);

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: 'new' });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe('goBack', () => {

  beforeAll(async () => {
    await page.goto('https://cse110-sp23-group30.github.io/cse110-sp23-group30/source/instruction_screen/instruction.html');
  });

  test('should go back to opening screen', async () => {
    page.waitForNavigation();
    //click Go Back button
    await page.click('button');
    // get the current url
    const url = await page.url();
    // check the url contains 'cart.html'
    expect(url).toContain('opening-screen.html');
  });

});
