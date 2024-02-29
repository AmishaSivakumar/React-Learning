const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "King");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Queen");
});
// Promise.all([p1, p2])
//     .then((result) => { console.log(result) })
//     .catch((err) => { console.log(err) })

// Promise.allSettled([p1, p2])
//     .then((result) => { console.log(result) })
//     .catch((err) => { console.log(err) })

// Promise.race([p1, p2])
//     .then((result) => { console.log(result) })
//     .catch((err) => { console.log(err) })

Promise.any([p1, p2])
    .then((result) => { console.log(result) })
    .catch((err) => { console.log(err) })