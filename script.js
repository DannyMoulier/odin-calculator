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

function evaluate() {
    num2 = Number(numArr.join(""));
    const result = operate(operator, num1, num2);
    display.innerText = result;
    num1 = result;
    num2 = undefined;
    numArr = [];
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#ac");
const deleteButton = document.querySelector("#del");
const dotButton = document.querySelector("#dot");

let numArr = [];
display.innerText = 0;
equalsClicked = false

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", function () {
        if (!operator) {
            numArr.push(numberButton.innerText);
            display.innerText = numArr.join("");
        }
        if (num1 && operator) {
            numArr.push(numberButton.innerText);
            display.innerText = numArr.join("");
        }
        // if (equalsClicked) {
        //     numArr.push(numberButton.innerText);
        //     display.innerText = numArr.join("");
        // }
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function () {
        // if (equalsClicked) {
        //     num1 = Number(numArr.join(""));
        //     equalsClicked = false
        // } else if (numArr == []) {
        //     evaluate();
        //     dotButton.disabled = false;
        // }
        if (operator) {
            evaluate();
            dotButton.disabled = false;
        } else if (numArr || num1) {
            if (!num1) {
                num1 = Number(numArr.join(""));
            }
        }
        operator = operatorButton.innerText;
        numArr = [];
        dotButton.disabled = false;
    });
});

equalsButton.addEventListener("click", function () {
    if (numArr && num1 && operator) {
        evaluate();
        operator = undefined;
    }
    dotButton.disabled = false;
    equalsClicked = true;
    if (num1 === Infinity) {
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        numArr = [];
        display.innerText = "";
        dotButton.disabled = false;
        display.innerText = 'Math Err';
        equalsClicked = false
    }
});

clearButton.addEventListener("click", function () {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    numArr = [];
    display.innerText = 0;
    dotButton.disabled = false;
    equalsClicked = false
});

deleteButton.addEventListener("click", function () {
    numArr.pop();
    display.innerText = numArr.join("");
});

dotButton.addEventListener("click", function () {
    numArr.push(dotButton.innerText);
    display.innerText = numArr.join("");
    dotButton.disabled = true;
});
