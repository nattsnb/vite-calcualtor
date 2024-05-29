import {Input} from "./Input.js";

class Calculator {
    constructor() {
        this.container = null;
        this.input = null;
        this.createInput();

    }

    createInput = () => {
        this.input = new Input()
        this.createRow().setAttribute('id', 'input-container')
        const inputContainer = document.querySelector('#input-container')
        inputContainer.append(this.input)

    }

    createRow = () => {
        const row = document.createElement('div');
        row.classList.add(`row`);
        this.container.append(row);
        return row
    }


}