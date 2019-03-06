const Car = require('./Car')
const CarService = require('./services/CarService')

let car1 = new Car("Ford", "Focus", 2019);
let car2 = new Car("Toyota", "Corolla", 2007)

car1.displayCarInfo();
car2.displayCarInfo();



const carService = new CarService("Super Cars", "Spain")

carService.addCar(car1)
carService.addCar(car2)
console.log(carService)





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

console.log(buckbeak)
console.log(blank)


//Creating an extention of a class
class Dragon extends FantasticBeast {
    constructor(name, weight, color, powerLevel, breathWeapons, wingSpan){
        super(name, weight, color, powerLevel);
        this.breathWeapons = breathWeapons;
        this.wingSpan = wingSpan;
    }
}

let anglicon = new Dragon("Anglicon", "10,000 lb", "Black", 50000, ["Fire", "Noxious Gas", "Acid"], 20000)

console.log(anglicon)

