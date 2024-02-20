function flatten(arr, shallow) {
    if (shallow) {
        return arr.reduce((flat, current) => {
            return flat.concat(Array.isArray(current) ? current : [current]);
        }, []);
    } else {
        return arr.reduce((flat, current) => {
            return flat.concat(Array.isArray(current) ? flatten(current) : [current]);
        }, []);
    }
}

const nestedArray = [1, [2], [3, [[4]]],[5,6]];

const flattenedShallow = flatten(nestedArray, true);
console.log("Flattened (Shallow):", flattenedShallow);

const flattenedDeep = flatten(nestedArray);z
console.log("Flattened (Deep):", flattenedDeep);
