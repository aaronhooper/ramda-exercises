/** @module */

const {
  includes,
  __,
  pipe,
  head,
  equals,
  map,
  split,
  zipObj,
  prop,
  prepend,
  tail,
  reduced,
  reduce,
  ifElse,
  clone
} = require('ramda')

/**
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *   - Open brackets must be closed by the same type of brackets.
 *   - Open brackets must be closed in the correct order.
 *   - Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} str
 * @returns {boolean} the validity of the input string
 */
const isValid = (str) => {
  const openBrackets = '{(['
  const closeBrackets = '})]'
  const accumulator = { stack: [], valid: true }
  const bracketIsOpen = includes(__, openBrackets)
  const headOfStackEqualsBracket = pipe(head, equals)

  const toOpenBracket = pipe(
    map(split('')),
    ([open, close]) => zipObj(close, open),
    (obj) => (bracket) => prop(bracket, obj)
  )([openBrackets, closeBrackets])

  const addBracketToStack = (acc) =>
    pipe(
      prepend(__, acc.stack),
      (stack) => ({ ...acc, stack })
    )

  const popBracketFromStack = (acc) =>
    pipe(
      () => tail(acc.stack),
      (stack) => ({ ...acc, stack })
    )

  const bracketClosesLastOpened = (acc) =>
    pipe(
      toOpenBracket,
      headOfStackEqualsBracket(acc.stack)
    )

  const invalidateString = (acc) => () => reduced({ ...acc, valid: false })

  const validateBracketArray = reduce((acc, bracket) =>
    ifElse(
      bracketIsOpen,
      addBracketToStack(acc),
      ifElse(
        bracketClosesLastOpened(acc),
        popBracketFromStack(acc),
        invalidateString(acc)
      )
    )(bracket), clone(accumulator))

  return pipe(
    split(''),
    validateBracketArray,
    prop('valid')
  )(str)
}

module.exports = isValid
