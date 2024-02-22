function getData(id) {
    fetch(`https://dummyjson.com/products/${id}`) //template literals
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
getData(4)