const inquirer = require('inquirer');

/* 
** prompts each individual form field
** accepts user inputs
** validates whether a field is empty
** feed the user responses object to the writer   
*/

module.exports = (promptsArray) => {
    return inquirer
        .prompt(promptsArray)
};