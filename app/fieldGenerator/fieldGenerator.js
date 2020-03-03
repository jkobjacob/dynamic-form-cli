/* 
** single interface exposing the available field generators
*/

module.exports = {
    defaultFieldGenerator: require('./defaultFieldGenerator'),
    dependentFieldGenerator: require('./dependentFieldGenerator')
}