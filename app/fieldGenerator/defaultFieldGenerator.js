/* 
*   Generates the prompt object for the default field
*/

const { nameDispatcher, typeDispatcher } = require('./utility/dispatchers');

/* 
    @returns {
        name: {string}, => The field name prompted in the cli. 
        type: {string}, => The type of input.
        validate: {function} => The validator to validate empty inputs.
    }
*/

module.exports = (field,fieldProps) => {
    return Object.assign({},
        nameDispatcher(field),
        typeDispatcher(field,fieldProps));
}
