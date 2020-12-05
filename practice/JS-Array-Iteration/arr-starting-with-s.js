// return array of only words starting with S

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//let s = [];
//names.forEach(name => name.charAt(0) === 'S' ? s.push(name) : s)
//console.log(s)

names.forEach((name, index) => console.log(`${index + 1}) ${name}`)); //the second value passed in to the for each is the index which shows just that