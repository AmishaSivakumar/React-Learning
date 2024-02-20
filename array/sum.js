var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];

var minLength = Math.min(array1.length, array2.length);

var resultArray = [];

for (var i = 0; i < minLength; i++) {
    resultArray.push(array1[i] + array2[i]);
}

if (array1.length > minLength) {
    resultArray = resultArray.concat(array1.slice(minLength));
} else if (array2.length > minLength) {
    resultArray = resultArray.concat(array2.slice(minLength));
}

console.log(resultArray);
