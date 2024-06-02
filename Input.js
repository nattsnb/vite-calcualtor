export class Input {
    constructor(inputContainer) {
        this.inputContainer = inputContainer
    }
    digitButtonPressed = (digit) => {
        this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit
    }
    eqButtonPressed = (eq) => {
        console.log(`eq: ${eq}`)
    }
}