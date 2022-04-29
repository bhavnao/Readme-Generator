// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
},{
    type: "input",
        message: "What is your Github username?",
        name: "Github"
},{
    type: "input",
        message: "What is your email address?",
        name: "Email"
},{
    type: "input",
    message: "What is the description of the project?",
    name: "Description"
}, {
    type: "input",
        message: "Table of Contents",
        name: "Table of Contents"
},{
    type: "input",
        message: "What is the User Story?",
        name: "User"
},{ 
    type: "input",
        message: "What are the installation instructions?",
        name: "Installation"
},{
    type: "input",
        message: "Are there any other contributors for this project?",
        name: "Contributors"
},{
    type: "input",
        message: "What command should be run for testing?",
        name: "Testing"
},{
    type: "input",
        message: "What liscenses should your project have?",
        choices: ['MIT', 'GPL', 'APACHE', 'None'], 
        name: "License"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
