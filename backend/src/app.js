const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
var corsOptions = { origin: true, optionsSuccessStatus: 200 };

//Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(require('./routes/myRoutes'));

module.exports = app;