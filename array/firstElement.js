const myArray = [1, 2, 4, [7, 9, 0, -2], -3, 5, 6];
function first(array, n) {
    if (array == null)
        return 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
};
console.log(first(myArray, 3));