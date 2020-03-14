const numberTypeGenerator = require('./numberTypeGenerator');

describe('NumberTypeGenerator being tested', () => {
    test('does it return an object with a type field',() => {
        expect(Object.keys(numberTypeGenerator()).includes('type',0)).toBe(true);
    });

    test('does the type field has value input',() => {
        expect(numberTypeGenerator().type).toEqual("input");
    });
});