function goodbye(name, name2) {
  console.log(`Goodbye, dear ${name ? name : name2}`)
}

let timerId = setTimeout(goodbye, 1000, "Дима", "Дмитрий"); 
// Вызов setTimeout возвращает «идентификатор таймера» timerId, 
// который можно использовать для отмены дальнейшего выполнения.  

// Node.js — timerId == object
// Browser — timerId == number;

let timer2IdToCancel = setTimeout(
  goodbye,
  3000,
);

clearTimeout(timer2IdToCancel);


// setInterval — вызывает функцию каждый n-секунд

let timerIdForInterval = setInterval(goodbye, 2000, "Валерий");

setTimeout(() => {
  clearInterval(timerIdForInterval);
  console.log('Interval Stopped');
}, 5000);

// Регулярно можно запускать через ВЛОЖЕННЫЙ setTimeout
/*
let timeringId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000);
}, 2000);

// 🚀 Вложенный setTimeout позволяет задать задержку между выполнениями более точно, чем setInterval.
// вместо
/*
let i = 1;
setInterval(function() {
  func(i);
}, 100);
**/
// можно
//let j = 1;
//setTimeout(function run() {
  //func(j);
  //setTimeout(run, 100);
//}, 100);

// ❤️‍🔥 ВложенныйsetTimeout гарантирует фиксированную задержку (здесь 100 мс). Это потому, что новый вызов планируется в конце предыдущего.
