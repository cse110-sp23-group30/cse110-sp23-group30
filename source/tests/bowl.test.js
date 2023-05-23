// test.js

const { selectImageMain, selectImage } = require("../bowl-screen/bowl-screen.js");

describe('selectImageMain', () => {
    it('should add "selected" class if not already present', () => {
        const mockElement = {
            classList: {
                contains: jest.fn().mockReturnValue(false),
                add: jest.fn(),
                remove: jest.fn()
            }
        };
        selectImageMain(mockElement);
        expect(mockElement.classList.add).toHaveBeenCalledWith('selected');
    });

    it('should remove "selected" class if present', () => {
        const mockElement = {
            classList: {
                contains: jest.fn().mockReturnValue(true),
                add: jest.fn(),
                remove: jest.fn()
            }
        };
        selectImageMain(mockElement);
        expect(mockElement.classList.remove).toHaveBeenCalledWith('selected');
    });
});

describe('selectImage', () => {
    it('should add "selected" class if not already present and selectedCount < 2', () => {
        const mockElement = {
            classList: {
                contains: jest.fn().mockReturnValue(false),
                add: jest.fn(),
                remove: jest.fn()
            }
        };
        selectImage(mockElement);
        expect(mockElement.classList.add).toHaveBeenCalledWith('selected');
    });

    it('should remove "selected" class if present', () => {
        const mockElement = {
            classList: {
                contains: jest.fn().mockReturnValue(true),
                add: jest.fn(),
                remove: jest.fn()
            }
        };
        selectImage(mockElement);
        expect(mockElement.classList.remove).toHaveBeenCalledWith('selected');
    });
});
