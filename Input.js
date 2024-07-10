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
    if(digit !== "."){
      this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
    } else if(this.inputContainer.innerHTML.includes(".")) {

    }
    if(digit === "." && this.inputContainer.innerHTML.includes(".") !== true){
      this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
    } else {
    }

  };
  actionButtonPressed = (eq) => {
    if (eq === "-" && this.inputContainer.innerHTML === "") {
      this.inputContainer.innerHTML = "-";
    } else {
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
    }
  };
  startOperation(eq) {
    this.firstNumber = this.getNumberFromInput(this.inputContainer.innerHTML);
    console.log(this.firstNumber)
    this.displayLine1.innerHTML = this.firstNumber;
    this.inputContainer.innerHTML = "";
    if (eq !== "=") {
      this.showEqSign(eq);
    }
  }
  finishOperation(eq) {
    this.secondNumber = this.getNumberFromInput(this.inputContainer.innerHTML);
    console.log(this.secondNumber)
    if (this.secondNumber === "0" && this.eqSign === "/") {
      this.displayLine1.innerHTML = "Do not divide by 0";
      this.inputContainer.innerHTML = "";
      this.displayLine2.innerHTML = "Please try again";
      return;
    }
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
      return (Number(this.firstNumber) + Number(this.secondNumber)).toFixed(2);
    }
    if (this.eqSign === "-") {
      return (this.firstNumber - this.secondNumber).toFixed(2);
    }
    if (this.eqSign === "*") {
      return (this.firstNumber * this.secondNumber).toFixed(2);
    }
    if (this.eqSign === "/") {
      return (this.firstNumber / this.secondNumber).toFixed(2);
    }
  };

  getNumberFromInput(input){
    if(input.includes("-")){
      input.replace("-", "")
      const oppositeNumber = Number(input).toFixed(2)
      return (oppositeNumber*-1)
    } else {
      return Number(input).toFixed(2)
    }
  }
}
