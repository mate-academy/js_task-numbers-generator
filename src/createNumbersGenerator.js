'use strict';

/**
 * Write a function (factory) creating a function (device) returning a number
 * from an array given to a factory. Each device call should return the next
 * number from the array. If `min` and `max` were provided the device should
 * return only numbers from the given range (including `min` and `max`). If
 * there is no more matching numbers in the array return undefined.
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
  let count = 0;
  return () => {
    if (numbers === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (min !== undefined && max !== undefined) {
          const selectedNum = +numbers.filter(item =>
            (item >= min && item <= max) ? item : undefined).splice(count, 1);
          count++;
          if (selectedNum === 0) {
            return undefined;
          }
          return selectedNum;
        }
        return +numbers.splice(i, 1);
      }
    }
  };
}

module.exports = createNumbersGenerator;
