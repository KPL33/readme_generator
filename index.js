// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //this prompts
const fs = require('fs'); //this writes the files

// const generateREADME  = ({ description, toc, installation, usage, license, contributing, tests, questions }) => 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please give your project a title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know to use this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license(s) does your project include?',
        choices: ["MIT", "Apache", "Eclipse", "None"
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command does the user need to use, in order to run tests?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);
    console.log(responses); 

}

// Function call to initialize app
init();
