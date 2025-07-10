// Весь код внутри класса находится в строгом режиме.
// Методы класса являются неперечислимыми (нельзя поймать через for .. in)
// функция через class помечается специальным внутренним свойством [[isClassConstructor]]:true
class Student {
  constructor(id, name, groupName) {
    this.id = id;
    this.name = name;
    this.group = groupName
  }
  sayHello() {
    console.log('hello, teacher!')
  }
  sayGoodbye() {
    console.log('goodbye yall');
  }
}

class Teacher {
  prop1 = 'helloProp2' // это именно свойство объекта, а не прототипа;
  prop2 = 'helloProp2' // это именно свойство объекта, а не прототипа

  constructor(id, faculty, age) {
    this.id = id;
    this.faculty = faculty;
    this.age = age;
  }

  set faculty(facultyName) {
    this.faculty = facultyName;
  }

  get faculty() {
    return this.faculty;
  }
}

console.log(typeof Teacher); // function
console.log(typeof Teacher.prototype); //object
console.log(Object.getOwnPropertyNames(Teacher.prototype)); //т.к. prototype это объект, можно посмотреть его значения

let VKUser = class { // class Expression
  sayHello() {
    console.log('hi VK!');
  }
}

let VKUserNamedClassExpression = class VKUser { // Named Class Expression
  sayHello() {
    console.log('hello, dear VK!');
  }
  print() {
    console.log(VKUser); // имя класса доступно только внутри.
  }
}

new VKUserNamedClassExpression().print();