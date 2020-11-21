const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
// let message;


function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}


for (let trys = 0; trys < 10; trys++) {
    let guess = prompt("I'm thinking of a number between 1 and 10. Guess what it is");
    if (+guess == randomNumber) {
        var message = `<h1>Congrats! You guessed the right number! It was ${randomNumber} and it took you ${trys} amount of try(s)!</h1>`
        break
    } else {
        message = `You did not guess the number it was ${randomNumber}`
    }
}

main.innerHTML = `<h1>${message}</h1>`