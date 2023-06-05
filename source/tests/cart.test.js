const puppeteer = require('puppeteer');
const path = require('path');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

test('cart screen behavior', async () => {

  // Before clicking the button, set up the location object to be able to be changed
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'));

  await Promise.all([
    page.waitForNavigation(),
    page.click('#add-plate'),
  ]);
  const newUrl1 = (new URL(await page.url())).pathname;
  expect(newUrl1).toBe('/source/plate-screen/plate-screen.html');

  // Repeat this process for the other buttons
  await Promise.all([
    page.waitForNavigation(),
    page.click('#add-bowl'),
  ]);
  const newUrl2 = (new URL(await page.url())).pathname;
  expect(newUrl2).toBe('/source/bowl-screen/bowl-screen.html');

  await Promise.all([
    page.waitForNavigation(),
    page.click('#confirm'),
  ]);
  const newUrl3 = (new URL(await page.url())).pathname;
  expect(newUrl3).toBe('/source/cookie_screen/cookie_screen.html');
  // Simulate clicking "deleteItem" button and check confirm-delete display style
  await page.click('.deletebtn');
  let style = await page.$eval("#confirm-delete", (el) => el.style.display);
  expect(style).toBe('block');

  // Simulate clicking "confirmDelete" button and check confirm-delete display style
  await page.click('.confirmdlt');
  style = await page.$eval("#confirm-delete", (el) => el.style.display);
  expect(style).toBe('none');

  // Simulate clicking "popUp" button and check confirm-clear display style
  await page.click('#clear');
  style = await page.$eval("#confirm-clear", (el) => el.style.display);
  expect(style).toBe('block');

  // Simulate clicking "confirmClear" button, check confirm-clear display style, and items innerHTML
  await page.click('.confirmbtn');
  style = await page.$eval("#confirm-clear", (el) => el.style.display);
  expect(style).toBe('none');
  const items = await page.$eval("#items", (el) => el.innerHTML);
  expect(items).toBe('');
});
