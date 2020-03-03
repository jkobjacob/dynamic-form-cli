const rules = require('./rules');

var equalToTwo;

beforeAll(() => {
    equalToTwo = rules.equals(2);
});

describe('=> rules module being tested\n', () =>{

    test('is the equal function exported', () =>{
        expect(Object.keys(rules)).toEqual(['equals'])
    });

    test('is the equal function returning a curried function\n',() => {
        expect(typeof equalToTwo).toBe('function')
    });

    describe('=> testing the equals function\n', () => {
        test('is two equals two',() => {
            expect(equalToTwo(2)).toBe(true)
        });
    });
});