jest.mock('inquirer');

const inquirer = require('inquirer');
const prompter = require('./prompter');

const mockResponses = {
    
    response1: {
        createdBy:"sherin", 
        description:"none", 
        severity:2, 
        status: "Completed", 
        comments: "none"
    },

    response2: {
        createdBy:"sherin", 
        description:"none", 
        severity:2, 
        status: "Cancelled", 
        cancelledReason: "EndUser",
        comments: "none"
    },

    response3: {
        createdBy:"sherin", 
        description:"none", 
        severity:2, 
        status: "Cancelled", 
        cancelledReason: "Others",
        cancelledReasonDescription: "none",
        comments: "none"
    }
}

const fn = (x) => [Object.keys(x),x]

describe('=> Prompter being mocked', () => {
    test.each([       
        fn(mockResponses.response1),
        fn(mockResponses.response2),
        fn(mockResponses.response3)
    ])(`Prompted fields \n%o\nResponses provided\n%o\n`, async (questions,response) => {
      expect.assertions(1);
      inquirer.prompt = jest.fn().mockResolvedValue(response);
  
      await expect(prompter(questions)).resolves.toEqual(response);
    });
});