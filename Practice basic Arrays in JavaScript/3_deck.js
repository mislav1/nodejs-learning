/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_deck.js
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program
by typing ctrl + C.
*/

/** Note: We've supplied you a basic function that takes an array of elements
and shuffles their order in the array. It's a really useful, but somewhat
complex algorithm -- look in the teacher's notes for links to an explanation
for how it works. You'll use this function to shuffle a deck of cards that
you'll create.*/
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}

/* Complete the function createDeck(), which we've started for you below.
The goal is to create a multi-dimensional array of 52 elements (52 cards),
 and return them shuffled when the function is called. To simplify creating
 the deck use two for loops -- one inside the other -- to build a
 multidimensional array.
*/
/* 1. Add a for loop -- to loop through each element in the suites array
   2. INSIDE that loop, add another loop that loops through elements in the
      ranks array.
   3. Inside the second, nested loop, create a new array named card, which is
      composed of a rank and a suite. For example ['King', '♥︎'].
   4. Push that card onto the deck array. Once both loops complete running,
      the deck array will hold 52 elements, and each of those elements are
      themselves an array.
   5. Finally, pass the new deck to the shuffle() function, and return the
      results.*/
function createDeck() {
  var suites = ['♠︎','♣︎','♥︎','♦︎'];
  var ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];
  var deck = [];
  for (var i = 0; i < suites.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = [ranks[j], suites[i]];
      deck.push(card);
    }
  }
  return shuffle(deck);
}

// 6. Call the createDeck() function and store the results in a new variable
//named myDeck
var myDeck = createDeck();
/* 7. Use a for loop to loop through the deck and list each card in the order
the appear in the newly shuffled array. Use the log() method to print out
a message like this, once for each card:
"7 of ♥.︎"
*/
for (var i = 0; i < myDeck.length; i++) {
  console.log(myDeck[i][0], ' of ', myDeck[i][1]);
}
// Run your code by typing node 3_deck.js in the console below
