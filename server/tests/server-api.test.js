const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

const server = require('../routes/conversion');
const cases = require('./cases');


describe('Test Scenarios calling API', () => {

    test.each(cases.test_cases)(
        '%s', 
         async (title, inputNumericalValue, inputUnitOfMeasure, targetUnitOfMeasure, studentResponse, expectedOutput, expectedVariant) => {
             
            const jsonRequestBody = JSON.stringify({
                inputNumericalValue: inputNumericalValue,
                inputUnitOfMeasure: inputUnitOfMeasure,
                studentResponse: studentResponse,
                targetUnitOfMeasure: targetUnitOfMeasure
            })

            const response = await request.post('/api/verify-conversion')
                            .send(jsonRequestBody)
                            .set('Content-type', 'application/json');
                
            expect(response.status).toBe(200);
            expect(response.body.output).toBe(expectedOutput);
            expect(response.body.variant).toBe(expectedVariant);
            
    });
    
});