const myHeading = document.getElementById('myHeading');
const myTextInput = document.getElementById('myTextInput');
const myButton = document.getElementById('myButton')

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
})

