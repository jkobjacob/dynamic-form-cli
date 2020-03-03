const typeGenerator = require('./typeGenerator')
const { generateSimpleType, generateComplexType } = typeGenerator;

var simpleType;
var complexType;
var simpleTypeGen;
var complexTypeGen;
var exportedObj;

beforeAll(() => {
    simpleType = {
        "input":"number"
    }
    complexType = {
        "input": "list",
        "choices": ["one","two"]
    } 


    exportedObj = Object.keys(typeGenerator);
    simpleTypeGen = generateSimpleType(simpleType.input);
    complexTypeGen = generateComplexType(complexType.input,complexType.choices);

});

describe('=> TypeGenerator being tested', () => {

    test('does typeGenerator export two generators',() => {
        expect(exportedObj.length).toBe(2)
    });

    test('does the export include a simple type generator',() => {
        expect(exportedObj.includes('generateSimpleType',0)).toBe(true)
    });

    test('does the export include a complex type generator',() => {
        expect(exportedObj.includes('generateComplexType',0)).toBe(true)
    });

    describe('=> Simple type generator being tested', () => {

        test('does it return an object with a type property',() => {
            expect(Object.keys(simpleTypeGen)).toEqual(['type'])
        });

        test('does the returned object contain the right test object value', () => {
            expect(simpleTypeGen.type).toEqual('input');
        });
    });

    describe('=> Complex type Generator being tested', () => {

        test('does the returned object includes a type and a choices property',() => {
            expect(Object.keys(complexTypeGen)).toEqual(['type','choices'])
        });

        test('does the returned object contain the right test object value', () => {
            expect(complexTypeGen).toEqual({
                "type":"list",
                "choices": ["one","two"]
            });
        });
        
    });
});