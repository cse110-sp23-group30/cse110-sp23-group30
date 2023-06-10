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
    // Select the fifth menu-card under entrees
    await page.click('form .menu-card:nth-child(5)');

    const selectedImageEntree = await page.$eval(
      'form .menu-card:nth-child(5)',
      (el) => el.classList.contains('selectedEntree')
    );
    expect(selectedImageEntree).toBe(true);
  });

  test('User can deselect an Entree', async () => {
    // Select the fifth menu-card under entrees
    await page.click('form .menu-card:nth-child(5)');

    const selectedImageEntree = await page.$eval(
      'form .menu-card:nth-child(5)',
      (el) => el.classList.contains('selectedEntree')
    );
    expect(selectedImageEntree).toBe(false);
  });

  test('User can deselect a Main', async () => {
    // Select the first menu-card under mains
    await page.click('form .menu-card:nth-child(1)');

    const selectedImage = await page.$eval(
      'form .menu-card:nth-child(1)',
      (el) => el.classList.contains('selected')
    );
    expect(selectedImage).toBe(false);
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
