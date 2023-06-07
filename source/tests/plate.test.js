const functions = require('../plate-screen/plate-screen.js')
const { JSDOM } = require('jsdom')
const dom = new JSDOM();
const document = dom.window.document

describe('selectImageMain', () => {
  const mockElement = document.createElement('div')
  it('should add "selected" class if not already present', () => {
    functions.selectImageMain(mockElement)
    expect(mockElement.classList[0] == 'selected').toBe(true)
  })

  it('should remove "selected" class if present', () => {
    functions.selectImageMain(mockElement)
    expect(mockElement.classList[0] == 'selected').toBe(false)
  })
})

describe('selectImage', () => {
  const mockElement = document.createElement('div')
  it('should add "selected" class if not already present and selectedCount < 2', () => {
    functions.selectImage(mockElement)
    expect(mockElement.classList[0] == 'selectedEntree').toBe(true)
  })

  it('should remove "selected" class if present', () => {
    functions.selectImage(mockElement)
    expect(mockElement.classList[0] == 'selectedEntree').toBe(false)
  })
})