const dataConverter = require('./model');

var process = function (request, respond) {
  var dataToSendBack = dataConverter(request.body.data);
  respond.send(dataToSendBack);
}


module.exports = process;