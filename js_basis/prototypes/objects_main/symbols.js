const id = Symbol("Уникальный ключ номер");
const number = Symbol("Уникальный общий Номер");

let human = {};
human[id] = '5';
human[number] = 'приветик';
human.name = 'Ellie Miller';

console.log(human);

for (let key in human) {
  console.log('Привет!')
  console.log(key, human[key]); // символы не отображаются
}

const user_1 = Object.create(Object);
console.log(user_1.__proto__ === Object);

const user_2 = Object.create({});
console.log(user_2.__proto__ === Object);

// Глобальные символы
let globalSymbol = Symbol.for("name") // key = name
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));