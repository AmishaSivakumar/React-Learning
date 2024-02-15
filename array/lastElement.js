const myArray = [4, [8, 9, 2, 0], 7, 8, 2]
function last(array, n) {
    if (array == null)
        return 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}
console.log(last(myArray,2));