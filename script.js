const keys = document.querySelector('.pad');
const display = document.querySelector('.output');


const calculator = {
  displayValue: '0',
  firstNum: null,
  secondNum: false,
  operator: null,
}

function clear() {
  calculator.displayValue = '0'
  calculator.firstNum = null,
  calculator.secondNum = false,
  calculator.operator = null
}

function numbers(input) {
  const { displayValue, secondInput } = calculator;

  if (secondInput == true) {
    calculator.display = input;
    calculator.secondInput = false;
  } else {
    calculator.displayValue = displayValue === '0' ? input : displayValue + input;
  }
}

function calculate(firstNum, operator, secondNum) {
  if (operator === '+') return firstNum + secondNum;
  if (operator === '-') return firstNum - secondNum;
  if (operator === '&times') return firstNum * secondNum;
  if (operator === '÷') return firstNum / secondNum;

  return secondNum
} 

keys.addEventListener('click', e => {
  const { target } = event;
  const { value } = event.target;
  console.log(value)
})





// const keys = document.querySelector('.pad');
// const output = document.querySelector('.output');
// const display = output.value




// keys.addEventListener('click', function(e) {
//   const pad = event.target
//   const input = event.target.value
//   const display = output.value

//   if (display.length === 10) {
//     const erase = () => {
//       output.value = '0'
//     }
//     alert('ERROR: Maximum amount of characters reached.')
//     erase();
//   }

//   if (pad.classList.contains('clear')) {
//     output.value = '0'
//   }
  
//   if (pad.classList.contains('equal')) {
//     let solve = (eval(display);
//     output.value = solve)
//   }

//   if (pad.classList.contains('num')) {
//     if (display === '0') {
//       output.value = input
//     } else {
//       output.value = display + input
//     }
//   }

//   if (pad.classList.contains('operators')) {
//     if (display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/')) {
//       return alert('ERROR: One operator per expression.')
//   } else if (display === '0') {
//     return '0'
//   }   else {
//     output.value = display + input
//     }
//   }

// })

