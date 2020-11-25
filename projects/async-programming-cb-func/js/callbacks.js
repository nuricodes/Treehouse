// Initialize all the variables that will be used
const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
//1. get JSON function initializes an XML HTTP request
//url is used to make the AJAX req.
// if there is a valid response from the server it will
// call the function passed
function getJSON(url, callback) {
  // 2. gets the browser ready, to make a get request
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  // 4. as soon as server sends back its response,
  // a callback function is fired
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      //and data is logged to console
      //and return it in JSON format
      return callback(data);
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

btn.addEventListener('click', (event) => {
  getJSON(astrosUrl, (json) => {
    // console.log(json) //test 
    //iterate with map over json.people
    //takes the parameter person to map over each person in the persons array
    json.people.map(person => {
      //concatanate the wiki url endpoint and perons name to form new url with each iteration
      //once the function returns the requested data is generated we will also reference a cb function but not call it so we can execute it later
      getJSON(wikiUrl + person.name, generateHTML);
    });
  });
  event.target.remove();
})