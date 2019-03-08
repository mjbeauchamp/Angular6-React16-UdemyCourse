const Car = require('./Car')
const FancyCar = require('./FancyCar')
const CarService = require('./services/CarService')

let car1 = new Car("Ford", "Focus", 2019);
let car2 = new Car("Toyota", "Corolla", 2007)
let car3 = new Car("Cooper", "Mini-Cooper", 2017);
let car4 = new Car("Ford", "Mustang", 2020)

let car5 = new FancyCar("Mercedes", "Benz", 2020)


car1.displayCarInfo();
car2.displayCarInfo();
car5.displayCarInfo()



const carService = new CarService("Super Cars", "Spain")

carService.addCar(car1)
carService.addCar(car2)
carService.addCar(car3)
carService.addCar(car4)
carService.addCar(car5)


carService.displayAllCars()
car5.getStatus()

let [a, b, ...tail] = carService.getAllCars();
// console.log("a: ", a)
// console.log("b: ", b)
// console.log("tail: ", tail)


carService.getSecretDocs((secretDocs) => {
    console.log(secretDocs) 
})





////My Practice

class FantasticBeast {
    constructor(name = "", weight = "", color = "", powerLevel = 0){
        this.name = name;
        this.weight = weight;
        this.color = color;
        this.powerLevel = powerLevel;
    }
}

let buckbeak = new FantasticBeast("Buckbeak", "1000 lb", "gray", 0);
let blank = new FantasticBeast();

// console.log(buckbeak)
// console.log(blank)


//Creating an extention of a class
class Dragon extends FantasticBeast {
    constructor(name, weight, color, powerLevel, breathWeapons, wingSpan){
        super(name, weight, color, powerLevel);
        this.breathWeapons = breathWeapons;
        this.wingSpan = wingSpan;
    }
}

let anglicon = new Dragon("Anglicon", "10,000 lb", "Black", 50000, ["Fire", "Noxious Gas", "Acid"], 20000)

// console.log(anglicon)


let ponies = ["pinkie pie", "fluttershy", "rarity", "hoppy"]

function filterPonies(array){
    let [head, ...tail] = array;
    if(array.length === 1){
        return head.includes('p') ? [head] : [];
    } else {
        return head.includes('p') ? [head, ...filterPonies(tail)] : [...filterPonies(tail)]
    }
}

let filtered = filterPonies(ponies)
console.log(filtered)