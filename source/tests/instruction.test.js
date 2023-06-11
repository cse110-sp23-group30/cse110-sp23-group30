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
    await page.goto('http://localhost:5500/cse110-sp23-group30/source/instruction_screen/instruction.html');
  });

  test('should go back to opening screen', async () => {
    await page.click('button');
    expect(await page.url()).toContain('opening-screen.html');
  });

});
