const { all } = require('ramda')

/**
 * You will be given an array and a limit value. You must check that all
 * values in the array are below or equal to the limit value. If they
 * are, return true. Else, return false.
 *
 * You can assume all values in the array are numbers.
 *
 * @param {number[]} a
 * @param {number} limit
 * @returns {boolean} true if all values in a are less than or equal to the limit
 */
const smallEnough = (a, limit) => all((n) => n <= limit, a)

module.exports = { smallEnough }
