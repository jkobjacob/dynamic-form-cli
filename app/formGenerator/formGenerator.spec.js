const formGenerator = require('./formGenerator');
const form = require('../../form.json');

var prompts;

beforeAll(() => {
    prompts = formGenerator(Object.keys(form),form);
});


describe('=> FormGenerator being tested',() => {

    test('is there a prompt object generated for every form field',() => {
        expect(prompts.length).toBe(7)
    });
});

