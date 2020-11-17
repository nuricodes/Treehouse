function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${'sq ft'}`;
}

getArea(5, 10);