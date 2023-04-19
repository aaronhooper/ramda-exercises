/** @module */

const { pipe, split, map, reduce, multiply, unfold, length } = require('ramda')

/**
 * Write a function, persistence, that takes in a positive parameter num
 * and returns its multiplicative persistence, which is the number of
 * times you must multiply the digits in num until you reach a single
 * digit.
 *
 * @param {number} num
 * @returns {number} the number of times digits were multiplied
 *
 * @example
 * // returns 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
 * persistence(39)
 * @example
 * // returns 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
 * persistence(999)
 * @example
 * // returns 0 (because 4 is already a one-digit number)
 * persistence(4)
 */
const persistence = (num) => {
  const multiplyDigits = pipe(
    (n) => n.toString(),
    split(''),
    map(parseInt),
    reduce(multiply, 1)
  )

  return pipe(
    unfold((n) => n < 10 ? false : map(multiplyDigits, [n, n])),
    length
  )(num)
}

module.exports = persistence
