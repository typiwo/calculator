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

/* 
CODING THE FUNCTIONALITY
1. User presses respective button: Display the respective number on the screen; store this number as displayNumber/firstNumber
2. User presses operator: Save this as 'currentOperator'
3. User presses another button: Save this as displayNumber/secondNumber
4a. Equals is pressed: Perform computation, display result...save this result as firstNum in case stringing together more operations
4b. Another operator is pressed: Perform computation, display result, save result as firstNum
*/

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
        
    });
  });

/* ADD EVENT LISTENER TO CLEAR BUTTON */

/* ADD EVENT LISTENER TO DELETE BUTTON */



/* ARITHMETIC FUNCTIONS */
// Adds 2 numbers
function add(num1, num2) {
    return num1 + num2;
}

// Subtracts 2 numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplies 2 numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Divides 2 numbers 
function divide(num1, num2) {
    return num1 / num2;
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
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
}

/* NUMBER BUTTON FUNCTIONS */
// When a number is pressed
function numberPressed(num) {
    if (input.textContent == 0) {
        input.textContent = num;
    }
    else if ((input.textContent.includes(".") && num !== ".") || !input.textContent.includes(".")) { // Don't allow 2 decimals
       input.textContent += num;
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
}


