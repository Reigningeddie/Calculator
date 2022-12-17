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
  

  calculator.display = display === '0' ? num : display + num
}

keys.addEventListener('click', e => {
  const { target } = event;
  const { value } = event.target;

  input(value);
  Display();
  
  if (target.classList.contains('operators')) {
    console.log(value);
    return 
  }

  if (target.classList.contains('num')) {
    console.log(value);
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

