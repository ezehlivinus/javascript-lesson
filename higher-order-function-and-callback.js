const product = (x, y, callback) => {
  const prod = x / y;

  console.log(typeof(prod))

  if (Number.isNaN(prod) || !Number.isFinite(prod) || typeof(prod) !== 'number'){
    callback(true, 'Is either result failed or something')
  }

  callback(false, prod)
}

product(2, 5, (err, result) => {
  console.log(err, result)
})

// ---------------
const add = (num1, num2) => num1 + num2;

let result = add(3, 7)
console.log(result)

const minus = (x, y) => x - y;

console.log(minus(4, 5))

const compute = (adder, minerser, x, y) => {
  const _add = adder(x, y)
  const _minus = minerser(x, y)

  return [_add, _minus]
}

let resultOfCompute = compute(add, minus, 20, 10)

console.log(resultOfCompute)

//........

let numbers = [2, 40, 3, 5, 4, 8, 7, 3, 9, 10, 20, 11]

const isDivisible = (number) => number % 2 === 0

// console.log(isDivisible(3))

let areDivisibleByTwo = numbers.filter(isDivisible)
console.log(areDivisibleByTwo)
