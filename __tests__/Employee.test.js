const Employee = require("../lib/Employee");
const employee = new Employee("garrett", "234", "go@go.com");

describe("Employee", () => {
    it("should get the constructor values for the employee object", () => {
       

        expect(employee.name).toBe("garrett");
        expect(employee.id).toBe("234");
        expect(employee.email).toBe("go@go.com");
    })
});

describe("getName", () => {
    it("should return the name from the employee object", () => {

        expect(employee.getName()).toBe("garrett");
    })
});

describe("getId", () => {
    it("should return the id from the employee object", () => {

        expect(employee.getId()).toBe("234");
    })
});

describe("getEmail", () => {
    it("should return the email from the employee object", () => {

        expect(employee.getEmail()).toBe("go@go.com");
    })
});

describe("getRole", () => {
    it("should return the string Employee", () => {

        expect(employee.getRole()).toBe("Employee");
    })
})


