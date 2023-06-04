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
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'));

  // Before clicking the button, set up the location object to be able to be changed
  await page.evaluate(() => {
    delete window.location;
    window.location = { href: "start" };
  });

  // Simulate clicking "add-plate" button and check redirected url
  await page.click('#add-plate');
  const newUrl1 = await page.evaluate(() => window.location.href);
  expect(newUrl1).toBe('/source/plate-screen/plate-screen.html');

  // Repeat this process for the other buttons
  await page.click('#add-bowl');
  const newUrl2 = await page.evaluate(() => window.location.href);
  expect(newUrl2).toBe('/source/bowl-screen/bowl-screen.html');

  await page.click('#confirm');
  const newUrl3 = await page.evaluate(() => window.location.href);
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
