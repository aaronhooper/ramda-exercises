const assert = require('chai').assert

const isValid = require('../lib/validParentheses')

describe('validParentheses', () => {
  it('passes the tests', () => {
    assert.equal(isValid("()"), true)
    assert.equal(isValid("()[]{}"), true)
    assert.equal(isValid("(]"), false)
  })
})
