const dependentFormFieldsGenerator = require('./dependentFormFieldsGenerator');
const form = require('../../form.json');

var dependentObjs;
var dependentFields;
var cancelledReason;

beforeAll(() => {
    dependentObjs = form['dependent'];
    dependentFields = Object.keys(dependentObjs); 
    cancelledReason = (dependentFormFieldsGenerator(['cancelledReason'],dependentObjs))[0];
});

describe('Form Generator for dependent fields being tested', () => {

    test('does the returned object contains a name property', () => {
        expect(Object.keys(cancelledReason).includes('name',0)).toBe(true);
    });

    test('does the returned object contains a type property', () => {
        expect(Object.keys(cancelledReason).includes('type',0)).toBe(true);
    });

    test('does the returned object contains a when property', () => {
        expect(Object.keys(cancelledReason).includes('when',0)).toBe(true);
    });

    test('does the returned object contains a choices property', () => {
        expect(Object.keys(cancelledReason).includes('choices',0)).toBe(true);
    });

    test('does it return a form object for every given field',() => {
        expect(dependentFormFieldsGenerator(dependentFields,dependentObjs).length).toBe(3);
    });
})