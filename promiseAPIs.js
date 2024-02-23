function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolved'), 2000)
    })
}
function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolved'), 6000)
    })
}
function p3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('error'), 1000)
    })
}
// Promise.all([p1(), p2(), p3()])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Promise.allSettled([p1(), p2(), p3()])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Promise.race([p1(), p2(), p3()])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

Promise.any([p1(), p2(), p3()])
    .then(res => console.log(res))
    .catch(err => console.log(err))