const person = {
  id: 2,
  name: 'Dmitrii',
  age: 56,
  town: 'moscow',
  something: null,
}

const student = {
  id: 1,
  name: 'olga',
  age: 21,
  city: 'moscow',
  university: 'financial university under the government of the russian federation',
}

const { age, town, something } = person; // деструктуризация объекта
console.log(age, town, something);

console.log(typeof person)
