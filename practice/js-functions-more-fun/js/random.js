/**
 * Returns a random number between two numbers
 *
 * @param {number} lower - The lowest number value.
 * @param {number} high - The highest number value.
 * @return {number} The random number value.
 */


//const getRandomNumber = (lower, higher) => {
//  if (lower && higher) {
//  return Math.floor(Math.random() * (higher - lower + 1)) + lower;
//} else {
//  console.log("please insert number as argument"); //ig NaN
//}
//}

const getRandomNumber = (lower, upper = 100) => {
  if (isNaN(lower) || isNaN(upper)) {
  throw Error('Both arguments must be numbers.');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Call the function and pass it different values

console.log(getRandomNumber(1, 6));
console.log(`${getRandomNumber(10)} is a random number between 10 and 100`);
console.log(getRandomNumber(200, 'three hundred'));