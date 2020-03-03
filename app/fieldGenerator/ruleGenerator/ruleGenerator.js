/* 
    Generates the when object responsible for prompting dependent fields.
*/

const rules = require('./rules');

/* 
    function that checks 
    the condition with the user input and the value required to enable the field
*/
module.exports = (field,condition,value) => {
    return {
        when: (answer) => rules[condition](value)(answer[field]) 
    }
}