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

describe('Cart Page', () => {
  beforeAll(async () => {
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem(
        'dishes',
        JSON.stringify([
          {
            main: [
              {
                src: '../assets/Fried-Rice.jpg',
                name: 'Fried Rice',
                price: 'Price: $8.99',
              },
            ],
            entree: [
              {
                src: '../assets/Kung-Pao-Chicken.jpg',
                name: 'Kung Pao Chicken',
                price: 'Price: $9.99',
              },
            ],
          },
        ])
      );
    });
    await page.goto(
      'https://cse110-sp23-group30.github.io/cse110-sp23-group30/source/cart_screen/cart.html'
    );
  });

  test('Add Plate button redirects to the correct page', async () => {
    await Promise.all([
      page.click('#add-plate'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    expect(await page.url()).toContain(
      '/source/plate-screen/plate-screen.html'
    );
  });

  test('Add Bowl button redirects to the correct page', async () => {
    await page.goBack();
    await page.waitForSelector('#add-bowl');
    await page.click('#add-bowl');
    expect(await page.url()).toContain('/source/bowl-screen/bowl-screen.html');
  });

  test('Confirm Purchase button redirects with something in local storage', async () => {
    await page.goBack();
    /*
    await page.evaluate(() => {
      localStorage.setItem('dishes', JSON.stringify({ key: 'value' }));
    });
    await page.reload();*/
    await Promise.all([page.click('#confirm'), page.waitForNavigation()]);

    expect(await page.url()).toContain(
      '/source/cookie_screen/cookie_screen.html'
    );
  });

  test('Clear Cart button pops up the confirm-clear element', async () => {
    await page.goBack();
    await page.waitForSelector('#clear');
    await page.click('#clear');
    const displayStyle = await page.$eval(
      '#confirm-clear',
      (el) => getComputedStyle(el).display
    );
    expect(displayStyle).toBe('block');
  });

  test('Delete button pops up the confirm-delete element', async () => {
    // This test assumes that there is at least one delete button (class = "deletebtn") on the page
    await page.reload();
    await page.waitForSelector('.deletebtn');
    await page.click('.deletebtn');
    const displayStyle = await page.$eval(
      '#confirm-delete',
      (el) => getComputedStyle(el).display
    );
    expect(displayStyle).toBe('block');
  });

  test('Load Cart Populates Screen', async () => {
    await page.goBack();
    await page.waitForSelector('#total-price');
    const paddingBottom = await page.$eval(
      '#confirm-delete',
      (el) => getComputedStyle(el).paddingBottom
    );
    expect(paddingBottom).toBe('5px');
  });
});
