const operations = document.querySelector('#operations')
const result = document.querySelector('#result')
const buttons = document.querySelectorAll('.buttons button');
const reset = document.querySelector('#reset');

document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.textContent

      if (value !== '=') {
        operations.textContent += value
      }

      if (value === '=') {
        result.textContent = eval(operations.textContent)
      }
    })
  })
});

reset.addEventListener('click', () => {
  operations.textContent = '';
  result.textContent = '0';
})
