const [firstName, lastName] = 'Ilya Igorevich'.split(' '); // копируются значения из массива
const [one_1,,three_3] = [1, 2, 3]; // опускать ненужные элементы

// Деструктурирующее присванивание работает с любым ПЕРЕБИРАЕМЫМ объектом
let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

const [he, she, ...rest] = ['John', 'Maria', "ex1", 'ex2', 'ex3'];
console.log(rest);

let user = {
  firstName: 'Dima',
  surname: 'Tourkin',
  age: 21,
  isStudent: false,
}

for (let [key, value] of Object.entries(user)) {
  console.log(`key=${key} и value=${value}`);
}


// деструктуризация ОБЪЕКТОВ
let params = {
  width: 100,
  height: 200,
  size: 50,
}

let {width: identifier, height: h = 'hello', size} = params;
console.log(identifier);
console.log(h); // дефолтное значение 'hello', если не будет свойства
console.log(size);

let function_params = {
  width: '100vw',
  height: '100vh',
  items: [
    'item1', 
    'item2'
  ],
}

function showMenu({title = 'Untitled', width: w = 100, height: h = 200, items: [it1, it2]}) {
  console.log(title);
  console.log(w);
  console.log(h);
  console.log(it1, it2);
}

console.log('--------------');
showMenu(function_params);
