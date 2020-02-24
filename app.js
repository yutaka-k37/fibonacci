'use strict';
const memo = new Map()
memo.set(0, 0)
memo.set(1, 1)

function fibonacci(number) {
  if (memo.has(number)) {
    return memo.get(number)
  }
  const value = fibonacci(number - 1) + fibonacci(number - 2)
  memo.set(number, value)
  return value
}

const length = 40
for (let i = 1; i <= length; i++) {
  console.log(fibonacci(i))
}