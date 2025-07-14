const id = Symbol('Привет'); 

let user = {
  name: 'hello',
  age: 25,
  isAdmin: true,
  sayHi() {
    console.log('Hello World!');
  },
  [id]: 'в символе храниться',
}

const entriesArray = Object.entries(user);

let result = Object.getOwnPropertySymbols(user);
let another_result = Reflect.ownKeys(user);
console.log(another_result);
console.log(result);

console.log(Object.entries(user));