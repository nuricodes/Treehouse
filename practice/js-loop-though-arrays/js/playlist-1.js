const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

const createListItems = (arr) => {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items;
}

//display within an html ordered list
document.querySelector('main').innerHTML = `<ul>${createListItems(playlist)}</ul>`