const keys = document.querySelector('.pad');
const output = document.querySelector('.output');

keys.addEventListener('click', function(e) {
  const pad = event.target
  const input = event.target.value
  const display = output.value

  if (pad.classList.contains('num')) {
    if (display === 'Infinity') {
      output.value = input
    } else {
      output.value = display + input
    }
  }

  if (pad.classList.contains('operators')) {

    console.log(input)
    console.log(typeof(event.target.value))
  }



})
