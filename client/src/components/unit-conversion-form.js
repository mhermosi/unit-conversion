import React, { useState } from 'react';
import UnitConversionDropDowns from './unit-conversion-dropdowns';

const UnitConversionForm = ({ api })  => {

    const [inputNumericalValue, setInputNumericalValue] = useState("");
    const [inputUnitOfMeasure,  setInputUnitOfMeasure]  = useState("");
    const [studentResponse,     setStudentResponse]     = useState("");
    const [targetUnitOfMeasure, setTargetUnitOfMeasure] = useState("");
    const [resultOutput,        setResultOutput]        = useState("");

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
    }

    const handleChangeUnitConversionDropDowns = (id, value) => {
        if(id === 'inputUnitOfMeasure') {
            setInputUnitOfMeasure(value);
        } else if(id === 'targetUnitOfMeasure') {
            setTargetUnitOfMeasure(value);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputNumericalValue">Input Numerical Value</label>
                <input type="text" name="inputNumericalValue" id="inputNumericalValue" value={inputNumericalValue} onChange={e => setInputNumericalValue(e.target.value)} />
            </div>
            
            <UnitConversionDropDowns onChange={handleChangeUnitConversionDropDowns} />

            <div>
                <label htmlFor="studentResponse">Student Response</label>
                <input type="text" name="studentResponse" id="studentResponse" value={studentResponse} onChange={e => setStudentResponse(e.target.value)} />
            </div>
            
            <div id="output">{resultOutput}</div>

            <div><input type="submit" value="Submit"/></div>
            
        </form>
    );
}

export default UnitConversionForm;