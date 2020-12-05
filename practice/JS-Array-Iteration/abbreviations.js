// Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

days.forEach(d => dayAbbreviations.push(d.substr(0, 2)))
