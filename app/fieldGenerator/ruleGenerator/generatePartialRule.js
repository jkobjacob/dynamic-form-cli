const rules = require('./rules');

/* 
    input : "isEqual" , "Cancelled"
    produces an isEqual function with its first value applied to "Cancelled",
    upon receiving the user input, the function is evaluated to return a boolean.
*/

module.exports = (condition,value) => {
    return (rules[condition])(value);
}