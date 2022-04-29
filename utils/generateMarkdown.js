// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!= 'None'){
   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
    
  } else{
    return '';
}};

// TODO: Create a function that returns the license link
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
     This project is licensed under ${license} license.
    
    `
   } else{
     return '';
 }};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
## Expected Goals

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Steps taken

* I have created an API key to access the openweathermap API which will give me the current weather conditions of a city.
* As a valid city is searched, its temperature,humidity,uv index,wind speed, 5day forecast will be dynamically added on the cards on dashboard.
* Local storage is used to store the searched cities, which are also displaying in the list.


## License
${renderLicenseBadge(data.license)}

## Screenshots

![weather dashboard](./assets/images/Screenshot-1.png)

## Deployed Application

https://bhavnao.github.io/Weather-Dashboard/

`;
}

module.exports = generateMarkdown;
