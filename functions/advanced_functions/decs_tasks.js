function work(a, b) {
  console.log(a + b);
}

function spy(fn) {
  function wrapper(...args) {
    let result = fn(...args);
    wrapper.calls.push(args);
    return result;
  }

  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for(let args of work.calls) {
  console.log('call:' + args.join());
}

// Task 2
function f(x) {
  console.log(x);
}

function delay(func, ms) {
  return function(...args) {
    setTimeout(() => func(...args), ms);
  }
}

// Другое решение, универсальное, учитывающее изменение контекста и аргументов
function delayYes(func, ms) {
  return function(...args) {
    let savedThis = this;
    setTimeout(() => func.apply(savedThis, args), ms)
  }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('5');
f1500('8')

// Task 3. Декоратор debounce
function debounce(func, ms) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  }
}

// Task 4. Throttle
function throttle(func, ms) {
  let isThrottled = false,
  thisSaved,
  argsSaved;

  function wrapper() {
    if (isThrottled) {
      argsSaved = arguments;
      thisSaved = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (argsSaved) {
        wrapper.apply(thisSaved, argsSaved);
        argsSaved = thisSaved = null;
      }
    }, ms);
  }

  return wrapper;
}