const validator = require('./validatorGenerator');

var testFunction;
var testFunction2;

beforeAll(() => {
    let testObject = {
        "createdBy": "",
        "type":"text"
    };

    testFunction = validator("createdBy","text");
    testFunction2 = validator("severity","number");
});

describe('=> InputValidator being tested', () => {

    test('does it validate a text input', () => {
        expect(testFunction.validate('hi')).toBe(true)
    });

    test('does it validates the field being empty',() => {
        expect(testFunction.validate('')).toBe("createdBy can't be empty")
    });

    test('does it validate an empty input', () => {
        expect(testFunction2.validate('')).toBe("severity must be a number. Please delete your response and provide a number")
    });

    test('does it validate an invalid number', () => {
        expect(testFunction2.validate('e')).toBe("severity must be a number. Please delete your response and provide a number")
    });

    test('does it validate a number', () => {
        expect(testFunction2.validate('2')).toBe(true)
    });
})