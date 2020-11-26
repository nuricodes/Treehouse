const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------


fetch('https://dog.ceo/api/breeds/image/random')
  //in order to use the returned data we need to parse
  .then(response => response.json())
  .then(data => generateImage(data.message))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateImage(data) {
  const html = `
  <img src='${data}' alt>
    <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

