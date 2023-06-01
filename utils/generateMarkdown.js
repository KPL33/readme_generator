//Here, we create a function that 'switch'es the 'license' badge that will display in the 'README', based on which 'license' ('case') is selected by the user.
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Eclipse': 
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    default:
      return 'None'
  }
}


//Here, we declare a 'function' that 'generate's 'markdown' language for the 'README', based on the user's 'responses'. We have also styled the content, via built-in markdown elements.
function generateMarkdown(responses) {
  const title = `<span style="color: yellow;">***${responses.title}***</span>`;
  return `# ${title}

  ## Description
  ${responses.description}

  ## Installation
  ${responses.installation}

  ## Usage
  ${responses.usage}

  ## License
  ${renderLicenseBadge(responses.license)}

  ## Contributing
  ${responses.contributing}

  ## Tests
  ${responses.tests}

  ## GitHub
  ${responses.github}

  ## Email
  ${responses.email}

`;
}

module.exports = generateMarkdown;
