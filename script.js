const ADD_OPERATOR = '+';
const SUBTRACT_OPERATOR = '-';
const MULTIPLY_OPERATOR = '*';
const DIVIDE_OPERATOR = '/';

let currentOperator = '';
let displayValue = '';
let currentValue = '';

const currentNumber = document.querySelector('.current-number');
const numBtns = document.querySelectorAll('.num-btn');
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

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    return operator(a, b);
};

function updateCurrentValue() {

};

function initCalc() {
    for (let button of numBtns) {
        button.addEventListener('click', (e) => {
            currentNumber.textContent = null;
            currentValue += e.target.value;
            currentNumber.textContent = currentValue;
        });
    }
};

function clearCal() {
    currentOperator = '';
    displayValue = '';
    currentValue = '';
    currentNumber.textContent = 0;
}

function deleteNum() {
    let newNum = currentValue.slice(0, -1);
    currentValue = newNum
    if (currentValue < 1) {currentValue = 0;};
    currentNumber.textContent = currentValue;
}

initCalc();
