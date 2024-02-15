const myArray = [1, 2, 3, 4, 2, 5, 6, 1];
function duplicate(inputArray) {
    const uniqueArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (uniqueArray.indexOf(inputArray[i]) === -1) {
            uniqueArray.push(inputArray[i]);
        }
    }
    return uniqueArray;
}
console.log(duplicate(myArray));