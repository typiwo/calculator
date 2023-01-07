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

/* Create some important variables */
// Value currently displayed on the screen
let displayValue = 0;

// First value in operation
let firstValue = 0;

// Second value in operation
let secondValue = 0;

/* 
CODING THE FUNCTIONALITY
1. User presses respective button: Display the respective number on the screen; store this number as displayNumber/firstNumber
2. User presses operator: Save this as 'currentOperator'
3. User presses another button: Save this as displayNumber/secondNumber
4a. Equals is pressed: Perform computation, display result...save this result as firstNum in case stringing together more operations
4b. Another operator is pressed: Perform computation, display result, save result as firstNum
*/

/* ADD EVENT LISTENERS TO EACH BUTTON */
zeroButton.addEventListener('click', () => clickButton("0"));
oneButton.addEventListener('click', () => clickButton("1"));
twoButton.addEventListener('click', () => clickButton("2"));
threeButton.addEventListener('click', () => clickButton("3"));
fourButton.addEventListener('click', () => clickButton("4"));
fiveButton.addEventListener('click', () => clickButton("5"));
sixButton.addEventListener('click', () => clickButton("6"));
sevenButton.addEventListener('click', () => clickButton("7"));
eightButton.addEventListener('click', () => clickButton("8"));
nineButton.addEventListener('click', () => clickButton("9"));
clearButton.addEventListener('click', () => clickButton("clear"));
deleteButton.addEventListener('click', () => clickButton("delete"));

console.log(displayValue);



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

/* DISPLAY FUNCTIONS */
// Changes screen display based on button pressed (I don't like how long this function is...)
function clickButton(btn) {
    let currentInput = input.textContent;
    if (btn === "0") {
        if (currentInput !== "0") {
            input.textContent += "0";
        }
    }
    else if (btn === "1") {
        if (currentInput !== "0"){
            input.textContent += "1";
        }
        else {
            input.textContent = "1";
        }
    }
    else if (btn === "2") {
        if (currentInput !== "0"){
            input.textContent += "2";
        }
        else {
            input.textContent = "2";
        }
    }
    else if (btn === "3") {
        if (currentInput !== "0"){
            input.textContent += "3";
        }
        else {
            input.textContent = "3";
        }
    }
    else if (btn === "4") {
        if (currentInput !== "0"){
            input.textContent += "4";
        }
        else {
            input.textContent = "4";
        }
    }
    else if (btn === "5") {
        if (currentInput !== "0"){
            input.textContent += "5";
        }
        else {
            input.textContent = "5";
        }
    }
    else if (btn === "6") {
        if (currentInput !== "0"){
            input.textContent += "6";
        }
        else {
            input.textContent = "6";
        }
    }
    else if (btn === "7") {
        if (currentInput !== "0"){
            input.textContent += "7";
        }
        else {
            input.textContent = "7";
        }
    }
    else if (btn === "8") {
        if (currentInput !== "0"){
            input.textContent += "8";
        }
        else {
            input.textContent = "8";
        }
    }
    else if (btn === "9") {
        if (currentInput !== "0"){
            input.textContent += "9";
        }
        else {
            input.textContent = "9";
        }
    }
    else if (btn === "clear") {
        input.textContent = "0";
    }
    else if (btn === "delete") { // THIS MAY NOT WORK
        if (currentInput.length > 1) {
            input.textContent = currentInput.slice(0, -1);
        }
        else {
            input.textContent = "0";
        }
    }
}