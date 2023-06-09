// Import the function to be tested
const { goBack } = require('../instruction_screen/instruction.js'); // Replace './your-file' with the correct path to the file containing the goBack() function

// Mock the window.location.href property
let mockHref = '';
Object.defineProperty(global.window.location, 'href', {
  get: () => mockHref,
  set: (value) => { mockHref = value; },
});

describe('goBack', () => {
  it('should set window.location.href to the correct URL', () => {
    // Call the function
    goBack();

    // Assert that the window.location.href property is set to the expected value
    expect(mockHref).toBe('/source/opening_screen/opening-screen.html');
  });
});