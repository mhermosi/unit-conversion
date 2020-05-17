const convert = require('convert-units');

const units = {
    'KELVIN':       { type: 'T', code: 'K' }, 
    'CELSIUS':      { type: 'T', code: 'C' }, 
    'FAHRENHEIT':   { type: 'T', code: 'F' }, 
    'RANKINE':      { type: 'T', code: 'R' }, 
    'LITERS':       { type: 'V', code: 'l' }, 
    'TABLESPOONS':  { type: 'V', code: 'Tbs' }, 
    'CUBIC-INCHES': { type: 'V', code: 'in3' }, 
    'CUPS':         { type: 'V', code: 'cup' }, 
    'CUBIC-FEET':   { type: 'V', code: 'ft3' }, 
    'GALLONS':      { type: 'V', code: 'gal' }
};

function verifyConversion(req, res) {
    const { inputNumericalValue, inputUnitOfMeasure, studentResponse, targetUnitOfMeasure} = req.body;

    let from_unit = units[inputUnitOfMeasure.toUpperCase()];
    let to_unit   = units[targetUnitOfMeasure.toUpperCase()];

    let validated = 'invalid';
    let variant   = 'danger';

    console.log('======================================');
    console.log(`Values: from ${inputNumericalValue}, to: ${studentResponse}`);
    from_input = Number(inputNumericalValue);
    to_input   = Number(studentResponse);
    if(from_input !== 'NaN' && to_input !== 'NaN') {
        if(typeof from_unit !== 'undefined' && typeof to_unit  !== 'undefined') {
            console.log(`Converting from ${from_unit.code} to ${to_unit.code} value: ${inputNumericalValue}`);
            /**
             * if the unit type are the same, and the code (Unit) are differenet we calculate the
             * conversion.
             */
            if(from_unit.type == to_unit.type && from_unit.code != to_unit.code)  {
                conversion = Math.round(10 * convert(from_input).from(from_unit.code).to(to_unit.code)) / 10;
                console.log(`Converted value: ${conversion}`);
                if(conversion == to_input) {
                    validated = 'correct';
                    variant   = 'success';
                } else {
                    validated = 'incorrect';
                }
            } 
        }
    } else {
        validated = 'incorrect';
    }

    console.log(`Response: ${validated}`);
    

    res.send({ output: validated, variant: variant });
}

module.exports = { verifyConversion };