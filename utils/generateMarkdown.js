// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License Badge](https://img.shields.io/badge/${license.toLowerCase()}-license-blue)`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `Click [here](https://choosealicense.com/licenses/${license.toLowerCase()}) for ${license} license information`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## Licenses:

${renderLicenseBadge(license)}
${renderLicenseLink(license)}
` || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
          
## Description:

Summary: - ${data.description}.
Motivation: - ${data.description1}.
Reason for Application: - ${data.description2}.
Problem Solved: - ${data.description3}.
Lessons: - ${data.description4}.

## Table of Contents:
- [${data.title}](#${data.title})
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Licenses](#licenses)
  5. [Tests](#tests)
  6. [Technologies](#technologies)
  7. [Questions](#questions)
  8. [Screenshot](#screenshot)

## Installation: 

${data.installation}.

## Dependencies:

This application requires: ${data.dependency}.

## Usage: 

${data.usage}

## Contributing:

[${data.contributors}](https://www.github.com/${data.github.toLowerCase()})

${renderLicenseSection(data.license)}

## Tests:

${data.tests}

## Technologies Used: 

This application uses the following technologies: ${data.technologies.join(', ')}.

## Questions:

Github: https://www.github.com/${data.github.toLowerCase()}
Email: ${data.email.toLowerCase()}.

Please feel free to contact me with further questions via ${data.preferredcontact}, which is my preferred method.

## Screenshot


`;
}

module.exports = {generateMarkdown};