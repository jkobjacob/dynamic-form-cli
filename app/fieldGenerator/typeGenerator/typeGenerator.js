/* 
    Generates a type field for the form fields
    type: {"text","number","list"}
*/

module.exports = {
    // simple types such as text and number.
    generateSimpleType: function(data) {
        if(data !== 'number') {
            return {
                type: data
            }
        } else {
            return {
                type: 'input'
            }
        }
    },

    // complex types such as list of simple types where the user selects one. 
    generateComplexType: function(data,options) {
        return {
            type: data,
            choices: options
        }
    }
}