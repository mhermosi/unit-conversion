const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conversion = require('./routes/conversion');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.route('/api/verify-conversion')
    .post(conversion.verifyConversion);


app.listen(port, () => console.log(`Listening on port ${port}`));
