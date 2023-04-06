function createLicenseBadge({ license }) {
  var licenseBadge = '';

  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default: console.log('No valid license selected.')
  };
  return licenseBadge;
};

const generateMarkdown = ({ title, description, installation, usage, tests, contributing, license, github, email }, licenseBadge) =>
  `# ${title}

  ${licenseBadge}

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

  module.exports = {
    generateMarkdown,
    createLicenseBadge
  };  