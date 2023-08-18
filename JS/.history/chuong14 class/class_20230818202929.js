// ES6
// Constructor/protype way
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// };
// const zyzy = new Person("Zyzy");
// zyzy.getName();

// Class
class Person2 {
  constructor(name) {
    this.name = name;
  }
  // getName() {
  //   return this.name;
  //   // console.log(this.name);
  // }
  // // getName() {
  // //   return this.name;
  // // }
  // setName(newName) {
  //   return (this.name = newName);
  // }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
}
const vy = new Person2("zymy");
console.log(vy.name);
vy.name = "hihi";
console.log(vy.name);

// Class expression
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("Evondev");
console.log(evon.name);
function company(aClass) {
  return new aClass();
}

let hello = company(
  class {
    sayHello() {
      console.log("Hello");
    }
  }
);
hello.sayHello();

// Static method
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 0, 1)),
  new Article("JS", new Date(2021, 11, 1)),
];
// const b = new Article("JS", new Date(2021, 11, 1)),
// b.compare
// articles.sort((a, b)=> a.date - b.date)
// className.methodName
articles.sort(Article.compare);
console.log(articles[0].title);
