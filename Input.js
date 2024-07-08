export class Input {
  constructor(inputContainer, displayLine1, displayLine2) {
    this.inputContainer = inputContainer;
    this.firstNumber = null;
    this.secondNumber = null;
    this.eqSign = null;
    this.displayLine1 = displayLine1;
    this.displayLine2 = displayLine2;
  }
  digitButtonPressed = (digit) => {
    this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
  };
  actionButtonPressed = (eq) => {
    if (this.firstNumber === null && this.inputContainer.innerHTML !== "") {
      this.startOperation(eq);
    } else if (
      this.firstNumber &&
      this.inputContainer.innerHTML !== "" &&
      this.eqSign !== null
    ) {
      this.finishOperation(eq);
    } else if (eq !== "=") {
      this.showEqSign(eq);
    }
  };
  startOperation(eq) {
    this.firstNumber = this.inputContainer.innerHTML;
    this.displayLine1.innerHTML = this.firstNumber;
    this.inputContainer.innerHTML = "";
    if (eq !== "=") {
      this.showEqSign(eq);
    }
  }
  finishOperation(eq) {
    this.secondNumber = this.inputContainer.innerHTML;
    this.firstNumber = this.doTheEq();
    this.displayLine1.innerHTML = this.firstNumber;
    this.inputContainer.innerHTML = "";
    this.secondNumber = null;
    if (eq === "=") {
      this.eqSign = null;
      this.displayLine2.innerHTML = "";
    } else {
      this.showEqSign(eq);
    }
  }
  showEqSign(eq) {
    this.eqSign = eq;
    this.displayLine2.innerHTML = eq;
  }
  doTheEq = () => {
    if (this.eqSign === "+") {
      return parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    if (this.eqSign === "-") {
      return this.firstNumber - this.secondNumber;
    }
    if (this.eqSign === "*") {
      return this.firstNumber * this.secondNumber;
    }
    if (this.eqSign === "/") {
      if (this.secondNumber === 0) {
        return;
      }
      return this.firstNumber / this.secondNumber;
    }
  };
}
