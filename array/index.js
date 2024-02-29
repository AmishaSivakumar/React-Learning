const array = [23, 42, 56, 75, 89, 10]

function findIndex(num, array) {
    console.log(num);
    console.log(array);
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            index = i
            break
        }

    }
    return index

}

let num = 42;
const index = findIndex(num, array)
console.log(index);