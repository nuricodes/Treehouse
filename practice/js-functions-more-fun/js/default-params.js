const sayGreeting = (greeting = 'good morning', name = 'student') => {
  return `${greeting}, ${name}!`;
}

const getArea = (width, length, unit = 'sq ft') => {
  const area = width * length;
  return `${area} ${unit}`
}