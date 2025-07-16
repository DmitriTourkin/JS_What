// 2 типа свойств.
// Первый — свойства-данные (data properties)


// ВТОРОЙ — свойства-аксессиоры (accessor properties) — функции, для присвоения и получения знаения 

let obj = {
  get propName() {
    console.log('срабатывают при чтении obj.propName');
  },
  set propName(value) {
    this.propName = value
   }
}

let user = {
  name: "Дима",
  surname: 'Королёв',
  get fullName() { // виртуальное свойство fullName
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
}

/**
 * Дескрипторы свойств-аксессоров отличаются от «обычных» свойств-данных.

Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.

То есть, дескриптор аксессора может иметь:

get – функция без аргументов, которая сработает при чтении свойства,
set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
enumerable – то же самое, что и для свойств-данных,
configurable – то же самое, что и для свойств-данных
 */

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

// Умные геттеры и сеттеры. 
// Если нужна дополнительная логика проверки, то можно
// хранить значение в _name, а само свойство name будет обёрткой доступа к свойству

let student = {
  get name() {
    this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log('Короткое имя, не установлено.')
      return;
    }
    this._name = value;
  },
}

// Использование для совместимости
// Мы начали писать age как свойтсво-данные, но код изменился, нужно хранить birthday. Но age
// используется другими разработчиками. Тем более, это хорошее свойтсво, полезное.

function Student(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  })
}

let john = new Student("John", new Date(1992, 6, 1));

console.log( john.birthday ); // доступен как день рождения
console.log( john.age );      // ...так и возраст

console.log(john);