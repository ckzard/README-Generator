// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  and so forth

  ## Installation:
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credits}

`;
}

module.exports = generateMarkdown;
