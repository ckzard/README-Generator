// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Your username is : ${data.username}


`;
}

module.exports = generateMarkdown;
