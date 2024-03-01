// higher order method of array

const numbers = [23, 65, 78, 34, 89, 46, 84]
// Find Index 
// const indexOff = numbers.findIndex(num => num == 89)
// console.log(indexOff);

// foreach ==>> didn't return anything
// numbers.forEach(x => console.log(x))
// let sum = 0
// numbers.forEach(x => sum += x) 
// console.log(sum);

// map ==>> get the array with same index  with manipulation
   const result = numbers.map(x => x - 2)
   console.log(result);

// filter ==>> check the condition and return
// const result = numbers.filter(x => x % 2 === 0)
// console.log(result);

//reduce
// const sum = numbers.reduce((acc, cur) => {
//     return acc += cur
// }, 0)
// console.log(sum);