// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the name of your application:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief summary description of your app:',
    },
    {
        type: 'input',
        name: 'description1',
        message: 'What was your motiviation for creating this application?',
      },
      {
        type: 'input',
        name: 'description2',
        message: 'Why did you build this application?',
      },
      {
        type: 'input',
        name: 'description3',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'description4',
        message: 'What did you learn from this application?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application:',
      },
      {
        type: 'input',
        name: 'dependency',
        message: 'Please provide dependencies for your application:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your application:',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please provide names of application contributors seperated by commas:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test methods for your application:',
      },
      {
        type: 'checkbox',
        message: 'What technologies were used in your application?',
        name: 'technologies',
        choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', "JQuery UI", "JQuery", "Node", "SQL"],
      },
    {
      type: 'list',
      message: 'What licensing method would you like to use for your application?',
      name: 'license',
      choices: ['APM', 'MIT', 'GitHub', 'Packagist'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'preferredcontact',
      choices: ['email', 'GitHub', 'telekinesis'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:',
      },
  ]

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => {
        if(err) throw err;
        else console.log("README file creation succesful.");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README", answers);
    });
   
}
// Function call to initialize app
init();