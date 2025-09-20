const bigIntFromNumber = BigInt(10);
const bigInt = 104534896856n;
const bigIntAgain = BigInt("1294568496");

let all = [bigIntFromNumber, bigInt, bigIntAgain];

for (let bigIntNum of all) {
  console.log(bigIntNum);
}

// Нельзя смешивать BigInt и обычные числа 
console.log(Number(bigInt) - 10);
// BigInts можно
console.log(7n / 2n); // округляется до целого вниз

`Конвертирование bigint в число всегда происходит 
неявно и без генерации ошибок, но если значение bigint 
слишком велико и не подходит под тип number, 
то дополнительные биты будут отброшены, так что следует 
быть осторожными с такими преобразованиями.`

// nums & bigints могут быть равны только при нестрогом сравнении
//alert( 1 == 1n ); // true
//alert( 1 === 1n ); // false

// Полифил — через библиотеку JSBI. 