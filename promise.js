function getData(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            setTimeout(() => resolve("Success: The number is even"), 5000)
        }
        else {
            setTimeout(() => reject("Error: The number is not even"), 5000)
        }
    })
}
getData(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))