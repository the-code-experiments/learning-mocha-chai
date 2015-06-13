var expect = chai.expect;

describe('Addition', function() {
    
    it('Should return 4 when the parameter is 2 & 2', function() {
        expect(addition(2, 2)).to.equal(4);
    });

    it('Should return 90 when the parameter is 45 & 45', function() {
        expect(addition(45, 45)).to.equal(90);
    });

});