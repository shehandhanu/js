console.log('Started');

function getdata(id) {
    setTimeout(() => {
        console.log('Timeout Set');
        return { items: [1, 2, 3, 4, 5] };
    }, 3000);
};

const items = getdata(1);
console.log(items);

console.log('End');

/////////////////////////////////

// console.log('Started');

// function getdata(id, callback) {
//     setTimeout(() => {
//         console.log('Set Timeout');
//         callback({ items: [1, 2, 3, 4, 5] });
//     }, 3000);
// };

// const items = getdata(1, items => {
//     console.log(items);
// });

// console.log('End');