const jsdom = require('jsdom')
const { JSDOM } = jsdom
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

test('instruction screen behavior', async () => {
  await page.goto('file://' + path.resolve(__dirname, '../instruction_screen/instruction.html'))

  const instruction = await page.evaluate(() => {
    const instructionsList = document.getElementById('instructionsList')
    return Array.from(instructionsList.getElementsByClassName('instruction')).map(el => el.style.display)
  })

  // Verify that the first instruction is displayed and the rest are hidden
  expect(instruction[0]).toBe('block')
  for (let i = 1; i < instruction.length; i++) {
    expect(instruction[i]).toBe('none')
  }

  // Simulate clicking the next arrow and verify that the instruction changes
  await page.click('#nextArrow')

  const instructionsAfterClick = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('instruction')).map(el => el.style.display)
  })

  expect(instructionsAfterClick[0]).toBe('none')
  expect(instructionsAfterClick[1]).toBe('block')
  for (let i = 2; i < instructionsAfterClick.length; i++) {
    expect(instructionsAfterClick[i]).toBe('none')
  }

  // Simulate clicking the previous arrow and verify that the instruction changes back
  await page.click('#prevArrow')

  const instructionsAfterSecondClick = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('instruction')).map(el => el.style.display)
  })

  expect(instructionsAfterSecondClick[0]).toBe('block')
  for (let i = 1; i < instructionsAfterSecondClick.length; i++) {
    expect(instructionsAfterSecondClick[i]).toBe('none')
  }
})
