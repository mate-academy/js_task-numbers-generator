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
  const [numArr, minNum, maxNum] = [numbers, min, max];

  return () => {
    if (numArr === undefined) {
      return undefined;
    } else if (minNum === undefined && maxNum === undefined) {
      return numArr.shift();
    }

    for (let i = 0; i < numArr.length; i++) { // Чому верхній
      if (numArr[i] >= minNum && numArr[i] <= maxNum) {
        return Number(numArr.splice(i, 1));
      }
    }
  };
}

module.exports = createNumbersGenerator;
