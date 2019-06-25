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
function createNumbersGenerator(numbers = [], min, max) {
  // write code here
  let count = 0;
  let resultArr;

  if (!min && !max) {
    resultArr = [...numbers];
  } else {
    resultArr = numbers.filter(number => min <= number && number <= max);
  };

  return () => {
    return resultArr[count++];
  };
}

module.exports = createNumbersGenerator;
