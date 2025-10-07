// Proxy — объект, оборачивается вокруг другого объекта, чтобы выполнить различные действия 

let target = {};

let proxy = new Proxy(target, {});

proxy.test = 5

console.log(target.test) // свойство в target
console.log(proxy.test) // свойство в target

for (let key in proxy) {
  console.log(key)
}
