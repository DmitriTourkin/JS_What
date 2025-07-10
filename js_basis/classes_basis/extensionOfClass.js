class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} остановился. Его скорость сейчас равно ${this.speed}`);
  }
}

let animal = new Animal("Ёжик");
animal.run(5);
animal.stop();

console.log(typeof animal);


class Rabbit extends Animal {
  jump() {
    console.log('Кролик прыгнул!');
  }
}

let rabbit = new Rabbit('Кролик-Джо');
rabbit.run(5);
rabbit.jump();

/*Внутри ключевое слово extends работает по старой доброй механике прототипов. 
Оно устанавливает Rabbit.prototype.[[Prototype]] в Animal.prototype. 
Таким образом, если метода не оказалось в Rabbit.prototype, 
JavaScript берет его из Animal.prototype.*/


// Наследоваться можно от любой функции, где есть класс
function f(phrase) {
  return class {
    sayHi() {
      console.log(`Фраза метода класса функции f ${phrase}`);
    }
  }
}

class Home extends f('Homie') {
  whatsap() {
    console.log(`this = ${this.constructor.name}`)
    console.log("what's up")
  }
}

let home = new Home();
home.sayHi();
home.whatsap();