let num = 1e1; // 10
let numnum = 1e-2; //0.01
let num2 = 1e6 //1_000_000
let numWay = 1_000_000;

let sixteenth = 0xff; //255
let binaryNumber = 0b11111111; // 255
let oct = 0o377; // 255

console.log(sixteenth.toString(10));
console.log(binaryNumber.toString(8));
console.log(oct.toString(2));

`если хочется метод прямо на числе, то `
let result = 1234..toString(2);
console.log('result: ', result);

`округления пошли`
let [x, y, z, w] = [Math.floor(3.1), Math.ceil(3.1), Math.round(3.5), Math.trunc(3.5)];
console.log(x, y, z, w);

// Округление: 1. умножение, округление, деление 
// 2. toFixed --> затем унарный + или Number();

let test = 12.36;
console.log(test.toFixed(1));
console.log(+test.toFixed(1));
console.log(Math.round(test)/100);

// НЕТОЧНЫЕ ВИЧИСЛЕНИЯ
console.log(+(0.1+0.2).toFixed(2))
console.log(Object.is(0, 0));
console.log(Number.isFinite());

// Парс числа из строки
console.log(parseInt('100px', 10));
console.log(parseInt(0o377, 10));

console.log(Math.random(0));
console.log(Math.random(0, 1));
console.log(Math.min(10, -2, -5, 100));
console.log(Math.max(10, -2, -5, 100));
console.log(Math.pow(5, 5).toString(2));


// Задачи
function getTwoNumsPlused() {
  let num1 = +prompt("Первое число: ");
  let num2 = +prompt("Второе число: ");

  if (isNaN(num1) || isNaN(num2)) {
    return 'Не найдено число для сложения';
  } else {
    return num1 + num2;
  }
}

let number = 6.35;
console.log(Math.round(6.35 * 10)/10);

const readNumber = () => {
  let num;

  do {
    num = prompt("Введите число: ", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;
  return +num;
}

function randomInteger(min, max) {
  console.log('привет: ', Math.floor(min + Math.random() * (max + 1 - min)));
}

randomInteger(5, 7)