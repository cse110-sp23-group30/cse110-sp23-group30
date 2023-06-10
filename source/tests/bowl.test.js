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

describe('Bowl Screen Tests', () => {
  beforeAll(async () => {
    await page.goto(
      'http://localhost:4444/source/bowl-screen/bowl-screen.html'
    );
  });
  test('User can select a Main', async () => {
    // Select the first menu-card under mains
    await page.click('form .menu-card:nth-child(1)');

    const selectedImage = await page.$eval(
      'form .menu-card:nth-child(1)',
      (el) => el.classList.contains('selected')
    );
    expect(selectedImage).toBe(true);
  });

  test('User can select an Entree', async () => {
    // Select the first menu-card under entrees
    await page.click('form .menu-card:nth-child(5)');

    const selectedImageEntree = await page.$eval(
      'form .menu-card:nth-child(5)',
      (el) => el.classList.contains('selectedEntree')
    );
    expect(selectedImageEntree).toBe(true);
  });

  test('User can navigate to cart', async () => {
    // click the cart button
    await Promise.all([
      page.click('#cart'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // get the current url
    const url = await page.url();

    // check the url contains 'cart.html'
    expect(url).toContain('cart.html');
  });

  
});
