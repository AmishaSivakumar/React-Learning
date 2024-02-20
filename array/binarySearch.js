function binary(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Value = 11;

let result = binary(Array, Value);

if (result !== -1) {
    console.log(`Target ${Value} index ${result}.`);
} else {
    console.log(`Target ${Value} not found in the array.`);
}
