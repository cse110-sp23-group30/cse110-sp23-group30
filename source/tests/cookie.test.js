const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body><div id="credit">50000</div><div id="fortune-cookie"></div><div id="fortune-message"></div></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
// Mock localStorage
global.localStorage = {
  clear: jest.fn(),
};

const { shakeCookie, skipVideo, openFortune } = require("../cookie_screen/cookie_screen.js");

describe('shakeCookie', () => {
    it('should delete "shake-animation" class to the cookie afterwards', () => {
        shakeCookie();
        expect(document.getElementById("fortune-cookie").classList.contains('shake-animation')).toBe(false);
    });

    it('should clear and hide the fortune message', () => {
        document.getElementById("fortune-message").textContent = "Test message";
        shakeCookie();
        expect(document.getElementById("fortune-message").textContent).toBe("");
        expect(document.getElementById("fortune-message").style.display).toBe("none");
    });
});

describe('shakeCookie', () => {
    beforeEach(() => {
      // Reset the fortune cookie and message elements
      document.getElementById("fortune-cookie").innerHTML = '';
      document.getElementById("fortune-message").textContent = '';
      document.getElementById("fortune-message").style.display = 'none';
    });
  
    it('should increment the credit by 100', () => {
        // Get the initial credit value
        const initialCredit = parseInt(document.getElementById("credit").textContent);

        // Call the shakeCookie function
        shakeCookie();

        // Get the updated credit value
        const updatedCredit = parseInt(document.getElementById("credit").textContent);

        // Check if the credit is incremented by 100
        expect(updatedCredit).toBe(initialCredit + 100);
        
    });
  });

  describe('openFortune', () => {
    it('should display a random fortune message', () => {
      // Get the fortune cookie and message elements
      const cookieElement = document.getElementById("fortune-cookie");
      const messageElement = document.getElementById("fortune-message");
  
      // Call the openFortune function
      openFortune();
  
      // Check the shake-animation class is activated from the cookie element
      expect(cookieElement.classList.contains('shake-animation')).toBe(true);

      setTimeout(() => {
        // Check if the shake-animation class is removed from the cookie element
        expect(cookieElement.classList.contains('shake-animation')).toBe(false);
        
        // Check if the message is assigned a random message from the messages array
        expect(messages).toContain(messageElement.textContent);

        // Check if the message element is displayed
        expect(messageElement.style.display).toBe("block");
        // Call `done` to indicate that the test has completed
        done();
      }, 2000);
    });
  });