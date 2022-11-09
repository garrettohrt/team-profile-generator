const Engineer = require("../lib/Engineer");
const engineer = new Engineer("garrett", "234", "go@go.com", "garrettohrt");

describe("Engineer test", () => {
    it("should get the constructor values for the engineer object", () => {

        expect(engineer.name).toEqual("garrett");
        expect(engineer.id).toEqual("234");
        expect(engineer.email).toEqual("go@go.com");
        expect(engineer.github).toEqual("garrettohrt")
    })

    it("should return the name from the engineer object", () => {

        expect(engineer.getName()).toEqual("garrett");
    })

    it("should return the id from the engineer object", () => {

        expect(engineer.getId()).toEqual("234");
    })

    it("should return the email from the engineer object", () => {

        expect(engineer.getEmail()).toEqual("go@go.com");
    })

    it("should return the string Engineer", () => {

        expect(engineer.getRole()).toEqual("Engineer");
    })

});

