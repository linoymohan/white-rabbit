const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const express_router = require('./express-router');

require('./mongoose');


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use('/', express_router);

module.exports = app;