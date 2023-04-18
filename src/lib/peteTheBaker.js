const { pipe, keys, difference, isEmpty, map, apply, intersection, prop, __, converge, divide, zip, not } = require('ramda')

const cakes = (recipe, available) => {
  const recipeHasUnownedIngredients = pipe(
    map(keys),
    apply(difference),
    isEmpty,
    not
  )([recipe, available])

  if (recipeHasUnownedIngredients) {
    return 0
  }

  return pipe(
    map(keys),
    apply(intersection),
    converge(zip, [map(prop(__, available)), map(prop(__, recipe))]),
    map(apply(divide)),
    apply(Math.min),
    Math.floor
  )([recipe, available])
}

module.exports = cakes
