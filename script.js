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

const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operatorKeys = ['%', '+', '-', '/', '*']
const evaluationKeys = ['=', 'Enter']
const clearKey = ['c']
const deleteKey = ['Backspace']
let dotKey = ['.']

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", function () {
        if (equalsClicked) {
            num1 = undefined;
            equalsClicked = false;
        }
        if (!operator) {
            numArr.push(numberButton.innerText);
            display.innerText = numArr.join("");
        }
        if (num1 >= 0 && operator) {
            numArr.push(numberButton.innerText);
            display.innerText = numArr.join("");
        }
    });
});


window.addEventListener('keydown', function (e) {
    if (numberKeys.includes(e.key)) {
        if (equalsClicked) {
            num1 = undefined;
            equalsClicked = false;
        }
        if (!operator) {
            numArr.push(e.key);
            display.innerText = numArr.join("");
        }
        if (num1 >= 0 && operator) {
            numArr.push(e.key);
            display.innerText = numArr.join("");
        }
    }
});


operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function () {
        if (operator) {
            evaluate();
            dotButton.disabled = false;
            dotKey = ['.']
        } else if (numArr || num1 >= 0) {
            if (!num1) {
                num1 = Number(numArr.join(""));
            }
        }
        operator = operatorButton.innerText;
        numArr = [];
        dotButton.disabled = false;
        dotKey = ['.']
        equalsClicked = false;
    });
});

window.addEventListener('keydown', function (e) {
    if (operatorKeys.includes(e.key)) {
        if (operator) {
            evaluate();
            dotButton.disabled = false;
            dotKey = ['.']
        } else if (numArr || num1 >= 0) {
            if (!num1) {
                num1 = Number(numArr.join(""));
            }
        }
        operator = e.key;
        numArr = [];
        dotButton.disabled = false;
        dotKey = ['.']
        equalsClicked = false;
    }
})

equalsButton.addEventListener("click", function () {
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
        dotKey = ['.']
        display.innerText = 'Math Err';
        equalsClicked = false
    }
});

window.addEventListener('keydown', function (e) {
    if (evaluationKeys.includes(e.key)) {
        if (numArr && num1 >= 0 && operator) {
            evaluate();
            operator = undefined;
        }
        dotButton.disabled = false;
        dotKey = ['.']
        equalsClicked = true;
        if (num1 === Infinity) {
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            numArr = [];
            display.innerText = "";
            dotButton.disabled = false;
            dotKey = ['.']
            display.innerText = 'Math Err';
            equalsClicked = false
        }
    }
})

clearButton.addEventListener("click", function () {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    numArr = [];
    display.innerText = 0;
    dotButton.disabled = false;
    equalsClicked = false
});

window.addEventListener('keydown', function (e) {
    if (clearKey.includes(e.key)) {
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        numArr = [];
        display.innerText = 0;
        dotButton.disabled = false;
        dotKey = ['.']
        equalsClicked = false
    }
})

deleteButton.addEventListener("click", function () {
    numArr.pop();
    display.innerText = numArr.join("");
});

window.addEventListener('keydown', function (e) {
    if (deleteKey.includes(e.key)) {
        numArr.pop();
        display.innerText = numArr.join("");
    }
})

dotButton.addEventListener("click", function () {
    numArr.push(dotButton.innerText);
    display.innerText = numArr.join("");
    dotButton.disabled = true;
    dotKey = []
});

window.addEventListener('keydown', function (e) {
    if (dotKey.includes(e.key)) {
        numArr.push(dotButton.innerText);
        display.innerText = numArr.join("");
        dotButton.disabled = true;
        dotKey = []
    }
})
