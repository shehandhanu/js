
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

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         document.write(JSON.stringify(data))
//     })
//     .catch(error => console.log(error));