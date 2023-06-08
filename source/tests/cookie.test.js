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

test('fortune cookie game behavior', async () => {
  await page.goto('file://' + path.resolve(__dirname, '../cookie_screen/cookie_screen.html'))

  // Test for shakeCookie function
  await page.click('.buttons_container button:nth-child(2)')
  const cookieClass = await page.$eval('#fortune-cookie img', (el) => el.src)
  expect(cookieClass).toContain('media/cookie_before.png')

  // Test for openFortune function
  await page.evaluate(() => openFortune()); // Open fortune after shaking
  await page.waitForTimeout(1100); // wait for timeout
  let messageStyle = await page.$eval("#fortune-message", (el) => el.style.display);
  expect(messageStyle).toBe('block');
  
  // Test for restartGame function
  await page.click('.buttons_container button:nth-child(3)');
  await page.waitForFunction(() => document.querySelector("#fortune-message").style.display === 'none');
  messageStyle = await page.$eval("#fortune-message", (el) => el.style.display);
  expect(messageStyle).toBe('none');

  // Test for goToHome function
  await page.click('.buttons_container button:nth-child(1)')
  messageStyle = await page.$eval('#fortune-message', (el) => el.style.display)
  expect(messageStyle).toBe('none')

  // Check volume slider function
  await page.evaluate(() => { volumeSlider.value = 70; volumeSlider.dispatchEvent(new Event('input')) })
  const volume = await page.$eval('#background-music', el => el.volume)
  expect(volume).toBe(0.7)

  // Check volume icon function
  let volumeIconSrc = await page.$eval('#volume-icon', (el) => el.src)
  expect(volumeIconSrc).toContain('media/volume-level-2.svg')

  // Change the volume to 30 to test if the volume icon changes
  await page.evaluate(() => { volumeSlider.value = 30; volumeSlider.dispatchEvent(new Event('input')) })
  volumeIconSrc = await page.$eval('#volume-icon', (el) => el.src)
  expect(volumeIconSrc).toContain('media/volume-level-1.svg')

  // Test credit incrementation after shakeCookie function
  await page.click('.buttons_container button:nth-child(2)')
  const creditText = await page.$eval('#credit', (el) => el.textContent)
  expect(creditText).toBe('50100') // Initially 50000, after shake it should be 50100
})
