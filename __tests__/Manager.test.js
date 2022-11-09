const Manager = require("../lib/Manager");
const manager = new Manager("garrett", 234, "go@go.com", 5);

describe("Manager test", () => {
    it("should get the constructor values for the intern object", () => {

        expect(manager.name).toEqual("garrett");
        expect(manager.id).toEqual(234);
        expect(manager.email).toEqual("go@go.com");
        expect(manager.officeNumber).toEqual(5)
    })

    it("should return the name from the manager object", () => {

        expect(manager.getName()).toEqual("garrett");
    })

    it("should return the id from the manager object", () => {

        expect(manager.getId()).toEqual(234);
    })

    it("should return the email from the manager object", () => {

        expect(manager.getEmail()).toEqual("go@go.com");
    })

    it("should return the string manager", () => {

        expect(manager.getRole()).toEqual("Manager");
    })

});
