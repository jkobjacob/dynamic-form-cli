/* 
    Generates the dependent field prompts
*/

const { nameDispatcher, typeDispatcher, ruleDispatcher } = require('./utility/dispatchers');

/* 
    @returns {
        name: {string}, => The field name prompted in the cli. 
        type: {string}, => The type of input.
        validate: {function}, => The validator to validate empty inputs.
        when: {function} => The function to conditionally prompt the field, when rule satisfied.
    }
*/

module.exports = (fieldName,fieldProperties) => {
    return Object.assign({},
        nameDispatcher(fieldName),
        typeDispatcher(fieldName,fieldProperties),
        ruleDispatcher(fieldProperties["rule"])
    );
}