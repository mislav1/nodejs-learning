/* INSTRUCTIONS
To run this file, click in the Console below and type: node 2_loop.js
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program
by typing ctrl + C.
*/

/*Note: We've supplied you a basic function for generating a random number
from 1 to 100 */
function random100() {
  return Math.floor(Math.random() * 100) + 1;
}

/* 1. Create a function named createRandomList that uses a for loop to create
an array containing 10 random numbers from 1 to 100 (use the supplied function
 above to generate the numbers).
The function should return that array.
*/
function createRandomList() {
  var listOfRandomNumbers = [];
  for (var i = 0; i < 10; i++) {
    listOfRandomNumbers.push(random100());
  }
  return listOfRandomNumbers;
}

/* 2. Call the createRandomList() function and store the results in
 a variable named myRandomList. */
var myRandomList = createRandomList();
/* 3. Use a for loop to access each element in the loop. Each time through
 the loop log a message to the console that looks something like this:
Item 0 in the array is 48
When you're done you should have output 10 lines to the console -- one for
 each element.
*/
for (var i = 0; i < myRandomList.length; i++){
  console.log("Item " + i + " in the array is " + myRandomList[i]);
}
// Run your code by typing node 2_loop.js in the console below
