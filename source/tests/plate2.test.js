const puppeteer = require('puppeteer');

describe('Plate Screen functions', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Launch browser
    browser = await puppeteer.launch();
    // Create new page
    page = await browser.newPage();
    // Navigate to the plate screen
    await page.goto('http://localhost:4444/source/plate-screen/plate-screen.html');
  });

  afterAll(async () => {
    // Close browser
    await browser.close();
  });

  test('selectImageMain', async () => {
    await page.evaluate(() => selectImageMain(document.querySelector('.menu-card')));
    const isSelected = await page.evaluate(() => document.querySelector('.menu-card').classList.contains('selected'));
    expect(isSelected).toBe(true);
  });

  test('selectImage', async () => {
    await page.evaluate(() => selectImage(document.querySelector('.menu-card')));
    const isSelectedEntree = await page.evaluate(() => document.querySelector('.menu-card').classList.contains('selectedEntree'));
    expect(isSelectedEntree).toBe(true);
  });

  // ...write other tests...
});
