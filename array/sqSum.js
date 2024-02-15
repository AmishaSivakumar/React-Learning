const myArray = [0,1,2,3,4];
function squares(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        sum += num * num;
    }

    return sum;
}
console.log(squares(myArray));