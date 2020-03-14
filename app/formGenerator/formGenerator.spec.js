const formGenerator = require('./formGenerator');


describe('=> FormGenerator being tested',() => {

    test('does it export a defaultFormFieldsGenerator',() => {
        expect(Object.keys(formGenerator).includes('defaultFormFieldsGenerator',0)).toBe(true);
    });

    
    test('does it export a dependentFormFieldsGenerator',() => {
        expect(Object.keys(formGenerator).includes('dependentFormFieldsGenerator',0)).toBe(true);
    });

    test('is the exported objects are both functions', () => {
        expect(Object.keys(formGenerator).filter(x => (typeof formGenerator[x]) === 'function').length).toBe(2);
    })
});

