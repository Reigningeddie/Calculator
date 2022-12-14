const keys = document.querySelector('.pad');
const output = document.querySelector('.output');

keys.addEventListener('click', function(e) {
  const pad = event.target
  const input = event.target.value
  const display = output.value

  if (pad.classList.contains('equal')) {
    console.log(eval(display))

    let solve = eval(display);
    output.value = solve
  }

  if (pad.classList.contains('num')) {
    if (display === 'Infinity') {
      output.value = input
    } else {
      output.value = display + input
    }
  }

  if (pad.classList.contains('operators')) {
    const check = display.lastIndexOf("÷")
    console.log(check)
    if (display === 'Infinity') {
      return 'Infinity'
  } else {
      output.value = display +input
    }
  }



})
