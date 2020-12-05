// Using forEach, turn the number strings from the stringPrices array into floats and add them all, storing the total in the variable priceTotal.

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below
stringPrices.forEach(p => priceTotal += parseFloat(p))