import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UnitConversionDropDowns from '../components/unit-conversion-dropdowns';


const reverse_table = {
    'Celsius':      'T' ,
    'Kelvin':       'T' ,
    'Fahrenheit':   'T' ,
    'Rankine':      'T' ,
    'Liters':       'V' ,
    'Tablespoons':  'V' ,
    'Cubic-Inches': 'V' ,
    'Cups':         'V' ,
    'Cubic-Feet':   'V' ,
    'Gallons':      'V' 
};

const units = [
    { type: '',  label: 'Select Unit',       value: 'Select Unit' },
    { type: 'T', label: '(Tº) Celsius',      value: 'Celsius' },
    { type: 'T', label: '(Tº) Kelvin',       value: 'Kelvin' },
    { type: 'T', label: '(Tº) Fahrenheit',   value: 'Fahrenheit' },
    { type: 'T', label: '(Tº) Rankine',      value: 'Rankine' },

    { type: 'V', label: '(Vol) Liters',       value: 'Liters' },
    { type: 'V', label: '(Vol) Tablespoons',  value: 'Tablespoons' },
    { type: 'V', label: '(Vol) Cubic-Inches', value: 'Cubic-Inches' },
    { type: 'V', label: '(Vol) Cups',         value: 'Cups' },
    { type: 'V', label: '(Vol) Cubic-Feet',   value: 'Cubic-Feet' },
    { type: 'V', label: '(Vol) Gallons',      value: 'Gallons' },
];

const handleChange = () => {

}

test('Load and display All Units',  () => {
    const { container, asFragment } = render(<UnitConversionDropDowns onChange={handleChange} />);
    const select1 = container.querySelector('select[id=inputUnitOfMeasure]');
    const select2 = container.querySelector('select[id=targetUnitOfMeasure]');

    expect(select1.value).toBe('Select Unit');
    expect(select1.childElementCount).toBe(units.length);

    expect(select2.hasAttribute('disabled')).toBe(true);
    expect(select2.value).toBe('');
    
    expect(asFragment).toMatchSnapshot();
});

test('Select Temperature and render Temperature only on second dropdown', () => {
    const { container, asFragment } = render(<UnitConversionDropDowns onChange={handleChange} />);
    const select1 = container.querySelector('select[id=inputUnitOfMeasure]');
    const select2 = container.querySelector('select[id=targetUnitOfMeasure]');

    expect(select1.value).toBe('Select Unit');
    expect(select1.childElementCount).toBe(units.length);

    expect(select2.value).toBe('');
    expect(select2.hasAttribute('disabled')).toBe(true);

    fireEvent.change(select1, { target: { value: 'Kelvin' }});
    expect(select1.value).toBe('Kelvin');
    expect(select2.hasAttribute('disabled')).toBe(false);
    expect(select2.value).toBe('Celsius');
    expect(select2.childElementCount).toBe(4);

    expect(asFragment).toMatchSnapshot();

});


test('Select Volume unit and render Volume units only on second dropdown', () => {
    const { container, asFragment } = render(<UnitConversionDropDowns onChange={handleChange} />);
    const select1 = container.querySelector('select[id=inputUnitOfMeasure]');
    const select2 = container.querySelector('select[id=targetUnitOfMeasure]');

    expect(select1.value).toBe('Select Unit');
    expect(select1.childElementCount).toBe(units.length);

    expect(select2.value).toBe('');
    expect(select2.hasAttribute('disabled')).toBe(true);

    fireEvent.change(select1, { target: { value: 'Liters' }});
    expect(select1.value).toBe('Liters');
    expect(select2.hasAttribute('disabled')).toBe(false);
    expect(select2.value).toBe('Liters');
    expect(select2.childElementCount).toBe(6);

    expect(asFragment).toMatchSnapshot();

});