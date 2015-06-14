/**
 *  The goal of this file is to provide the basic understanding:
 *	-> Writing your test cases in moduler way.
 *  -> How to use before, after, beforeEach & afterEach;
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

	/**
     *  before executes only 1 time before each describe.
     */
	before(function() {
    	console.log("Start of Addition Test Cases");
    });

	/**
     *  after executes only 1 time before each describe.
     */
    after(function() {
    	console.log("End of Addition Test Cases");
    });

	/**
     *  beforeEach executes each time before each of your tests are executed.
     */
    beforeEach(function() {
        console.log('Run beforeEach for addition');
    });

    /**
     *  afterEach executes each time after each of your tests are executed.
     */
    afterEach(function() {
        console.log('Run afterEach for addition');
    });

    it('Should return 4 when the parameter is 2 & 2', function() {
        expect(addition(2, 2)).to.equal(4);
    });

    it('Should return HelloWorld when the parameter is Hello & World', function() {
        expect(addition("Hello", "World")).to.equal("HelloWorld");
    });

});