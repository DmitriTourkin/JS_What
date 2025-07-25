// Обработка ошибок
// Обрабатывает ошибки только корректного JS-кода. Ошибка парсинга не работают.

try {
  console.log('Действия');
} catch(err) {
  console.log('Ошибка возникла');
}
// СИНХРОННО работает: поэтому ошибки setTimeout try-catch не поймает, т.к. функция сработает «позже»
`try {
  setTimeout(function() {
    noSuchVariable;
  }, 1000);
} catch (e) {
  console.log('Не сработает');
}`

// Чтобы поймать исключение внутри запланированной функции, 
// try..catch должен находиться внутри самой этой функции

setTimeout(function() {
  try {
    noSuchVariable;
  } catch {
    console.log('Поймана ошибка в ходе выполнения!');
  }
})

// Объект ошибки. Структура
// name (имя), message (сообщение о деталях), stack (стек о последовательных вложенных вызовах, для отладки),
try {
  lslsls;
} catch (errObject) {
  console.log(`name: ${errObject.name}`);
  console.log(`message: ${errObject.message}`);
  console.log(`stack: ${errObject.stack}`);
}