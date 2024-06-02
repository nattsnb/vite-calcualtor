export class Button {
    constructor(buttonMapNum, calculator, buttonContainer) {
        this.buttonMapNum = buttonMapNum;
        this.calculator = calculator;
        this.buttonContainer = buttonContainer;
        this.buttonInfo = this.calculator.buttonStructure[buttonMapNum];
        this.setButton();
        this.changeButtonSign();
    }
    setButton = () => {
        this.buttonContainer.classList.add(`button`, this.buttonInfo[1]);
    }
    changeButtonSign = () => {
        console.log( this.buttonInfo[0]);
        this.buttonContainer.innerHTML = this.buttonInfo[0];
    }
}