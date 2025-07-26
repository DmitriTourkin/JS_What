let json = JSON.stringify({
  name: "John",
  age: 30, 
});

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function test() {
  throw new ValidationError("Упс!");
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("Нет поля: age")
  }
  if (!user.name) {
    throw new ValidationError("Нет поля: name");
  }
  return user;
}

try {
  let user = readUser('{ "age": 20 }');
} catch (e) {
  if (err instanceof ValidationError) {
    console.log("Некорректные данные: " + e.message);
  } else if (err instanceof SyntaxError) {
    console.log("JSON Ошибка синтаксиса " + e.message);
  } else {
    throw e;
  }
}

// Расширеям класс
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

function readUserRequired(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
  return user;
}


class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

// В свой блок 
{
  class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
  class ValidationError extends MyError {}

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super(`Нет свойства: ${property}`);
      this.property = property;
    }
  }
};



