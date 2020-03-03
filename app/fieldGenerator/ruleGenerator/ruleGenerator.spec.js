const ruleGenerator = require('./ruleGenerator');

var testObject;
var value;

beforeAll(() => {
    testObject = {"createdBy":"sherin"};
    value = ruleGenerator('createdBy','equals','sherin');
});

describe('RuleGenerator Being Tested',() => {
    
    test('is RuleGenerator a function', () => {
        expect(typeof(ruleGenerator)).toBe('function')
    });
    
    test('is "when" present in the return value',() => {
        expect(Object.keys(value)).toEqual(['when'])
    });

    test('is "when" a function',() => {
        expect(typeof(value.when)).toBe('function')
    });

    test('Does the when function return true for {"createdBy": "sherin"}',() => {
        expect(value.when({"createdBy":"sherin"})).toBe(true);
    });

    test('Does the when function return false for {"createdBy":"Jacob"}',() => {
        expect(value.when({"createdBy":"Jacob"})).toBe(false);
    });
});