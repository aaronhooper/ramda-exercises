/**
 * Your team is writing a fancy new text editor and you've been tasked
 * with implementing the line numbering.
 *
 * Write a function which takes a list of strings and returns each line
 * prepended by the correct number.
 *
 * The numbering starts at 1. The format is n: string. Notice the colon
 * and space in between.
 *
 * @param {Array} a
 * @returns {Array} an array of strings with the line number prepended
 *
 * @example
 * number([]) // returns []
 * number(["a", "b", "c"]) // returns ["1: a", "2: b", "3: c"]
 */
const number = (a) => a.map((v, i) => `${i + 1}: `.concat(v))

module.exports = {
  number
}
