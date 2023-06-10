const {
    selectImageMain,
    selectImage,
    goToCart,
    saveSelectedItems,
    getSelectedItems,
    closePopup,
    closeWarningPopup,
    clearSelectedOptions
  } = require('./plate-screen.js');
  
  describe('Plate Screen functions', () => {
    // Mocking the DOM element
    const divElement = document.createElement('div');
    divElement.className = "selected";
  
    test('selectImageMain', () => {
      selectImageMain(divElement);
      expect(divElement.classList.contains('selected')).toBe(false);
    });
  
    test('selectImage', () => {
      selectImage(divElement);
      expect(divElement.classList.contains('selectedEntree')).toBe(false);
    });
  
    // Here, you can add other tests like the following:
  
    // test('goToCart', () => {
    // });
  
    // test('saveSelectedItems', () => {
    // });
  
    // test('getSelectedItems', () => {
    // });
  
    // test('closePopup', () => {
    // });
  
    // test('closeWarningPopup', () => {
    // });
  
    // test('clearSelectedOptions', () => {
    // });
  
  });
  