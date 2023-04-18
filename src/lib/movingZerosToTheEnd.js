const { converge, concat, filter, reject, equals } = require('ramda')

/**
 * Write an algorithm that takes an array and moves all of the zeros to
 * the end, preserving the order of the other elements.
 *
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns [false,1,1,2,1,3,"a",0,0]
*/
const moveZeros = converge(concat, [reject(equals(0)), filter(equals(0))])

module.exports = moveZeros
