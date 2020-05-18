import React from 'react';
import UnitConversionForm from '../components/unit-conversion-form';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import conversion from './mock_api';
import cases from './cases';

jest.mock('axios');


test('Load and display form', async () => {
    const { asFragment } = render(<UnitConversionForm  api={conversion} /> );
    expect(asFragment).toMatchSnapshot();
});

describe('Test Scenarios calling handleSubmit', () => {

    it('Test Submit button', async () => {
        const url = '/api/verify-conversion';
        const { container, asFragment } = render(<UnitConversionForm api={conversion} /> );
        expect(output.textContent).toBe('');
        
        axiosMock.get.mockResolvedValueOnce({
            output: 'invalid', variant: 'danger'
        });

        fireEvent.click(screen.getByText('Submit'));

        const output1 = container.querySelector('div[id=output]');
        await waitFor(() => expect(output.textContent).toBe('invalid') );
        expect(asFragment).toMatchSnapshot();
    });

    test.each(cases.test_cases)(
        '%s', 
         async (title, inputNumericalValue, inputUnitOfMeasure, targetUnitOfMeasure, studentResponse, expectedOutput, expectedVariant)  => {

        const url = '/api/verify-conversion';
        const { container, asFragment } = render(<UnitConversionForm api={conversion}/> );
    
        axiosMock.get.mockResolvedValueOnce({
            output: expectedOutput, variant: expectedVariant
        });

        const input1 = container.querySelector('input[id=inputNumericalValue]');
        const input2 = container.querySelector('select[id=inputUnitOfMeasure]'); 
        const input3 = container.querySelector('select[id=targetUnitOfMeasure]');
        const input4 = container.querySelector('input[id=studentResponse]');

        
        fireEvent.change(input1, { target: {value: inputNumericalValue}});
        fireEvent.change(input2, { target: {value: inputUnitOfMeasure}});
        fireEvent.change(input3, { target: {value: targetUnitOfMeasure}});
        fireEvent.change(input4, { target: {value: studentResponse}});
        
        const output = container.querySelector('div[id=output]');
        expect(output.textContent).toBe('');
        
        fireEvent.click(container.querySelector('button[type=submit]'));
        
        //expect(axiosMock.get).toHaveBeenCalledTimes(count++);
        //expect(axiosMock.get).toHaveBeenCalledWith(url);

        await waitFor(() => expect(output.textContent).toBe(expectedOutput) );
        //await expect(output.textContent).toBe(expectedOutput);
        expect(asFragment).toMatchSnapshot();
    });
    
});

