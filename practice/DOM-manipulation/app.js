const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description'); //p with the class description
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list'
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list'
    listDiv.style.display = 'none';
  }
})

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
})

addItemButton.addEventListener('click', () => {
  //store element you want to append to in variable so we can access later
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
})

removeItemButton.addEventListener('click', () => {
  //store element you want to append to in variable so we can access later
  let ul = document.getElementsByTagName('ul')[0];
  // selects the last li
  let li = document.querySelector('li:last-child');
  // selects the last li
  ul.removeChild(li);

})                               