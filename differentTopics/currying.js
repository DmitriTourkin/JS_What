const _ = require('lodash');

`Карирование — трансформация функции таким образом,
чтобы они принимали аргументы в форме f(a)(b)(c).

Карирование просто трансформирует, не вызывает`

function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    }
  }
}

// 1. Фукнция возвращает обёртку, сохраняя lexical env (a)
// 2. Вторая обёртка возвращает f, уже имея lex_env a и b 


function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));


// Зачем каррирование? 
// Создавать свои частично применённый функции для удобства 

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const curriedLog = _.curry(log);

curriedLog(new Date(), 'VITAL', 'Hello');

const logNow = curriedLog(new Date());
logNow('CRUCIAL')('Curried');
const logNowCrucials = logNow('CRUCIAL');

logNowCrucials('Сообщение 1');
logNowCrucials('Сообщение 2');


// Продвинутая реализация каррирования для n+ аргументов
function fnCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function pass(...arg2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

