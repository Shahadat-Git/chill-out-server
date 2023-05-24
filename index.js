const express = require('express');
const port = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('server running');
})

app.listen(port, () => {
    console.log('server running on this port : ', port)
})