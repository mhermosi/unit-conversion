const server = require('../../../routes/conversion');
const cases = require('./cases');

describe('Test Scenarios calling API', () => {

    test.each(cases.test_cases)(
        '%s', 
         async (title, inputNumericalValue, inputUnitOfMeasure, targetUnitOfMeasure, studentResponse, expectedOutput) => {

            const response = await fetch('http://localhost:5000/api/verify-conversion', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    inputNumericalValue: inputNumericalValue,
                    inputUnitOfMeasure: inputUnitOfMeasure,
                    studentResponse: studentResponse,
                    targetUnitOfMeasure: targetUnitOfMeasure
                })
            });

            const body = await response.json();
            expect(body.output).toBe(expectedOutput);
    });
    
});