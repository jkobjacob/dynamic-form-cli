const fieldGenerator = require('./fieldGenerator');

describe('=> FieldGenerator being tested', () => {

    test('does it export two functions',() => {
        expect(Object.keys(fieldGenerator).length).toBe(2)
    });

    test('does a function exist for generating default fields',() => {
        expect(Object.keys(fieldGenerator).includes('defaultFieldGenerator',0)).toBe(true)
    });

    test('does a function exist for generating dependent fields',() => {
        expect(Object.keys(fieldGenerator).includes('dependentFieldGenerator',0)).toBe(true)
    });
})