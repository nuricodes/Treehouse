// Collect input from a user
// Convert the input to a number
userInput = +prompt("Give us a number")

// Use Math.random() and the user's number to generate a random number

const randomNumber = Math.floor(Math.random() * userInput) + 1;
// Create a message displaying the random number


document.write(`${randomNumber} is a random number between 1 and ${userInput}`)

