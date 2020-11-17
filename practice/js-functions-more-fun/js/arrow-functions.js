const getRandomNumber = (num) => {
  const randomNumber = Math.floor( Math.random() * num ) + 1;
  return randomNumber;
}

const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
}