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


function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else if (operator === "%") {
        return modulo(num1, num2);
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

function choseNumber(arg) {
    if (equalsClicked) {
        num1 = undefined;
        equalsClicked = false;
    }
    if (!operator) {
        numArr.push(arg);
        display.innerText = numArr.join("");
    }
    if (num1 >= 0 && operator) {
        numArr.push(arg);
        display.innerText = numArr.join("");
    }
}

function choseOperator(arg) {
    if (operator) {
        evaluate();
        dotButton.disabled = false;
        dotKey = ["."];
    } else if (numArr || num1 >= 0) {
        if (!num1) {
            num1 = Number(numArr.join(""));
        }
    }
    operator = arg;
    numArr = [];
    dotButton.disabled = false;
    dotKey = ["."];
    equalsClicked = false;
}

function equals() {
    if (numArr && num1 >= 0 && operator) {
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
        dotKey = ["."];
        display.innerText = "Math Err";
        equalsClicked = false;
    }
}

function clearAll() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    numArr = [];
    display.innerText = 0;
    dotButton.disabled = false;
    equalsClicked = false;
}

function deleteChar() {
    numArr.pop();
    display.innerText = numArr.join("");
}

function addDecimalPoint() {
    numArr.push(dotButton.innerText);
    display.innerText = numArr.join("");
    dotButton.disabled = true;
    dotKey = [];
}

let num1;
let num2;
let operator;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#ac");
const deleteButton = document.querySelector("#del");
const dotButton = document.querySelector("#dot");

let numArr = [];
display.innerText = 0;
equalsClicked = false;

const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorKeys = ["%", "+", "-", "/", "*"];
const evaluationKeys = ["=", "Enter"];
const clearKey = ["c"];
const deleteKey = ["Backspace"];
let dotKey = ["."];

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", function () {
        choseNumber(numberButton.innerText);
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function () {
        choseOperator(operatorButton.innerText);
    });
});

// MOUSE CONTROLS

equalsButton.addEventListener("click", function () {
    equals();
});

clearButton.addEventListener("click", function () {
    clearAll();
});

deleteButton.addEventListener("click", function () {
    deleteChar();
});

dotButton.addEventListener("click", function () {
    addDecimalPoint();
});

window.addEventListener("keydown", function (e) {
    if (numberKeys.includes(e.key)) {
        choseNumber(e.key);
    }
});

// KEYBOARD CONTROLS

window.addEventListener("keydown", function (e) {
    if (operatorKeys.includes(e.key)) {
        choseOperator(e.key);
    }
});
window.addEventListener("keydown", function (e) {
    if (evaluationKeys.includes(e.key)) {
        equals();
    }
});
window.addEventListener("keydown", function (e) {
    if (clearKey.includes(e.key)) {
        clearAll();
    }
});
window.addEventListener("keydown", function (e) {
    if (deleteKey.includes(e.key)) {
        deleteChar();
    }
});
window.addEventListener("keydown", function (e) {
    if (dotKey.includes(e.key)) {
        addDecimalPoint();
    }
});
