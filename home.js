console.log('Hi How Are You');

document.write('Hi i can fly');

var a = "apple";

// alert('is any proiblem ? ');

// var b = prompt('what is your age');

// var age = prompt('what is your age'); 

// console.log(age);

// document.getElementById('someText').innerHTML = age;

var num1 = 10;

num1 = num1 + 1;

console.log(num1);

//function

function fun() {
    console.log('this is the fuctoin');
}

// function name() {
//     var x = prompt('whats your name');
//     document.getElementById('someText').innerHTML = 'Hello ' + x;
// }

// name();

function name(name) {
    document.getElementById('someText').innerHTML = 'Hello ' + name;
}

// var x = prompt('whats your name');

// name(x)

//Strings

let fruit = 'banana,apple,orage,berry';

let morefruit = 'banana\napple'

console.log(morefruit); //new line

console.log(fruit.length); // lenth

console.log(fruit.indexOf('b'));

console.log(fruit.slice(2, 6));

console.log(fruit.toUpperCase());

console.log(fruit.charAt(3)); //character at

console.log(fruit.split(',')); //split comma

//arrays 

let fruits = ['banana', 'apple', 'orange', 'pinaapple']; //defina array

console.log(fruits[2]); //call array

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));

console.log(fruits.pop(), fruits); //remove last item
console.log(fruits.push('apple'), fruits); // appends

fruits[4] = 'guana';

console.log(fruits);

// fruits.shift(); //skip first item
// console.log(fruits);

fruits.unshift('kiwi'); //add first item
console.log(fruits);




