const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const myAge = 25;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day`);

// Find the amount of seconds I've been alive
const yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear * myAge;
console.log(`I've been alive for more than ${yearsAlive} seconds!`);