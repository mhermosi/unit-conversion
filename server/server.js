const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conversion = require('./routes/conversion');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.route('/api/verify-conversion')
    .post(conversion.verifyConversion);

module.exports = app;