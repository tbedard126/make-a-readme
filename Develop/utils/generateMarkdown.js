// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
## ${data.description}
            
## Table of Contents:
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
4. [Questions](#questions)
6. [License](#license)

## Title:
${data.title}
            
## Installation:
${data.installation}
            
## Usage:
${data.usage}
            
## Contributing:
${data.contributing}
            
## Tests:
${data.tests}
    
## Questions:
Email: ${data.email}
\n
GitHub: 
[${data.github}](https://github.com/${data.github})
\n
${data.questions}
## License:
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)
  `;
}



module.exports = generateMarkdown;
