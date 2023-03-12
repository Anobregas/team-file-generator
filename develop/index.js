// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const handlebars = require('handlebars')

// Define a class for each team member
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }

  getHtml() {
    return `<div class="card">
              <h2>${this.name}</h2>
              <p>${this.getRole()}</p>
              <ul>
                <li>ID: ${this.id}</li>
                <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
              </ul>
            </div>`;
  }
}


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber(){
    return 'officeNumber';
  }
  getHtml() {
    return `<div class="card">
              <h2>${this.name}</h2>
              <p>${this.getRole()}</p>
              <ul>
                <li>ID: ${this.id}</li>
                <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li>Office Number: ${this.officeNumber}</li>
              </ul>
            </div>`;
  }
}
Manager.getRole()
Manager.getOfficeNumber()
Manager.getHtml()
Manager.getname()
Manager.getId()
Manager.getEmail()

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.github;
  }

  getHtml() {
    return `<div class="card">
              <h2>${this.name}</h2>
              <p>${this.getRole()}</p>
              <ul>
                <li>ID: ${this.id}</li>
                <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li>GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
              </ul>
            </div>`;
  }
}
Engineer.getRole()
Engineer.getGithub()
Engineer.getHtml()
Engineer.getname()
Engineer.getId()
Engineer.getEmail()

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return this.school;
  }

  getHtml() {
    return `<div class="card">
              <h2>${this.name}</h2>
              <p>${this.getRole()}</p>
              <ul>
                <li>ID: ${this.id}</li>
                <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li>School: ${this.school}</li>
              </ul>
            </div>`;
  }
}

Intern.getRole()
Intern.getSchool()
Intern.getHtml()
Intern.getname()
Intern.getId()
Intern.getEmail()
// Define an array to hold the team members
const team = [];

// Define the questions to prompt the user for team member

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: input => {
        if (input.trim().length === 0) {
          return 'Please enter a name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?",
      validate: input => {
        if (!Number.isInteger(Number(input)) || input.trim().length === 0) {
          return 'Please enter a valid employee ID.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email address?",
      validate: input => {
        if (!/\S+@\S+\.\S+/.test(input)) {
          return 'Please enter a valid email address.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
      validate: input => {
        if (!Number.isInteger(Number(input)) || input.trim().length === 0) {
          return 'Please enter a valid office number.';
        }
        return true;
      }
    }
  ];
  
const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
      validate: input => {
        if (input.trim().length === 0) {
          return 'Please enter a name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's employee ID?",
      validate: input => {
        if (!Number.isInteger(Number(input)) || input.trim().length === 0) {
          return 'Please enter a valid employee ID.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email address?",
      validate: input => {
        if (!/\S+@\S+\.\S+/.test(input)) {
          return 'Please enter a valid email address.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub username?",
      validate: input => {
        if (input.trim().length === 0) {
          return 'Please enter a GitHub username.';
        }
        return true;
      }
    }
  ];
  
const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
      validate: input => {
        if (input.trim().length === 0) {
          return 'Please enter a name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's employee ID?",
      validate: input => {
        if (!Number.isInteger(Number(input)) || input.trim().length === 0) {
          return 'Please enter a valid employee ID.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email address?",
      validate: input => {
        if (!/\S+@\S+\.\S+/.test(input)) {
          return 'Please enter a valid'
        }
        return true
        }
    },
    {
      type: 'input',
      name: 'school',
      message: "What school did the intern attend",
      validate: input => {
        if (input.trim().length === 0) {
          return 'Please enter a school name.';
        }
        return true;
    }
    },
];



function writeToFile(file, data) {
  return fs.writeFileSync((process.cwd(), file), data);
}

//function generateTeamRoster(teamMembers) {
 // const source = fs.readFileSync('./templates/teamRoster.hbs', 'utf8');
  //const template = handlebars.compile(source);
 // const html = template({ teamMembers: teamMembers });
 // fs.writeFileSync('./output/teamRoster.html', html);
//}

function init() {
    inquirer.prompt(managerQuestions, internQuestions, engineerQuestions).then((responses) => {
    writeToFile('team.html', generateTeamRoster({ ...responses }));
  });
}
init()

//cleargenerateTeamRoster()