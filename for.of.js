// 'use strict'
/**
 for..of syntax

for (let variable-name of iterable) { 
  code
 }

 looping: iterator

 */
let aNumber = 10000
let a_number = '123456789'

for (let eachNumber of a_number) {
  console.log('number ', eachNumber)
}
//1.  diff b/w sing and double quote

let myStudents = ['Ezeh', 'Kizito', 'Mgeso', 'Livinus', "Ama..."]
// let eachName;
for (let eachName of myStudents) {

  let upperCase = `__${eachName.toUpperCase()}__`

  console.log('The upper case of', eachName, ' is ', upperCase)
}

console.log(myStudents)
// 2. using for..of loop make an array of all the upper case names


