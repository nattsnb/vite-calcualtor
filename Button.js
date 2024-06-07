export class Button {
  constructor(sign, buttonType, calculator, buttonContainer) {
    this.calculator = calculator;
    this.sign = sign;
    this.buttonType = buttonType;
    this.buttonContainer = buttonContainer;
    this.setButton();
    this.changeButtonSign();
    this.initializeEventListener();
  }
  setButton = () => {
    this.buttonContainer.classList.add(`button`, this.buttonType);
  };
  changeButtonSign = () => {
    this.buttonContainer.innerHTML = this.sign;
  };

  initializeEventListener = () => {
    if (this.buttonType === "digit-button") {
      this.buttonContainer.addEventListener("click", this.clickOnDigit);
    }
    if (this.buttonType === "eq-button") {
      this.buttonContainer.addEventListener("click", this.clickOnEq);
    }
  };
  clickOnDigit = () => {
    this.calculator.input.digitButtonPressed(this.sign);
  };
  clickOnEq = () => {
    this.calculator.input.eqButtonPressed(this.sign);
  };
}
