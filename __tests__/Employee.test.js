const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should get the constructor values for the employee object", () => {
        const employee = new Employee("garrett", "234", "go@go.com");

        expect(employee.name).toBe("garrett");
        expect(employee.id).toBe("234");
        expect(employee.email).toBe("go@go.com");
    })
});
