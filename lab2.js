
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