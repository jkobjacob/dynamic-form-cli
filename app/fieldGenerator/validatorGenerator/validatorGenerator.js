/* 
    Generates the validate field and the validator function
*/

// checks for an empty response, displays the error string and prompts for new input

function validator(field,inputType) {
    if(inputType === 'text') {
        return isEmptyField(field);
    } else {
        return isNaNField(field);
    }
}

function isEmptyField(field) {
    return function(ip) {
        if(ip === '') {
            return `${field} can't be empty`;
        } else {
            return true;
        }
    }
}

function isNaNField(field) {
    return function(ip) {
        if(isNaN(ip) || (ip === '')) {
            return `${field} must be a number. Please delete your response and provide a number`; 
        } else {
            return true;
        }
    }
}

module.exports = (field,inputType) => {
    return {
        validate: (ip,ans) => validator(field,inputType)(ip)
    }
}