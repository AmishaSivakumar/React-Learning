var array = [1, 2, 3, 4, 5, 6],
    sum = 0,
    pdt = 1,
    i;
for (i = 0; i < array.length; i += 1) {
    sum += array[i];
    pdt *= array[i];
}
console.log('Sum : ' + sum);
console.log('Product :  ' + pdt);