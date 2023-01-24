const calculator = (number1, number2) => ({
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  });

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    object = Object.keys(object);
  }
  if (type === 'values') {
    object = Object.values(object);
  }
  if (type === 'entries') {
    object = Object.entries(object);
  }
  return object;
};

module.exports = { calculator, arrayGenerator };
