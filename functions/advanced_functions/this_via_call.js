// Метод call — известно количество параметров (context, arg1, arg2)
function showFullName(firstPart, lastPart) {
  console.log(this[firstPart] + ' ' + this[lastPart])
}

let user = {
  firstName: "Василий",
  lastName: "Петров"
}

showFullName.call(user, 'firstName', 'lastName');

// Метод apply — если неизвестно количество передаваемых параметров (context, [arg1, args])
console.log(Math.max.apply(null, arr) ); // // Math и есть контекст исполнения, объект не передаём