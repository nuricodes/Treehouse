//Global scope
const person = 'Lee';

function greeting() {
  //function scope
  const person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  //function scope
  const person = 'Ben';
  alert(`Good morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}`)
greeting2()