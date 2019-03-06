class CarService {
    constructor(name, country){
        this.name = name;
        this.country = country;
        this.carsToRepair = [];
    }

    addCar(car){
        this.carsToRepair.push(car)
    }
}

module.exports = CarService;