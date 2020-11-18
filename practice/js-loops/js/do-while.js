function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
do {
  console.log(`The random number is ${getRandomNumber(10)}`)
  counter++
} while (counter < 10);