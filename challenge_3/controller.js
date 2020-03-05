const model = require('./model');

let controller = (req, res) => {
 console.log('request:', req.body);
 res.end();
}


module.exports = controller;