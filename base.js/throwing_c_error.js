class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError'
  }
}

class ValidationError extends Error {};
class PropertyRequiredError extends ValidationError {};

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredErrorr("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (e) {
    if (err instanceof SyntaxError) {
      console.log('Синтаксичческая ошибка');
    } else {
      throw e;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации: ", err);
    } else {
      throw err;
    }
  }
}

try {
  readUser('{bad json');
} catch (e) {
  if (e instanceof ReadError) {
    console.log(`Исходная ошибка: ${e.cause}`)
  } else {
    throw e;
  }
} 
