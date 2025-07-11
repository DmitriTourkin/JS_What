// t1.

const myCamelize = (str) => {
  let words = str.split('-');
  return words.reduce((thread, value) => thread += value[0].toUpperCase() + value.slice(1));
}

console.log(myCamelize("background-color"));
console.log(myCamelize("list-style-image"));
console.log(myCamelize("-webkit-transition"));

// другое решение, которое предлагают
const camelize = (str) => {
  return str
  .split('-')
  .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));