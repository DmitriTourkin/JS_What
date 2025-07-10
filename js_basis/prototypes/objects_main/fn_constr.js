// функция-конструктор вызывает только с помощью оператора new.

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// 1. создаётся пустой объект, он присваивается в this
// 2. выполнение тела функции
// 3. возвращается значение this.


let user = new User('Alina');
console.log(user);

const immiediate_user = new function () {
  this.name = 'bob';
  this.age = 30;
}

console.log(immiediate_user);

