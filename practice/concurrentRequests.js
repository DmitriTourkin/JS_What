// I've asked about JS Engine: https://chat.deepseek.com/share/4dekq07uzoj1i7lgiy

function createPromisePool(maxConcurrent) {
  let running = 0;
  const queue = [];

  function run() {
    console.log(`run() called. running: ${running}, queue: ${queue.length}`);
    
    while (queue.length > 0 && running < maxConcurrent) {
      const { promiseFactory, resolve, reject } = queue.shift();
      running++;
      
      console.log(`Starting task. running: ${running}, queue: ${queue.length}`);

      promiseFactory()
        .then(result => {
          console.log(`Task completed successfully: ${result}`);
          resolve(result);
        })
        .catch(error => {
          console.log(`Task failed: ${error}`);
          reject(error);
        })
        .finally(() => {
          running--;
          console.log(`Task finished. running: ${running}`);
          run();
        });
    }
  }

  return function add(promiseFactory) {
    return new Promise((resolve, reject) => {
      console.log(`Adding task to queue`);
      queue.push({ promiseFactory, resolve, reject });
      run();
    });
  }
}

function fakeRequest(url) {
  return new Promise(res => {
    setTimeout(() => res(`Response for url: ${url}`));
  })
}

const urls = ['url1', 'url2', 'url3'];
const addToPool = createPromisePool(3);
const promises = urls.map(url => {
  addToPool(() => fakeRequest(url))
});

Promise.all(promises)
.then(result => console.log(result));