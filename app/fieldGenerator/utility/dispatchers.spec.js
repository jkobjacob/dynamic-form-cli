const dispatcher = require('./dispatchers');
const {
    nameDispatcher,
    typeDispatcher,
    ruleDispatcher,
} = dispatcher;

var testObject;
var fnObjs;
var nameFn;
var simpleTypeFn;
var complexTypeFn;
var ruleFn;

beforeAll(() => {
    testObject = {
        "createdBy": {
            "type":"simple",
            "state":"default",
            "input": "text"
        },

        "description": {
            "type":"complex",
            "state":"dependent",
            "input":"list",
            "values": ["one","two"],
            "rule": {
                "obj": "createdBy",
                "criteria": ["equals","sherin"]
            }
        }
    };

    fnObjs = Object.keys(dispatcher);
    nameFn = nameDispatcher("createdBy");
    simpleTypeFn = typeDispatcher("createdBy",testObject["createdBy"]);
    complexTypeFn = typeDispatcher("description",testObject["description"]);
    ruleFn = ruleDispatcher(testObject["description"].rule);
});

describe('=> Dispatcher being tested', () => {

    test('does it returns three function objects', () => {
        expect(fnObjs.length).toBe(3)
    });

    test('does it contains a "nameDispatcher', () => {
        expect(fnObjs.includes('nameDispatcher',0)).toBe(true)
    });

    test('does it contains a "typeDispatcher', () => {
        expect(fnObjs.includes('typeDispatcher',0)).toBe(true)
    });

    test('does it contains a "ruleDispatcher', () => {
        expect(fnObjs.includes('ruleDispatcher',0)).toBe(true)
    });

    describe('=> nameDispatcher being tested',() => {
        
        test('is the returned name field object is the one expected',() => {
            expect(nameFn).toEqual({
                name: "createdBy"
            })
        });
    })

    describe('=> typeDispatcher being tested', () => {

        describe('=> For simpleType',() => {
            test('is the returned simpleTypeGenerated object is the one expected',() => {
                expect(Object.keys(simpleTypeFn)).toEqual(['type','validate'])
            });
        })

        describe('=> For complexType',() => {
            test('is the returned complexTypeGenerated object is the one expected', () => {
                expect(Object.keys(complexTypeFn)).toEqual(['type','choices'])
            });
        })
    });

    describe('=> ruleDispatcher being tested', () => {
        
        test('is the returned ruleGenerated object is the one expected', () => {
                expect(Object.keys(ruleFn)).toEqual(['when'])
            });
    });

});