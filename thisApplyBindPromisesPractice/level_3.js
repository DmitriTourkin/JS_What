// №11 Промисы с потерей контекста

const { conforms } = require("lodash");

const service = {
  retryCount: 3,
  async fetchWithRetry(url) {
    for (let i = 0; i < this.retryCount; i++) {
      try {
        const response = await fetch(url);
        return await response.text();
      } catch (error) {
        if (i === this.retryCount - 1) {
          console.log('Произошла ошибка!')
          console.log(error.message);
        };
      }
    }
  }
}

const fetchWrapper = service.fetchWithRetry;
const fetchWithServiceContext = fetchWrapper.bind(service);

(async () => {
  //const fetchResult = await fetchWithServiceContext('http://yandex.ru');
  //console.log(fetchResult)
})();


// №12 async/await с контекстом
const dataProcessor = {
  delay: 1000,
  factor: 2,
  async process(value) {
    await new Promise(resolve => setTimeout(resolve, this.delay));
    return value * this.factor;
  }
}

function processWrapper(value) {
  return dataProcessor.process.apply(dataProcessor, [value]);
}

processWrapper(5).then(result => console.log(result));

// №13 Цепочка промисов с bind

// №14 Promise.all с методами объекта

// №15 Обработка ошибок с контекстом