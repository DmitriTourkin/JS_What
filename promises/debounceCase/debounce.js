`debounce() — функция, которая ОТКЛАДЫВАЕТ вызов функции до того момента, когда 
с последнего вызова пройдёт определённое количество времени`

const pizzaList = [
  'Маргарита',
  'Пеперони',
  'Гавайская',
  '4 Сыра',
  'Диабло',
  'Сицилийская'
];

function contains(query) {
  return pizzaList.filter(title => {
    title.toLowerCase().includes(query.toLowerCase);
  })
}

const server = {
  search(query) {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({list: query ? contains(query) : [],

        }),
        150
      )
    })
  }
}


(async () => {
  const response = await server.search('Peppe');
})

const searchForm = document.getElementById('search-form');
const searchInput = searchForm.querySelector('[type="search"]');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', (e) => {
  const { value } = e.target;

  server.search(value).then(function (response) {
    const { list } = response;

    const html = list.reduce((markup, item) => {
      return `${markup}<li>${item}</li>`
    }, ``)

    searchResults.innerHTML = html
  })
})

function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = this.lastCall;

    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  }
}

function handleInput(e) {
  const { value } = e.target;

  server.search(value).then(function (response) {
    const { list } = response;

    const html = list.reduce((markup, item) => {
      return `${markup}<li>${item}</li>`;
    }, ``)
    searchResults.innerHTML = html
  })
}

const debouncedHandle = debounce(handleInput, 250);

searchInput.addEventListener('input', debouncedHandle);