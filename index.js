// index.js
const inquirer = require('inquirer');
const { writeFile } = require('./lib/fileWriter');

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Questions
const questions = [
  { type: 'input', name: 'text', message: 'Enter up to 3 characters' },
  const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description for your project:'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Which shape would you like for the logo?',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color should the shape be?'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color should the text be?'
    },
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter the text for the logo (up to 3 characters):',
      validate: function(input) {
        return input.length <= 3;
      }
    }
  ];
  ];

// Initialize
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Create SVG and save to file
    writeFile('logo.svg', generateSVG(answers));
  });
}
