/**
 * for (let variable in iterable) {
 * // code
 * }
 */

 let myStudents = ['Ezeh', 'Kizito', 'Mgeso', 'Livinus', "Ama..."]
 myStudents[2]

 for (let index in myStudents) {
 
   let upperCase = `__${myStudents[index].toUpperCase()}__`
 
   console.log('The upper case of', myStudents[index], ' is ', upperCase)
 }

// 3. using for..of loop make an array of all the upper case names

