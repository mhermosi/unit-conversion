import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

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
        { type: '',  label: 'Select Unit',       value: '' },
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
        const { id, value } = event.target;

        setTargetUnitOfMeasureList(units.filter( (u) => { return u.type === '' || u.type === reverse_table[event.target.value]; }));
        
        onChange(id, value);
    }

    const handleChangeTargetUnitOfMeasure = (event) => {
        const { id, value } = event.target;
        onChange(id, value);
    }

    return (
        <>
        <Form.Group as={Row} controlId="inputUnitOfMeasure">
            <Form.Label column sm="4">Input Unit of Measure</Form.Label>
            <Col sm="8">
                <Form.Control required as="select" onChange={e => handleChangeInputUnitOfMeasure(e)}>
                    {
                        units.map(({ label, value }) => (<option key={value} value={value}>{label}</option>))
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid">Please choose an Input Unit of Measure</Form.Control.Feedback>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="targetUnitOfMeasure" >
            <Form.Label column sm="4">Target Unit of Measure</Form.Label>
            <Col sm="8">
                <Form.Control required as="select" disabled={targetUnitOfMeasureList.length === 0} onChange={e => handleChangeTargetUnitOfMeasure(e)}>
                    {
                        targetUnitOfMeasureList.map(({ label, value }) => (<option key={value} value={value}>{label}</option>))
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid">Please choose a Target Unit of Measure</Form.Control.Feedback>
            </Col>
            
        </Form.Group>
        </>
    );
}

export default UnitConversionDropDowns;