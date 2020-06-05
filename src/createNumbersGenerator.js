'use strict';

function createNumbersGenerator(numbers, min, max) {
  return () => {
    let number = numbers.shift();

    while (number < min || number > max) {
      number = numbers.shift();
    }

    return number;
  };
}

module.exports = createNumbersGenerator;
