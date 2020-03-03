const defaultFieldGenerator = require('./defaultFieldGenerator');

var simpleTestObject;
var complexTestObject;

var simpleObjFn;
var complexObjFn;

var simpleObjFnKeys;
var complexObjFnKeys;

beforeAll(() => {
    simpleTestObject = {
        "createdBy": {
            "type":"simple",
            "state":"default",
            "input": "text"
        }
    };

    complexTestObject = {
        "status": {
            "type":"complex",
            "state":"default",
            "input": "list",
            "values":["EndUser","Others"]
        }
    };

    simpleObjFn = defaultFieldGenerator("createdBy",simpleTestObject["createdBy"]);
    complexObjFn = defaultFieldGenerator("status",complexTestObject["status"]);

    simpleObjFnKeys = Object.keys(simpleObjFn);
    complexObjFnKeys = Object.keys(complexObjFn);

});

describe('=> defaultFieldGenerator being tested', ()=> {

    test('does it export a function', () => {
        expect(typeof defaultFieldGenerator).toBe('function')
    });

    describe('=> simple default generated field being tested', () => {

        test('is provided properties present in the generated field', () => {
            expect(simpleObjFnKeys).toEqual(['name','type','validate']);
        });

        test('is the name property injected with the right value', () => {
            expect(simpleObjFn.name).toEqual("createdBy")
        });

        test('is the type property injected with the right value', () => {
            expect(simpleObjFn.type).toEqual("text")
        });
        
    });

    describe('=> complex default generated field being tested', () => {

        test('is provided properties present in the generated field', () => {
            expect(complexObjFnKeys).toEqual(['name','type','choices']);
        });
        
        test('is the name property injected with the right value', () => {
            expect(complexObjFn.name).toEqual("status")
        });
        
        test('is the type property injected with the right value', () => {
            expect(complexObjFn.type).toEqual("list")
        });
        
        test('is the choices property injected with the right value', () => {
            expect(complexObjFn.choices).toEqual(["EndUser","Others"])
        });
    });
});