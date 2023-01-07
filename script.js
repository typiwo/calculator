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