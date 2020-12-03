// function to generate markdown for README
function generateMarkdown(data) {
  
    if (data.license == "MIT") {
      badgeLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.license == "APACHE") {
      badgeLicense =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (data.license == "IBM") {
      badgeLicense =  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"; 
    }

  return `# ${data.title}

  ${badgeLicense}

  ## Description 
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  and so forth

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  This project is licensed under ${data.license}, click the badge to learn more.

  ## Contributing:
  [${data.contributing}](https://www.github.com/${data.contributing})

  ## Questions
  For any questions regarding this project please email me at:
  ${data.questions}

`;
}

module.exports = generateMarkdown;
