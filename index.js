const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, createLicenseBadge } = require('./utils/generateMarkdown');

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidlines for your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Under which license would you like to publish this project?',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((data) => {
    const licenseBadge = createLicenseBadge(data);
    
    const readmeContent = generateMarkdown(data, licenseBadge);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    );
});