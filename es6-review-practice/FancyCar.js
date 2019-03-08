const Car = require('./Car')

class FancyCar extends Car {
    constructor(brand, model, year){
        super(brand, model, year)
        this.priority = "HIGH PRIORITY"
    }

    getStatus(){
        console.log("Two hours to repair")
    }

    //You can actually overwrite an inherited method that was inherited from the "parent" Car class
    //When you do this, if you want to retain the original fucntionality of the method and ADD more on top of it, you
    //can access the original functionality by using super.
    displayCarInfo(){
        //This is making sure that the functionality of the original Car method is reproduced in this method
        super.displayCarInfo()
        //This is where you'd add any additional functionality that you want in this method
        console.log("Additional functionality")
    }
}

module.exports = FancyCar;