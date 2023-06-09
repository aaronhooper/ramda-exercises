const assert = require('chai').assert

const isValid = require('../src/lib/validParentheses')

describe('validParentheses', () => {
  it('passes the tests', () => {
    assert.equal(isValid("()"), true)
    assert.equal(isValid("()[]{}"), true)
    assert.equal(isValid("(]"), false)
    assert.equal(isValid("{([]{}{{(){}[]}})}"), true)
    assert.equal(isValid("{[{[()][]]}"), false)
  })
})
