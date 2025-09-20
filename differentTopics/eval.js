// window.eval либо new Function() case; eval — не используется
// eval(code) — позволяет выполнить строку кода 

let result = eval(code);
var code = 'alert("Privet")';

// eval выполняется в текущем лексическом окружении
function f() {
  let a = 2;

  eval('console.log(a)');
}

f();

// Без use strict у eval не будет 
// отдельного лексического окружения, 
// поэтому x и f будут видны из внешнего кода.
