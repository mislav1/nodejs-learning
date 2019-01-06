const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = names.filter(name => name.charAt(0) === 'S');

//console.log(sNames);

const numbers = [1,2,3,4,5,6,7,8,9,10];

const no3 = numbers.filter(number => number !== 3);

//console.log(no3);

const evenNumbers = numbers.filter(number => number % 2 === 0);

//console.log(evenNumbers);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;
// century20 should be: [1989, 2000, 1999, 1973]
century20 = years.filter (year => year <= 2000 && year >1900);
console.log(century20);
