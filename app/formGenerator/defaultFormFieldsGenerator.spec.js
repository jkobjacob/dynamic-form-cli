const defaultFormFieldsGenerator = require('./defaultFormFieldsGenerator');
const form = require('../../form.json');

var defaultObjs;
var defaultFields;
var createdBy;
var status;

beforeAll(() => {
    defaultObjs = form['default'];
    defaultFields = Object.keys(defaultObjs); 
    createdBy = (defaultFormFieldsGenerator(['createdBy'],defaultObjs))[0];
    status = (defaultFormFieldsGenerator(['status'],defaultObjs))[0];
});

describe('Form Generator for default fields being tested', () => {

    test('does the returned object contains a name property', () => {
        expect(Object.keys(createdBy).includes('name',0)).toBe(true);
    });

    test('does the returned object contains a type property', () => {
        expect(Object.keys(createdBy).includes('type',0)).toBe(true);
    });

    test('does the returned object contains a validate property', () => {
        expect(Object.keys(createdBy).includes('validate',0)).toBe(true);
    });

    test('does the returned object contains a choices property', () => {
        expect(Object.keys(status).includes('choices',0)).toBe(true);
    });

    test('does it return a form object for every given field',() => {
        expect(defaultFormFieldsGenerator(defaultFields,defaultObjs).length).toBe(4);
    })
})