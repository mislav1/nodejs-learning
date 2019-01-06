const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const total = prices.reduce( (sum, price) => sum + price, 0);

console.log(total);

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
  // Result: 4
  // How many names starts with 'G'?
const gNames = names.reduce( (result, name) => {
  if (name.charAt(0) === 'G') {
    return result + 1;
  }
  return result;
}, 0);

console.log(gNames);

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;
// numberOf503 should be: 3
// How many numbers start with (503)?

numberOf503 = phoneNumbers.reduce( (count, number) => {
  if (number.substring(1,4) === '503') {
    return count += 1;
  }
  return count;
}, 0);

console.log(numberOf503);
