const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
//this function will return the array of promised object captured in the variable profiles
async function getPeopleInSpace(url) {
  // await keyword will wait for resolved promise returned by fetch and get the fulfillment value out and assign it 
  const peopleResponse = await fetch(url);
  //read the response and await the json
  const peopleJSON = await peopleResponse.json();

  //map of the array of objects in the peopleJSON and fetch data from wiki api
  //iterate over the people property in the peopleJSON
  //person parameter represents each person in space
  // .map is performing an async operation on every item so we mark with async
  const profiles = peopleJSON.people.map(async (person) => {
    //to prepare to pull from first wiki api
    const craft = person.craft;
    //awaits the response object of fetch then concatname on each iteration
    const profileResponse = await fetch(wikiUrl + person.name)
    //await a result promise from profile response
    const profileJSON = await profileResponse.json();

    // here we return object all the properties from profile json and craft
    return { ...profileJSON, craft };
  });
  //will wait till the aggregrated promise to be resolved in to a single promise before it returns the data
  return Promise.all(profiles)
}
console.log(getPeopleInSpace(astrosUrl))

// Generate the markup for each profile
function generateHTML(data) {
  data.map(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
    <span>${person.craft}</span>
    <h2>${person.title}</h2>
    <p>${person.description}</p>
    <p>${person.extract}</p>
    `;
  });
}

btn.addEventListener('click', async (event) => {
  event.target.textContent = "Loading...";

  const astros = await getPeopleInSpace(astrosUrl);
  generateHTML(astros);
  event.target.remove()

});