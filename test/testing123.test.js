const chai = require('chai')
const { number } = require('../src/lib/testing123')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('testing123', () => {
  it('passes the tests', () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array')
    assert.deepEqual(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c'], 'Return the correct line numbers')
  })
})
