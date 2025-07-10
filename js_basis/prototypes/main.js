
// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
let animal = {
  eats: true,
}

let rabbit = {
  jumps: true,
}

rabbit.__proto__ = animal;
Object.setPrototypeOf(rabbit, animal);

/*
Когда alert пытается прочитать свойство rabbit.eats (**), 
его нет в rabbit, поэтому JavaScript следует по ссылке [[Prototype]] (скрытое свойство)
и находит его в animal (смотрите снизу вверх):
 */

// Если у нас есть метод в animal, он может быть вызван на rabbit:
const animal_2 = {
  eats: true,
  walks() {
    console.log('пошёл')
  }
}

const rabbit2 = {
  jumps: true,
  __proto__: animal_2,
}

rabbit2.walks();

/*
Есть только два ограничения:
1. 
Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить 
__proto__ по кругу.
2. Значение __proto__ может быть объектом или null. 
Другие типы игнорируются.* */



// обычно для записи не исплользуется прототип, но если это геттер/сеттер, то вызов оттуда
let normal_user = {
  name: "Dima",
  surname: "Tourkin",
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

let my_admin = {
  __proto__: normal_user,
  isAdmin: true,
}

my_admin.fullName = "Olga Belova";
console.log(my_admin.name);
console.log(my_admin.surname);

//данные об объектах this сохраняются в объект, а не в объекте-родителе
// даже если мы вызываем функцию из прототипа от родителя

// Для обхода КАК собственных, ТАК и унаследованных свойствам объект --- for .. in
Object.keys(my_admin) // только по собственным
for (let prop in my_admin) {
  console.log(prop);
}
