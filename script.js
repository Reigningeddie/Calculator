const keys = document.querySelector('.pad');
const output = document.querySelector('.output');

const calculator = {
  display: '0',
  firstNum: null,
  secondNum: false,
  operator: null,
}

//*----------input functionality-----------------//

function inputNum(input) {
  const { display, secondNum } = calculator;

  if (secondNum === true ) {
    calculator.display = input;
    calculator.secondNum = false;
  } else {
    if (display === '0') {
      calculator.display = input
    } else {
      calculator.display = display + input
    }
  }
}

function decimal(dot) {
  if (calculator.secondNum === true) {
    calculator.display = '0.';
    calculator.secondNum = false;
    return;
  }

  if (!calculator.display.includes(dot)) {
    calculator.display += dot;
  } 
}

function operator(assign) {
  const { display, firstNum, operator } = calculator;
  const input = parseFloat(display);

  if (operator && calculator.secondNum) {
    calculator.operator = assign;
    return;
  }

  if (firstNum === null && !isNaN(input)) {
    calculator.firstNum = input;
  } else if (operator) {
    const result = equate(firstNum, operator, input);

    calculator.display = `${parseFloat(result.toFixed(2))}`;
    calculator.firstNum = result;
  }

  calculator.secondNum = true;
  calculator.operator = assign;
}

function clear() {
  calculator.display = '0';
  calculator.firstNum = null;
  calculator.secondNum = false;
  calculator.operator = null;
}

//-------------equals function--------------------//
function equate(firstNum, operator, secondNum) {

  if (operator === '+') {
    return firstNum + secondNum;
  } else if (operator === '-') {
    return firstNum - secondNum;
  } else if (operator === '\xD7' ) {
    return firstNum * secondNum;
  } else if (operator === '÷') {
    return firstNum / secondNum;
  }

  return secondNum;
}

//*----------------------------------------------//

keys.addEventListener('click', e => {
  const { target } = event;
  const { value } = event.target;
  
  if (target.classList.contains('operators')) {
    operator(value);
    Display()
    return 
  }

  if (target.classList.contains('num')) {
    inputNum(value)
    Display()
    return
  }

  if (target.classList.contains('decimal')) {
    decimal(value)
    Display()
    return
  }

  if (target.classList.contains('clear')) {
    clear();
    Display();
    return
  }

  inputNum(value)
  Display();
})

function Display() {
  output.value = calculator.display;
}

Display();