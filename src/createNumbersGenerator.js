'use strict';

/**
 * Write a function (factory) accepting `numbers` array and returning a function
 * (device). Each device call should return the next number from the array.
 * If `min` and `max` were provided the device should return only numbers which
 * are not less than `min` and not creater than `max`). If there is no more
 * matching numbers in the array return `undefined`.
 *
 * For example:
 *
 * const generator1 = createNumbersGenerator([1, 3])
 * console.log(generator1()); // 1
 * console.log(generator1()); // 3
 * console.log(generator1()); // undefined
 *
 * const generator2 = createNumbersGenerator([1, 3, 0, 2, 5], 1.5, 4.5)
 * console.log(generator2()); // 3
 * console.log(generator2()); // 2
 * console.log(generator2()); // undefined
 *
 * @param {number[]} numbers - array of numbers to return
 * @param {number} min - (optional)
 * @param {number} max - (optional)
 *
 * @return {function(): number}
 */
function createNumbersGenerator(numbers = [], min, max) {
  const list = min && max
    ? numbers.filter(number => number >= min && number <= max)
    : numbers;
  return () => list.shift();
}

module.exports = createNumbersGenerator;
