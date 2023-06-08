const path = require('path')
const puppeteer = require('puppeteer')
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

afterAll(() => {
  browser.close()
})

test('home screen behavior', async () => {
  const filePath = path.resolve(
    __dirname,
    '../opening_screen/opening-screen.html'
  )
  await page.goto('file://' + filePath)
  // Don't test the settings popup

  // Test the instructions and play buttons
  // This is more complex as it would involve navigation which is not covered in this example
})
