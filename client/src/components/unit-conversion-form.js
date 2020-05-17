import React, { useState } from 'react';

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

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputNumericalValue">Input Numerical Value</label>
                <input type="text" name="inputNumericalValue" id="inputNumericalValue" value={inputNumericalValue} onChange={e => setInputNumericalValue(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor="inputUnitOfMeasure">Input Unit of Measure</label>
                <input type="text" name="inputUnitOfMeasure" id="inputUnitOfMeasure" value={inputUnitOfMeasure} onChange={e => setInputUnitOfMeasure(e.target.value)} />
            </div>

            <div>
                <label htmlFor="targetUnitOfMeasure">Target Unit of Measure</label>
                <input type="text" name="targetUnitOfMeasure" id="targetUnitOfMeasure" value={targetUnitOfMeasure} onChange={e => setTargetUnitOfMeasure(e.target.value)} />
            </div>

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