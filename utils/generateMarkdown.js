// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!= 'None'){
   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    
  } else{
    return '';
}};

//  function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!= 'None'){
    return `[License](#License)`
   } else{
     return '';
 }};
  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!= 'None'){
    return `## License
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

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## User Story
${data.user-story}

# Installation
To install necessary dependencies, run the following command : 
<pre><code>${data.installation}</code></pre>

# Usage
${data.usage}

# License
${renderLicenseSection()}
 This application is made under ${data.license} License.

# Contributors
${data.contributors}


## License
${renderLicenseBadge(data.license)}

## Questions
* If you have any questions about the repo, 
[open an issue](https://github.com/${data.github}/${data.title}/issues/new) 
or contact me directly at ${data.email}. 
* You can find more of my work at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
