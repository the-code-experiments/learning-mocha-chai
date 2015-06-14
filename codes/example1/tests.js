/**
 *  The goal of this file is to provide the basic understanding:
 *  -> Mocha, Chai via Expect assert style;
 *  -> How to write BDD test cases;
 *
 *  How to run this example.
 *  1. Open index.html in browser.
 */

var expect = chai.expect;

/**
 *  @function: return 2 numbers addition
 */
function addition(a, b) {

    console.log("a: ", a);
    console.log("b: ", b);

    return a + b;
}

/**
 *  BDD Test cases for Addition module.
 */
describe('Addition of 2 numbers', function() {

    it('Should return 4 when the parameter is 2 & 2', function() {
        expect(addition(2, 2)).to.equal(4);
    });

    it('Should return HelloWorld when the parameter is Hello & World', function() {
        expect(addition("Hello", "World")).to.equal("HelloWorld");
    });

});