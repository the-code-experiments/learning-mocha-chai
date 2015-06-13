function fetchFromDB() {

    return {
        "username": "Ashwin"
    };

}

function userFromInput(name) {

    return {
        "username": name
    };

}

function userDetails() {

    return {
        "username": "Ashwin",
        "technologies": {
            "programming": {
                "frontend": ["JavaScript", "CoffeeScript"],
                "backend": ["Node.js", "Go", "Python", "PHP", "C++"],
            },
            "documents": ["HTML"],
            "stylesheets": ["CSS", "LESS", "SASS"]
        }
    };

}