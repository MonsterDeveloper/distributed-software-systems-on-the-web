// var fruits = ['apple', 'banana', 'cherry'];

// var uppercaseFruits = [];
// for (var i = 0; i < fruits.length; i++) {
//     uppercaseFruits.push(fruits[i].toUpperCase());
// }

// for (var j = 0; j < fruits.length; j++) {
//     console.log('Fruit: ' + fruits[j]);
// }

// console.log(uppercaseFruits);

// ES6
const fruits = ['apple', 'banana', 'cherry'];
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`)
}
console.log(uppercaseFruits);
