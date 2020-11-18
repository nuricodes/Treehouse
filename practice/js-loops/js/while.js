function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

console.log(getRandomNumber(6));

//counts the amount of loops
let counter = 0;
while (counter < 100) {
  console.log(`The random number is ${getRandomNumber(10)}`)
  counter++
}