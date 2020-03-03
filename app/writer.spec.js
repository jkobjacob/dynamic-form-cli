jest.mock('./writer');
const writer = require('./writer');

describe('=> Writer being mocked',() => {
    test('should write responses to a json file named responses.json',() => {
        const resp = {
            createdBy: 'sherin',
            description: 'none',
            severity: 2,
            status: 'Completed',
            comments: 'none'
        };
        writer.mockImplementation((resp) => {
            console.log(`${JSON.stringify(resp)} written to responses.json`);
        });
        expect(writer(resp)).toBe();
    });
});