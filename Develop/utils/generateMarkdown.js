// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // selects the license link for the selected license
  switch (license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data);
  // renderLicenseLink(licenseLink)
  return `# ${data.title}
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

            
## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)

## Description:
${data.description}          


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

  ${data.license}
  
  
  `;


}



module.exports = generateMarkdown;
