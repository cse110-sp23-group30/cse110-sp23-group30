const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body><div id="fortune-cookie"></div><div id="fortune-message"></div></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
// Mock localStorage
global.localStorage = {
  clear: jest.fn(),
};

const { shakeCookie, restartGame, goToHome } = require("../cookie_screen/cookie_screen.js");

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


describe('restartGame', () => {
    it('should clear and hide the fortune message', () => {
        document.getElementById("fortune-message").textContent = "Test message";
        restartGame();
        expect(document.getElementById("fortune-message").textContent).toBe("");
        expect(document.getElementById("fortune-message").style.display).toBe("none");
    });
});