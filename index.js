const express = require('express');
const port = 5000;
const chefsInfo = require('./data/chefs-info.json');

const app = express();

app.get('/', (req, res) => {
    res.send('server running');
});

app.get('/chefs-info', (req, res) => {
    res.send(chefsInfo);
});

app.listen(port, () => {
    console.log('server running on this port : ', port);
});