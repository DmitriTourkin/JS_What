const { max } = require("lodash");

// Task 1
const ucFirst = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(ucFirst('вася') == "Вася");

// Task 2. 
const checkSpam = (str) => {
  let lowerCaseLine = str.toLowerCase();
  if (str.includes('viagra') || str.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam('innocent rabbit') == false);

// Task 3
console.log('------------\n');

const truncate = (str, maxlength) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) : str;
}

let result = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
console.log('result: ', result + '...');

// Task 4
function extractCurrencyValue(line) {
  let currencyValue = Number(line.slice(1));
  return currencyValue;
}

console.log( extractCurrencyValue('$120') === 120 );
