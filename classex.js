class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year
    }
    age(currentYear) {
        return currentYear - this.year;
    }
}
const date = new Date();
let year = date.getFullYear()
const toyota = new Car("Toyota", 2014);
console.log("My car is " + toyota.name + " and it is " + toyota.age(year) + " years old.");
toyota.age()