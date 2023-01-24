const average = (array) => {
  if (array.length < 1) {
    return undefined;
  }
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    result += array[i];
    if (typeof array[i] === 'string') {
      return undefined;
    }
  }
  return Math.round(result / array.length);
};

module.exports = average;
