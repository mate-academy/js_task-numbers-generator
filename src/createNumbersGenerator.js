'use strict';

function createNumbersGenerator(
  numbers,
  min = Math.min(...numbers),
  max = Math.max(...numbers)
) {
  return () => {
    let number = numbers.shift();

    while (number < min || number > max) {
      number = numbers.shift();
    }

    return number;
  };
}

module.exports = createNumbersGenerator;
