/* 
    A middleware between the fieldGenerator and the generator of each individual
    components that builds the field.

    Exposes a dispatcher for each of the 
        {name,type,rule,validate} generator.
*/

const nameGenerator = require('../nameGenerator/nameGenerator');
const { generateSimpleType, generateComplexType } = require('../typeGenerator/typeGenerator');
const ruleGenerator = require('../ruleGenerator/ruleGenerator');
const validatorGenerator = require('../validatorGenerator/validatorGenerator');



module.exports = {
    nameDispatcher: function(value) {
        return nameGenerator(value);
    },

    typeDispatcher: function(field,props) {
        if (props.type === 'simple') {
            return Object.assign({},generateSimpleType(props.input),validatorGenerator(field,props.input));
        } else {
            return generateComplexType(props.input,props.values);
        }
    },

    ruleDispatcher: function(ruleProps) {
        return ruleGenerator(ruleProps.obj,ruleProps.criteria[0],ruleProps.criteria[1]);
    }

}