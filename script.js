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

  if (firstNum === null && !isNaN(input)) {
    calculator.firstNum = input;
  }

  calculator.secondNum = true;
  calculator.operator = assign;
  console.log(calculator)
}

function compute(first, operator, sec) {
  if (operator === '+') {
    return first + sec;
  } else if (operator === '-') {
    return first - sec;
  } else if (operator === '&times;') {
    return first * sec;
  } else if (operator === '÷') {
    return first / sec;
  }

  return sec;
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