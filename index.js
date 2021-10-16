// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// Initializing Resources

const fs = require('fs');
const inquirer = require('inquirer');
const generate


// Initializing Program

function generateREADME() {

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name for your project readme file?',
    },
    {
        type: 'editor',
        name: 'name',
        message: 'Please provide a brief description of your project?',
      },
    {
      type: 'checkbox',
      message: 'What technologies were used in your project?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', "JQuery UI", "JQuery", "Node", "SQL"],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );npm
  });
}

generateREADME()


//Psuedo Code from Activities Review

// // Initialise FS
// const fs = require('fs');

//Get Inquirer
//const inquirer = require('inquirer');

//not needed
// // Declare variables
// const var1 = process.argv[3];
// const var2 = process.argv[3];

//not needed
// // Append File
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>  
//     err ? console.error(err) : console.log('Commit logged!')
// );

// // Write instead of Read file
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// Store Variables or Methods
// module.exports = {
//     pie,
//     predictable,
//   };

// // Switch Example
// switch (XoperationX) {
//     case 'sum':
//       console.log(maths.sum(numOne, numTwo));
//       break;
//     case 'difference':
//       console.log(maths.difference(numOne, numTwo));
//       break;
//     case 'product':
//       console.log(maths.product(numOne, numTwo));
//       break;
//     case 'quotient':
//       console.log(maths.quotient(numOne, numTwo));
//       break;
//     default:
//       console.log('Check your maths!');
//   }

// Sample interactive
// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
