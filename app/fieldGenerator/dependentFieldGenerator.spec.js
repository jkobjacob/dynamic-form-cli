const dependentFieldGenerator = require('./dependentFieldGenerator');

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
        },

        "description": {
            "type":"simple",
            "state":"dependent",
            "input":"text",
            "rule": {
                "obj": "createdBy",
                "criteria": ["equals","sherin"]
            }
        }
    };

    complexTestObject = {
        "status": {
            "type":"complex",
            "state":"default",
            "input": "list",
            "values":["Pending","Others"]
        },

        "cancelledReason": {
            "type":"complex",
            "state":"dependent",
            "input":"list",
            "values": ["EndUser","Others"],
            "rule": {
                "obj": "status",
                "criteria": ["equals","Others"]
            }
        }
    };

    simpleObjFn = dependentFieldGenerator("description",simpleTestObject["description"]);
    complexObjFn = dependentFieldGenerator("cancelledReason",complexTestObject["cancelledReason"]);

    simpleObjFnKeys = Object.keys(simpleObjFn);
    complexObjFnKeys = Object.keys(complexObjFn);

});

describe('=> dependentFieldGenerator being tested', ()=> {

    test('does it export a function', () => {
        expect(typeof dependentFieldGenerator).toBe('function')
    });

    describe('=> simple dependent generated field being tested', () => {

        test('is the name property present in the generated field', () => {
            expect(simpleObjFnKeys.includes('name',0)).toBe(true);
        });

        test('is the type property present in the generated field', () => {
            expect(simpleObjFnKeys.includes('type',0)).toBe(true);
        });

        test('is the validate property present in the generated field', () => {
            expect(simpleObjFnKeys.includes('validate',0)).toBe(true);
        });

        test('is the when property present in the generated field object', () => {
            expect(simpleObjFnKeys.includes('when',0)).toBe(true);
        });

        test('is the name property injected with the right value', () => {
            expect(simpleObjFn.name).toEqual("description")
        });
        
        test('is the type property injected with the right value', () => {
            expect(simpleObjFn.type).toEqual("text")
        });

    });

    describe('=> complex dependent generated field being tested', () => {

        test('is the name property present in the generated field', () => {
            expect(complexObjFnKeys.includes('name',0)).toBe(true);
        });

        test('is the type property present in the generated field', () => {
            expect(complexObjFnKeys.includes('type',0)).toBe(true);
        });

        test('is the validate property absent in the generated field', () => {
            expect(complexObjFnKeys.includes('validate',0)).toBe(false);
        });

        test('is the choices property present in the generated field',()=>{
            expect(complexObjFnKeys.includes('choices',0)).toBe(true)
        });

        test('is the when property present in the generated field object',() => {
            expect(complexObjFnKeys.includes('when',0)).toBe(true)
        });

        test('is the name property injected with the right value', () => {
            expect(complexObjFn.name).toEqual("cancelledReason")
        });
        
        test('is the type property injected with the right value', () => {
            expect(complexObjFn.type).toEqual("list")
        });
        
        test('is the choices property injected with the right value', () => {
            expect(complexObjFn.choices).toEqual(["EndUser","Others"])
        });
    });
});