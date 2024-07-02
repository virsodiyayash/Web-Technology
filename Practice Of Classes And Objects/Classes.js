class ToyotaCar {
    constructor(brand , mileage){
        console.log("I am a constructor");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("Fortuner" , 12);
console.log("fortuner");
let camry = new ToyotaCar("camry" , 8);
console.log("camry");