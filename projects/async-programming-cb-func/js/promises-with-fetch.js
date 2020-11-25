const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getProfiles(json) {
    const profiles = json.people.map(person => {
        return getJSON(wikiUrl + person.name);
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
    fetch(astrosUrl)
        .then(getProfiles)
        .then(generateHTML)
        .catch(err => {
            peopleList.innerHTML = '<h3>Something went wrong</h3>'
            console.log(err)
        })
        .finally(() => event.target.remove())


});