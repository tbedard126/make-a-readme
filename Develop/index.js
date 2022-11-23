// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Description',
        name: 'languages',
    },
    {
        type: 'input',
        message: 'installation instructions',
        name: 'communication',
    },
    {
        type: 'input',
        message: 'usage information',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },

];

inquirer
    .prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
