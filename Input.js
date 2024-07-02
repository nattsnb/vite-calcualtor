export class Input {
  constructor(inputContainer, displayLine1, displayLine2) {
    this.inputContainer = inputContainer;
    this.num1 = null;
    this.num2 = null;
    this.eqSign = null;
    this.displayLine1 = displayLine1;
    this.displayLine2 = displayLine2;
  }
  digitButtonPressed = (digit) => {
    this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
  };
  actionButtonPressed = (eq) => {
    if (
      this.num1 === null &&
      this.num2 === null &&
      this.eqSign === null &&
      this.inputContainer.innerHTML !== ""
    ) {
      this.num1 = this.inputContainer.innerHTML;
      this.displayLine1.innerHTML = this.num1;
      this.inputContainer.innerHTML = "";
      if (eq !== "=") {
        this.eqSign = eq;
        this.displayLine2.innerHTML = this.eqSign;
      }
    } else if (this.num1 && this.inputContainer.innerHTML !== "") {
      this.num2 = this.inputContainer.innerHTML;
      this.num1 = this.doTheEq();
      this.displayLine1.innerHTML = this.num1;
      this.inputContainer.innerHTML = "";
      this.num2 = null;
      if (eq === "=") {
        this.eqSign = null;
        this.displayLine2.innerHTML = "";
      } else {
        this.eqSign = eq;
        this.displayLine2.innerHTML = eq;
      }
    } else if (eq !== "=") {
      this.eqSign = eq;
      this.displayLine2.innerHTML = eq;
    }
  };
  doTheEq = () => {
    if (this.eqSign === "+") {
      return parseInt(this.num1) + parseInt(this.num2);
    }
    if (this.eqSign === "-") {
      return this.num1 - this.num2;
    }
    if (this.eqSign === "*") {
      return this.num1 * this.num2;
    }
    if (this.eqSign === "/") {
      if (this.num2 === 0) {
        return;
      }
      return this.num1 / this.num2;
    }
  };
}
