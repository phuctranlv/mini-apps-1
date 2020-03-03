///////////////////////////////////////////////////////////////////////
// declare variables for tictactoe elements:
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

///////////////////////////////////////////////////////////////////////
// customize app message:
var appMessage = document.getElementById('app-announcement');

///////////////////////////////////////////////////////////////////////
// function to generate a table to encapsulate the values of tictactoe elements:
var generateValueTable = function() {
  var valueTable = [];
  for (var i = 0; i < elementTable.length; i++) {
    var row = [];
    for (var j = 0; j < elementTable[i].length; j++) {
      row.push(elementTable[i][j].firstChild.nodeValue);
    }
    valueTable.push(row);
  }
  return valueTable;
}

///////////////////////////////////////////////////////////////////////
// function to check the row to see if there's a winner
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

///////////////////////////////////////////////////////////////////////
// function to transport columns to rows
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

///////////////////////////////////////////////////////////////////////
// function to check column to see if there's a winner
var checkColumns = function (array) {
  var transportedColumns = transport(array);
  for (var k = 0; k < transportedColumns.length; k++) {
    var columnResult = checkRow(transportedColumns[k]);
    if (columnResult === true) {
      return true;
    }
    return false;
  }
}

///////////////////////////////////////////////////////////////////////
// function to check diagnal:
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

///////////////////////////////////////////////////////////////////////
// function to check diagnal:
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

///////////////////////////////////////////////////////////////////////
// function to check if the game is over
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

///////////////////////////////////////////////////////////////////////
// define event handler function
var select = function (event) {
  if (!gameOver) {
    if (player % 2 === 0 && event.target.firstChild.nodeValue === '0') {
      var currentPlayer = 'X';
      event.target.firstChild.nodeValue = 'X';
      event.target.style.color = 'black';
      var valueTable = generateValueTable();
      gameOver = isGameOver(valueTable);
      if (gameOver) {
        appMessage.firstChild.nodeValue = `Game over! Player ${currentPlayer} won the game!`;
        window.alert(`Game over! Player ${currentPlayer} won the game!`)
        return;
      }
      player++;
      appMessage.firstChild.nodeValue = `It is player's O turn`;
    }
    else if (player % 2 === 1 && event.target.firstChild.nodeValue === '0') {
      var currentPlayer = 'O';
      event.target.firstChild.nodeValue = 'O';
      event.target.style.color = 'black';
      var valueTable = generateValueTable();
      gameOver = isGameOver(valueTable);
      if (gameOver) {
        appMessage.firstChild.nodeValue= `Game over! Player ${currentPlayer} won the game!`;
        window.alert(`Game over! Player ${currentPlayer} won the game!`);
        return;
      }
      player++;
      appMessage.firstChild.nodeValue = `It is player's X turn`;
    }
  }
};

///////////////////////////////////////////////////////////////////////
// assign the click event handler to all the elements in the tictactoe table:
for (var i = 0; i < elementTable.length; i++) {
  for (var j = 0; j < elementTable[i].length; j++) {
    elementTable[i][j].addEventListener('click', select);
  }
}

///////////////////////////////////////////////////////////////////////
// set up game variables:
var player = 0;
var gameOver = false;

///////////////////////////////////////////////////////////////////////
// handle reset of the board:
var reset = document.getElementById('reset-button');
var resetBoard = function () {
  var valueTable = [];
  for (var i = 0; i < elementTable.length; i++) {
    var row = [];
    for (var j = 0; j < elementTable[i].length; j++) {
      elementTable[i][j].firstChild.nodeValue = '0';
      elementTable[i][j].style.color = elementTable[i][j].style.backgroundColor;
    }
    valueTable.push(row);
  }
  gameOver = false;
}
reset.addEventListener('click', resetBoard);