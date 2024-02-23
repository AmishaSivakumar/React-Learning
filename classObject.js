// OOPs >> object oriented program

// class Car {
//     constructor(model) {
//         this.model = model
//     }
//     model
//     start(){
//         console.log(this.model + " started");
//     }

// }
// const maruthi = new Car('maruthi')
// maruthi.start()

class Car {
    constructor(callback, model) {
        this.model = model
        this.callback = callback
        this.callback()
    }
    callback
    model

    start() {
        console.log(this.model + " started");
    }
}
const maruthi = new Car(() => console.log("model created") , 'Maruthi')
maruthi.start()
