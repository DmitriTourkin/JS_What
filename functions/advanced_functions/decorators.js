// Декоратор — функция-обёртка, расширяющий, добавляющий функциональность к любой функции. 
// Ф-О, которая принимает ДРУГУЮ функцию и изменяет её поведение.
// Функция-обёртка «Кеширование»

function slow(x) {
  return x * 10;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) { // обёртка
    if (cache.has(x)) {
      return cache.get(x);
    } 

    let result = func.call(this, x); // для работы, ищменено с func(x);
    cache.set(x, result);
    return result;
  }
}

// Премущества декорирования
`
1. Функцию-обёртку можно переиспользовать.
2. Логика кеширования является отдельно, она не уличивает сложность функции slow
3. При необходимости декораторы можно объединять в несколько
`

slow = cachingDecorator(slow);
console.log(slow(20));

` Передача контекста — декоратор выше не подходит для работы с методами объекта`
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    return x * this.someMethod();
  }
}

worker.slow = cachingDecorator(worker.slow);
console.log('hi', worker.slow(20)); // error вызов передаёт орги методу, но без контекста.



// Единственная разница в синтаксисе между call и apply состоит в том, что call ожидает список аргументов, в то время как apply принимает псевдомассив.
function fn() {
  console.log('function');
}

let obj = {
  name: 'Дима'
}

fn(1,2,3);
fn.call(obj, 1, 2, 3); // одинакого
fn.apply(obj)
// ❤️‍🔥 Передача всех аргументов вместе с контекстом другой функции 
// называется «перенаправлением вызова» (call forwarding).

let wrapper = function() {
  return func.apply(this, arguments);
};



// Заимтсоввание метода
function hash() {
  return arguments[0] + ',' + arguments[1];
}

// Сделаем универсальнее
function hash2() {
  console.log([].join.call(arguments));
  // Берём call, чтобы выполнить метод над контекстом, у псевдомассивов нет метода;
}