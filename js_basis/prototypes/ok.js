let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

// obj.toString === obj.__proto__.toString === Object.prototype.toString

let student = {
  name: 'Dima',
  surname: 'Belov'
}

let copy = Object.create(student);

console.log(Object.getPrototypeOf(copy));

