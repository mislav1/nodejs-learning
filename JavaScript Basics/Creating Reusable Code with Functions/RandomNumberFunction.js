function getRandomNumber( upper, lower ) {
  if (isNaN(upper) || isNaN(lower)){
    throw new Error ("upper and lower values must be a number");
  }
  var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return randomNumber;
}


console.log ( getRandomNumber(10, "ff") );
console.log ( getRandomNumber(200, 100) );
console.log ( getRandomNumber(20000, 10000) );
console.log ( getRandomNumber(2, 1) );
console.log ( getRandomNumber(10, 2) );


/*function getArea(width, length) {
  var area = width * length;
  return area;
}

console.log ( getArea(2, 9) );
console.log ( getArea(5, 9) );
*/
