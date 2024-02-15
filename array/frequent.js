const myArray = [1, 2, 3, 2, 4, 2, 5, 2, 6];
function frequent(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null; 
    }

    let frequencyMap = {};
    let frequentItem = arr[0];
    let maxFrequency = 1;

    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        frequencyMap[currentItem] = (frequencyMap[currentItem] || 0) + 1;

        if (frequencyMap[currentItem] > maxFrequency) {
            frequentItem = currentItem;
            maxFrequency = frequencyMap[currentItem];
        }
    }

    return frequentItem;
}
console.log(frequent(myArray))