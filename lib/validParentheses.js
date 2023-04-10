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

  const validateBrackets = reduce((acc, bracket) =>
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
    validateBrackets,
    prop('valid')
  )(str)
}

module.exports = isValid
