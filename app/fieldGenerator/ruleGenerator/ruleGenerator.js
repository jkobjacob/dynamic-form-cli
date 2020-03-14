/* 
    Generates the when object responsible for prompting dependent fields.
*/

const partialRuleGenerator = require('./generatePartialRule');

/* 
    function that checks 
    the condition with the user input and the value required to enable the field
*/
module.exports = (fieldName,condition,value) => {
    return {
        when: (providedInput) => (partialRuleGenerator(condition,value))(providedInput[fieldName]) 
    }
}