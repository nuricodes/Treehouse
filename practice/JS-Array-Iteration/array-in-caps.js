// return the array in caps

const fruits = ['apple', 'pear', 'cherry']; //return an array of caps

let capitalizedFruits = [];

fruits.forEach(fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits)