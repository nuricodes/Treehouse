// Create a message displaying the random number
// Convert the input to a number
// Don't forget to create a conditional for if user provides a non-interger
num1 = +prompt("Please provide your highest number")
num2 = +prompt("Please provide your lowest number")


if (num1 && num2) {
    // Collect input from a user
    // Use Math.random() and the user's number to generate a random number
    const randomNumber = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
    document.write(`${randomNumber} is a random number between ${num1} and ${num2}`)
} else {
    document.write("you need to provide a number")
}

