'use strict';

function createNumbersGenerator(numbers = [], min = -Infinity, max = Infinity) {
  const filtred = numbers.filter(item => item >= min && item <= max);
  return () => {
    return filtred.length ? filtred.splice(0, 1)[0] : undefined;
  };
}

module.exports = createNumbersGenerator;
