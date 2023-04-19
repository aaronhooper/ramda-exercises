/** @module */

const { converge, concat, filter, reject, equals } = require('ramda')

/**
 * Write an algorithm that takes an array and moves all of the zeros to
 * the end, preserving the order of the other elements.
 *
 * @param {array} arr
 * array of any type
 * @returns {array} array with zeroes moved to the end
 *
 * @example
 * // returns [false,1,1,2,1,3,"a",0,0]
 * moveZeros([false,1,0,1,2,0,1,3,"a"])
 */
function moveZeros (arr) {
  return converge(concat, [
    reject(equals(0)),
    filter(equals(0))
  ])(arr)
}

module.exports = moveZeros
