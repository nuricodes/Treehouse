// Store Elements into Variables
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description'); //p with the class description
const descriptionButton = document.querySelector('button.description');
const listUL = document.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUL.children;


const attachListItemButtons = (li) => {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Move Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Move Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

// Move up & remove button
// on the variable containing the ul add an event listener
listUL.addEventListener('click', (event) => {
  // if what is being clicked is a button
  if (event.target.tagName == 'BUTTON') {
    // and if the the class name is remove
    if (event.target.className == 'remove') {
      // store what's clicked parent node in li
      let li = event.target.parentNode;
      // and li's parent node in ul
      let ul = li.parentNode;
      // now remove li child from its parent
      ul.removeChild(li);
    }
    // if what's being clicked has a class of up
    if (event.target.className == 'up') {
      // store what's being clicked's parent in the li var
      let li = event.target.parentNode;
      // and the element sibling before li in this var
      let prevLi = li.previousElementSibling;
      // and li's parent in this var
      let ul = li.parentNode;
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
      // let insertedNode = parentNode.insertBefore(newNode, referenceNode)
      if (prevLi) {
        ul.insertBefore(li, prevLi)
      }
    }
    if (event.target.className = 'down') {
      // get parent of nested button
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        // bc there is no .insertAfter put the li sibling BEFORE the li when we move down
        ul.insertBefore(nextLi, li)
      }
    }
  }
});

// toggleList button
// to the toggleList button add the following event
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


// Add items button
addItemButton.addEventListener('click', () => {
  //store element you want to append to in variable so we can access later
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
})

