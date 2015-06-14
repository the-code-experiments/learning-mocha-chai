/**
 *  The goal of this file is to provide the basic understanding:
 *  -> Mocha, Chai via Assert assertion style;
 *  -> How to write TDD test cases;
 *  -> How to nest your suites;
 *  -> How to use setup & teardown;
 *
 *  How to run this example.
 *  1. Open index.html in browser.
 *  2. Press F12 to see the console.
 */

var assert = chai.assert;

/**
 *  TDD Test cases for Addition module.
 */
suite('Addition of 2 numbers', function() {

    /**
     *  Setup executes each time before each of your tests are executed.
     */
    setup(function() {
        console.log('Run setup for addition suite');
    });

    /**
     *  Teardown executes each time after each of your tests are executed.
     */
    teardown(function() {
        console.log('Run teardown for addition suite');
    });

    test('Should return 4 when the parameter is 2 & 2', function() {
        assert.equal(addition(2, 2), 4, 'Expecting the addition to be 4');
    });

    /**
     *  Nested suite.
     */
    suite('Addition of 2 strings', function() {

        test('Should return HelloWorld when the parameter is Hello & World', function() {
            assert.equal(addition('Hello', 'World'), 'HelloWorld', 'Expecting the addition to be HelloWorld');
        });

    });
});

suite('Multiplication of 2 numbers', function() {

    setup(function() {
        console.log('Run setup for multiplication suite');
    });


    test('Should return 25 when the parameter is 5 & 5', function() {
        assert.equal(multiplication(5, 5), 25, 'Expecting the multiplication to be 25');
    });

});