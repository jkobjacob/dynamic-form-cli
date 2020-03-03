/* 
    rules to be employed by the ruleGenerator
*/

function equals(val1) {
    return function(val2) {
        return val1 === val2;
    }
}

module.exports = {
    equals: equals
}