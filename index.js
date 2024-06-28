"use strict";
// // //1. Classes and Objects
// // Classes: Blueprint for creating objects. Define properties (fields) and methods (functions).
// class Car {
//     // property
//     brand:string
//     speed:number
//   // constructore
//     constructor(brand:string,spees:number){
// this.brand = brand
// this.speed = spees
//     }
//     //method
//     accelerate(increment:number){
//         return this.speed += increment
//     }
// }
// //Objects: Instances of classes.
// let mycar = new Car('toyota',100)
// mycar.accelerate(20)
// console.log(mycar.speed)
// //2. Inheritance
// //Extends: Classes can inherit properties and methods from another class.
// class ElectricCar extends Car {
//     batteryCapacity:number
//     constructor(batteryCapacity:number,brand:string,speed:number){
// super(brand,speed)
// this.batteryCapacity=batteryCapacity
//     }
//     chargeBattery(){
//     }
// }
// let electricCar = new ElectricCar(5000,"tesla",200)
// console.log(electricCar)
// continue from here
class Car {
    // Constructor
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    // Method
    accelerate(increment) {
        this.speed += increment;
    }
    // Method to display car info
    displayInfo() {
        console.log(`Brand: ${this.brand}, Speed: ${this.speed}`);
    }
}
class ElectricCar extends Car {
    constructor(brand, speed, batteryCapacity) {
        super(brand, speed);
        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100; // Battery level starts at 100%
    }
    // Method specific to ElectricCar
    chargeBattery(amount) {
        this.batteryLevel += amount;
        if (this.batteryLevel > 100) {
            this.batteryLevel = 100; // Battery level can't exceed 100%
        }
        console.log(`Battery charged to ${this.batteryLevel}%`);
    }
    // Override the displayInfo method to include battery info
    displayInfo() {
        super.displayInfo();
        console.log(`Battery Capacity: ${this.batteryCapacity} kWh, Battery Level: ${this.batteryLevel}%`);
    }
}
// Create an instance of ElectricCar
let myElectricCar = new ElectricCar('Tesla', 150, 75);
myElectricCar.displayInfo();
// Output:
// Brand: Tesla, Speed: 150
// Battery Capacity: 75 kWh, Battery Level: 100%
myElectricCar.accelerate(30);
myElectricCar.displayInfo();
// Output:
// Brand: Tesla, Speed: 180
// Battery Capacity: 75 kWh, Battery Level: 100%
myElectricCar.chargeBattery(10);
// Output: Battery charged to 100%
myElectricCar.chargeBattery(-50);
// Output: Battery charged to 50%
myElectricCar.displayInfo();
// Output:
// Brand: Tesla, Speed: 180
// Battery Capacity: 75 kWh, Battery Level: 50%
