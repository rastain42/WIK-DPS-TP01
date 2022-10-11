import express from 'express';

const app = express();

const dotenv = require('dotenv');
dotenv.config()

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.get('/ping', (req, res) => {
    res.send(req.headers);
})


app.listen(process.env.PING_LISTEN_PORT, () => {
    console.log('The application is listening on port '+process.env.PING_LISTEN_PORT+'!');
})
    