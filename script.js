function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");

let num1Arr = [];

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", function () {
        num1Arr.push(numberButton.innerText);
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function () {
        if (num1Arr) {
            num1 = parseInt(num1Arr.join(""));
            operator = operatorButton.innerText;
        }
    });
});

let num2Arr = [];

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", function () {
        if (num1 && operator) {
            num2Arr.push(numberButton.innerText);
        }
    });
});

equalsButton.addEventListener("click", function () {
    if (num1Arr && num1 && operator) {
        num2 = parseInt(num2Arr.join(""));
        console.log(operate(operator, num1, num2));
    }
});
