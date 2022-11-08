const Intern = require("../lib/Intern");
const intern = new Intern("garrett", "234", "go@go.com", "wisconsin");

describe("Intern test", () => {
    it("should get the constructor values for the intern object", () => {
       
        expect(intern.name).toEqual("garrett");
        expect(intern.id).toEqual("234");
        expect(intern.email).toEqual("go@go.com");
        expect(intern.school).toEqual("wisconsin")
    })

    
        it("should return the name from the Intern object", () => {
    
            expect(intern.getName()).toEqual("garrett");
        })
   
    
    
        it("should return the id from the Intern object", () => {
    
            expect(intern.getId()).toEqual("234");
        })
    
    
    
        it("should return the email from the Intern object", () => {
    
            expect(intern.getEmail()).toEqual("go@go.com");
        })

        it("should return the school from the Intern object", () => {

            expect(intern.getSchool()).toEqual("wisconsin")
        })
    
    
  
        it("should return the string Intern", () => {
    
            expect(intern.getRole()).toEqual("Intern");
        })
   
    
});
