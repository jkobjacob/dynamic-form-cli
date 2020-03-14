const enumerationTypeGenerator = require('./enumerationTypeGenerator');

describe('EnumerationTypeGenerator being tested', () => {
    test('does it return an object with a type field',() => {
        expect(Object.keys(enumerationTypeGenerator()).includes('type',0)).toBe(true);
    });

    test('does it return an object with a choices field',() => {
        expect(Object.keys(enumerationTypeGenerator()).includes('choices',0)).toBe(true);
    });

    test('does the type field has value input',() => {
        expect(enumerationTypeGenerator().type).toEqual("list");
    });
});