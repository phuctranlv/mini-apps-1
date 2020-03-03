const express = require('express');
const path = require('path');

const app = express();
const port = '3000';

const pathToClient = path.join(__dirname, '/client/');

app.use(express.static(pathToClient));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

