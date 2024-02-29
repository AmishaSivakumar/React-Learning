async function fetchData() {
    try {
        let data = await fetch(`https://dummyjson.com/products`)
        data = await data.json()
        console.log(data.products);
    } catch (error) {
        console.log(error);
    }
}
fetchData()