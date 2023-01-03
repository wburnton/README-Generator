// TODO: Include packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');  
const generateReadMe = ({ title, description, instructions, usage, contribution, test, license, github, email}) => 
`# ${title} 

${licenseBadge(license)}
## Description 

${description} 

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license) 
- [Test](#test) 
- [Questions](#questions)

## Installation

${instructions}
## Usage

${usage}

## Credits

${contribution} 

## Tests 

${test}

## License

${license}

## Badges

## Questions 

${github} 
${email};`

function licenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
};
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
};


// TODO: Create an array of questions for user input 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'What are the instructions for installation of your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter information on the usage of your project',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter the contribution guidelines',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the test instructions for your project.', 
    }, 
    {
        type: 'multi-choice',
        name: 'license',
        message: 'Choose license for project.', 
        choices: ['MIT', 'Apache License', 'GNU General Public License', 'Boost Software License', 'The Unlicense' ]
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username', 
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?', 
    },
  ])
  .then((answers) => { 
    const readmePageContent = generateReadMe(answers); 
  
    fs.writeFile('README2.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!'));
});
const questions = []; 

// TODO: Create a function to write README file 



function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
