const { partial, reverse, initial } = require("lodash");

let array1 = new Array();
let array_with_length_5 = new Array(5);
let array2 = [];
let fullArray = ['John', 'Steward'];

console.log(array_with_length_5);

console.log(fullArray.at(-1)); // 'Steward'
console.log(fullArray[-1]) // undefined;

let queue = [1, 2, 3,];
let stack = [2, 3, 4];

stack.push(5);
stack.pop();

queue.push(7);
console.log(queue.shift());

// Массив — тоже вид объектов, он расширяет объект.
// 1. копируется по ссылке
// 2. не оставлять дыр arr[0] = ..., a[999] = 56;
// 3. отключаются оптимизации движка, если работать с массивом как с объектом

for (let i = 0; i < queue.length; i++) {
  console.log(queue[i]);
}

for (let element of queue) {
  console.log(element);
}

// Длина массива (самый большой индекс + 1)
let a = [5, 7, 2];
console.log(a.length);
a.length = 2;
console.log(a); //[5, 7]

// У массивов нет метода преобразования 
// ни Symbol.toPrimitive, ни valueOf — поэтому приводится к строке
// только toString
`
[] + 1 = "1"
[1] + 1 = "11"
[1,2] + 1 = "1,21"
`
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]);

// Task 1.
const styles = ["Джаз","Блюз"];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.floor(styles.length/2)] = "Классика";
console.log(styles)
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

// Task 2
let arr = ["a", "b"];
arr.push(function() {
  console.log(this);
})

arr[2]();

// Task 3.
function sumInput() {
  const arr = [];
  let input;

  while (true) {
    input = prompt("Введите число: ", 0);
    if (input === "" || input === null || !isFinite(input)) break;
    arr.push(+value);
  }

  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  
  return sum;
}

// Task 4. Подмассив наибольшей суммы
function getMaxSubSum(array) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

// Методы 
// 1. splice (откуда начать, сколько удалить, элемент элементы на замену, элемент на замену])
let ab = ["Повторяю", "и", "закрепляю", 'JS'];
console.log(ab.splice(0, 2, "добрый", 'сказочный'));
console.log(ab.splice(2, 2, "Привет!"));

let example = "Я изучаю JavaScipt".split(" ");
example.splice(2, 0, "интересный", "язык", "программирования");
console.log(example);


// 2. slice(start,end); возвращает вырезанную часть + делает копию массива (если без параметров)
let slicedCopy = example.slice();
console.log('sliced copy: ', slicedCopy); // sliced copy:  
`[
  'Я',
  'изучаю',
  'интересный',
  'язык',
  'программирования',
  'JavaScipt'
]`
let slicedPiece = slicedCopy.slice(-2);
console.log('sliced piece: ', slicedPiece); //sliced piece:  [ 'программирования', 'JavaScipt' ]

// 3. concat
let a1 = [1,2];
let a2 = [3, 4];
let myArray = a1.concat(a2);
console.log(myArray.toString());

// Объекты сохраняются также, даже если походи на массив
// но если есть свойство [Symbol.isConcatSpreadable] : true, то все значения добавляются как обычные элементы
let arrayLike = {
  0: "привет",
  1: "второй элемент",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
}

let m = [1, 2];
console.log(m.concat(arrayLike)); //[ 1, 2, 'привет', 'второй элемент' ] 

// Перебор с приминением функции
m.forEach((value, index, array) => {
  console.log(value, index, array);
})

m.forEach((element) => {
  console.log(element);
})


// Поиск в массиве
let item = 'привет'
m.indexOf(item, 0); // ищет item с позиици {pos} : number, возвращает индекс (-1, если нет) (слева-направо)
m.lastIndexOf(item, 2); // последний индекс (справа-налево)
m.includes(item); // boolean: true/false
// includes правильно обрабатывает NaN
const j = [NaN];
console.log(j.indexOf(NaN)); // -1 (хотя должен быть 0)
console.log(j.includes(NaN)); // true


let result = m.find(function(item, index, array) {}); // если возвращается true, возвращается Item, поиск прерывается. ИНАЧЕ UNDEFINED.

let users = [
  {id: 0, name: "Пётр"},
  {id: 1, name: "Владимир"},
  {id: 2, name: "Ольга"},
];

let user = users.find(item => item.id == 1);
console.log(user);

let usersFiltered = users.filter(user => user.name.includes("В"));
console.log('filtered: ', usersFiltered);

// Преобразования массива
//1. map
let changes = ["Привет", 'ну', 'это', 'мэм'];
let newThings = changes.map((element) => element.length);
console.log(newThings);

// 2. sort(fn) (toSorted(fn) — копирующая версия)
changes.sort((item1, item2) => {
  if (item1.length > item2.length) return 1;
  if (item1.length === item2.length) return 0;
  if (item1.length < item2.length) return -1;
})
console.log(changes);

// 3. reverse (toReversed — копирующая версия)
changes.reverse();
console.log('reversed: ', changes);

// 4. reduce, reduceRight — вычисления значения для всего массива
let initialValue = 0;
let value = changes.reduce(function(acc, item, index, array) {}, initialValue);

console.log(Array.isArray(changes));
console.log(Array.isArray({}));


let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let usersss = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = usersss.filter(army.canJoin, army); //thisArg — передаём конеткст, иначе undefined

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// some (true -- заканчивает), every — (false — заканчивает)