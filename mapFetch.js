fetch(`https://dummyjson.com/products`)
    .then((response) => response.json())
    .then((res) => res.products.filter(x => {
        if (x.price > 100) {
            console.log(x.title);
        }
        
    }))

    .catch((err) => console.log(err))