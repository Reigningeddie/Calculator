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
  console.log(calculator)
}

function decimal(dot) {
  if (!calculator.display.includes(dot)) {
    calculator.display += dot;
  } 
}

function operator(assign) {
  const { display, firstNum, operator } = calculator;
  const input = parseFloat(display);

  if (operator && calculator.secondNum) {
    calculator.operator = assign;
    console.log(calculator);
    return;
  }

  if (firstNum === null && !isNaN(input)) {
    calculator.firstNum = input;
  } else if (operator) {
    const result = equate(firstNum, operator, input);

    calculator.display = String(result);
    calculator.firstNum = result;
  }

  calculator.secondNum = true;
  calculator.operator = assign;
  console.log(calculator)
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
    console.log(value)
    return
  }

  inputNum(value)
  Display();
})

function Display() {
  output.value = calculator.display;
}

Display();