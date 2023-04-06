// Creates a variable containing a license badge/link to further info based on the user's choice. Added line breaks between cases for readability (it's a lot, I know).
function createLicenseBadge({ license }) {
  var licenseBadge = '';

  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'GNU General Public License v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;

    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;

    case 'Boost Software License 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;

    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;

    case 'Eclipse Public License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;

    case 'GNU General Public License v2.0':
      licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;

    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;

    case 'The Unlicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;

    default: console.log('No valid license selected.')
  };
  return licenseBadge;
};

// Generates a professional README template filled in with the user's answers.
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

  Github: ${github}
  Email: ${email}`;

  // Makes both of the above functions available for use by index.js.
  module.exports = {
    generateMarkdown,
    createLicenseBadge
  };  