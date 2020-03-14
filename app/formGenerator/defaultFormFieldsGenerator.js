const { defaultFieldGenerator } = require('../fieldGenerator/fieldGenerator');

module.exports = (fieldTitles, fieldTitlesProperties) => {
    return fieldTitles.map(fieldTitle => defaultFieldGenerator(fieldTitle,fieldTitlesProperties[fieldTitle]));
}