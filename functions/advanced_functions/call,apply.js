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