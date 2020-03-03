var viewObject = {
  b00: document.getElementById('00'),
  b01: document.getElementById('01'),
  b02: document.getElementById('02'),
  b10: document.getElementById('10'),
  b11: document.getElementById('11'),
  b12: document.getElementById('12'),
  b20: document.getElementById('20'),
  b21: document.getElementById('21'),
  b22: document.getElementById('22'),
  appMessage: document.getElementById('app-announcement'),
  playerXScoreDisplay: document.getElementById('player-X-score'),
  playerOScoreDisplay: document.getElementById('player-O-score'),
  playerXName: document.getElementById('player-X-name'),
  playerOName: document.getElementById('player-O-name'),
  playerXNameInput: document.getElementById('player-X-name-input'),
  playerONameInput: document.getElementById('player-O-name-input'),
  reset: document.getElementById('reset-button')
}

var stateObject = {
  elementTable: [[viewObject.b00, viewObject.b01, viewObject.b02], [viewObject.b10, viewObject.b11, viewObject.b12], [viewObject.b20, viewObject.b21, viewObject.b22]],
  player: 'X',
  gameOver: false,
  playerXScore: 0,
  playerOScore: 0,
}

var onPlayerXEntry = function (event) {
  viewObject.playerXName.firstChild.nodeValue = event.target.value;
}

var onPlayerOEntry = function (event) {
  viewObject.playerOName.firstChild.nodeValue = event.target.value;
}

var generateValueTable = function() {
  var valueTable = [];
  for (var i = 0; i < stateObject.elementTable.length; i++) {
    var row = [];
    for (var j = 0; j < stateObject.elementTable[i].length; j++) {
      row.push(stateObject.elementTable[i][j].firstChild.nodeValue);
    }
    valueTable.push(row);
  }
  return valueTable;
}

var checkRow = function (array) {
  var xArray = array.filter(element => element === 'X');
  if (xArray.length === array.length) {
    return true;
  }
  var oArray = array.filter(element => element === 'O');
  if (oArray.length === array.length) {
    return true;
  }
  return false;
}

var transport = function (array) {
  var transportedColumns = [];
  for (var i = 0; i < array.length; i++) {
    transportedColumns.push([]);
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      transportedColumns[j].push(array[i][j]);
    }
  }
  return transportedColumns;
}

var checkColumns = function (array) {
  var transportedColumns = transport(array);
  for (var k = 0; k < transportedColumns.length; k++) {
    var columnResult = checkRow(transportedColumns[k]);
    if (columnResult === true) {
      return true;
    }
  }
  return false;
}

var checkMajorDiagnal = function (array) {
  var majorDiagnal = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (i === j & array[i][j] === 'X') {
        majorDiagnal.push('X');
      }
      if (i === j & array[i][j] === 'O') {
        majorDiagnal.push('O');
      }
    }
  }

  var majorDiagnalO = majorDiagnal.filter(element => element === 'O');
  if (majorDiagnalO.length === array.length) {
    return true;
  }

  var majorDiagnalX = majorDiagnal.filter(element => element === 'X');
  if (majorDiagnalX.length === array.length) {
    return true;
  }
  return false;
}

var checkMinorDiagnal = function (array) {
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.push(array[i].reverse());
  }
  if (checkMajorDiagnal(reversedArray)) {
    return true;
  }
  return false;
}

var isGameOver = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (checkRow(array[i])) {
      console.log('Win by row!');
      return true;
    }
  }
  if (checkColumns(array)) {
    console.log('Win by column!');
    return true;
  }
  if (checkMajorDiagnal(array)) {
    console.log('Win by major diagnal!');
    return true;
  }
  if (checkMinorDiagnal(array)) {
    console.log('Win by minor diagnal!');
    return true;
  }
  return false;
}

var select = function (event) {
  if (!stateObject.gameOver) {
    if (stateObject.player === 'X' && event.target.firstChild.nodeValue === '0') {
      event.target.firstChild.nodeValue = 'X';
      event.target.style.color = 'black';
      var valueTable = generateValueTable();
      stateObject.gameOver = isGameOver(valueTable);
      if (stateObject.gameOver) {
        viewObject.appMessage.firstChild.nodeValue = `Game over! Player ${stateObject.player} won the game!`;
        stateObject.playerXScore++;
        viewObject.playerXScoreDisplay.firstChild.nodeValue = `${stateObject.playerXScore}`;
        window.alert(`Game over! Player ${stateObject.player} won the game!`)
        return;
      }
      stateObject.player = 'O';
      viewObject.appMessage.firstChild.nodeValue = `It is player ${stateObject.player}'s turn`;
    }
    else if (stateObject.player === 'O' && event.target.firstChild.nodeValue === '0') {

      event.target.firstChild.nodeValue = 'O';
      event.target.style.color = 'black';
      var valueTable = generateValueTable();
      stateObject.gameOver = isGameOver(valueTable);
      if (stateObject.gameOver) {
        viewObject.appMessage.firstChild.nodeValue= `Game over! Player ${stateObject.player} won the game!`;
        stateObject.playerOScore++;
        viewObject.playerOScoreDisplay.firstChild.nodeValue = `${stateObject.playerOScore}`;
        window.alert(`Game over! Player ${stateObject.player} won the game!`);
        return;
      }
      stateObject.player = 'X';
      viewObject.appMessage.firstChild.nodeValue = `It is player ${stateObject.player}'s turn`;
    }
  }
};

var resetBoard = function () {
  var valueTable = [];
  for (var i = 0; i < stateObject.elementTable.length; i++) {
    var row = [];
    for (var j = 0; j < stateObject.elementTable[i].length; j++) {
      stateObject.elementTable[i][j].firstChild.nodeValue = '0';
      stateObject.elementTable[i][j].style.color = stateObject.elementTable[i][j].style.backgroundColor;
    }
    valueTable.push(row);
  }
  stateObject.gameOver = false;
  viewObject.appMessage.firstChild.nodeValue= `Welcome! It is player ${stateObject.player}'s turn`;
}

for (var i = 0; i < stateObject.elementTable.length; i++) {
  for (var j = 0; j < stateObject.elementTable[i].length; j++) {
    stateObject.elementTable[i][j].addEventListener('click', select);
  }
}
viewObject.playerXNameInput.onchange = onPlayerXEntry;
viewObject.playerONameInput.onchange = onPlayerOEntry;
viewObject.reset.addEventListener('click', resetBoard);