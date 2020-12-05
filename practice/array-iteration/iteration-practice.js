const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

//this does the same thing as
names.forEach(name => {
    if (name.charAt(0) === 'S') {
        sNames.push(name);
    }
});

console.log(sNames);

//this
const namr = names.filter(n => n.charAt(0) === 'S') //only filter out this conditional
console.log(namr)

//filet out everything but 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const no3 = numbers.filter(n => n !== 3)
console.log(no3)

//filter out only 2
const only2 = numbers.filter(n => n === 2)
console.log(only2)

//return only even numbers
const onlyEven = numbers.filter(n => n % 2 === 0)
console.log(onlyEven)