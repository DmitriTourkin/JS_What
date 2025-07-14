// JSON
// число в JSON остаётся числом
JSON.stringify(1)  // 1
JSON.stringify('test') // "test"
JSON.stringify(true); // true
JSON.stringify([1, 2, 3]); // [1,2,3]

// 1. JSON.stringify(value, replacer (массив свойств, что оставляем ЛИБО функция fn(key,value)), space)
let id = Symbol("id");

let user = {
  name: "Василий Иванович",
  age: 21,
  sayHello() {
    console.log('hi!')
  },
  [id]: 'тут тоже что-то лежит'
}

let result = JSON.stringify(user);
console.log(result); // {"name":"Василий Иванович","age":21} // уходят функции-методы, undefind и symbol

// Убрать значения, которые цикличны, 
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

// result: {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
`
Первый вызов – особенный. Ему передаётся специальный «объект-обёртка»: {"": meetup}. 
Другими словами, первая (key, value) пара имеет пустой ключ, а значением является целевой объект в общем. 
Вот почему первая строка из примера выше будет ":[object Object]".

Идея состоит в том, чтобы дать как можно больше возможностей 
replacer – у него есть возможность проанализировать и заменить/пропустить даже весь 
объект целиком, если это необходимо.

. Аргумент space используется исключительно для вывода в удобочитаемом виде.


У каждого обьекта есть встроенный метод toJSON, который вызывается JSON.stringify
`
let car = {
  engine: 'Wolkswagen 3500',
  toJSON() {
    return `${this.engine} метод JSON`;
  }
}

console.log(JSON.stringify(car));
// 2. JSON.parse(value (str), reviver (fn));
// reviver поволяет проихвести действие на ключом, значеним. Вернуть дату например

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let resultOfParse = JSON.parse(str, (key, value) => {
  if (key == 'date') return new Date(value);
  return value;
})

console.log(resultOfParse);