const nameGenerator = require('./nameGenerator');

var nameGen;
var value;

beforeAll(() => {
    value = 'description'
    nameGen = nameGenerator(value);
});

describe('=> nameGenerator being tested', () => {

    test('is the module exporting a function', () => {
        expect(typeof nameGenerator).toBe('function');
    });

    test('is the function returning an object',() => {
        expect(typeof nameGen).toBe('object');
    });

    test('does the object contain a "name" field', () => {
        expect(Object.keys(nameGen)).toEqual(['name']);
    });

    test('does the name field contain the right value provided', () => {
        expect(nameGen.name).toBe(value);
    });

})