// t1.

const { trim } = require("lodash");

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


// t3
let ar = [5, 2, 1, -10, 8];
ar.sort((item1, item2) => item2 - item1);
console.log(ar);

//t4
let smallArray = ["HTML", "JavaScript", "CSS"];
let sorted = smallArray.toSorted();
console.log('sorted ', sorted);
console.log('original ', smallArray);

function copySorted(array) {
  let copy = array.slice().sort();
  return copy;
}

let result = copySorted(smallArray);
console.log('copySortedresult: ', result);

// t5 — Calculator 
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  }

  this.addMethod = function(symbol, fn) {
    this.methods[symbol] = fn;
  }

  this.calculate = function(str) {
    let [num1, operator, num2] = str.split(' ');
    if (isNaN(num1) || isNaN(num2) || !this.methods[operator]) {
      return NaN;
    } else {
      return this.methods[operator](+num1, +num2);
    }
  }
}

let myCalculator = new Calculator();
console.log(myCalculator.calculate("3 + 5"));
console.log(myCalculator.calculate("3 - 5"));

// t6; Трансформация в массив имён
let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25};
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 30};
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 28};

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);
console.log(names);

// t7. Трансформировать в объекты
let usersMapped = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
})

console.log('user Mapped');
console.log(usersMapped);

// t8.
let arik = [vasya, petya, masha];
let sortedArray = arik.toSorted((user1, user2) => user1.age - user2.age);
console.log('arik');
console.log(sortedArray);

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arik);

// t10
const getAverageAge = (users) => {
  return users.reduce((prev, user) => prev += user.age, 0) / users.length;
}

console.log(getAverageAge(arik));

// t11

// t12
const unique = (arr) => {
  const result = [];

  for (let word of arr) {
    if (!result.includes(word)) {
      result.push(word);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

// t7
let us = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

const groupById = (a) => {
  return a.reduce((obj, currentUser) => {
    obj[currentUser.id] = currentUser;
    return obj;
  }, {});
}

let usersById = groupById(us);
console.log('c ', usersById);