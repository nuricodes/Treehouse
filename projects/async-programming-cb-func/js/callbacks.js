// Initialize all the variables that will be used
const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
//1. get JSON function initializes an XML HTTP request
function getJSON(url) {
  // 2. gets the browser ready, to make a get request
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  // 4. as soon as server sends back its response,
  // a callback function is fired
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      //and data is logged to console
      console.log(data);
    }
  };
  // 3. then sends the request 
  xhr.send();
}

// Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML = `
    <img src=${data.thumbnail.source}>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>
  `;
}

btn.addEventListener('click', () => getJSON(astrosUrl))