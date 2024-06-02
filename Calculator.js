import {Input} from "./Input.js";

export class Calculator {
    static buttonStructure = {
        1: [7, `digitButton`],
        2: [8, `digitButton`],
        3: [9, `digitButton`],
        4: [`+`, `eqButton`],
        5: [4, `digitButton`],
        6: [5, `digitButton`],
        7: [6, `digitButton`],
        8: [`-`, `eqButton`],
        9: [1, `digitButton`],
        10: [2, `digitButton`],
        11: [3, `digitButton`],
        12: [`*`, `eqButton`],
        13: [`.`, `digitButton`],
        14: [0, `digitButton`],
        15: [`=`, `eqButton`],
        16: [`/`, `eqButton`],
        }
    constructor() {
        this.appcontainer = document.querySelector('#app');
        this.input = null;
        this.createInput();

    }

    createInput = () => {
        this.input = new Input()
        this.createRow().setAttribute('id', 'input-container')
        const inputContainer = document.querySelector('#input-container')
        inputContainer.append(this.input)

    }

    createRow = (firstButton, secondButton, thirdButton, fourthButton) => {
        const row = document.createElement('div');
        row.classList.add(`row`);
        const buttonMap = [firstButton, secondButton, thirdButton, fourthButton]
        for (i<3; i===0; i++){
            const newButton = new Button(buttonMap[i])
            const row = document.createElement('div');
            row.classList.add(`row`);
        }
        this.appcontainer.append(row);
        return row
    }


}