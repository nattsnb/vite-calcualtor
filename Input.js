export class Input {
  constructor(inputContainer) {
    this.inputContainer = inputContainer;
    this.num1 = null;
    this.num2 = null;
    this.eqSign = null;
  }
  digitButtonPressed = (digit) => {
    this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
  };
  eqButtonPressed = (eq) => {
    if (eq === "=") {
      this.num2 = Number(this.inputContainer.innerHTML.substring(3));
      const result = this.doTheEq();
      console.log(this.num2);
      console.log("=");
      console.log(result);
      this.inputContainer.innerHTML = result;
      this.num1 = null;
      this.num2 = null;
      this.eqSign = null;
    } else {
      if (this.num1 === null) {
        this.num1 = Number(this.inputContainer.innerHTML);
        this.inputContainer.innerHTML = `${eq}  `;
        this.eqSign = eq;
        console.log(this.num1);
        console.log(eq);
      } else {
        this.num2 = Number(this.inputContainer.innerHTML.substring(3));
        console.log(this.num2);
        console.log("=");
        this.num1 = this.doTheEq();
        console.log(this.num1);
        console.log(eq);
      }
    }
  };
  doTheEq = () => {
    if (this.eqSign === "+") {
      return this.num1 + this.num2;
    }
    if (this.eqSign === "-") {
      return this.num1 - this.num2;
    }
    if (this.eqSign === "*") {
      return this.num1 * this.num2;
    }
    if (this.eqSign === "/") {
      if (this.num2 === 0) {
        this.inputContainer.innerHTML = "Do not divide by 0";
      }
      return this.num1 + this.num2;
    }
  };
}
