// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = `![License Badge](https://shields.io/badge/license-${license}-green)`;
  }

  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
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
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let licenseSect = "";

//   // if a license has been selected, create License section
//   // with link to license information
//   if (license != "None") {
//     licenseSect += "## License\n"
//     licenseSect += `Please see${licenseLink}to get detailed information for this license\n`;
//   }

//   return licenseSect;
// }

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data);
  // renderLicenseLink(licenseLink)
  return `# ${data.title}
## ${data.description}
            
## Table of Contents:
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
4. [Questions](#questions)
6. [License](#license)

            
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
  ${data.license}
  
  
  `;


}



module.exports = generateMarkdown;
