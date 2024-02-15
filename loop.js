// const arr = [45, 56, 12, 13, 19, 20]

// function sumOffArray(arr1) {
//     let sum = 0
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[1];
//     }
//     return sum
// }
// console.log(sumOffArray(arr));


// const arr2 = [23, 99, 67, 34, 75, 36]
// let sumoff = 0;
// for (let i = 0; i < arr2.length; i++) {
//        sumoff += arr2[i]
// }
// console.log(sumoff);

const arr3 = [23, 44, [45, 67, 98], [26, 74, 75], [62, 91, 73], 75]

let sum = 0
for (let i = 0; i < arr3.length; i++) {
    if ( typeof arr3[i] ==='number'){
        sum += arr3[i]
    }
    else{
        for (let j = 0; j < arr3[i].length; j++) {
            sum += arr3[i][j];
        }
    }
    
}
console.log(sum);
console.log(typeof "54");

