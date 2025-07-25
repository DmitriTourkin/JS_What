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

// Использование try-catch
const incorrectJSON = "{некорретный}";

try {
  let user = JSON.parse(incorrectJSON);
  console.log(user.name);
} catch (e) {
  console.log('В данных ошибка, не получилось получить данные');
  console.log(e.name);
  console.log(e.message);
}

// throw <объект ошибки> (любоей: примитив, объект);
// Конструкторы встроенных ошибок: Error, SyntaxError, ReferenceError, TypeError
let message = "Моё сообщение для ошибки"
let error = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);

// В конструкторе name — в точности название конструктора
try {
  let user = JSON.parse(incorrectJSON);
  if (!user.name) {
    throw new SyntaxError("У пользователя нет имени, некорректные данные"); // Обяз. new
  }
} catch (e) {
  console.log(`JSON Error --> ${e.message}`);
}

// Проброс исключение 
// catch - обрабатывает только известные ему исключения. Если мы не знаем как обработать
// то пробрасываем объект ошибки их через throw
// Пример: обработка только SyntaxError

let json = `{ "age": 30}`;
try {
  let user = JSON.parse(json);
  
  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }

  blabla(); // ошибка неожиданная
} catch (e) {
  if (e.name == "SyntaxError") {
    console.log(`JSON Error: ${e.message}`);
  } else {
    throw e;
  }
}