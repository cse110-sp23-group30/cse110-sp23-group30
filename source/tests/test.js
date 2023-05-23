const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('showSettings', () => {
    it('should display the settings popup', () => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <div id="settings-popup" style="display: none;"></div>
        `);
        
        global.window = dom.window;
        global.document = dom.window.document;

        showSettings();
        expect(document.getElementById("settings-popup").style.display).toBe("block");
    });
});

describe('closeSettings', () => {
    it('should hide the settings popup', () => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <div id="settings-popup" style="display: block;"></div>
        `);
        
        global.window = dom.window;
        global.document = dom.window.document;

        closeSettings();
        expect(document.getElementById("settings-popup").style.display).toBe("none");
    });
});
