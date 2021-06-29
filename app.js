const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRouter = require('./routes/auth');
const emissionsRouter = require('./routes/national-emissions');
const wasteRouter = require('./routes/national-waste');
const costsRouters = require('./routes/national-costs');
const regionsRouters = require('./routes/regions');
const subjectsRouters = require('./routes/subjects');
const periodsRouters = require('./routes/periods');


const http = require('http');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/auth', authRouter);
app.use('/national-emissions', emissionsRouter);
app.use('/national-waste', wasteRouter);
app.use('/national-costs', costsRouters);
app.use('/regions', regionsRouters);
app.use('/subjects', subjectsRouters);
app.use('/periods', periodsRouters);


module.exports = server;
