let now = new Date();
console.log(now);

let setTimewithMilliseconds_02_Jan_1970 = new Date(24 * 3600 * 1000);
console.log(setTimewithMilliseconds_02_Jan_1970);

let stringParseDate = new Date("2025-07-04");
console.log(stringParseDate);

let normal = new Date(2025, 11, 10, 15, 35, 5);
console.log(normal);

// Получение компонентов даты
let [year, month, day] = [normal.getFullYear(), normal.getMonth(), normal.getDay()];
console.log(year, month, day);

// первый день недели в javascript — воскресенье.
console.log(new Date().getTimezoneOffset() / 60);
// Если правее от UTC, то отображается МИНУС 
// Если левее от UTC, то плюсовое

let timestamp = Date.now();
console.log('hi', new Date().getTime());



