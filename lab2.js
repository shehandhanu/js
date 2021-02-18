
function printme(value) {
    console.log(value);
}

let getValue = function (callback) {
    var value = 1;
    setTimeout(function () {
        console.log('time out seted');
        value = 10;
        console.log('set time value ' + value);
        callback(value);
        return value;
    }, 2000);
    return value;
}

console.log(getValue());

function Vehicle(type) {
    this.type = type;
    Vehicle.VehicleCount++;
}
Vehicle.VehicleCount = 0;
console.log(Vehicle.VehicleCount);
const vehicle = new Vehicle("Toyota");
console.log(vehicle.type);
console.log(Vehicle.VehicleCount);
Vehicle.prototype.drive = function () {
    console.log(this.type + " is driving");
};
function Car(type) {
    Vehicle.call(this, type);
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.balanceWheels = function () {
    console.log("Wheels are balanced");
};
const car = new Car("Honda");
vehicle.drive();
car.drive();
car.balanceWheels();
console.log(Vehicle.VehicleCount);
console.log(car.type);