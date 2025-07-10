let user_1 = new Object();

let user_2 = {
  name: "Dmitrii",
  age: 21,
  isAdmin: true,
}

delete user_2.isAdmin;

console.log(Object.entries(user_2));

let student = {
  "fullname package": 'FU',
  age: 25,
  isCurrentStudent: true,
}

console.log(student["fullname package"]);
console.log(student.age, student.isCurrentStudent);
console.log(student.__proto__);

function makeUser(name, age) {
  return {
    name,
    age: 30,
  }
}

let new_user = makeUser('Vova', 30);
console.log(new_user);

// Для свойства объекта нет ограничение на именование 
let smth = {
  for: 'hi',
  while: 45,
  return: true
}

console.log(smth);

console.log('while' in smth);


// Упорядоченный свойтсва: сначал ЦЕЛОчисленные в порядка возврастаняи, потом — строки (числа, фразы) по добавлению.
const codes = {
  1: 'США',
  42: 'Швейцария'
}

codes[0] = 'Австралия'
codes['noCode'] = 'Пустое значение'
codes['56.4'] = 'Нецелочисленный'

for (let key in codes) {
  console.log(key);
}

// Клонирование — поверхностной и глубоко
const clone = Object.assign({}, codes);


let screenParameters = {
  mobile: true,
  react: true,
  sizes: {
    width: 100,
    height: 100
  }
}

const weakClone = Object.assign({}, screenParameters);
console.log(weakClone);

const lodash = require('lodash');
const deepClone = lodash.cloneDeep(screenParameters);
console.log(deepClone);

// Методы объектов, this — может быть вне объекта и зависит от контекста

function sayHi() {
  console.log(this.name);
}

// в строго режим this — undefined, если нет объекта и ошибка если нет свойства
// в НЕСТРОГОМ — this — ссылка на глобальный объект window. 
// у СТРЕЛОК нет this.

let cat = {
  name: 'valentine',
}
let dog = {
  name: 'john',
}

dog.f = sayHi;
cat.f = sayHi;

dog.f();
cat.f();