// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, tests, contributing, license, github, email }) =>
  `# ${title}

  ## Description

  ${description}
  
  ## Table of Contents
  
  - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Tests](#tests)
    - [Contributing](#contributing)
    - [License](#license)
    - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}

  ## Tests

  ${tests}

  ## Contributing

  ${contributing}

  ## License

  This project is licensed under ${license}.

  ## Questions

  ${github}
  ${email}`;

module.exports = generateMarkdown;
