const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const employeeStorage = []

//ask manager
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


    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeStorage.push(manager);
        console.log(employeeStorage);
        addAnother();
    });
};

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
                generateHTML()
        }
    });
};

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


    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeStorage.push(engineer);
        console.log(employeeStorage);
        addAnother();
    });

}

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


    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeStorage.push(intern);
        console.log(employeeStorage);
        addAnother();
    });
};

makeManager()
module.exports = employeeStorage