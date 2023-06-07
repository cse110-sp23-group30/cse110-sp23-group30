const puppeteer = require('puppeteer')
const path = require('path')
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

afterAll(() => {
  browser.close()
})

test('food screen behavior', async () => {
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'))

  // Simulate clicking "addPlate" button and check redirected url

  await page.click('#add-plate')
  expect(page.url()).toBe('file://' + path.resolve(__dirname, '../plate-screen/plate-screen.html'))

  // Go back to original page
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'))

  // Simulate clicking "addBowl" button and check redirected url
  await page.click('#addBowl-button')
  expect(page.url()).toBe('file://' + path.resolve(__dirname, '../bowl-screen/bowl-screen.html'))

  // Go back to original page
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'))

  // Simulate clicking "purchase" button and check redirected url
  await page.click('#purchase-button')
  expect(page.url()).toBe('file://' + path.resolve(__dirname, '../cookie_screen/cookie_screen.html'))

  // Go back to original page
  await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'))

  // Simulate clicking "deleteItem" button and check confirm-delete display style
  await page.click('#deleteItem-button')
  let style = await page.$eval('#confirm-delete', (el) => el.style.display)
  expect(style).toBe('block')

  // Simulate clicking "confirmDelete" button and check confirm-delete display style
  await page.click('#confirmDelete-button')
  style = await page.$eval('#confirm-delete', (el) => el.style.display)
  expect(style).toBe('none')

  // Simulate clicking "popUp" button and check confirm-clear display style
  await page.click('#popUp-button')
  style = await page.$eval('#confirm-clear', (el) => el.style.display)
  expect(style).toBe('block')

  // Simulate clicking "confirmClear" button, check confirm-clear display style, and items innerHTML
  await page.click('#confirmClear-button')
  style = await page.$eval('#confirm-clear', (el) => el.style.display)
  expect(style).toBe('none')
  const items = await page.$eval('#items', (el) => el.innerHTML)
  expect(items).toBe('')
})
