const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generate-html')
const employeeStorage = []

// start manager question prompt
function makeManager() {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter manager name: "
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    }

//create new manager object with values of prompt answers.
//push to employee storageArray.
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeStorage.push(manager);
        
        addAnother();
    });
};
//present menu to add more team members or finish team
function addAnother() {
    return inquirer.prompt([{
        type: "list",
        name: "add",
        message: "Add another team member?",
        choices: ["Engineer", "Intern", "Finish"]
    }]).then((answers) => {
        switch (answers.add) {
            case "Engineer":
                makeEngineer()
                break;

            case "Intern":
                makeIntern()
                break;

            case "Finish":
                makeTeam()
        }
    });
};
// start engineer question prompt.
function makeEngineer() {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter engineer name: "
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    }

//create new engineer object with values of prompt answers.
//push to employee storageArray.
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeStorage.push(engineer);
        
        addAnother();
    });

}
// start intern question prompt.
function makeIntern() {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter intern name: "
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your school?"
    }

//create new intern object with values of prompt answers.
//push to employee storageArray.
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeStorage.push(intern);
       
        addAnother();
    });
};
// write html file with employee storageArray.
const makeTeam = () => {
    const pageHTML = generateHTML(employeeStorage);
    console.log(pageHTML, "please work")
    fs.writeFile("./dist/team-profile.html", pageHTML, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("html file created")
        }
    }
    )
}
//initialize
makeManager()
