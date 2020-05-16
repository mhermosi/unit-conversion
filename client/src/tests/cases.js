
const test_cases = [
    [
        'Test case 1 - correct conversion from Farenheit to Rankine',
        84.2,
        'Fahrenheit',
        'Rankine',
        543.9,
        'correct'
    ],
    [
        'Test case 2 - incorrect conversion from Farenheit to Rankine (Student Response wron decimal roundup)',
        84.2,
        'Fahrenheit',
        'Rankine',
        543.94,
        'incorrect'
    ],
    [
        'Test case 3 - incorrect conversion from Kelvin to Fahrenheit (Student Response wrong decimal roundup)',
        317.33,
        'Kelvin',
        'Fahrenheit',
        111.554,
        'incorrect'
    ],
    [
        'Test case 4 - correct conversion from Cups to Liters',
        25.6,
        'cups',
        'liters',
        6.1,
        'correct'
    ],
    [
        'Test case 5 - invalid conversion from Gallons to Kelvin',
        73.12,
        'gallons',
        'Kelvin',
        19.4,
        'invalid'
    ],
    [
        'Test case 6 - incorrect conversion from Fahrenheit to Rankine (student response wrong input)',
        6.5,
        'Fahrenheit',
        'Rankine',
        'dog',
        'incorrect'
    ],
    [
        'Test case 7 - invalid conversion From dog to Celsius (Input Unit of measure wrong input)',
        136.1,
        'dog',
        'Celsius',
        '45.32',
        'invalid'
    ],
];

module.exports = { test_cases };