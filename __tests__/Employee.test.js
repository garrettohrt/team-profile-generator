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
    it("it should return the name from the employee object", () => {
        expect(employee.getName()).toBe("garrett");
    })
});
