/** @module */

const { pipe, reduce, cond, equals, append, T, prop, split, inc, dec } = require('ramda')

/**
 * Write a simple parser that will parse and run Deadfish.
 *
 * Deadfish has 4 commands, each 1 character long:
 *
 *   - i increments the value (initially 0)
 *   - d decrements the value
 *   - s squares the value
 *   - o outputs the value into the return array
 *
 * Invalid characters should be ignored.
 *
 * @param {string} cmds
 * the commands to run
 * @returns {number[]} an array of values the command has output
 * @example
 * parse("iiisdoso") // returns [8, 64]
 */
const parse = (cmds) => {
  return pipe(
    split(''),
    reduce((acc, chr) =>
      cond([
        [equals('i'), () => ({ ...acc, value: inc(acc.value) })],
        [equals('d'), () => ({ ...acc, value: dec(acc.value) })],
        [equals('s'), () => ({ ...acc, value: Math.pow(acc.value, 2) })],
        [equals('o'), () => ({ ...acc, out: append(acc.value, acc.out) })],
        [T, () => acc]
      ])(chr), { out: [], value: 0 }),
    prop('out')
  )(cmds)
}

module.exports = parse
