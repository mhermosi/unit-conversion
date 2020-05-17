import React, { useState } from 'react';

const UnitConversionDropDowns = ({onChange}) => {
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

    const [units] = useState([
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
    ]);

    const [targetUnitOfMeasureList, setTargetUnitOfMeasureList] = useState([]);

    const handleChangeInputUnitOfMeasure = (event) => {
        setTargetUnitOfMeasureList(units.filter( (u) => { return u.type === reverse_table[event.target.value]; }));
        onChange(event.target.id, event.target.value);
    }

    const handleChangeTargetUnitOfMeasure = (event) => {
        onChange(event.target.id, event.target.value);
    }

    return  (
        <>
            <div>
                <label htmlFor="inputUnitOfMeasure">Input Unit of Measure</label>
                <select name="inputUnitOfMeasure" id="inputUnitOfMeasure" onChange={e => handleChangeInputUnitOfMeasure(e)}>
                    {
                        units.map(({ label, value }) => (<option key={value} value={value}>{label}</option>))
                    }
                </select>
            </div>

            <div>
                <label htmlFor="targetUnitOfMeasure">Target Unit of Measure</label>
                <select name="targetUnitOfMeasure" id="targetUnitOfMeasure" disabled={targetUnitOfMeasureList.length === 0} onChange={e => handleChangeTargetUnitOfMeasure(e)}>
                    {
                        targetUnitOfMeasureList.map(({ label, value }) => (<option key={value} value={value}>{label}</option>))
                    }
                </select>
            </div>
        </>
    );
}

export default UnitConversionDropDowns;