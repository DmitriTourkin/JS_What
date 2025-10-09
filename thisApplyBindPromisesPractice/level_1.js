const { multiply } = require("lodash");

// №1 
const user = {
  name: 'Dima',
  getName: function() {
    return this.name;
  }
}

const getWithoutContext = user.getName;
const getNameWrapper = user.getName.bind(user);
// console.log(getNameWrapper());
// console.log(getWithoutContext.call(user));

// №2
const calculator = {
  base: 10,
  add: function(x, y) {
    return this.base + x + y;
  }
}

const addWrapper = calculator.add;
console.log(addWrapper.call(calculator, 5, 6));

// №3
const formatter = {
  prefix: "Result: ",
  format: function(a, b, c) {
    return `${this.prefix} ${a + b + c}`;
  }
}

const formatWrapper = formatter.format;
const numbers = [1, 2, 3];
console.log(formatWrapper.apply(formatter, numbers));

// №4
const multiplier = {
  factor: 2,
  multiply: function(a, b) {
    return this.factor * a * b;
  }
};

const multiplierWrapper = multiplier.multiply.bind(multiplier, 10);
console.log(multiplierWrapper(5));

// №5
const counter = {
  value: 0,
  increment: function(step = 1) {
    this.value += step;
    return this;
  },
  getValue: function() {
    return this.value;
  }
}

const incrementWrapper = counter.increment.bind(counter);
console.log(incrementWrapper(5).increment(8).increment(6).getValue());