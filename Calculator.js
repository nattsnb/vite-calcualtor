import { Input } from "./Input.js";
import { Button } from "./Button.js";

export class Calculator {
  constructor() {
    this.appcontainer = document.querySelector("#app");
    this.input = null;
    this.createInput();
    const buttonRows = [
      [
        { button: "7", buttonType: "digit-button" },
        { button: "8", buttonType: "digit-button" },
        { button: "9", buttonType: "digit-button" },
        { button: "+", buttonType: "eq-button" },
      ],
      [
        { button: "4", buttonType: "digit-button" },
        { button: "5", buttonType: "digit-button" },
        { button: "6", buttonType: "digit-button" },
        { button: "-", buttonType: "eq-button" },
      ],
      [
        { button: "1", buttonType: "digit-button" },
        { button: "2", buttonType: "digit-button" },
        { button: "3", buttonType: "digit-button" },
        { button: "*", buttonType: "eq-button" },
      ],
      [
        { button: ".", buttonType: "digit-button" },
        { button: "0", buttonType: "digit-button" },
        { button: `=`, buttonType: "eq-button" },
        { button: "/", buttonType: "eq-button" },
      ],
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
      const buttonContainer = document.createElement("div");
      row.append(buttonContainer);
      new Button(
        buttonsArray[i].button,
        buttonsArray[i].buttonType,
        this,
        buttonContainer,
      );
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
