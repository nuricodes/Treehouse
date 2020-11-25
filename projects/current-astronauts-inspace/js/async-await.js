const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests

async function getJSON(url) {
  try {
    // add data fetching statement
    //the value awaits the promise returned by fetch
    const response = await fetch(url);
    // the function is going to wait for response.json to resolve or reject
    return await response.json();
    //when an error occurs catch gets the details
  } catch (error) {
    // the error here will bubble up and be caught by try catch blocks at the top level
    throw error;

  }

}

//this function will return the array of promised object captured in the variable profiles
async function getPeopleInSpace(url) {
  //read the response and await the json
  const peopleJSON = await getJSON(url);

  //map of the array of objects in the peopleJSON and fetch data from wiki api
  //iterate over the people property in the peopleJSON
  //person parameter represents each person in space
  // .map is performing an async operation on every item so we mark with async
  const profiles = peopleJSON.people.map(async (person) => {
    //to prepare to pull from first wiki api
    const craft = person.craft;

    //await a result promise from profile response
    const profileJSON = await getJSON(wikiURL + person.name);

    // here we return object all the properties from profile json and craft
    return { ...profileJSON, craft };
  });
  //will wait till the aggregrated promise to be resolved in to a single promise before it returns the data
  return Promise.all(profiles);
}


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

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";

  getPeopleInSpace(astrosUrl)
    .then(generateHTML)
    .catch(e => {
      peopleList.innerHTML = '<h3>Something went wrong!</h3>'
      console.error(e);
    })
    .finally(() => event.target.remove())

});