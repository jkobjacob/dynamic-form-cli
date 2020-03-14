const textTypeGenerator = require('./textTypeGenerator');

describe('TextTypeGenerator being tested', () => {
    test('does it return an object with a type field',() => {
        expect(Object.keys(textTypeGenerator()).includes('type',0)).toBe(true);
    });

    test('does the type field has value text',() => {
        expect(textTypeGenerator().type).toEqual("text");
    });
});