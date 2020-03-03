/* 
    Responsible for generating the complete form prompt object.
*/


const { defaultFieldGenerator ,dependentFieldGenerator } = require('../fieldGenerator/fieldGenerator');

/* 
** dispatcher to dispatch the right generator based on the field state.
** possible states - {default, dependent}
*/

function fieldDispatcher(field,formData) {
    if (formData[field].state === 'default') {
        return defaultFieldGenerator(field,formData[field]);
    } else {
        return dependentFieldGenerator(field,formData[field]);
    }
}


module.exports = (formFields,formData) => {
    return formFields.map((field) => fieldDispatcher(field,formData));
}