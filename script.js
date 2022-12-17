const keys = document.querySelector('.pad');
const output = document.querySelector('.output');


const calculator = {
  display: '0',
  firstNum: null,
  secondNum: false,
  operator: null,
}

function input(num) {
  const { display } = calculator;

  calculator.display = display == '0' ? num : display + num
}

keys.addEventListener('click', e => {
  const { target } = event;
  const { value } = event.target;

  input(value);
  Display();
  
  if (target.classList.contains('operators')) {
    console.log(value)
    return 
  }

  if (target.classList.contains('num')) {
    console.log(value)
    return
  }

  if (target.classList.contains('decimal')) {
    console.log(value)
    return
  }

  if (target.classList.contains('clear')) {
    console.log(value)
    return
  }
})

function Display() {
  output.value = calculator.display;
}

Display();