const functions = require('../plate-screen/plate-screen.js')

describe('selectImageMain', () => {
  it('should add "selected" class if not already present', () => {
    /*const mockElement = {
      classList: {
        contains: jest.fn().mockReturnValue(false),
        add: jest.fn(),
        remove: jest.fn()
      }
    }*/
    const mockElement = {
      classList: {
        0: "menu-card",
        length: 1, 
        value: "menu-card"
      }
    }
    functions.selectImageMain(mockElement)
    console.log(mockElement.classList[1])
    expect(mockElement.classList[1] == 'selected').toBe(true)
  })


  it('should remove "selected" class if present', () => {
    const mockElement = {
      classList: {
        contains: jest.fn().mockReturnValue(true),
        add: jest.fn(),
        remove: jest.fn()
      }
    }
    functions.selectImageMain(mockElement)
    expect(mockElement.classList[1] == 'selected').toBe(false)
  })
})

describe('selectImage', () => {
  it('should add "selected" class if not already present and selectedCount < 2', () => {
    const mockElement = {
      classList: {
        contains: jest.fn().mockReturnValue(false),
        add: jest.fn(),
        remove: jest.fn()
      }
    }
    functions.selectImage(mockElement)
    expect(mockElement.classList[1] == 'selected').toBe(true)
  })

  it('should remove "selected" class if present', () => {
    const mockElement = {
      classList: {
        contains: jest.fn().mockReturnValue(true),
        add: jest.fn(),
        remove: jest.fn()
      }
    }
    functions.selectImage(mockElement)
    expect(mockElement.classList[1] == 'selected').toBe(false)
  })
})