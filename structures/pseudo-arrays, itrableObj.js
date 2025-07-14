// Псевдомассивы
let range = {
  0: 0,
  1: 'привет',
  length: 2,
}

// Итерируемые объекты — реализующие метод obj[Symbol.iterator], возвращающий итертор, который позже
// вызывается for .. of.
let ranger = {
  from: 0,
  to: 5
  [Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true};
        }
      }
    }
  }
}
// Объект-итератор отделён от самого объекта

for (let num of ranger) {
  console.log(num);
}
//  Явный вызов итертора 
let str = 'приветик-пистолетик';
let strIterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // выводит символы один за другим
}