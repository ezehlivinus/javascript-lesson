/**
 * do {
 *  //
 * } while (condition)
 * 
 * while (cond) {
 *  // 
 * }
 */

let numbers = [100, 354, 596, 5096, 708, 263]
let count = 0;
// run once
do {
  // code

  console.log(count, numbers[count])
  count += 1
}while (numbers.length > 1)

// ru up to the numbers of element of the array
do {
  // code

  console.log(count, numbers[count])
  count += 1
}while (numbers.length > count)
