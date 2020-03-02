var b00 = document.getElementById('00');
var b01 = document.getElementById('01');
var b02 = document.getElementById('02');
var b10 = document.getElementById('10');
var b11 = document.getElementById('11');
var b12 = document.getElementById('12');
var b20 = document.getElementById('20');
var b21 = document.getElementById('21');
var b22 = document.getElementById('22');

var elementTable = [[b00, b01, b02], [b10, b11, b12], [b20, b21, b22]];

var select = function (event) {
  if (event.target.firstChild.nodeValue === '0') {
    event.target.firstChild.nodeValue = '1';
    console.log(event.target.firstChild.nodeValue)
    return;
  }
  if (event.target.firstChild.nodeValue === '1') {
    event.target.firstChild.nodeValue = '0';
    console.log(event.target.firstChild.nodeValue)
    return;
  }

};
for (var i = 0; i < elementTable.length; i++) {
  for (var j = 0; j < elementTable[i].length; j++) {
    elementTable[i][j].addEventListener('click', select);
  }
}
