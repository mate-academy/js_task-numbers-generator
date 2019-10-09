'use strict';

/**
 *
 *
 * For example:
 *
 * const generator1 = createNumbersGenerator([1, 3])
 * console.log(generator1()); // 1
 * console.log(generator1()); // 3
 * console.log(generator1()); // undefined
 *
 * const generator2 = createNumbersGenerator([1, 3, 0, 2, 5], 2, 4)
 * console.log(generator2()); // 3
 * console.log(generator2()); // 2
 * console.log(generator2()); // undefined
 *
 * @param {number[]} numbers - array of numbers to return
 * @param {number} min - (optional)
 * @param {number} max - (optional)
 *
 * @return {number}
 */
function createNumbersGenerator(numbers, min, max) {

  return () => {
    if (!numbers) {
      return undefined;
    } else if (!min && !max) {
      return numbers.shift();
    }

    for (let i = 0; i < numbers.length; i++) {
      if (!min && numbers[i] <= max) return Number(numbers.splice(i, 1));
      if (!max && numbers[i] >= min) return Number(numbers.splice(i, 1));
      if (numbers[i] >= min && numbers[i] <= max) {
        return Number(numbers.splice(i, 1));
      }
    }
  };
}

module.exports = createNumbersGenerator;
