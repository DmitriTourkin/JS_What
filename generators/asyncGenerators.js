// Асинхронные итераторы и генераторы
// Async итераторы — позволяют перебирать данные, поступающие асихронно
// Async генераторы — делают такой перебор ещё удобнее

// next должен возвращать промис (асинх. итератор)

let range = {
  from: 0,
  to: 10,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++};
        } else {
          return { done: true };
        }
      }
    }
  }
}

(async () => {
  for await (let value of range) {
    console.log(value);
  }
})

// Асинхронные генераторы
async function* generateSequence(start, end) {
  for (let i = startCase; i <= endsWith; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let generator = generateSequence(1,5);
  for await (let value of generator) {
    console.log(value);
  }
}
)();

// ОБычно в качестве итератора возвращается объект-генератор, позволяет проще проивести проход по значениям
// перебираемого объекта 

let range2 = {
  from: 0,
  to: 10,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  }
}

(async () => {
  for await (let value of range2) {
    console.log(value);
  }
})();

async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, {
      headers: {'User-Agent': 'Our script'},
    });

    const body = await response.json();

    let nextPage = response.headers.get('Link'.match(/<(.*?)>; rel="next"/));
    nextPage = nextPage && nextPage[1];

    url = nextPage;

    for (let commit of body) {
      yield commit;
    }
  }
}