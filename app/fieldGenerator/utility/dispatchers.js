/* 
    A middleware between the fieldGenerator and the generator of each individual
    components that builds the field.

    Exposes a dispatcher for each of the 
        {name,type,rule,validate} generator.
*/

const nameGenerator = require('../nameGenerator/nameGenerator');
const { textTypeGenerator, numberTypeGenerator, enumerationTypeGenerator } = require('../typeGenerator/typeGenerator');
const ruleGenerator = require('../ruleGenerator/ruleGenerator');
const validatorGenerator = require('../validatorGenerator/validatorGenerator');



module.exports = {
    nameDispatcher: function(fieldName) {
        return nameGenerator(fieldName);
    },

    typeDispatcher: function(fieldName,fieldProperties) {
        
        if (fieldProperties.type === 'text' ) {

            return Object.assign({},
                textTypeGenerator(),
                validatorGenerator(fieldName,fieldProperties.type));

        } 
        
        if (fieldProperties.type === 'number') {
        
            return Object.assign({},
                numberTypeGenerator(),
                validatorGenerator(fieldName,fieldProperties.type));
        
        }

        if (fieldProperties.type === 'enumeration') {
        
            return Object.assign({},
                enumerationTypeGenerator(fieldProperties.values));
        
        } 
        
    },

    ruleDispatcher: function(ruleProperties) {
        return (
            ruleGenerator(
                ruleProperties.obj,
                ruleProperties.criteria[0],
                ruleProperties.criteria[1])
        );
    }
}