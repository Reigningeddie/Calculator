const keys = document.querySelector('.pad');
const output = document.querySelector('.output');


const calculator = {
  display: '0',
  firstNum: null,
  secondNum: false,
  operator: null,
}

function inputNum(input) {
  const { display } = calculator;

  if (display === '0') {
    calculator.display = input
  } else {
    calculator.display = display + input
  }
}

function decimal(dot) {
  if (!calculator.display.includes(dot)) {
    calculator.display += dot;
  } 

}

keys.addEventListener('click', e => {
  const { target } = event;
  const { value } = event.target;

  if (target.matches('button')) {
    return;
  }
  
  if (target.classList.contains('operators')) {
    return 
  }

  if (target.classList.contains('num')) {
    return
  }

  if (target.classList.contains('decimal')) {
    decimal(value)
    Display();
    return;
  }

  if (target.classList.contains('clear')) {
    return
  }

  inputNum(value)
  Display();
})

function Display() {
  output.value = calculator.display;
}

Display();