function uniqueElements(arr1, arr2) {
    const set1 = new Set(arr1.flat(Infinity));
    const set2 = new Set(arr2.flat(Infinity));

    const uniqueSet = new Set([...set1, ...set2]);

    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10]));

console.log(uniqueElements([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10]));
