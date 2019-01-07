/*
1. Using forEach, add together all the elements in 
the numbers array, and store the total in the variable total.
*/

const numbers = [1, 2, 3, 4, 5];
let total = 0;
numbers.forEach(number => total += number);
//console.log(total);

/*
2. Using forEach, copy only the first 2 characters of each 
string in the days array and store the abbreviations in the 
dayAbbreviations array.
*/

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let dayAbbreviations = [];
days.forEach(day => dayAbbreviations.push(day.substring(0,2)));
//console.log(dayAbbreviations);

/*
3. Using forEach, turn the number strings from the stringPrices 
array into floats and add them all, storing the total in the 
variable priceTotal.
*/

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

stringPrices.forEach(price => priceTotal += parseFloat(price));
//console.log(priceTotal);

/*
4. The split method turns a string into an array. In the case of 
alphabet below, each letter of the string is being turned 
into an element in an array by split. Using forEach, iterate 
over the alphabet array and store each letter in the array noel
except for the L character.
*/

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

alphabet.forEach(letter => {
    if(letter !== 'L') {
        noel.push(letter);
    }
});
//console.log(noel);


/*
5. Using forEach, iterate over the percentages and store all 
percentages over 50 percent in the array upperRange.
*/

const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

percentages.forEach(percentage => {
    if(percentage > 50){
        upperRange.push(percentage);
    }
});
//console.log(upperRange);


/*
6. Using forEach, iterate over the colors array and store the 
hex colors that start with the letter F (ex. #FF0000) in the 
array filteredColors.
*/

const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

colors.forEach(color => {
    if (color.charAt(1) === 'F'){
        filteredColors.push(color);
    }
});
//console.log(filteredColors);


/*
7. Using forEach, capitalize all the strings in the months array 
and store them in the array capitalizedMonths.
*/

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

months.forEach(month => capitalizedMonths.push(month.toUpperCase()));
console.log(capitalizedMonths);





















