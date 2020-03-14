const generatePartialRule = require('./generatePartialRule');

describe('module to generate a partially evaluated rule', () => {
    test('Is the returned value a function', () => {
        expect(typeof generatePartialRule).toBe('function');
    });

    test('does the function has its argument initialized properly', () => {
        expect(generatePartialRule('isEqual','sherin')('sherin')).toBe(true);
    });
})