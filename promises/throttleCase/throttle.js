`throttle() — функция, которая вызывает другую функцию, пропуская некоторые вызовы с опр. периодичностью`

const progress = document.querySelector('progress');

function recalculateProgress() {
  const viewPortHeight = window.innerHeight;
  const pageHeight = document.body.offsetHeight;
  const currentPosition = window.scrollY;

  const availableHeight = pageHeight - viewPortHeight;
  const percent = (currentPosition / availableHeight) * 100;

  progress.value = percent;
}

window.addEventListener('scroll', recalculateProgress);
window.addEventListener('resize', recalculateProgress);

// В неоптимизированной части, прокрутив 40-50 пикселей, функция вызвалась 7 РАЗ.


function throttle(callee, timeout) {
  let timer = null;

  return function perform(...args) {
    if (timer) return
    timer = setTimeout(() => {
      callee(...args)
      timer = null;
    }, timeout);
  }
}

const optimizedHandler = throttle(recalculateProgress, 50);

window.addEventListener('scroll', optimizedHandler);
window.addEventListener('resize', optimizedHandler);