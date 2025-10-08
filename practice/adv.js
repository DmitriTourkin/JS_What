function fakeRequest(url) {
  let state = Math.random();
  console.log(`Math state: ${state}`);

  return new Promise((resolve, reject) => {
    if (state > 0.2) {
      resolve({ data: `Ответ от ${url}`})
    } else {
      reject(new Error("Ошибка сети"));
    }
  })
}

function sequentialRequests() {
  const urls = ['url1', 'url2', 'url3'];
  const results = [];

  let chain = Promise.resolve();

  urls.forEach(url => {
    chain = chain
    .then(() => fakeRequest(url))
    .then(currentResult => {
      results.push(currentResult);
      return currentResult;
    });
  })

  return chain.then(() => results)
}

sequentialRequests()
.then(results => console.log(results))
.catch(e => console.log(e.message));




