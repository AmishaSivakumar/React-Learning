function filter(arr) {
    arr = arr.filter(eligible);
    return arr;
}

function eligible(value) {
    if (value !== false || value !== null || value !== 0 || value !== "") {
        return value;
    }
}

console.log(filter([58, '', 'abcd', true, null, false, 0]));