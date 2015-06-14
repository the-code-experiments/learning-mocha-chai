/**
 *  The goal of this file is to provide the basic understanding:
 *	-> Writing your test cases in moduler way.
 *
 *  How to run this example.
 *  1. Open index.html in browser.
 *  2. Press F12 to see the console.
 */

var expect = chai.expect;

/**
 *  BDD Test cases for Addition module.
 */
describe('Addition', function() {

    it('Should return 4 when the parameter is 2 & 2', function() {
        expect(addition(2, 2)).to.equal(4);
    });

    it('Should return HelloWorld when the parameter is Hello & World', function() {
        expect(addition("Hello", "World")).to.equal("HelloWorld");
    });

});