/**
 * Create a function called shortcut to remove the lowercase vowels
 * (a, e, i, o, u) in a given string.
 *
 * @param {string} str
 * @returns {string} string with the vowels removed
 *
 * @example
 * shortcut("hello") // returns "hll"
 * shortcut("codewars") // returns "cdwrs"
 * shortcut("goodbye") // returns "gdby"
 * shortcut("HELLO") // returns "HELLO"
 */
const shortcut = (str) => str.replace(/[aeiou]/g, '')

module.exports = shortcut
