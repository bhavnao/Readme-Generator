// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//  Create an array of questions for user input
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
},{
    type: "input",
    message: "What is the User Story?",
    name: "userstory"
},{ 
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
    default: 'npm i'
},{ 
    type: "input",
    message: "What is the usage?",
    name: "usage"
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
    choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'None'], 
    name: "license"
}];

//  Create a function to write README file
function writeToFile(fileName, data) {
     
  fs.writeFile(`./output/${fileName}`,data, (err)=>
  err ? console.log(err) : console.log('Success!'));

  
}

//  Create a function to initialize app
function init() {
    inquirer.prompt(questions)
            .then((answers)=> {
                console.log('Generating README..');
                writeToFile('README.md',generateMarkdown(answers));
                
            }).catch(function(err){
                console.log(err);
            });
}

// Function call to initialize app
init();
