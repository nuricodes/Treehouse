//array to store answers and questions
const quiz = [
  ["How many states are in the US?", "50"],
  ["How many stripes are on the American Flag?", "13"],
  ["What is the capital of Massachusetts", "Boston"]
]

//variables to store arrays for the answers and the right answers
let answeredCorrectly= 0;
let correct = [];
let incorrect = [];

//function to loop through desired array
const listItems = (arr) => {
 let items = '';
  for (let i = 0; i < arr.length; i++){
    items += `<li>${arr[i]}</li>`
  } return items
}

//logic for quiz
for (let i = 0; i < quiz.length; i++) {
  question = prompt(`${quiz[i][0]}`);
  if (question == quiz[i][1] ) {
    correct.push(question)
    answeredCorrectly++
  
  } else {
  incorrect.push(question)
  }
}

document.querySelector('main').innerHTML = `
<h1>You got ${answeredCorrectly} question(s) correct</h1>
  <h2>You got these questions right:</h2>
    <ol>${listItems(correct)}</ol>
  <h2>You got these questions incorrect:</h2>
    <ol>${listItems(incorrect)}</ol>
`


