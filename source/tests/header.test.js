const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body><div id="fullscreen-video"></video>
</div><div id="credit">50000</div><div id="fortune-cookie"></div><div id="fortune-message"></div></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
// Mock localStorage
global.localStorage = {
  clear: jest.fn(),
};

const { shakeCookie, skipVideo, openFortune } = require("../header/header-component.js");

describe('Header functionality', () => {
    beforeEach(() => {
        // Reset the fortune cookie and message elements
        document.getElementById("fortune-cookie").innerHTML = '';
        document.getElementById("fortune-message").textContent = '';
        document.getElementById("fortune-message").style.display = 'none';
    });

    it('should delete "shake-animation" class to the cookie afterwards', () => {
        // Call the shakeCookie function
        shakeCookie();

        expect(document.getElementById("fortune-cookie").classList.contains('shake-animation')).toBe(false);
    });

    it('should clear and hide the fortune message', () => {
        document.getElementById("fortune-message").textContent = "Test message";

        // Call the shakeCookie function
        shakeCookie();

        // Check if the message element is hidden
        expect(document.getElementById("fortune-message").textContent).toBe("");
        expect(document.getElementById("fortune-message").style.display).toBe("none");
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

    it('trying multiple clicks', () => {
        // Get the initial credit value
        const initialCredit = parseInt(document.getElementById("credit").textContent);

        // Call the shakeCookie function
        let i = 0;
        while (i < 100) {
            shakeCookie();
            i++;
        }

        // Get the updated credit value
        const updatedCredit = parseInt(document.getElementById("credit").textContent);

        // Check if the credit is incremented by 10000
        expect(updatedCredit).toBe(initialCredit + 10000);
        
    });
});