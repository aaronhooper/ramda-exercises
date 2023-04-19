const { assert } = require('chai')

const parse = require('../src/lib/makeTheDeadfishSwim')

describe("makeTheDeadfishSwim", () => {
  it("passes the tests", () => {
    assert.deepEqual(parse("iiisdoso"), [8, 64])
    assert.deepEqual(parse("iiisxxxdoso"), [8, 64])
    assert.deepEqual(parse("iisddsoddodo"), [4, 2, 1])
  })
})

