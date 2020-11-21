const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;
let trys = 0;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}


do {
    guess = prompt("I'm thinking of a number between 1 and 10. Guess what it is");
    trys++
    if (+guess == randomNumber) {
        message = `<h1>Congrats! You guessed the right number! It was ${randomNumber} and it took you ${trys} amount of try(s)!</h1>`
        break
    } else {
        message = `You did not guess the number it was ${randomNumber}`
    }
} while (trys < 10);

document.write(`<h1>${message}</h1>`)


