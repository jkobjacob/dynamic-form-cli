/* 
    Generates the validate field and the validator function
*/

// checks for an empty response, displays the error string and prompts for new input

function doValidate(fieldName,acceptedInput) {
    if(acceptedInput === 'text') {
        return isEmptyField(fieldName);
    } else {
        return isNaNField(fieldName);
    }
}

function isEmptyField(fieldName) {
    return function(providedInput) {
        if(providedInput === '') {
            return `${fieldName} can't be empty`;
        } else {
            return true;
        }
    }
}

function isNaNField(fieldName) {
    return function(providedInput) {
        if(isNaN(providedInput) || (providedInput === '')) {
            return `${fieldName} must be a number. Please delete your response and provide a number`; 
        } else {
            return true;
        }
    }
}

module.exports = (fieldName,accepetedInputType) => {
    return {
        validate: (userInput,inputsAcceptedSoFar) => doValidate(fieldName,accepetedInputType)(userInput)
    }
}