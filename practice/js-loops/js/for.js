function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for (counter = 0; counter < 10; counter++) {
  console.log(getRandomNumber(counter));
              }