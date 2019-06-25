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
  if (arguments.length === 1) {
    let count = 0;
    const array = numbers;

    function device() {
      const toShow = array[count];
      count++;
      return toShow;
    }

    return device;
  } else if (arguments.length === 0) {
    function device() {
      return undefined;
    }

    return device;
  } else {
    let count = 0;
    const filtered = numbers.filter(item => item >= min && item <= max);

    function device() {
      const toShow = filtered[count];
      count++;
      return toShow;
    }

    return device;
  }
}

module.exports = createNumbersGenerator;
