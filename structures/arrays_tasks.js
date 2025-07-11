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

// t2

const filterRange = (arr, a, b) => {
  return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let w = [5, 3, 8, 1];

filterRangeInPlace(w, 1, 4);
console.log(w);