var expect = chai.expect;

describe('Autherization', function() {

    it('Login form', function() {

        var userInputName = userFromInput("Ashwin");
        var userFromService = fetchFromDB();

        expect(userInputName.username).to.equal(userFromService.username);
    });

    it('Profile form', function() {

        var uDetails = userDetails();

        var profile = {
            "username": "Ashwin",
            "technologies": {
                "programming": {
                    "frontend": ["JavaScript", "CoffeeScript"],
                    "backend": ["Node.js", "Go", "Python", "PHP", "C++"]
                },
                "documents": ["HTML"],
                "stylesheets": ["CSS", "LESS", "SASS"]
            }
        };

        expect(uDetails).to.deep.equal(profile);

    });

});