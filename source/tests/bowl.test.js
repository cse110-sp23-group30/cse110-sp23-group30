const functions = require('../bowl-screen/bowl-screen.js')
const { JSDOM } = require('jsdom')
const dom = new JSDOM();
const document = dom.window.document

describe('selectImage', () => {
  const mockElement = document.createElement('div')
  it('should add "selected" class if not already present', () => {
    functions.selectImage(mockElement)
    expect(mockElement.classList[0] == 'selected').toBe(true)
  })

  it('should remove "selected" class if present', () => {
    functions.selectImage(mockElement)
    expect(mockElement.classList[0] == 'selected').toBe(false)
  })
})

describe('selectImageEntree', () => {
  const mockElement = document.createElement('div')
  it('should add "selectedEntree" class if not already present and selectedCount < 1', () => {
    functions.selectImageEntree(mockElement)
    expect(mockElement.classList[0] == 'selectedEntree').toBe(true)
  })

  it('should remove "selectedEntree" class if present', () => {
    functions.selectImageEntree(mockElement)
    expect(mockElement.classList[0] == 'selectedEntree').toBe(false)
  })
})
