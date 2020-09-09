const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const emissionsRouter = require('./routes/national-emissions');
const costsRouters = require('./routes/national-costs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/national-emissions', emissionsRouter);
app.use('/national-costs', costsRouters);

module.exports = app;
