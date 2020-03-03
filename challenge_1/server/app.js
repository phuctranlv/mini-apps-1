const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const srcPath = path.join(__dirname, '../client/src/');
app.use(express.static(srcPath));

app.listen(port, () => console.log(`Listening on port ${port}`));