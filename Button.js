export class Button {
    constructor(buttonMapNum, calculator, buttonContainer) {
        this.buttonMapNum = buttonMapNum;
        this.calculator = calculator;
        this.buttonContainer = buttonContainer;
        this.buttonInfo = this.calculator.buttonStructure[buttonMapNum];
        console.log(this.buttonInfo);
    }
}