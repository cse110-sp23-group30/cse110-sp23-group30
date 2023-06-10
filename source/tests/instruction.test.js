const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(' <!DOCTYPE html><body></body></html> ');
global.window = dom.window;
global.document = dom.window.document;

// Import the function to be tested
const { goBack } = require('../instruction_screen/instruction.js');

console.log(goBack);

describe('goBack', () => {
  it('should set window.location.href to the correct URL', () => {
    
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: jest.fn() };
  
    goBack();
  
    expect(window.location.href).toBe('../opening_screen/opening-screen.html');
  
    window.location = originalLocation;
  }
  );
});