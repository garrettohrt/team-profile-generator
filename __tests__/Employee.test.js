const Employee = require("../lib/Employee");
const employee = new Employee("garrett", "234", "go@go.com");

describe("Employee test", () => {
    it("should get the constructor values for the employee object", () => {

        expect(employee.name).toEqual("garrett");
        expect(employee.id).toEqual("234");
        expect(employee.email).toEqual("go@go.com");
    })
});

describe("getName", () => {
    it("should return the name from the employee object", () => {

        expect(employee.getName()).toEqual("garrett");
    })
});

describe("getId", () => {
    it("should return the id from the employee object", () => {

        expect(employee.getId()).toEqual("234");
    })
});

describe("getEmail", () => {
    it("should return the email from the employee object", () => {

        expect(employee.getEmail()).toEqual("go@go.com");
    })
});

describe("getRole", () => {
    it("should return the string Employee", () => {

        expect(employee.getRole()).toEqual("Employee");
    })
})


