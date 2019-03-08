class CarService {
    constructor(name, country){
        this.name = name;
        this.country = country;
        this.carsToRepair = [];
    }

    addCar(car){
        this.carsToRepair.push(car)
    }

    displayAllCars(){
        this.carsToRepair.forEach(val => {
            val.displayCarInfo();
        })
    }

    getAllCars(){
        return this.carsToRepair;
    }

    getSecretDocs(callback){
        let secretDocs = ''
        setTimeout(() => {
            secretDocs = "SUPER SECRET!!!!"
            callback(secretDocs)
        }, 2000)
    }
}

module.exports = CarService;