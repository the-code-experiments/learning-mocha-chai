/**
 *  The goal of this file is to provide the basic understanding:
 *  -> Mocha, Chai via Assert assertion style;
 *  -> How to write TDD test cases;
 *
 *  How to run this example.
 *  1. Open index.html in browser.
 */

var assert = chai.assert;

/**
 *  TDD Test cases for Addition module.
 */
suite('Addition of 2 numbers', function() {

	test('Should return 4 when the parameter is 2 & 2', function() {
        assert.equal(addition(2, 2), 4, 'Expecting the addition to be 4');
    });

	test('Should return HelloWorld when the parameter is Hello & World', function() {
        assert.equal(addition(2, 2), 4, 'Expecting the addition to be HelloWorld');
    });

});