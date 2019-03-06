class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCarInfo () {
        console.log(this.brand, this.model, this.year)
    }
}

module.exports = Car;