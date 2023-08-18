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
  get name() {
    return this._name;
  }
  // getName() {
  //   return this.name;
  // }
  set name(newName) {
    return (this._name = newName);
  }
}
