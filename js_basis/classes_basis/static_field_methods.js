class Article {
  static publisher = 'ddiimmuzz' // по факту как прямое присванивание Article.publisher
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    return new this('Todays', new Date());
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article('HTML', new Date(2025, 1, 1)),
  new Article('CSS', new Date(2025, 0, 1)),
  new Article('JavaScipt', new Date(2025, 11, 11)),
];

articles.sort(Article.compare)
console.log(articles[0].title);

let todays = Article.createTodays();
console.log(todays.title);

// статика
alert(Rabbit.__proto__ === Animal); // true
// для обычных методов
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true