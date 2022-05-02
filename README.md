# Readme Generator
Node JS assignment
## Description
To create a dynamically generated README file by using a command-line application to generate one after getting user answers in Node JS.
## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
## Expected Goals

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
## Steps taken to achieve the goal

* Installed the node modules and then inquirer dependency in Json package.
* All the functionality is in generateMArkdown file where it creates the readme file using user answers.

## Installation
* To install the necessary node dependencies, run the command:  npm i.
* The application will be invoked with the command: node index.js.

## Usage
* Run commands listed in Installation.
* Running node index.js command will prompt user series of questions about project repository, and based on the answers 'README.md' file will be generated.


## Contributors
 NA

 ## License
  This application is covered under MIT License.
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Screenshots
![Readme Geerator](./images/Screenshot-1.png)


## Github profile
https://github.com/bhavnao/Readme-Generator

## Demo Video Link
https://drive.google.com/file/d/1lNNTdgNAz7QjPHt_2KH3ZsHpsaFJQ8SH/view?usp=sharing







