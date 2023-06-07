const functions = require('../plate-screen/plate-screen.js')

  test('selectImageMain test', () => {
    var mockElement = {
      classList: {
        contains: jest.fn().mockReturnValue(false),
        add: jest.fn(),
        remove: jest.fn()
      }
    }
    functions.selectImageMain(mockElement)
    expect(mockElement.classList.add).toHaveBeenCalledWith('selected')
});

describe('selectImageMain', () => {
  it('should add "selected" class if not already present', () => {
    const mockElement = {
      classList: {
        contains: jest.fn().mockReturnValue(false),
        add: jest.fn(),
        remove: jest.fn()
      }
    }
    functions.selectImageMain(mockElement)
    expect(mockElement.classList.add).toHaveBeenCalledWith('selected')
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
    expect(mockElement.classList.remove).toHaveBeenCalledWith('selected')
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
    expect(mockElement.classList.add).toHaveBeenCalledWith('selected')
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
    expect(mockElement.classList.remove).toHaveBeenCalledWith('selected')
  })
})