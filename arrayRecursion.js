
// function sumOffArray(array, sum = 0) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             sum = sumOffArray(array[i], sum)
//         }
//         else {
//             sum += array[i]
//         }
//     }
//     return sum;
// }

// console.log(sumOffArray(array));

function largest(array, large = 0) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            large = largest(array[i], large)
        } else if (array[i] > large) {
            large = array[i]
        }
    }
    return large
}
const nums = [[3, 5, [8, 7]], 3, [9, [1, 7, 7]], 3, [[9, 4], [5, [[17], 5], 2]]]
console.log(largest(nums));