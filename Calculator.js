import { Input } from "./Input.js";
import {DigitButton} from "./DigitButton.js";
import {ActionButton} from "./ActionButton.js";

export class Calculator {
  constructor() {
    this.appcontainer = document.querySelector("#app");
    this.input = null;
    this.createInput();
    const buttonRows = [
      ["7","8","9","+"],
      ["4","5","6","-"],
      ["1","2","3","*"],
      [".","0","=","/"],
    ];
    buttonRows.forEach(this.createRowWithButtons);
  }
  createInput = () => {
    this.createRow().setAttribute("id", "input-container");
    const inputContainer = document.querySelector("#input-container");
    this.input = new Input(inputContainer);
  };
  createRowWithButtons = (buttonsArray) => {
    const row = document.createElement("div");
    row.classList.add(`row`);
    for (let i = 0; i < buttonsArray.length; i++) {
      if (Number(buttonsArray[i])) {
        const buttonContainer = document.createElement("div");
        row.append(buttonContainer);
        new DigitButton(
            buttonsArray[i],
            this,
            buttonContainer,
        );
      }
      else {
        const buttonContainer = document.createElement("div");
        row.append(buttonContainer);
        new ActionButton(
            buttonsArray[i],
            this,
            buttonContainer,
        );
      }
    }
    this.appcontainer.append(row);
    return row;
  };

  createRow = () => {
    const row = document.createElement("div");
    row.classList.add(`row`);
    this.appcontainer.append(row);
    return row;
  };
}
