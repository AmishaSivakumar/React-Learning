fetch('https://dummyjson.com/products/50')
    .then((response) => response.json())
    //.then((res) => console.log(res.products[0]))
    .then((res) => {
        console.log(res);
        // let sum =0
        // for (let i = 0; i < res.products.length; i++) {
        //     // console.log(res.products[i].title, '\n', res.products[i].description, '\n', res.products[i].price);
        //     // console.log(res.products[i].rating);
        //     // if (res.products[i].rating >= 4) {
        //     //     console.log("****");
        //     // }
        //     // console.log(res.products[i].price);
            
        //     sum += res.products[i].price
            
        // }
        // console.log(sum);
    })
    .catch((err) => console.log(err))