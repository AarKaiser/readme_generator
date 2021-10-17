// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License Badge] (https://img.shields.io/badge/${license}-License-blue)`|| '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `Click [here] (https://choosealicense.com/licenses/${license}) for ${license} license information` || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## Licenses:

          ${renderLicenseBadge(license)}
          ${renderLicenseLink(license)}
  ` || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
          # ${data.title}
          
          ## Description:
              Motivation: - ${data.description1}.
              Reason for Application: - ${data.description2}.
              Problem Solved: - ${data.description3}.
              Lessons: - ${data.description4}.

          ## Table of Contents:

          1. [Installation] (https://github.com/AarKaiser/readme_generator#installation)
          2. [Usage] (https://github.com/AarKaiser/readme_generator#usage)
          3. [Contributing] (https://github.com/AarKaiser/readme_generator#contributing)
          4. [Licenses] (https://github.com/AarKaiser/readme_generator#licenses)
          5. [Tests] (https://github.com/AarKaiser/readme_generator#tests)
          6. [Technologies] (https://github.com/AarKaiser/readme_generator#technologies)
          7. [Questions] (https://github.com/AarKaiser/readme_generator#questions)
          8. [Screenshot] (https://github.com/AarKaiser/readme_generator#screenshot)

          ## Installation: 
          
          ${data.installation}.

          ## Dependencies:

          This application requires: ${data.dependency}.

          ## Usage: 
          
          ${data.usage}

          ## Contributing:

          ${data.contributors}

          ${renderLicenseSection(data.license)}

          ## Tests:

          ${data.tests}

          ## Technologies Used: 
          
            This application uses the following technologies: ${data.technologies.join(', ')}.

          ## Questions:

            Github: https://www.github.com/${data.github}
            Email: ${data.email}.
            
          Please feel free to contact me with further questions via ${data.preferredcontact}, which is my prefered method.

        ## Screenshot
`;
}

module.exports = {generateMarkdown};