const strings = ['1','2','3','4','5'];
    //Reslt: [1, 2, 3, 4, 5]
const numbers = strings.map(string => parseInt(string, 10));

//console.log(numbers, strings);


/*Using forEach
----------------------------------------------
  const fruits = ['apple', 'pear', 'cherry'];

  let capitalizedFruits = [];

  fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
  });

  console.log(capitalizedFruits);
---------------------------------------------
*/

//Using map

const fruits = ['apple', 'pear', 'cherry'];
  //Result: ['APPLE', 'PEAR', 'CHERRY']
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

//console.log(capitalizedFruits);

//---------------------------------------------

const prices = [5, 4.23, 6.4, 8.09, 3.20];
// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const priceInDollar = prices.map(price => `$${price.toFixed(2)}`);

//console.log(priceInDollar);

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;
// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

abbreviatedDays = daysOfWeek.map(day => day.substring(0,3));
console.log(abbreviatedDays);
