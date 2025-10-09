// №6

const { multiply } = require("lodash");

const math = {
  value: 5,
  calculate: function(x, y) {
    return this.value * (x + y);
  }
};

function withLogging(fn) {
  let boundFn = fn.bind(math);

  return function(...args) {
    return boundFn(...args);
  }
}

math.calculate = withLogging(math.calculate);
console.log(`math.calculate (logged): ${math.calculate(5, 6)}`);

// №7

const statistics = {
  average: function() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  }
}

const averageWrapper = statistics.average;
const data = [10, 20, 30, 40];

console.log(`AW: ${averageWrapper.apply(statistics, data)}`);

// №8.

const greeter = {
  template: 'Hello, {name}!',
  greet: function(name, age) {
    return this.template.replace('{name}', name) + ` You are ${age} years old`;
  }
}

const clearGreet = greeter.greet;
const halfCleanGreet = clearGreet.bind(greeter, 'John');
console.log(halfCleanGreet(21));

// №9.
const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };

function calculate(a, b) {
  return this.multiplier * (a + b);
}

function calculateWrapper() {
  return function(...args) {
    const context = this !== globalThis ? this : context1;
    return calculate.call(context, ...args);
  }
}

console.log("Bound Context 1 but called Context 2", calculateWrapper().call(context2, 5, 5))
console.log("Called without call, with context", calculateWrapper()(5, 6))

// №10 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function(prefix) {
  return `${prefix}, I'm ${this.name}, ${this.age} years old!`;
}

const introduceWrapper = Person.prototype.introduce;
const person = new Person('Bob', 25);

console.log(introduceWrapper.apply(person, ['Yo']));