const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const {showInstruction, hideInstruction} = require('../instruction_screen/instruction')

describe('instructions', () => {
    beforeEach(() => {
        const dom = new JSDOM(
            `<!DOCTYPE html>
            <ul id="instructionsList">
                <li class="instruction" style="display: none;">Instruction 1</li>
                <li class="instruction" style="display: none;">Instruction 2</li>
                <li class="instruction" style="display: none;">Instruction 3</li>
            </ul>`
        );

        global.document = dom.window.document;
    });

    it('should show the instruction', () => {
        const instructions = global.document.getElementsByClassName("instruction");
        showInstruction(0);
        expect(instructions[0].style.display).toBe("block");
        expect(instructions[1].style.display).toBe("none");
        expect(instructions[2].style.display).toBe("none");
    });

    it('should hide the instruction', () => {
        const instructions = global.document.getElementsByClassName("instruction");
        hideInstruction(0);
        expect(instructions[0].style.display).toBe("none");
        expect(instructions[1].style.display).toBe("none");
        expect(instructions[2].style.display).toBe("none");
    });
});
