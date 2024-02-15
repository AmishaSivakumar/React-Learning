const arr = [23, 90, 67, 99, 12, 45]
let large = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
        large = arr[i]
    }

}
console.log(large);


