function arrayCount(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count++;
        }
    }

    return count;
}
const myArray = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
const result = arrayCount(myArray);

console.log(result);
