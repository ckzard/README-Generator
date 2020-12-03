// array of questions for user
const questions = [
    {
        type : "input",
        name : "title",
        message : "What is the name of your project?",
    },
    {
        type: "input",
        name : "description",
        message : "Please provide a description of the project: ",

    },
    {
        type: "input",
        name : "installation",
        message : "Enter any installation instructions: ",
    },
    {
        type: "input",
        name : "usage",
        message : "Enter details regarding usage of your project: ",

    },
    {
        type: "list",
        name : "license",
        message : "Please enter the license for your project: ",
        choices : ["MIT", "APACHE", "IBM", "None"],      
    },

    {
        type: "input",
        name : "contributing",
        message : "Enter the Github usernames of contributors to the projects: ",

    },
    {
        type: "input",
        name : "tests",
        message : "What commands should be run to test application: ",

    },
    {
        type: "input",
        name : "questions",
        message : "Please enter your email address: ",

    },
];
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")
//grabbing markdown generating function

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    //ask user questions, then take response and pass it into write to file with...
    .then((response) => 
        //gives name of file we want to write to
        writeToFile("generated/gen.md", generateMarkdown(response))
    );
    
}

// function call to initialize program
init();
