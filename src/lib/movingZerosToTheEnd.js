const { converge, concat, filter, reject, equals } = require('ramda')

const moveZeros = converge(concat, [reject(equals(0)), filter(equals(0))])

module.exports = moveZeros
