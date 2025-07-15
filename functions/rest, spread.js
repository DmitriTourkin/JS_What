function gettingSomething(arg1, arg1, ...rest) {
  console.log('когда в конце, то ... формирует остаточное');
  
  let arr = [...rest]; // вызывается в функции, происходит расширение

  let str = 'Привет!';
  let strLetters1 = [...str];
  let strLetters2 = Array.from(str); // same
}