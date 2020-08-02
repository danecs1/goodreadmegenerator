const inquirer = require('inquirer');
const fs = require('fs');

const fileName = 'README.md';

const questions = [
    //ask for title of the app
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of this project? '
    },

    //ask user for description
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of this project? '
    },

    //Contents
    {
        type: 'input',
        name: 'Contents',
        message: 'Are there contents for this project?'
    },
    //Installation
    {
        type: 'input',
        name: 'Installation',
        message: 'How does a user install your application? Provide instuctions here',
    },
    //Usage
    {
        type: 'input',
        name: 'Usage',
        message: 'How should this project be used? '
    },
    //License
    {
        type: 'input',
        name: 'License',
        message: 'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" '
    },
    //Contributing
    {
        type: 'input',
        name: 'Contributors',
        message: 'Enter comma separated name(s) of contibutors and if there are none type none'
    },
    //Tests
    {
        type: 'input',
        name: 'Test',
        message: 'How should tests be ran(if there are no test commands type none)? '
    },
    //Questions
    {
        type: 'input',
        name: 'Questions',
        message: 'Any questions should be forwarded to(supply an email)'
    },
];

function main() {
    inquirer.prompt(questions).then((response) => {
        // Goo readme generator
        fs.appendFile(fileName, ("# " + response.Title) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        // This project creates a readme
        fs.appendFile(fileName, ("## Project Description" + response.Description) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        //This project shows how to geneate a readme
        fs.appendFile(fileName, ("## Contents" + response.Contents) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        // git clone, npm install and node index
        fs.appendFile(fileName, ("## Installation" + '\n' + response.Installation) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        // node index
        fs.appendFile(fileName, ("## How to use the app" + '\n' + response.Usage) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        /**
         * [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
         */
        fs.appendFile(fileName, ("## License(s)" + '\n' + response.License) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        // (none)
        fs.appendFile(fileName, ("## Other Contibuting Developers:" + '\n' + response.Contributing) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        //none
        fs.appendFile(fileName, ("## How to run tests:" + '\n' + response.Tests) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

        //email
        fs.appendFile(fileName, ("## Any questions can be forwarded to:" + response.Questions) + '\n', (err) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log('success');
        })

    })
}

main();