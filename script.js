/* IMPORT BUTTONS and SCREEN */
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const decimalButton = document.querySelector('#decimal');
const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const screen = document.querySelector('.screen');
const input = document.querySelector('#input');
const numberButtons = document.querySelectorAll('.number-pad > .number');
const operatorButtons = document.querySelectorAll('.number-pad > .operator')

/* Create some important variables */
// Value currently displayed on the screen
let displayValue = "";

// First value in operation
let firstValue = "";

// Current operator
let operator = "";

// Last pressed button
let lastPressed = "";

// Array for possible operators
let operatorArray = ["+", "-", "x", "/", "="];



/* ADD EVENT LISTENERS TO NUMBER BUTTONS */
numberButtons.forEach((button) => {

    // for each one we add a 'click' listener
    button.addEventListener('click', () => {
        numberPressed(convertID(button.id)); 
    });
  });

/* ADD EVENT LISTENERS TO OPERATOR BUTTONS */
operatorButtons.forEach((button) => {

    // for each one we add a 'click' listener
    button.addEventListener('click', () => {
        operatorPressed(convertID(button.id));
    });
  });

/* ADD EVENT LISTENER TO CLEAR BUTTON */
clearButton.addEventListener('click', () => {
    clearPressed();
})

/* ADD EVENT LISTENER TO DELETE BUTTON */
deleteButton.addEventListener('click', () => {
    deletePressed();
})


/* ARITHMETIC FUNCTIONS */
// Adds 2 numbers
function add(num1, num2) {
    ans = parseFloat(num1) + parseFloat(num2);
    return Math.round(100*ans)/100; // Round to nearest hundredth
}

// Subtracts 2 numbers
function subtract(num1, num2) {
    ans = parseFloat(num1) - parseFloat(num2);
    return Math.round(100*ans)/100; // Round to nearest hundredth
}

// Multiplies 2 numbers
function multiply(num1, num2) {
    ans = parseFloat(num1) * parseFloat(num2);
    return Math.round(100*ans)/100; // Round to nearest hundredth
}

// Divides 2 numbers 
function divide(num1, num2) {
    if (num2 == 0) {
        return "Error: Divide by 0"
    }
    else {
        ans = parseFloat(num1) / parseFloat(num2);
        return Math.round(100*ans)/100; // Round to nearest hundredth

    }
}

/* OPERATOR FUNCTION */
// Takes 2 numbers and an operand
function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === 'x') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
}

/* NUMBER BUTTON FUNCTIONS */
// When a number is pressed
function numberPressed(num) {
    if (operatorArray.includes(lastPressed)) {
        input.textContent = "";
    }

    if (input.textContent == 0) {
        input.textContent = num;
    }
    else if ((input.textContent.includes(".") && num !== ".") || !input.textContent.includes(".")) { // Don't allow 2 decimals
       input.textContent += num;
    }
    displayValue = input.textContent;
    lastPressed = num;
}

/* OPERATOR BUTTON FUNCTIONS */
function operatorPressed(op) {
    // First, check if the last pressed button was an operator
    if (operatorArray.includes(lastPressed)) {
        operator = op;
    }
    else {
        // If operator is already set and we have a firstValue
        if (operatorArray.includes(operator) && firstValue !== "") {
            displayValue = operate(firstValue, displayValue, operator);
            firstValue = displayValue;
            operator = op;
            input.textContent = displayValue;
        }
        // If an operator is not yet set
        else {
            firstValue = displayValue;
            operator = op;
        }
    }

    lastPressed = op;
    
}

/* CLEAR BUTTON FUNCTION */
function clearPressed() {
    firstValue = "";
    displayValue = "";
    operator = "";
    input.textContent = 0;
}

/* DELETE BUTTON FUNCTION */
function deletePressed() {
    if (input.textContent.length > 1) {
        input.textContent = input.textContent.slice(0, -1);
    }
    else {
        input.textContent = 0;
    }
    displayValue = input.textContent;
}

/* Converts button ID to respective number/symbol */
function convertID(id) {
    if (id === "zero") {
        return 0;
    }
    else if (id === "one") {
        return 1;
    }
    else if (id === "two") {
        return 2;
    }
    else if (id === "three") {
        return 3;
    }
    else if (id === "four") {
        return 4;
    }
    else if (id === "five") {
        return 5;
    }
    else if (id === "six") {
        return 6;
    }
    else if (id === "seven") {
        return 7;
    }
    else if (id === "eight") {
        return 8;
    }
    else if (id === "nine") {
        return 9;
    }
    else if (id === "decimal") {
        return ".";
    }
    else if (id === "add") {
        return "+";
    }
    else if (id === "subtract") {
        return "-";
    }
    else if (id === "multiply") {
        return "x";
    }
    else if (id === "divide") {
        return "/";
    }
    else if (id === "equals") {
        return "=";
    }
}



