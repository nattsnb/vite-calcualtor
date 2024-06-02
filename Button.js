export class Button {
    constructor(buttonMapNum, calculator, buttonContainer) {
        this.buttonMapNum = buttonMapNum;
        this.calculator = calculator;
        this.buttonContainer = buttonContainer;
        this.buttonInfo = this.calculator.buttonStructure[buttonMapNum];
        this.setButton();
        this.changeButtonSign();
        this.initializeEventListener();
    }
    setButton = () => {
        this.buttonContainer.classList.add(`button`, this.buttonInfo[1]);
    }
    changeButtonSign = () => {
        this.buttonContainer.innerHTML = this.buttonInfo[0];
    }

    initializeEventListener = () => {
        if (this.buttonInfo[1] === "digit-button"){
            this.buttonContainer.addEventListener('click', this.clickOnDigit);
        }
        if (this.buttonInfo[1] === "eq-button"){
            this.buttonContainer.addEventListener('click', this.clickOnEq);
        }
    }
    clickOnDigit = () => {
        this.calculator.input.digitButtonPressed(this.buttonInfo[0]);
    }
    clickOnEq = () => {
        this.calculator.input.eqButtonPressed(this.buttonInfo[0]);
    }
}