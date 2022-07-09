let storedValue = '';
let storedOperation = '';
let displayedEquation = '';
let workingValue = '';

const displayedValue = document.querySelector('.displayed-value');
const displayedOperation = document.querySelector('.stored-operation');
const numBtns = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const addBtn = document.querySelector('.add-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const divideBtn = document.querySelector('.divide-btn');
const dotBtn = document.querySelector('.dot-btn');
const equalBtn = document.querySelector('.equal-btn');

clearBtn.addEventListener('click', clearCal);
deleteBtn.addEventListener('click', deleteNum);
equalBtn.addEventListener('click', evaluate);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => setOperation(e.target.textContent))
})

function initCalc() {
    for (let button of numBtns) {
        button.addEventListener('click', (e) => {
            displayedValue.textContent = null;
            workingValue += e.target.value;
            displayedValue.textContent = workingValue;
        });
    }
};

function clearCal() {
    storedValue = '';
    storedOperation = '';
    workingValue = '';

    displayedValue.textContent = 0;
    displayedOperation.textContent = '';
};

function deleteNum() {
    let newNum = workingValue.slice(0, -1);
    workingValue = newNum
    if (workingValue < 1) {workingValue = 0};
    displayedValue.textContent = workingValue;
};

function setOperation(operator) {
    let properOperator = getOperator(operator)
    storedValue = workingValue;
    storedOperation = properOperator;
    workingValue = '';
    displayedOperation.textContent = `${storedValue} ${storedOperation}`;
};

function getOperator(symbol) {
    if (symbol === 'x') return '*'
}

function evaluate() {
    let stored = Number(storedValue);
    let working = Number(workingValue);
    updateDisplayedEquation(stored, working);
    
    if (storedOperation === '+') {
        displayedValue.textContent = add(stored, working);
    } else if (storedOperation === '-') {
        displayedValue.textContent = subtract(stored, working);
    } else if (storedOperation === '*') {
        displayedValue.textContent = multiply(stored, working);
    } else if (storedOperation === '/') {
        displayedValue.textContent = divide(stored, working);
    }
};

function updateDisplayedEquation(stored, working) {
    displayedOperation.textContent = `${stored} ${storedOperation} ${working} =`;
}

initCalc();
