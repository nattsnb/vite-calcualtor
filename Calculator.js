import {Input} from "./Input.js";
import {Button} from "./Button.js";

export class Calculator {
    constructor() {
        this.appcontainer = document.querySelector('#app');
        this.input = null;
        this.createInput();
        this.buttonStructure = {
            0: [7, `digit-button`],
            1: [8, `digit-button`],
            2: [9, `digit-button`],
            3: [`+`, `eq-button`],
            4: [4, `digit-button`],
            5: [5, `digit-button`],
            6: [6, `digit-button`],
            7: [`-`, `eqButton`],
            8: [1, `digit-button`],
            9: [2, `digit-button`],
            10: [3, `digit-button`],
            11: [`*`, `eq-button`],
            12: [`.`, `digit-button`],
            13: [0, `digit-button`],
            14: [`=`, `eq-button`],
            15: [`/`, `eq-button`],
        }
        console.log(this.buttonStructure);
        this.createRowWithButtons(0,1,2,3);
        this.createRowWithButtons(4,5,6,7);
        this.createRowWithButtons(8,9,10,11);
        this.createRowWithButtons(12,13,14,15);
    }

    createInput = () => {
        this.createRow().setAttribute('id', 'input-container');
        const inputContainer = document.querySelector('#input-container');
        this.input = new Input(inputContainer);
        inputContainer.append(this.input);
    }

    createRowWithButtons = (firstButton, secondButton, thirdButton, fourthButton) => {
        const row = document.createElement('div');
        row.classList.add(`row`);
        const buttonMap = [firstButton, secondButton, thirdButton, fourthButton];
        console.log(buttonMap);
        for (let i=0; i<4; i++){
            const buttonContainer = document.createElement('div');
            row.append(buttonContainer);
            const newButton = new Button(buttonMap[i], this, buttonContainer);
        }
        this.appcontainer.append(row);
        return row;
    }

    createRow = () => {
        const row = document.createElement('div');
        row.classList.add(`row`);
        this.appcontainer.append(row);
        return row;
    }
}