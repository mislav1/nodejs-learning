const fruits = ['apple', 'pear', 'cherry'];
var capitalizedFruits = [];

fruits.forEach( fruit => {
  var capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});
//console.log(capitalizedFruits);

const prices = [6.75, 3.10, 4.00, 8.12];

var pricesSum = 0;

prices.forEach(item => {
  pricesSum += item;
});

//console.log(pricesSum);

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let namesWithS = [];

names.forEach(name => {
  if (name.charAt(0) === 'S') {
    namesWithS.push(name);
  }
});

//console.log(namesWithS);

const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

numbers.forEach(number => {
  times10.push(number * 10);
});
console.log(times10);
