//set up a variable that stores the string of html we will have on the page
let html = '';

for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.img}" alt="Australian Shepherd">
  ` 
}

document.querySelector('main').innerHTML = html;