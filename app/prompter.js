const inquirer = require('inquirer');

/* 
** prompts each individual form field
** accepts user inputs
** validates whether a field is empty
** feed the user responses object to the writer   
*/

module.exports = (arrayOfPromptObjects) => {
    const responses = inquirer
                        .prompt(arrayOfPromptObjects);
    return responses;
};