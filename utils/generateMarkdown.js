// function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if(license!= 'None'){
   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    
  } else{
    return '';
}};

//  function that returns the license link

function renderLicenseLink(license) {
  if(license!= 'None'){
    return `[License](#License)`
   } else{
     return '';
 }};
  


//  function that returns the license section of README

function renderLicenseSection(license) {
  if(license!= 'None'){
    return `
     This project is licensed under ${license} license.`
    
    
   } else{
     return '';
 }};



//  function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github License]${renderLicenseBadge(data.license)}

  
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Questions](#questions)


## User Story
${data.userstory}

## Installation
To install necessary dependencies, run the following command : 
<pre><code>${data.installation}</code></pre>

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
 

## Contributors
${data.contributors}




## Questions
* If you have any questions about the repo, 
  you can email me at ${data.email}. 
* You can find more of my work at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
