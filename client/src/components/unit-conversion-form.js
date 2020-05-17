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

    const handleSubmit = async (event) => {
        event.preventDefault();        

        const jsonString = JSON.stringify({
            inputNumericalValue: inputNumericalValue,
            inputUnitOfMeasure: inputUnitOfMeasure,
            studentResponse: studentResponse,
            targetUnitOfMeasure: targetUnitOfMeasure
        });

        const body = await api.conversion(jsonString);
        setResultOutput(body.output);
        setResultVariant(body.variant);
    }

    const handleChangeUnitConversionDropDowns = (id, value) => {
        if(id === 'inputUnitOfMeasure') {
            setInputUnitOfMeasure(value);
        } else if(id === 'targetUnitOfMeasure') {
            setTargetUnitOfMeasure(value);
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="inputNumericalValue">
                <Form.Label column sm="4">Input Numerical Value</Form.Label>
                <Col sm="8">
                    <Form.Control type="text" value={inputNumericalValue} onChange={e => setInputNumericalValue(e.target.value)} />
                </Col>
            </Form.Group>
            
            <UnitConversionDropDowns onChange={handleChangeUnitConversionDropDowns} />

            <Form.Group as={Row} controlId="studentResponse">
                <Form.Label column sm="4">Student Response</Form.Label>
                <Col sm="8">
                    <Form.Control type="text" value={studentResponse} onChange={e => setStudentResponse(e.target.value)}/>
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