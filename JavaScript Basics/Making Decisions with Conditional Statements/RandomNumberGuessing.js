/*
The random number guessing Game
*/
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('I am thinking of a higher number than ' + guess);
  if ( parseInt( guessMore) === randomNumber ){
    correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
  var guesslower = prompt('I am thinking of a lower number than ' + guess);
  if ( parseInt( guessMore) === randomNumber ){
    correctGuess = true;
  }
}

if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
