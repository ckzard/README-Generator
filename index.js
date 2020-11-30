// array of questions for user
const questions = [
    {
        type : "input",
        name : "title",
        message : "What is the name of your project?",
    },
    {
        type: "input",
        name : "username",
        message : "What is your name?",

    },
];
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => 
        writeToFile("README.md", generateMarkdown(response))
    );
    
}

// function call to initialize program
init();
