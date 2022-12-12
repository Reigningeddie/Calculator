const keys = document.querySelector('.pad');
const output = document.querySelector('.output');

keys.addEventListener('click', function(e) {
  const input = event.target.value
  console.log(input)

  const display = output.value
  console.log(display)


  if (display === 'Infinity') {
    output.value = input
  } else {
    output.value = display + input
  }

})
