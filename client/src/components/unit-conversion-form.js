import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import UnitConversionDropDowns from './unit-conversion-dropdowns';

const UnitConversionForm = ({ api })  => {

    const [inputNumericalValue, setInputNumericalValue] = useState("");
    const [inputUnitOfMeasure,  setInputUnitOfMeasure]  = useState("");
    const [studentResponse,     setStudentResponse]     = useState("");
    const [targetUnitOfMeasure, setTargetUnitOfMeasure] = useState("");
    const [resultOutput,        setResultOutput]        = useState("");
    const [resultVariant,       setResultVariant]       = useState("");
    const [validated,           setValidated]           = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();        
        if(form.checkValidity() === false) {
            event.stopPropagation();
        }
       
       setValidated(true);

       const jsonString = JSON.stringify({
           inputNumericalValue,
           inputUnitOfMeasure,
           studentResponse,
           targetUnitOfMeasure
       });

       const body = await api(jsonString);
       setResultOutput(body.output);
       setResultVariant(body.variant);
    }

    const handleChangeInputTextValue = (event) => {
        const { id, value } = event.target;
        if(id === 'inputNumericalValue') {
            setInputNumericalValue(value);
        } else if(id === 'studentResponse') {
            setStudentResponse(value);
        }
    }

    const handleChangeUnitConversionDropDowns = (id, value) => {
        if(id === 'inputUnitOfMeasure') {
            setInputUnitOfMeasure(value);
        } else if(id === 'targetUnitOfMeasure') {
            setTargetUnitOfMeasure(value);
        }
    }

    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="inputNumericalValue">
                <Form.Label column sm="4">Input Numerical Value</Form.Label>
                <Col sm="8">
                    <Form.Control required type="number" value={inputNumericalValue} onChange={handleChangeInputTextValue} />
                    <Form.Control.Feedback type="invalid">Please provide an Input Numerical Value</Form.Control.Feedback>
                </Col>
            </Form.Group>
            
            <UnitConversionDropDowns onChange={handleChangeUnitConversionDropDowns} />

            <Form.Group as={Row} controlId="studentResponse">
                <Form.Label column sm="4">Student Response</Form.Label>
                <Col sm="8">
                    <Form.Control required type="number" value={studentResponse} onChange={handleChangeInputTextValue}/>
                    <Form.Control.Feedback type="invalid">Please provide a Student Response</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="output">
                <Col sm="12">
                    <Alert id="output" variant={resultVariant}>{resultOutput}</Alert>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default UnitConversionForm;