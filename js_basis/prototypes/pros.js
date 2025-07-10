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

console.log(Object.keys(my_admin)) // только по собственным

obj_props_all = []

for (let prop in my_admin) {
  obj_props_all.push(prop);
}

console.log(obj_props_all);

