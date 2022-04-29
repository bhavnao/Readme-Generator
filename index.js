// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
},{
    type: "input",
        message: "What is your Github username?",
        name: "github"
},{
    type: "input",
        message: "What is your email address?",
        name: "email"
},{
    type: "input",
    message: "What is the description of the project?",
    name: "description"
}, {
    type: "input",
        message: "Table of Contents",
        name: "contents"
},{
    type: "input",
        message: "What is the User Story?",
        name: "user-story"
},{ 
    type: "input",
        message: "What are the installation instructions?",
        name: "installation"
},{
    type: "input",
        message: "Are there any other contributors for this project?",
        name: "contributors"
},{
    type: "input",
        message: "What command should be run for testing?",
        name: "test"
},{
    type: "list",
        message: "What licenses should your project have?",
        choices: ['MIT', 'GPL', 'APACHE', 'None'], 
        name: "license"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     
 return fs.writeFile(`./output/${fileName}`, data, (err)=>
  err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
            .then((answers)=> {
                console.log('Generating README..');
                writeToFile('README.md',generateMarkdown(answers));
                
            })
}

// Function call to initialize app
init();
