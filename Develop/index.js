

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//write README file
const writeReadME = util.promisify(fs.writeFile);

//Accesses generateMarkdown file 
const generateMarkdown = require("./utils/generateMarkdown.js");

// function that asks users questions
let promptUser = () => {
    return inquirer.prompt(questions);
}

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What should the title of this README be?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the README"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you use this application for?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any tests for this application? If so please describe them here.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter how you would perferred to be contacted here.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
    {
        type: 'list',
        choices: [
            "MIT",
            "GPL",
            "APACHE"
        ],
        name: 'license',
        message: 'Please select a license for your project:'
    }
];

// function to initialize program
async function init() {
    try {
        const answer = await promptUser();
        console.log(answer);


        const readMe = generateMarkdown(answer);

        writeReadME("README-Test.md", readMe).then(function () {
            console.log("successfully created README.md file! yay!");
        });
    }
    catch (err) {
        console.log(err);
    }

}

init();