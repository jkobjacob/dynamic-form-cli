const { defaultFormFieldsGenerator, dependentFormFieldsGenerator } = require('./formGenerator/formGenerator');
const prompter = require('./prompter');

function getFieldNames(obj) {
    return Object.keys(obj);
}

module.exports = (jsonFormData) => {
    const formForDefaultFields = defaultFormFieldsGenerator(getFieldNames(jsonFormData["default"]),jsonFormData["default"]);
    const formForDependentFields = dependentFormFieldsGenerator(getFieldNames(jsonFormData["dependent"]),jsonFormData["dependent"]);
    return prompter(formForDefaultFields.concat(formForDependentFields));
}