const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

const pathToStaticFolder = path.join(__dirname, '/public/');
app.use(express.static(pathToStaticFolder));

app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})