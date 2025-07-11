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

