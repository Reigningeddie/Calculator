const keys = document.querySelector('.pad');
const output = document.querySelector('.output');


const calculator = {
  displayValue: '0',
  firstNum: null,
  secondNum: false,
  operator: null,
}

keys.addEventListener('click', e => {
  const { target } = event.target;
  const { value } = event.target;
  console.log(value)
})

function Display() {
  output.value = calculator.displayValue;
  console.log(output.value)
}

Display();




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
//     let solve = (eval(display))
//     output.value = solve
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

