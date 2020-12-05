// return the array in caps

const fruits = ['apple', 'pear', 'cherry']; //return an array of caps

let capitalizedFruits = [];

fruits.forEach(fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits)


// return array of only words starting with S

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//let s = [];
//names.forEach(name => name.charAt(0) === 'S' ? s.push(name) : s)
//console.log(s)

names.forEach((name, index) => console.log(`${index + 1}) ${name}`)); //the second value passed in to the for each is the index which shows just that

// return total price

const prices = [6.75, 3.10, 4.00, 8.12];

// Total: 21.97
let total = 0
prices.forEach(price => total += price)
console.log(total)
