// Using forEach, capitalize all the strings in the months array and store them in the array capitalizedMonths.

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// capitalizedMonths should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']

months.forEach(m => capitalizedMonths.push(m.toUpperCase()))