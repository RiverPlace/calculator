let storedValue = ''
let storedOperator = ''
let displayedEquation = ''
let workingValue = ''

const displayedValue = document.querySelector('.displayed-value')
const displayedOperation = document.querySelector('.stored-operation')
const numberButtons = document.querySelectorAll('.num-btn')
const operatorButtons = document.querySelectorAll('.operator-btn')
const clearButton = document.querySelector('.clear-btn')
const deleteButton = document.querySelector('.delete-btn')
const pointButton = document.querySelector('.dot-btn')
const equalButton = document.querySelector('.equal-btn')

clearButton.addEventListener('click', clearCal)
deleteButton.addEventListener('click', deleteNum)
equalButton.addEventListener('click', evaluate)
pointButton.addEventListener('click', appendPoint)
window.addEventListener('keydown', handleKeyPress)

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => setOperation(e.target.value))
})

numberButtons.forEach(number => {
    number.addEventListener('click', (e) => appendNumber(e.target.textContent))
})

function appendNumber(number) {
    displayedValue.textContent = null;
    workingValue += number;
    displayedValue.textContent += workingValue;
}

function clearCal() {
    storedValue = ''
    storedOperator = ''
    workingValue = ''
    displayedValue.textContent = 0
    displayedOperation.textContent = ''
}

function deleteNum() {
    let newNum = workingValue.slice(0, -1)
    workingValue = newNum
    if (workingValue < 1) {workingValue = 0}
    displayedValue.textContent = workingValue;
}

function appendPoint() {
    if (!workingValue.includes('.')) {
        workingValue += '.'
        displayedValue.textContent += '.'
    }
}

function setOperation(operator) {
    // let properOperator = getOperator(operator)
    if (storedValue && workingValue) evaluate()
    else if (workingValue !== '') storedValue = workingValue
    storedOperator = operator
    workingValue = ''
    displayedOperation.textContent = `${roundNumber(storedValue)} ${getOperator(operator)}`
}

function getOperator(symbol) {
    if (symbol === '+') return '+'
    if (symbol === '-') return '-'
    if (symbol === '*') return 'x'
    if (symbol === '/') return '÷'
}

function evaluate() {
    let previousNumber = Number(storedValue);
    let currentNumber = Number(workingValue);
    let result

    if (!previousNumber || !currentNumber) return
    displayedOperation.textContent = `${storedValue} ${getOperator(storedOperator)} ${workingValue} =`
    
    if (storedOperator === '+') {
        result = add(previousNumber, currentNumber)
    } else if (storedOperator === '-') {
        result = subtract(previousNumber, currentNumber)
    } else if (storedOperator === '*') {
        result = multiply(previousNumber, currentNumber)
    } else if (storedOperator === '/') {
        if (previousNumber === 0 || currentNumber === 0) {
            alert('Nice try... you can\'t divide by zero.');
            return
        }
        result = divide(previousNumber, currentNumber)
    }

    displayedValue.textContent = roundNumber(result)
    storedValue = result
    workingValue = ''
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000
}

function handleKeyPress(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === '+') setOperation('+')
    if (e.key === '-') setOperation('-')
    if (e.key === '*') setOperation('*')
    if (e.key === '/') setOperation('/')
}
