const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getProfiles(json) {
    const profiles = json.people.map(person => {
        //since we're using fetch we need to parse the return data to JSON
        return fetch(wikiUrl + person.name)
            .then(response => response.json())
    });
    //takes the array of promise object and excepts the array stored in profiles then waits until all the promises are fulfilled before storing them in an array
    return Promise.all(profiles);
}

function generateHTML(data) {
    data.map(person => {
        const section = document.createElement('section');
        peopleList.appendChild(section);
        section.innerHTML = `
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
    });
}

btn.addEventListener('click', (event) => {
    event.target.textContent = 'Loading';
    //returns a promise and once fetch makes the request and the data finishes loading
    // the fetch promise is fulfilled and returns a response object containing information about the response like the code
    fetch(astrosUrl)
        //in order to access and use data we need to parse it to JSON first
        //pass it a function that accepts the response via a parameter
        .then(response => response.json())
        //once resolved gets passed on to getprofiles
        .then(getProfiles)
        .then(generateHTML)
        .catch(err => {
            peopleList.innerHTML = '<h3>Something went wrong</h3>'
            console.log(err)
        })
        .finally(() => event.target.remove())


});