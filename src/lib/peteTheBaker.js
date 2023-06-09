/** @module */

const { pipe, keys, difference, isEmpty, map, apply, intersection, prop, __, converge, divide, zip, not } = require('ramda')
/**
 * Pete likes to bake some cakes. He has some recipes and ingredients.
 * Unfortunately he is not good in maths. Can you help him to find out,
 * how many cakes he could bake considering his recipes?
 *
 * Write a function cakes(), which takes the recipe (object) and the
 * available ingredients (also an object) and returns the maximum number
 * of cakes Pete can bake (integer). For simplicity there are no units
 * for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or
 * 200). Ingredients that are not present in the objects, can be
 * considered as 0.
 *
 * @param {object} recipe
 * @param {object} available
 * @returns {number} the maximum number of cakes that can be baked
 *
 * @example
 * // returns 2
 * cakes(
 *   {flour: 500, sugar: 200, eggs: 1},
 *   {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
 * );
 * @example
 * // returns 0
 * cakes(
 *   {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
 *   {sugar: 500, flour: 2000, milk: 2000}
 * );
 */
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
