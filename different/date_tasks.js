// Task 1
let dateObject = new Date(2012, 1, 12, 3, 12, 0);
console.log(dateObject);

// Task 2
function getWeekDay(date) {
  days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ','ПТ','СБ'];
  console.log(days[date.getDay()]);
}

let testingDate = new Date(2012, 0, 3);
getWeekDay(testingDate);

// Task 3
function getLocalDay(date) {
  let currentDay = date.getDay();
  if (currentDay === 0) {
    return 7;
  } else {
    return currentDay;
  }
}

let localDate = new Date(2012, 0, 3);
let dayInDate = getLocalDay(localDate);

// Task 4
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  console.log('dateCopyBefore ', dateCopy);

  dateCopy.setDate(date.getDate() - days);
  console.log('after setting copy', dateCopy);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)