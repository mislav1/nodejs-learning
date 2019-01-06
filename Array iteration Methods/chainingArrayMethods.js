const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;
// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]

displayYears = years
  .filter(year => year > 2000)
  .map(year => `${year} A.D.`);

//console.log(displayYears);

var users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

//remove user Samir
const usersWithoutSamir = users.filter(user => user.name !== 'Samir');
//console.log(usersWithoutSamir);

//create array with users age: 'Samir is 27 years old'...
const namesArray = users.map(user => `${user.name} is ${user.age} years old.`);
//console.log(namesArray);


/* use reduce to get object like this
    const users = [
      {name: 'Samir'},
      {name: 'Angela'},
      {name: 'Beatrice'}
    ];
*/

const userObject = users.reduce ( (userObject, curr) => {
  userObject[curr.name] = curr.age;
  return userObject;
}, {});
//console.log(userObject);

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);
//console.log(fullAuthorNames);

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
const usersWithS = userNames
  .filter(name => name[0] ==='S')
  .map(name => {
    return {"name" : name};
  });
//console.log(usersWithS);


users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 31},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

// array of users over 30 years old.
// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

const over30 = users
  .filter(user => user.age > 30)
  .map(user => user.name);
//console.log(over30);


const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

    // Result: { name: 'paper towels', price: 6.99 }
    // find highest price uder 10$

const highestProductUnder10 = products
  .filter(product => product.price < 10)
  .reduce ( (max, currPrice) => {
    if ( max.price > currPrice.price){
      return max;
    }
    return currPrice;
  });

//console.log(highestProductUnder10);

//total of all products over 10$
// Result: 239.97

const totalOver10 = products
  .filter(product => product.price > 10)
  .reduce ( (sum, currPrice) => (sum + currPrice.price), 0)
  .toFixed(2);

//console.log(totalOver10);

const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

// groceryTotal should be: 9.47
/*Using the filter and reduce methods on the purchaseItems array, add the
 total price of all the groceries (items with a dept. of groceries). Store the
 total price in the groceryTotal variable.
 */

groceryTotal = purchaseItems
  .filter(item => item.dept === 'groceries')
  .reduce( (sum, item) => sum + item.price, 0);
//console.log(groceryTotal);
