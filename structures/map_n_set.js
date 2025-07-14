// повторена тема Map, Set
const unique = (arr) => {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// WeekMap
// 1. ключ только объект
// 2. set, get, delete, has, 
let john = { name: 'John'};
let john2 = { name: 'John'};
let weakMap = new WeakMap();
weakMap.set(john, 'значение');

console.log(weakMap.get(john));
console.log(weakMap.has(john))
console.log(weakMap.has(john2))
weakMap.delete(john);


// WeekMap подходит для кеширования

function doSomething(obj) {
  return 25;
}

let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = doSomething(obj);
    cache.set(obj, result);
  }
  return cache.get(obj);
}

// WeekSet — ТОЛЬКО объекты
let visitedSet = new WeakSet();

let johnny = { name: 'john' };
let peter = { name: 'peter' };
let mariah = { name: 'mariah' };

visitedSet.add(johnny);
visitedSet.add(peter);
visitedSet.add(mariah);

visitedSet.has(johnny);
visitedSet.has(mariah)
johnny = null;

console.log(visitedSet.has(mariah));
console.log(visitedSet.has(johnny));

// ex1, прочтение сообщения 
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log('message is read? -- ', readMessages.has(messages[0]))
console.log('message is read? -- ', readMessages.has(messages[1]))

// ex2
let datesOfReadMessages = new WeakMap();

let additionalDays = 0;

for (let i = 0; i < messages.length; i++) {
  datesOfReadMessages.set(messages[i], new Date(2025, 6, 20 + additionalDays));
  additionalDays +=2 ;
}

for (let i = 0; i < messages.length; i++) {
  console.log(datesOfReadMessages.get(messages[i]));
}
