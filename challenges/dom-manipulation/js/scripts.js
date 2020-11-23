// 1: Set the text of the <h1> element
const h1 = document.getElementsByTagName('h1')[0]
h1.innerHTML = '<b>My Activities List</b>'
// 2: Set the color of the <h1> to a different color
h1.style.color = 'blue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const descriptionP = document.querySelector('p.desc')
descriptionP.innerHTML = 'A list of <i>fun</i> things I want to do today'
// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list'

// 5: Create a new list item and add it to the <ul>
const newListItem = document.createElement('li');
newListItem.innerHTML = '<input> Read a book';
ul.appendChild(newListItem)

// 6: Change all <input> elements from text fields to checkboxes
const inputBoxes = document.querySelectorAll('input');
for (let i = 0; i < inputBoxes.length; i++){
  inputBoxes[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement('button')
deleteButton.textContent = 'Delete';
// zero because there is only one div
const extraDiv = document.querySelector('.extra');
extraDiv.appendChild(deleteButton)


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('div.container');

deleteButton.addEventListener('click', () => {
                              container.removeChild(extraDiv);
                              })

                            
