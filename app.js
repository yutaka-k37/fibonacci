'use strict';

function fibonacci(number) {
  if (number === 0) return 0
  if (number === 1) return 1
  return fibonacci(number - 1) + fibonacci(number - 2)
}

const length = 40
for (let i = 1; i <= length; i++) {
  console.log(fibonacci(i))
}