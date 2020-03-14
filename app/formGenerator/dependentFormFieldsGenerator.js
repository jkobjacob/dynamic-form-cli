const { dependentFieldGenerator } = require('../fieldGenerator/fieldGenerator');

module.exports = (fieldTitles, fieldTitlesProperties) => {
    return fieldTitles.map(fieldTitle => dependentFieldGenerator(fieldTitle,fieldTitlesProperties[fieldTitle]));
}