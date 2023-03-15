// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const handlebars = require('handlebars')
const generateHTML = require("./generateHTML")

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
  /*
  getHtml() {
    return `<div class="card">
              <h2>${this.name}</h2>
              <p>${this.getRole()}</p>
              <ul>
                <li>ID: ${this.id}</li>
                <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
              </ul>
            </div>`;
  }*/
}


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return 'officeNumber';
  }
  /*getHtml() {
    return `<div class="card">
              <h2>${this.name}</h2>
              <p>${this.getRole()}</p>
              <ul>
                <li>ID: ${this.id}</li>
                <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li>Office Number: ${this.officeNumber}</li>
              </ul>
            </div>`;
  }*/
}
/*
const manager = new Manager()
manager.getRole()
manager.getOfficeNumber()
manager.getHtml()
*/

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
  /*
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
  }*/
}
/*const engineer = new Engineer ()
engineer.getRole()
engineer.getGithub()
engineer.getHtml()
//engineer.getname()
//engineer.getId()
//engineer.getEmail()
*/
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
  /*
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
  }*/
}
/*
const intern = new Intern()
intern.getRole()
intern.getSchool()
intern.getHtml()
//intern.getname()
//intern.getId()
//intern.getEmail()
// Define an array to hold the team members
*/
const teamMembers = [];

// Define the questions to prompt the user for team member

function promptManager() {
  console.log('Please enter the following information for the team manager:');
  const managerObject =inquirer.prompt([
      {
        type: 'input',
        message: 'Name:',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Office number:',
        name: 'officeNumber',
      },
    ])
    .then((answers) => {
      /*const manager = {
          name: answers.name,
          id: answers.id,
          email: answers.email,
          officeNumber: answers.officeNumber,
          role: 'Manager',
      };*/
      const {name, id, email, officeNumber} = managerObject;
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      teamMembers.push(manager);
      showMenu();
    });
}

// Prompt user to select between adding an engineer or intern, or finishing the team
function showMenu() {
  console.log('');
  console.log('What would you like to do next?');
  inquirer.prompt([
      {
        type: 'list',
        message: 'Please select an option:',
        name: 'menu',
        choices: [
          'Add Engineer',
          'Add Intern',
          'Finish Building Team',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case 'Add Engineer':
          promptEngineer();
          break;
        case 'Add Intern':
          promptIntern();
          break;
        case 'Finish Building Team':
          generateHTML(teamMembers);
          break;
        default:
          break;
      }
      return finish()
    });
}

// Prompt user for engineer info
function promptEngineer() {
  console.log('Please enter the following information for the engineer:');
  const engineerObject = inquirer.prompt([
      {
        type: 'input',
        message: 'Name:',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'GitHub username:',
        name: 'github',
      },
    ])
    .then((answers) => {
      /*const engineer = {
        name: answers.name,
        id: answers.id,
        email: answers.email,
        github: answers.github,
        role: 'Engineer',
      };*/
      const {name, id, email, officeNumber} = engineerObject;
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      teamMembers.push(engineer);
      showMenu();
    });
}

// Prompt user for intern info
function promptIntern() {
  console.log('Please enter the following information for the intern:');
  const internObject = inquirer.prompt([
      {
        type: 'input',
        message: 'Name:',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'School:',
        name: 'school',
      },
    ])
  .then((answers) => {
      /*const intern = {
          name: answers.name,
          id: answers.id,
          email: answers.email,
          github: answers.github,
          role: 'intern',
      };*/

      const {name, id, email, officeNumber} = internObject;
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      teamMembers.push(intern);
      showMenu();
  });
}

function getInfo() {
  promptManager()
}



function finish() {
  const gerneratePage = generateHTML(teamMembers)
  const fileName = 'team.html'

  writeFile(fileName, gerneratePage)
}

function writeFile(fileName, gerneratePage) {
  fs.writeFileSync(fileName, gerneratePage, (err) => {
    if(err){
    console.log(err)
    }else{
      console("complete")
    }
  })
}
getInfo()
module.exports = promptManager