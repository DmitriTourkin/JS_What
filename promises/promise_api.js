// Class Promise содержит 6 статических методов 
let promise = Promise.all([
  new Promise(res => setTimeout(() => res(1), 3000)),
  new Promise((_, rej) => setTimeout(() => rej(new Error("Допустим тут ошибка во втром промисе")), 5000)),
  new Promise(res => res('ура!'))
]); // Новый пропис, его результат — результаты выполненных в iterable объекте промисов

promise
.then(result => console.log(`result: ${result}`))
.catch(err => {
  console.log(`Ошибка: — ${err}`);
  return new Promise((res, rej) => {
    res('Обработали ошибку, вернул новый промис');
  })
})
.then(inputtingValue => console.log(`inputtingValue: ${inputtingValue}`))

// Если один промис бэкает ошибку, то остальные результаты игнорятся.
// Promise.all не прерывает выполнение предыдущий, он просто их динамит. 

Promise.all([
  new Promise(resolve => setTimeout(() => resolve("/1st, 5 seconds/"), 5000)),
  new Promise(resolve => setTimeout(() => resolve("/2nd, 3 seconds/"), 3000)),
  new Promise(resolve => setTimeout(() => resolve("/3rd, 1 second/"), 1000)),
]).then(result => console.log(`Promise.all result: ${result}`));

let stupidPromise = new Promise(resolve => {
  setTimeout(resolve.bind(null, "Привет, тут новая функция, явно переданная"), 10000);
})

stupidPromise.then(result => console.log(result));