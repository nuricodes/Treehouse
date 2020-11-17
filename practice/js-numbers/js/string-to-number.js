const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

//parseInt() turns a string to a interger
const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
console.log(totalBadges);
console.log(typeof parseInt(HTMLBadges), typeof parseInt(CSSBadges));

//parseFloat() for float numbers
const pi = '3.14';
//console.log(parseFloat(pi))

//unary operator does the same thing as parse
console.log(+pi)