
let sayHello = function () {
    console.log("Hello World!");

    return "sliit";
}

let acceptMr = function (name) {
    console.log(`Hi ${name}`);
}

acceptMr(sayHello());

/////////////////////////////////

let student = {
    first: 'first name',
    last: 'last name',
    age: 25,
    height: 170,
    studentInfor: function () {
        document.write("I am " + this.first + " " + this.last + " and I am " + this.age + " years old")
    }
};

student.studentInfor();

//////////////////////////////

window.vehicleName = "Car";

function printVehicleName() {
    document.write(window.vehicleName);
}

let vehicle = {
    vehicleName: "Van",
    getVehicleName: function () {
        // return this.vehicleName;
        document.write(this.vehicleName);
    }
}

printVehicleName();
document.write("<br>");
vehicle.getVehicleName();
document.write("<br>");
document.write(this.vehicleName);

//////////////////////////////

taxPer = 0.2;

let tax = (function () {
    let amt = 1000;
    let taxPer = 0.3;
    return function () {
        amt = (this.taxPer * amt) + amt;
        return amt;
    }
}
)();

document.write(tax());

///////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        document.write(JSON.stringify(data))
    })
    .catch(error => console.log(error));