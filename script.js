let storedValue = '';
let storedOperation = '';
let displayedEquation = '';
let workingValue = '';

const displayedValue = document.querySelector('.displayed-value');
const displayedOperation = document.querySelector('.stored-operation');
const numberButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
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

numberButtons.forEach(number => {
    number.addEventListener('click', (e) => displayNumber(e.target.textContent))
})

function displayNumber(number) {
    displayedValue.textContent = null;
    workingValue += number;
    displayedValue.textContent = workingValue;
}

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
    if (storedValue && workingValue) {evaluate()}
    else {storedValue = workingValue}
    storedOperation = properOperator;
    workingValue = '';
    displayedOperation.textContent = `${storedValue} ${storedOperation}`;
};

function getOperator(symbol) {
    if (symbol === 'x') return '*'
    if (symbol === '÷') return '/'
    if (symbol === '+') return '+'
    if (symbol === '-') return '-'
}

function evaluate() {
    let previousNumber = Number(storedValue);
    let currentNumber = Number(workingValue);
    let result;
    // updateDisplayedEquation(stored, working);
    
    if (storedOperation === '+') {
        result = add(previousNumber, currentNumber);
    } else if (storedOperation === '-') {
        result = subtract(previousNumber, currentNumber);
    } else if (storedOperation === '*') {
        result = multiply(previousNumber, currentNumber);
    } else if (storedOperation === '/') {
        result = divide(previousNumber, currentNumber);
    }

    displayedValue.textContent = result;
    storedValue = result;
};

// function updateDisplayedEquation(stored, working) {
//     displayedOperation.textContent = `${stored} ${storedOperation} ${working} =`;
// }

