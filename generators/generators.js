// Функции возвращают одно-единственное значени
// Генераторы могут порождать множество значений
// — позволяют создавать потоки данных, работая с перебираемыми объетками

// Функция-генератор ВОЗВРАЩАЕТ объект-генератор, управляющий её выполнением
function* generateSeq() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSeq();
console.log(generator) // Object [Generator] {}

// next() — основной метод генератора 
let one = generator.next();
console.log(JSON.stringify(one)); // {"value":1,"done":false}

// Генераторы, благодаря next, являются перебираемыми объектами
// Значения можно перебирать через for .. fo

let yetGenerator = generateSeq();
for (let value of yetGenerator) {
  console.log(value);
}

// значенеи 3 выведено не будет, т.к игнорирует значение при свойтсве done:true
// Если нам нужны ВСЕ значения, то должны быть yield везде.

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generateSequence();
for (let value of gen) {
  console.log(value);
}

// Т.к генераторы — перебираемые, мы моежм использовать всю функциональность с этим свойством
let sequence = [0, ...generateSequence()];

// Ранее был создан range. 
// Можно использовать функцию-генератор для итерации, указав её в Symbol.iterator()

let range = {
  from: 0,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value ++) {
      yield value;
    }
  }
};

console.log([...range])


// Композиция генераторов
function* generateNumberSeq(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// допустим мы хотим использовать эту функцию для генерации более сложных последовательностей

function* generatePasswordCodes() {
  yield* generateNumberSeq(45, 57);
  yield* generateNumberSeq(65, 90);
  yield* generateNumberSeq(97, 122);
}

// директива yield*  делегирует выполнение другому генератору, перебирает генераьтор
// gen и прозрачно направление его вывод наружу

let str = '';

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str);

// yield — работает в обе стороы
// если имеется аргумент — yeild передает его извне В ГЕНЕРАТОР
// в обратном случае — из генератора

function* gener() {
  let result = yield "2 + 2 = ?"; // передаёт во внешний код, ожидаем ответа
  console.log(result);
}

let hi = gener();
let question = hi.next().value;
// question.next(4); // передаём результат в генератор



// Можно передать не только результат, но и ошибку

// Чтобы передать ошибку в yield, нужно вызвать generator.throw(err)

function* generateGenerator() {
  try {
    let result = yield "2 + = ?";
    console.log("Сюда программа не дойдёт, т.к. будет исключение");
  } catch (e) {
    console.log(e);
  }
}

let generator5 = generateGenerator();
let anotherQuestion = generator5.next().value;
generator5.throw(new Error("Ответ не найден в моей базе данных"))

// Если ошибка не обрабатывается внутри генератора, она вываливается во внешних код.

function* pseudoRandom(seedNum) {
  let previous = seedNum;
  while (true) {
    previous = previous * 16807 % 2147483647;    
    yield previous;
  }
}

let OnSeedGenerator = pseudoRandom(1);
console.log(`1st: ${OnSeedGenerator.next().value}`); 
console.log(`2nd: ${OnSeedGenerator.next().value}`); 
console.log(`3rd: ${OnSeedGenerator.next().value}`);