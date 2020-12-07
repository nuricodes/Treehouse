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

//return the number of #s that start with 503 in the string
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

phoneNumbers.reduce((numberOf503, curr) => curr.includes('503') ? numberOf503 + 1 : numberOf503, 0)

//display years over 2000 and add a.d.
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

years.filter(y => y > 2000).map(y => `${y} A.D.`)