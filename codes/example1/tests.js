var expect = chai.expect;

function addition(a, b) {
	
	console.log("a: ", a);
	console.log("b: ", b);

	return a + b;
}

describe('Addition', function() {
    
    it('Should return 4 when the parameter is 2 & 2', function() {
        expect(addition(2, 2)).equal(4);
    });

    it('Should return 90 when the parameter is 45 & 45', function() {
        expect(addition(45, 45)).equal(90);
    });

});