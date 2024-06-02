import {Input} from "./Input.js";
import {Button} from "./Button.js";

export class Calculator {
    constructor() {
        this.appcontainer = document.querySelector('#app');
        this.input = null;
        this.createInput();
        this.buttonStructure = {
            0: [7, `digitButton`],
            1: [8, `digitButton`],
            2: [9, `digitButton`],
            3: [`+`, `eqButton`],
            4: [4, `digitButton`],
            5: [5, `digitButton`],
            6: [6, `digitButton`],
            7: [`-`, `eqButton`],
            8: [1, `digitButton`],
            9: [2, `digitButton`],
            10: [3, `digitButton`],
            11: [`*`, `eqButton`],
            12: [`.`, `digitButton`],
            13: [0, `digitButton`],
            14: [`=`, `eqButton`],
            15: [`/`, `eqButton`],
        }
        console.log(this.buttonStructure)
        this.createRowWithButtons(0,1,2,3);
        this.createRowWithButtons(4,5,6,7);
        this.createRowWithButtons(8,9,10,11);
        this.createRowWithButtons(12,13,14,15);
    }

    createInput = () => {
        this.input = new Input()
        this.createRow().setAttribute('id', 'input-container')
        const inputContainer = document.querySelector('#input-container')
        inputContainer.append(this.input)

    }

    createRowWithButtons = (firstButton, secondButton, thirdButton, fourthButton) => {
        const row = document.createElement('div');
        row.classList.add(`row`);
        const buttonMap = [firstButton, secondButton, thirdButton, fourthButton]
        console.log(buttonMap)
        for (let i=0; i<4; i++){
            const buttonContainer = document.createElement('div');
            row.classList.add(`row`);
            console.log(buttonMap[i])
            const newButton = new Button(buttonMap[i], this, buttonContainer)
        }
        this.appcontainer.append(row);
        return row
    }

    createRow = () => {
        const row = document.createElement('div');
        row.classList.add(`row`);
        this.appcontainer.append(row);
        return row
    }

}