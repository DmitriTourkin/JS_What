/*
У классов есть ключевое слово "super" для таких случаев.

super.method(...) вызывает родительский метод.
super(...) для вызова родительского конструктора (работает только внутри нашего конструктора).
* */

class Animal {
  fight = 'hello'
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  stop() {
    this.speed = 0;
    console.log(`$this.name} остановился`)
  }
}

class Cat extends Animal {
  fight = 'cat'
  constructor(name, earLength) {
    super(name); // всегда вызывать super, потому что у функции-конструктора наслед. класса своя логика для движвка, он помечен как ConstructorKind=derived; вызывается конструктор РОДИТЕЛЯ.
    this.earLength = earLength;
    this.speed = 0;
  }
  hide() {
    super.stop();
    console.log(`${this.name} спрятался`)
  }
}

let cat = new Cat('Котик');
cat.hide();


/*
Другими словами, родительский конструктор 
всегда использует своё собственное значение поля, а не переопределённое.
И только потом инициализируеются поля в наследуемом классе, поэтому name=animal, если конструктор только у родителя
* */
console.log(cat.fight);