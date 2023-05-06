var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


var argButtonName, buttonNo_C5_BCyce;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonNo_C5_BCyce = document.getElementById('button-test');
buttonNo_C5_BCyce.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonNo_C5_BCyce = document.getElementById('button-kamień');
buttonNo_C5_BCyce.addEventListener('click', function(){ buttonClicked('Guzik Kamień'); });
buttonNo_C5_BCyce = document.getElementById('button-papier');
buttonNo_C5_BCyce.addEventListener('click', function(){ buttonClicked('Guzik Papier'); });
buttonNo_C5_BCyce = document.getElementById('button-nożyce');
buttonNo_C5_BCyce.addEventListener('click', function(){ buttonClicked('Guzik Nożyce'); });
/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);