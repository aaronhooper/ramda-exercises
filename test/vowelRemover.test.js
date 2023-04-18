const strictEqual = require('chai').assert.strictEqual;
const shortcut = require('../src/lib/vowelRemover')

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("vowelRemover", () => {
  it("passes the tests", () => {
    doTest('hello', 'hll');
    doTest('how are you today?', 'hw r y tdy?');
    doTest('complain', 'cmpln');
    doTest('never', 'nvr');
  });    
});
