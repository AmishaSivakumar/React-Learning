function getNaN(arr) {
    const indexes = [];

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            indexes.push(i);
        }
    }

    return indexes;
}

const myArray = [1, 2, NaN, 4, NaN, 6];
const result = getNaN(myArray);
console.log( result);
