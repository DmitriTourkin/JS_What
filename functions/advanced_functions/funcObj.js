function mySmFn() {
  console.log('Привет');
}

console.log(mySmFn.name);

let sayHi = function() {
  console.log('hi');
}

console.log(sayHi.name); // name присваивается корректно даже если функция создаётся без имени и тут же присваивается

// Работает даже в случае присваивания значения по умолчаниию
function f(sayHi = function() {}) {
  console.log(sayHi.name); // контекстное имя
}

let arr = [function() {}];
console.log(arr[0].name) // "" <пуста строка>

// LENGTH — количество параметров в её объявлении
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1 
console.log(f2.length); // 2 
console.log(many.length); // 2

 //🚀 Свойство length иногда используется для интроспекций в функциях, которые работают с другими функциями.
 function ask(question, ...handlers) {
  let isYes = true;

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
 }

 // для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа

// Это частный случай так называемого Ad-hoc-полиморфизма – обработка аргументов в зависимости от их типа или, как в нашем случае – 
// от значения length. Эта идея имеет применение в библиотеках JavaScript.

// NFE (Named Function Expression)
let sayHello = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`)
  } else {
    func("Guest");
  }
}

// почему?
// Функция может быть присвоена другой переменной, и тогда код начнёт выдавать ошибки, если
// снова обратиться к sayHello

sayHello();

// Внешний код все ещё содержит переменные sayHi и welcome, 
// но теперь func – это «внутреннее имя функции», таким образом она может вызвать себя изнутри.

