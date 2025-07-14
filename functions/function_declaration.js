// Function Declaration

function showMessage() { 
  console.log('Привет');
}

// Параметры (значение (аргумент) внутри параметра копируется
let naming = 'Дмитрий'; 

function myFunction(name, text) {
  borya = name;
  name = 'Дима локальная';
  console.log(`Привет, ${name}, ${borya}! Твоё сообщение: ${text}`)
}

myFunction("Боря", "Дарова!");
console.log(naming);



function defaultParams(name = "Алина", text) { 
  console.log(`name: ${name}, text: ${text}`)
  return;
  // под дефолу — undefined, если нет значения. и можно задать само дефолнтое/либо даже функцию
}

console.log(defaultParams());  // пустой return возвращает undefined

function anotherFunction() {
  let n = 5;
  return (
    "Привет " + n + "-й друг!"
  );
}