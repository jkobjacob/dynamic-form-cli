const typeGenerator = require('./typeGenerator')

var exportedObj;

beforeAll(() => {

    exportedObj = Object.keys(typeGenerator);

});

describe('=> TypeGenerator being tested', () => {

    test('does typeGenerator export three generators',() => {
        expect(exportedObj.length).toBe(3)
    });

    test('does the export include a textTypeGeneratorr',() => {
        expect(exportedObj.includes('textTypeGenerator',0)).toBe(true)
    });

    test('does the export include a numberTypeGenerator',() => {
        expect(exportedObj.includes('numberTypeGenerator',0)).toBe(true)
    });

    test('does the export include a enumerationTypeGenerator',() => {
        expect(exportedObj.includes('enumerationTypeGenerator',0)).toBe(true)
    });


});