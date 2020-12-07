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

///////////////////////////////////
//filet out everything but 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const no3 = numbers.filter(n => n !== 3)
console.log(no3)

///////////////////////////////////
//filter out only 2
const only2 = numbers.filter(n => n === 2)
console.log(only2)

///////////////////////////////////
//return only even numbers
const onlyEven = numbers.filter(n => n % 2 === 0)
console.log(onlyEven)

///////////////////////////////////
//return the number of #s that start with 503 in the string
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

phoneNumbers.reduce((numberOf503, curr) => curr.includes('503') ? numberOf503 + 1 : numberOf503, 0)

///////////////////////////////////
//display years over 2000 and add a.d.
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

years.filter(y => y > 2000).map(y => `${y} A.D.`)

///////////////////////////////////
const users = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 }
];

///////////////////////////////////
//return first object in array
users.slice(1, 3)
users.filter(u => u.name !== "Samir")

///////////////////////////////////
//users.map(u => `${u.name} is ${u.age} years old`)

//return object
users.reduce((acc, curr) => {
    acc[curr.name] = curr.age;
    return acc
})

///////////////////////////////////

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map(a => `${a.firstName} ${a.lastName}`)

////////////////////////////////////////////
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

userNames.filter(u => u.charAt(0) === 'S').map(s => ({ name: s }))


////////////////////////////////////////////
const users = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 },
    { name: 'Shaniqua', age: 30 },
    { name: 'Marvin', age: 23 },
    { name: 'Sean', age: 47 }
];

// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];
users.filter(u => u.age > 29).map(u => u.name)

/////////////////////////////////////////////\
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos.filter(t => t.done === false).map(t => t.todo)

//////////////////////////////////////////////
const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];

// Result: { name: 'paper towels', price: 6.99 }

//find the highest price out of the prices under $10
products.filter(p => p.price < 10.00).reduce((highest, product) => highest.price > product.price ? highest : product)

//return a total of all products over 10
products.filter(p => p.price > 10.00).reduce((sum, product) => sum + product.price, 0).toFixed(2); //to show 2 decimal places only

/////////////////////////////////////////////////
const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

//return the total of the product w the dept groceries
// groceryTotal should be: 9.47
// Write your code below
groceryTotal = purchaseItems.filter(n => n.dept === 'groceries').reduce((sum, product) => sum + product.price, 0)


//////////////////////////////////////
const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
]

//to make one large array of movie strings or flatter
movies.reduce((arr, curr) => [...arr, ...curr])

// Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

//////////////////////////////////////\const users = [
{
    name: 'Samir',
        age: 27,
            favoriteBooks: [
                { title: 'The Iliad' },
                { title: 'The Brothers Karamazov' }
            ]
},
{
    name: 'Angela',
        age: 33,
            favoriteBooks: [
                { title: 'Tenth of December' },
                { title: 'Cloud Atlas' },
                { title: 'One Hundred Years of Solitude' }
            ]
},
{
    name: 'Beatrice',
        age: 42,
            favoriteBooks: [
                { title: 'Candide' }
            ]
}
];

// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
//map through fav books, then map through titles in the fave books, then reduce to flatten
users.map(u => u.favoriteBooks.map(u => u.title)).reduce((arr, titles) => [...arr, ...titles], [])

////////////////////////////////////////////
const customerNames = [
    ["John", "Sandy", "Tyrone", "Elizabeth", "Penny"],
    ["Barry", "Wanda", "Jamal", "Hayden"],
    ["Portia", "Pam", "Philip"]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// Write your code below

flattenedCustomerNames = customerNames.reduce((arr, curr) => [...arr, ...curr])

//////////////////////////////////////////////
const customers = [
    {
        name: "Tyrone",
        personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"]
        }
    },
    {
        name: "Elizabeth",
        personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"]
        }
    },
    {
        name: "Penny",
        personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"]
        }
    }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below

hobbies = customers.map(a => a.personal.hobbies).reduce((arr, curr) => [...arr, ...curr])