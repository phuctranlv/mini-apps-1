const express = require('express');
const path = require('path');
const process = require('./controller');
var bodyParser = require('body-parser');

const app = express();
const port = '3000';

const pathToClient = path.join(__dirname, '/client/');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  process(req, res);
})

app.use(express.static(pathToClient));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

