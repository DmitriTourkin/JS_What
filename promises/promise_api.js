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

// Часто применяемый трюк — пропустить массив через map, 
// которая для каждого элемента создаст задачу-промис, 
// и затем обернуть получившийся массив в Promise.all

let urls = [
  'https://api.github.com/users/ddiimmuuzz',
  'https://api.github.com/users/ddiimmuuzz',
  'https://api.github.com/users/ddiimmuuzz',
];

let requests = urls.map((url) => fetch(url));

Promise.all(requests)
.then(responses => {
  responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  )
  return responses;
})
.then(responses => Promise.all(responses.map(r => r.json())))
.then(users => users.forEach(user => console.log(user.name)));

// Если в iterable объекте не промис, он остаётся как есть
Promise.all([
  new Promise(res => setTimeout(() => res('ура!'), 1000)),
  2, 
  3
]).then(result => console.log(result));


// Promise.all — всё или ничего.

// Promise.allSettled — мы ждём все промисы, неважно от результата
const otherUrls = [
  'https://api.github.com/users/ddiimmuuzz',
  'https://api.github.com/users/zhukanov',
  'https://api.github.com/users/mazhirko'
];

// Результат: массив из объектов 
// {status:"fulfilled", value:результат}
// {status:"rejected", reason:ошибка}

Promise.allSettled(otherUrls.map(url => fetch(url)))
.then(results => {
  results.forEach((result, idx) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[idx]}: ${result.value.status}`)
    } 
    if (result.status == "rejected") {
      console.log(`${urls[idx]}: ${result.reason})`);
    }
  })
})

if (!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
      status: 'fulfuilled',
      value: value
    }), error => ({
      status: 'rejected',
      reason: error
    }))))
  }
}


Promise.race([
  new Promise(res => setTimeout(() => res('2 seconds'), 2000)),
  new Promise(res => setTimeout(() => res('5 seconds'), 5000))
]).then(result => console.log(`Результат первого выполненного: ${result}`));

// Promise.any — берёт первый УСПЕШНЫЙ результат из прописов
Promise.any([
  new Promise(res => setTimeout(() => res('2 seconds'), 5000)),
  new Promise(res => setTimeout(() => res('5 seconds'), 1000))
]).then(result => console.log(`ПЕРВЫЙ УСПЕШНЫЙ РЕЗУЛЬТАТ: ${result}`))

// Все ошибки хранятся в объекте ошибки типа AgregateError
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ошибка!
  console.log(error.errors[1]); // Error: Ещё одна ошибка!
});


// Promise.resolve/reject
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let jsonResult = await response.json();
    return jsonResult;
  } 
  throw new Error(response.status);
}

loadJson('no-such-user.json');

