// function declaration load first so chronological order is not necessary
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

//function expression, you cannot call before its defined
//Anonymous function
const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

get randomNumber(9)