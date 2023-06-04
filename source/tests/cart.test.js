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

  // Simulate clicking "add-plate" button and check redirected url
  await page.click('#add-plate');
  expect(page.url()).toBe('file://' + path.resolve(__dirname, '../plate-screen/plate-screen.html'));

  // Go back to original page
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'));

  // Simulate clicking "add-bowl" button and check redirected url
  await page.click('#add-bowl');
  expect(page.url()).toBe('file://' + path.resolve(__dirname, '../bowl-screen/bowl-screen.html'));

  // Go back to original page
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'));

  // Simulate clicking "confirm" button and check redirected url
  await page.click('#confirm');
  expect(page.url()).toBe('file://' + path.resolve(__dirname, '../cookie_screen/cookie_screen.html'));

  // Go back to original page
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'));

  // Simulate clicking "deletebtn" button and check confirm-delete display style
  await page.click('.deletebtn');
  let style = await page.$eval("#confirm-delete", (el) => el.style.display);
  expect(style).toBe('block');

  // Simulate clicking "confirmDelete" button and check confirm-delete display style
  await page.click('.confirmdlt');  // use the class name
  style = await page.$eval("#confirm-delete", (el) => el.style.display);
  expect(style).toBe('none');

  // Simulate clicking "clear" button and check confirm-clear display style
  await page.click('#clear');
  style = await page.$eval("#confirm-clear", (el) => el.style.display);
  expect(style).toBe('block');

  // Simulate clicking "confirmClear" button, check confirm-clear display style, and items innerHTML
  await page.click('.confirmbtn');  // use the class name
  style = await page.$eval("#confirm-clear", (el) => el.style.display);
  expect(style).toBe('none');
  const items = await page.$eval("#items", (el) => el.innerHTML);
  expect(items).toBe('');
});
