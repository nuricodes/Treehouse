const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //whatever we pass in the resolve method below is available to be used in .then
        reject('Oh no! There was a problem with your order!'); //calling resolve inside is the fullfilment value of the promise
    }, 3000);
});

console.log(breakfastPromise);
// gets the value out of the promise object
// or consume the object
// handles both fulfilled and rejected promises
// takes in 2 parameters fulfilled and optional for rejected (usually catch is used)
breakfastPromise.then(val => console.log(val)).catch(err => console.log(err))  //err is the rejection reason

