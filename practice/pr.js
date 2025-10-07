// #1
let promise1 = new Promise(resolve => {
    setTimeout(
      () => resolve("Успех!"), 
      3000
    )
    });
promise1.then(() => console.log("Выполнилось успешно через 3 секунды!"));

// #2 
const rejectedPromise = new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error("Что-то пошло не так!")), 
      1000
    );
});

rejectedPromise.catch(e => console.log(e.message));

// #3

function delay(ms) {
  return new Promise(res => {
    setTimeout(res, ms);
  })
}

delay(3000).then(() => console.log("Выполнено через 3 секунды"));

// #4 
let promise10 = new Promise(resolve => {
  setTimeout(() => resolve(10), 1000);
});

promise10
.then(res => res * 2)
.then(res => res + 5)
.then(res => console.log(res));

// Уровень 2. 
// #5 Promise.all() — skip ALL if error
let promises = [
  new Promise(res => setTimeout(() => res("Один"), 1000)),
  new Promise(res => setTimeout(() => res("Два"), 2000)),
  new Promise(res => setTimeout(() => res("Три"), 3000)),
];

Promise.all(promises)
.then(resultOfAll => console.log(resultOfAll))
.catch(() => console.log('Скипает всё, если здесь хоть в одном ошибка'));

// #6
let twoPromises = [
  new Promise((_, rej) => setTimeout(() => rej(new Error("Слишком медленно")), 500)),
  new Promise(res => setTimeout(() => res("Успех!"), 1000)),
];

Promise.race(twoPromises)
.then(res => console.log(res))
.catch(e => console.log(e.message));

// #7 Promise.allSettled() — независимо, результат всех, объект {status: , value:}
const threePromises = [
  new Promise(res => res('Успешно №1')),
  new Promise((_, rj) => rj(new Error("Ошибка"))),
  new Promise(res => res("Успешно №3")),
];

Promise.allSettled(threePromises)
.then(results => {
  console.log(`Promise.allSettled --Result`)
  results.forEach(result => {
    if (result?.reason) {
      console.log(result.status);
    } else {
      console.log(result);
    }
  })
})

// #8
const promisesForAny = [
  new Promise(res => res('Успешно №1')),
  new Promise(res => res('Успешно #2')),
  new Promise((_, rej) => {
    setTimeout(() => rej(new Error("Ошибка")), 1000)
  }),
]

Promise.any(promisesForAny)
.then(result => console.log(`Promise.any Result --${result}`)) 