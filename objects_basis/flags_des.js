let user = {
  name: 'John'
};

// writable — можно переписать, другое значение свойства
// enumerable — отображается при перечисления свойств объхекта
// configurable — можно удалить из объекта, атрибуты не могут быть изменены

let descriptionObject= Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptionObject, null, 2));
`{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}`

// Чтобы изменить атрибут дескриптора, defineProperty
// Если свойств нет, оно будет создано. Если флаг не указан явно в дескрипторе в методе, то все они false
let user2 = {}
Object.defineProperty(user2, 'name', {
  value: 'John'
});
let descriptorForUser2 = Object.getOwnPropertyDescriptor(user2, 'name');
console.log(JSON.stringify(descriptorForUser2, null, 2));

` {
   "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}`

// Обратите внимание: configurable: false не даст изменить флаги свойства, 
// а также не даст его удалить. При этом можно изменить значение свойства.

user2.name = 'привет' // да
delete user2.name // нет

// Object,defineProperties 
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
});

console.log(Object.getOwnPropertyDescriptors(user));